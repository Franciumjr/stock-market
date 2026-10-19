import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/database/mongoose';
import mongoose from 'mongoose';

export async function GET() {
  try {
    await connectToDatabase();
    const isConnected = mongoose.connection.readyState === 1;

    return NextResponse.json({
      success: true,
      message: 'MongoDB connection established successfully!',
      readyState: mongoose.connection.readyState,
      dbName: mongoose.connection.name || 'connected',
      status: isConnected ? 'connected' : 'connecting',
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to connect to MongoDB',
        error: error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}
