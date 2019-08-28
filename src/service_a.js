function ServiceA({}) {
  console.log("A created");

  this.initialize = () => {
    console.log("A initialized");
  };

  this.performAction = () => {
    console.log("A performs action");
  };
}

module.exports = {
  ServiceA
};
