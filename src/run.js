const { MyApp } = require("./app");

const app = new MyApp();

app.initialize().catch(err => {
  console.error(err);
  process.exit(1);
});
