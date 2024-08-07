const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Debug: Log MONGO_URI before connecting
    console.log('Attempting to connect to MongoDB with URI:', process.env.MONGO_URI);
    
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
