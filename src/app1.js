const util = require("util");

function BaseApp1(serviceInitializer) {
  this.services = [];

  this._registerService = Ctr => {
    const service = new Ctr(this);
    this.services.push(service);
    return service;
  };

  this.initialize = async () => {
    for (const s of this.services) {
      await s.initialize();
    }
  };

  this.createServices = () => {
    this.getName = () => {
      return this.constructor.name;
    };

    if (serviceInitializer) {
      serviceInitializer.apply(this);
    }
  };

  this.createServices();
}

/**
 * @extends BaseApp1
 * @constructor
 */
function MyApp1() {
  BaseApp1.call(this, () => {
    /** @type {ServiceA} */
    this.serviceA = this._registerService(require("./service_a").ServiceA);

    /** @type {ServiceB} */
    this.serviceB = this._registerService(require("./service_b").ServiceB);
  });
}
util.inherits(MyApp1, BaseApp1);

module.exports = {
  BaseApp1,
  MyApp1
};
