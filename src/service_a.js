/**
 * @param {MyApp1}
 * @constructor
 */
function ServiceA({ getName }) {
  console.log(`${getName()} A created`);

  this.initialize = () => {
    console.log(`${getName()} A initialized`);
  };

  this.performAction = () => {
    console.log(`${getName()} A performs action`);
  };
}

module.exports = {
  ServiceA
};
