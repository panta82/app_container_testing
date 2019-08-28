function ServiceB({ serviceA }) {
  console.log("B created");

  this.initialize = () => {
    console.log("B initialized");

    setInterval(() => {
      console.log("B tick");
      serviceA.performAction();
    }, 1000);
  };
}

module.exports = {
  ServiceB
};
