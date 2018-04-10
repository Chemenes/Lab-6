'use strict';
//First Store
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

//Second Store
var salmonCookiesSeatac = {
  location: 'SeaTac Airport',
  minimumCust: 3,
  maximumCust: 24,
  average: 1.2,
  custEachHour: [],
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.maximumCust - this.minimumCust)) + this.minimumCust;
  }
};
for (var i = 15; i > 0; i--) {
  var hour = salmonCookiesSeatac.getRandomNumber();
  salmonCookiesSeatac.custEachHour.push(hour);
}

//Third Store
var salmonCookiesSeattlecenter = {
  location: 'Seattle Center',
  minimumCust: 11,
  maximumCust: 38,
  average: 3.7,
  custEachHour: [],
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.maximumCust - this.minimumCust)) + this.minimumCust;
  }
};
for (var i = 15; i > 0; i--) {
  var hour = salmonCookiesSeattlecenter.getRandomNumber();
  salmonCookiesSeattlecenter.custEachHour.push(hour);
}

//Fourth Store
var salmonCookiesCapitolhill = {
  location: 'Capitol Hill',
  minimumCust: 20,
  maximumCust: 38,
  average: 2.3,
  custEachHour: [],
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.maximumCust - this.minimumCust)) + this.minimumCust;
  }
};
for (var i = 15; i > 0; i--) {
  var hour = salmonCookiesCapitolhill.getRandomNumber();
  salmonCookiesCapitolhill.custEachHour.push(hour);
}

//Fifth Store
var salmonCookiesAlki = {
  location: 'Alki',
  minimumCust: 2,
  maximumCust: 16,
  average: 4.6,
  custEachHour: [],
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.maximumCust - this.minimumCust)) + this.minimumCust;
  }
};
for (var i = 15; i > 0; i--) {
  var hour = salmonCookiesAlki.getRandomNumber();
  salmonCookiesAlki.custEachHour.push(hour);
}


