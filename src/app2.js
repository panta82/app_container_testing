const util = require("util");

class BaseApp2 {
  constructor() {
    this.services = [];

    this.getName = () => {
      return this.constructor.name;
    };
  }

  _registerService(Ctr) {
    const service = new Ctr(this);
    this.services.push(service);
    return service;
  }

  async initialize() {
    for (const s of this.services) {
      await s.initialize();
    }
  }
}

class MyApp2 extends BaseApp2 {
  constructor() {
    super();

    /** @type {ServiceA} */
    this.serviceA = this._registerService(require("./service_a").ServiceA);

    /** @type {ServiceB} */
    this.serviceB = this._registerService(require("./service_b").ServiceB);
  }
}

module.exports = {
  BaseApp2,
  MyApp2
};
