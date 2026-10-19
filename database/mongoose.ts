import mongoose from 'mongoose';

declare global {
    var mongooseCache: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    }
}

let cached = global.mongooseCache;

if(!cached) {
    cached = global.mongooseCache = {
        conn: null,
        promise: null
    };
}

export const connectToDatabase = async () => {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGODB_URL;
    if (!mongoUri) throw new Error('MONGODB_URI (or MONGODB_URL) must be set within .env');

    // store it in a global cache
    if(cached.conn) return cached.conn;

    if(!cached.promise) {
        cached.promise = mongoose.connect(mongoUri, {bufferCommands: false});
    }

    try {
        cached.conn = await cached.promise;
    }
    catch(err) {
        cached.promise = null;
        throw err;
    }
    
    console.log(`Connected to database in ${process.env.NODE_ENV || 'development'}`);
    return cached.conn;
}