const mongoose = require('mongoose');
const { DB } = require('../../config');

async function connectDB() {
  try {
    await mongoose.connect(DB);
    console.log('MongoDB conectado:', mongoose.connection.name);
  } catch (err) {
    console.error('Error MongoDB:', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;