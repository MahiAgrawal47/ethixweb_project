import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ethixweb';

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 3000 // Quick timeout to prevent hanging if MongoDB is not started
    });
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}/${conn.connection.name}`);
    return conn;
  } catch (err) {
    console.warn(`[MongoDB Warning] Could not connect to MongoDB at (${uri}): ${err.message}`);
    console.warn('[MongoDB Notice] To persist leads to MongoDB, ensure MongoDB is running or configure MONGODB_URI in backend/.env');
    return null;
  }
};

export default connectDB;
