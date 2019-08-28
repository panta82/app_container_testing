const { BaseApp } = require("./container");

const app = new BaseApp();

app.initialize().catch(err => {
  console.error(err);
  process.exit(1);
});
