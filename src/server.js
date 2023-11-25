const app = require("./app");

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`listen at port: ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Stop server");
  });
});
