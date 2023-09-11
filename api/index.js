const server = require("./src/server");
const { conn } = require('./src/db.js');

conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log('listening at 3000'); 
  });
});