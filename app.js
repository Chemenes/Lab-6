'use strict';
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// // 1st and Pike.
var firstPike = {
  minimumCust: 23,
  maximumCust: 65,
  avgCookiesCust: 6.3,
  custPerHour: [],
  soldPerHour: [],
  totalSold: 0,

  randomCustPerHour: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var custPerHourInt = Math.random() * (this.maximumCust - this.minimumCust) + this.minimumCust;
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
  firstPike.randomCustPerHour();
  firstPike.cookiesPerHour();
  firstPike.totalCookiesSold();
  firstPike.renderSales();
}
callFirstPike();

var ulElem = document.getElementById('first-pike');
var listItemElem = document.createElement('li');
listItemElem.textContent = 'Total: ' + firstPike.totalSold;
ulElem.appendChild(listItemElem);

//SeaTac Airport

var seaTac = {
  minimumCust: 3,
  maximumCust: 24,
  avgCookiesCust: 1.2,
  custPerHour: [],
  soldPerHour: [],
  totalSold: 0,

  randomCustPerHour: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var custPerHourInt = Math.random() * (this.maximumCust - this.minimumCust) + this.minimumCust;
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
    var ulElem = document.getElementById('sea-tac');
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
function callSeaTac() {
  seaTac.randomCustPerHour();
  seaTac.cookiesPerHour();
  seaTac.totalCookiesSold();
  seaTac.renderSales();
}
callSeaTac();

ulElem = document.getElementById('sea-tac');
listItemElem = document.createElement('li');
listItemElem.textContent = 'Total: ' + seaTac.totalSold;
ulElem.appendChild(listItemElem);

//Seattle Center

var seaCenter = {
  minimumCust: 11,
  maximumCust: 38,
  avgCookiesCust: 3.7,
  custPerHour: [],
  soldPerHour: [],
  totalSold: 0,

  randomCustPerHour: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var custPerHourInt = Math.random() * (this.maximumCust - this.minimumCust) + this.minimumCust;
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
    var ulElem = document.getElementById('sea-center');
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
function callSeaCenter() {
  seaCenter.randomCustPerHour();
  seaCenter.cookiesPerHour();
  seaCenter.totalCookiesSold();
  seaCenter.renderSales();
}
callSeaCenter();

ulElem = document.getElementById('sea-center');
listItemElem = document.createElement('li');
listItemElem.textContent = 'Total: ' + seaCenter.totalSold;
ulElem.appendChild(listItemElem);

//Capitol Hill

var capHill = {
  minimumCust: 20,
  maximumCust: 38,
  avgCookiesCust: 2.3,
  custPerHour: [],
  soldPerHour: [],
  totalSold: 0,

  randomCustPerHour: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var custPerHourInt = Math.random() * (this.maximumCust - this.minimumCust) + this.minimumCust;
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
    var ulElem = document.getElementById('capitol-hill');
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
function callCapHill() {
  capHill.randomCustPerHour();
  capHill.cookiesPerHour();
  capHill.totalCookiesSold();
  capHill.renderSales();
}
callCapHill();

ulElem = document.getElementById('capitol-hill');
listItemElem = document.createElement('li');
listItemElem.textContent = 'Total: ' + capHill.totalSold;
ulElem.appendChild(listItemElem);

//Alki

var alkiBeach = {
  minimumCust: 2,
  maximumCust: 16,
  avgCookiesCust: 4.6,
  custPerHour: [],
  soldPerHour: [],
  totalSold: 0,

  randomCustPerHour: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var custPerHourInt = Math.random() * (this.maximumCust - this.minimumCust) + this.minimumCust;
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
    var ulElem = document.getElementById('alki-beach');
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
function callAlkiBeach() {
  alkiBeach.randomCustPerHour();
  alkiBeach.cookiesPerHour();
  alkiBeach.totalCookiesSold();
  alkiBeach.renderSales();
}
callAlkiBeach();

ulElem = document.getElementById('alki-beach');
listItemElem = document.createElement('li');
listItemElem.textContent = 'Total: ' + alkiBeach.totalSold;
ulElem.appendChild(listItemElem);

