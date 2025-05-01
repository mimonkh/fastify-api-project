require('dotenv').config();
const app = require('./app');

const start = async () => {
  try {
    const port = process.env.PORT || 3000;
    await app.listen({ port });
    console.log(`Server running on port ${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
