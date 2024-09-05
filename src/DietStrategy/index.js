const { HarrisBenedict } = require('./types');

class DietStrategy {
  constructor() {
    this.diets = new Map();
    this.diets.set('Harris-Benedict', new HarrisBenedict())
  }

  getDiet(type) {
    return this.diets.get(type) || this.diets.get('Harris-Benedict');
  }

  calculate(type, params) {
    const diet = this.getDiet(type);
    return diet.calculate(params);
  }
}

module.exports = { DietStrategy };
