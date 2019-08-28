/**
 * @param {MyApp2} app
 * @constructor
 */
function ServiceB(app) {
  console.log(`${app.getName()} B created`);

  this.initialize = () => {
    console.log(`${app.getName()} B initialized`);

    setInterval(() => {
      console.log(`${app.getName()} B tick`);
      app.serviceA.performAction();
    }, 1000);
  };
}

module.exports = {
  ServiceB
};
