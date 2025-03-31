const mongoose = require('mongoose');
const dotenv = require('dotenv');

<<<<<<< HEAD
// Handle uncaught exceptions
process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
=======
// Catching uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥');
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
  console.log(err.name, err.message);
  process.exit(1);
});

<<<<<<< HEAD
// Load environment variables
dotenv.config({ path: './.env' });

// Start the Express app
const app = require('./app');

// MongoDB Connection
const DB = process.env.DATABASE_URL.replace('<PASSWORD>',
=======
dotenv.config({ path: './.env' });
const app = require('./app');

// MongoDB database connection
const uri = process.env.DATABASE.replace(
  '<PASSWORD>',
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
  process.env.DATABASE_PASSWORD
);

mongoose
<<<<<<< HEAD
  .connect(DB)
  .then(() => console.log('DB connection successful!'))
  .catch(err => {
    console.log('DB connection failed 💥', err.message);
    process.exit(1);
  });

// Start the server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
=======
  .connect(uri)
  .then(() => console.log('DB Connection Successful 🖐'));

// Create a server on 127.0.0.1:8000
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server started ${port} 🖐`);
});

// Handling Promise rejections
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥');
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

<<<<<<< HEAD
// Graceful shutdown on SIGTERM
=======
>>>>>>> b59b583def465e0c9343d6333b1ed8cf5e4f6438
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});
