import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI || process.env.MONGODB_URL;

console.log('Testing MongoDB connection...');

if (!uri) {
  console.error('❌ Error: MONGODB_URI or MONGODB_URL is not defined in your environment (.env file).');
  process.exit(1);
}

if (uri.includes('<db_password>') || uri.includes('<password>')) {
  console.error('❌ Error: Your MONGODB_URI in .env still contains the placeholder "<db_password>".');
  console.error('👉 Please replace "<db_password>" with your actual MongoDB database user password.');
  process.exit(1);
}

try {
  await mongoose.connect(uri, { bufferCommands: false });
  console.log('✅ Success! Successfully connected to MongoDB Atlas.');
  console.log(`Database name: ${mongoose.connection.name || '(default)'}`);
  console.log(`Connection state: ${mongoose.connection.readyState === 1 ? 'Connected (readyState: 1)' : mongoose.connection.readyState}`);
  await mongoose.disconnect();
  console.log('🔌 Connection closed cleanly.');
  process.exit(0);
} catch (error) {
  console.error('❌ Connection failed with error:');
  console.error(error.message);
  process.exit(1);
}
