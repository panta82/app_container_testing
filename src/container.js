function BaseApp() {
  this.services = [];

  this._registerService = Ctr => {
    const service = new Ctr(this);
    this.services.push(service);
    return service;
  };

  this.createServices = () => {
    this.serviceA = this._registerService(require("./service_a").ServiceA);
    this.serviceB = this._registerService(require("./service_b").ServiceB);
  };

  this.initialize = async () => {
    for (const s of this.services) {
      await s.initialize();
    }
  };

  this.createServices();
}

module.exports = {
  BaseApp
};
