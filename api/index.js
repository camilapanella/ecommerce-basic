const server = require("./src/server");

server.listen(process.env.PORT, () => {
  console.log("App listening on port 3000");
});