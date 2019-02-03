const Utils = {
  getMonth(date) {
    return date.toLocaleString('en-us', { month: 'long' });
  },

  selectFromContext(context) {
    return context(this.select(context.keys()));
  },

  select(options) {
    return options[this.randomWithin(0, options.length-1)];
  },

  randomWithin(floor, ceiling) {
    return floor + Math.floor((Math.random() * (ceiling - floor)) + 1)
  }
}

export default Utils;
