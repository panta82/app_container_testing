/**
 * @param {MyApp} app
 * @constructor
 */
function ServiceB(app) {
  console.log("B created");
  console.log("B is given: " + app.getName());

  this.initialize = () => {
    console.log("B initialized");

    setInterval(() => {
      console.log("B tick");
      app.serviceA.performAction();
    }, 1000);
  };
}

module.exports = {
  ServiceB
};
