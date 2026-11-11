require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');
const { info, PORT } = require('./config');

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Servidor en el puerto: ${PORT}`);
  });
})();