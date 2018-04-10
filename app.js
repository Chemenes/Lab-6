'use strict';
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Start first location.
var firstPike = {
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookiesCust: 6.3,
  custPerHour: [],
  soldPerHour: [],
  totalSold: 0,

  randCustPerHour: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var custPerHourInt = Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust;
      custPerHourInt = Math.round(custPerHourInt);
      this.custPerHour.push(custPerHourInt);
    }
  },

  cookiesPerHour: function () {
    var avgCookiesCalc = 0;
    for (var i = 0; i < storeHours.length; i++) {
      avgCookiesCalc = Math.floor(this.custPerHour[i] * this.avgCookiesCust);
      this.soldPerHour.push(avgCookiesCalc);
    }
  },

  totalCookiesSold: function () {
    var cookiesSoldCalc = 0;
    for (var i = 0; i < storeHours.length; i++) {
      cookiesSoldCalc += this.soldPerHour[i];
    }
    this.totalSold = cookiesSoldCalc;
  },

  renderSales: function () {
    // Access the parent element from the DOM.
    var ulElem = document.getElementById('first-pike');
    for (var i = 0; i < storeHours.length; i++) {
      // 1. Create element.
      var listItemElem = document.createElement('li');
      // 2. Give it content.
      listItemElem.innerHTML = storeHours[i] + ':<br> ' + this.soldPerHour[i];
      //3. Append it to the DOM.
      ulElem.appendChild(listItemElem);
    }
  }
};
function callFirstPike() {
  firstPike.randCustPerHour();
  firstPike.cookiesPerHour();
  firstPike.totalCookiesSold();
  firstPike.renderSales();
}
callFirstPike();

var ulElem = document.getElementById('first-pike');
var listItemElem = document.createElement('li');
listItemElem.textContent = 'Total: ' + firstPike.totalSold;
ulElem.appendChild(listItemElem);