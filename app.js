'use strict';
var salmonCookiesPike = {
  minimumCust:23,
  maximumCust:65,
  average:6.3,
  getRandomNumber() {
    return Math.random() * (this.maximumCust - this.minimumCust) + this.minimumCust;
  }



};

