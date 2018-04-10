'use strict';
var salmonCookiesPike = {
  location : '1st and pike',
  minimumCust: 23,
  maximumCust: 65,
  average: 6.3,
  custEachHour: [],
  getRandomNumber: function() {
    return Math.floor(Math.random() * (this.maximumCust - this.minimumCust)) + this.minimumCust;
  }
};
for (var i =15; i > 0; i --) {
  var hour = salmonCookiesPike. getRandomNumber();
  salmonCookiesPike.custEachHour.push(hour);
}

