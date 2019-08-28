const util = require("util");

function BaseApp(serviceInitializer) {
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
 * @extends BaseApp
 * @constructor
 */
function MyApp() {
  BaseApp.call(this, () => {
    /** @type {ServiceA} */
    this.serviceA = this._registerService(require("./service_a").ServiceA);

    /** @type {ServiceB} */
    this.serviceB = this._registerService(require("./service_b").ServiceB);
  });
}
util.inherits(MyApp, BaseApp);

module.exports = {
  BaseApp,
  MyApp
};
