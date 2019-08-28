const { MyApp1 } = require("./app1");
const { MyApp2 } = require("./app2");

const app1 = new MyApp1();
const app2 = new MyApp2();

Promise.all([app1.initialize(), app2.initialize()]).catch(err => {
  console.error(err);
  process.exit(1);
});
