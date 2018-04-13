'use strict';
// var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// // 1st and Pike.
// var firstPike = {
//   minimumCust: 23,
//   maximumCust: 65,
//   avgCookiesCust: 6.3,
//   custPerHour: [],
//   soldPerHour: [],
//   totalSold: 0,

//   randomCustPerHour: function () {
//     for (var i = 0; i < storeHours.length; i++) {
//       var custPerHourInt = Math.random() * (this.maximumCust - this.minimumCust) + this.minimumCust;
//       custPerHourInt = Math.round(custPerHourInt);
//       this.custPerHour.push(custPerHourInt);
//     }
//   },

//   cookiesPerHour: function () {
//     var avgCookiesCalc = 0;
//     for (var i = 0; i < storeHours.length; i++) {
//       avgCookiesCalc = Math.floor(this.custPerHour[i] * this.avgCookiesCust);
//       this.soldPerHour.push(avgCookiesCalc);
//     }
//   },

//   totalCookiesSold: function () {
//     var cookiesSoldCalc = 0;
//     for (var i = 0; i < storeHours.length; i++) {
//       cookiesSoldCalc += this.soldPerHour[i];
//     }
//     this.totalSold = cookiesSoldCalc;
//   },

//   renderSales: function () {
//     // Access the parent element from the DOM.
//     var ulElem = document.getElementById('first-pike');
//     for (var i = 0; i < storeHours.length; i++) {
//       // 1. Create element.
//       var listItemElem = document.createElement('li');
//       // 2. Give it content.
//       listItemElem.innerHTML = storeHours[i] + ':<br> ' + this.soldPerHour[i];
//       //3. Append it to the DOM.
//       ulElem.appendChild(listItemElem);
//     }
//   }
// };
// function callFirstPike() {
//   firstPike.randomCustPerHour();
//   firstPike.cookiesPerHour();
//   firstPike.totalCookiesSold();
//   firstPike.renderSales();
// }
// callFirstPike();

// var ulElem = document.getElementById('first-pike');
// var listItemElem = document.createElement('li');
// listItemElem.textContent = 'Total: ' + firstPike.totalSold;
// ulElem.appendChild(listItemElem);

// // //SeaTac Airport

// var seaTac = {
//   minimumCust: 3,
//   maximumCust: 24,
//   avgCookiesCust: 1.2,
//   custPerHour: [],
//   soldPerHour: [],
//   totalSold: 0,

//   randomCustPerHour: function () {
//     for (var i = 0; i < storeHours.length; i++) {
//       var custPerHourInt = Math.random() * (this.maximumCust - this.minimumCust) + this.minimumCust;
//       custPerHourInt = Math.round(custPerHourInt);
//       this.custPerHour.push(custPerHourInt);
//     }
//   },

//   cookiesPerHour: function () {
//     var avgCookiesCalc = 0;
//     for (var i = 0; i < storeHours.length; i++) {
//       avgCookiesCalc = Math.floor(this.custPerHour[i] * this.avgCookiesCust);
//       this.soldPerHour.push(avgCookiesCalc);
//     }
//   },

//   totalCookiesSold: function () {
//     var cookiesSoldCalc = 0;
//     for (var i = 0; i < storeHours.length; i++) {
//       cookiesSoldCalc += this.soldPerHour[i];
//     }
//     this.totalSold = cookiesSoldCalc;
//   },

//   renderSales: function () {
//     // Access the parent element from the DOM.
//     var ulElem = document.getElementById('sea-tac');
//     for (var i = 0; i < storeHours.length; i++) {
//       // 1. Create element.
//       var listItemElem = document.createElement('li');
//       // 2. Give it content.
//       listItemElem.innerHTML = storeHours[i] + ':<br> ' + this.soldPerHour[i];
//       //3. Append it to the DOM.
//       ulElem.appendChild(listItemElem);
//     }
//   }
// };
// function callSeaTac() {
//   seaTac.randomCustPerHour();
//   seaTac.cookiesPerHour();
//   seaTac.totalCookiesSold();
//   seaTac.renderSales();
// }
// callSeaTac();

// ulElem = document.getElementById('sea-tac');
// listItemElem = document.createElement('li');
// listItemElem.textContent = 'Total: ' + seaTac.totalSold;
// ulElem.appendChild(listItemElem);

// // //Seattle Center

// var seaCenter = {
//   minimumCust: 11,
//   maximumCust: 38,
//   avgCookiesCust: 3.7,
//   custPerHour: [],
//   soldPerHour: [],
//   totalSold: 0,

//   randomCustPerHour: function () {
//     for (var i = 0; i < storeHours.length; i++) {
//       var custPerHourInt = Math.random() * (this.maximumCust - this.minimumCust) + this.minimumCust;
//       custPerHourInt = Math.round(custPerHourInt);
//       this.custPerHour.push(custPerHourInt);
//     }
//   },

//   cookiesPerHour: function () {
//     var avgCookiesCalc = 0;
//     for (var i = 0; i < storeHours.length; i++) {
//       avgCookiesCalc = Math.floor(this.custPerHour[i] * this.avgCookiesCust);
//       this.soldPerHour.push(avgCookiesCalc);
//     }
//   },

//   totalCookiesSold: function () {
//     var cookiesSoldCalc = 0;
//     for (var i = 0; i < storeHours.length; i++) {
//       cookiesSoldCalc += this.soldPerHour[i];
//     }
//     this.totalSold = cookiesSoldCalc;
//   },

//   renderSales: function () {
//     // Access the parent element from the DOM.
//     var ulElem = document.getElementById('sea-center');
//     for (var i = 0; i < storeHours.length; i++) {
//       // 1. Create element.
//       var listItemElem = document.createElement('li');
//       // 2. Give it content.
//       listItemElem.innerHTML = storeHours[i] + ':<br> ' + this.soldPerHour[i];
//       //3. Append it to the DOM.
//       ulElem.appendChild(listItemElem);
//     }
//   }
// };
// function callSeaCenter() {
//   seaCenter.randomCustPerHour();
//   seaCenter.cookiesPerHour();
//   seaCenter.totalCookiesSold();
//   seaCenter.renderSales();
// }
// callSeaCenter();

// ulElem = document.getElementById('sea-center');
// listItemElem = document.createElement('li');
// listItemElem.textContent = 'Total: ' + seaCenter.totalSold;
// ulElem.appendChild(listItemElem);

// // //Capitol Hill

// var capHill = {
//   minimumCust: 20,
//   maximumCust: 38,
//   avgCookiesCust: 2.3,
//   custPerHour: [],
//   soldPerHour: [],
//   totalSold: 0,

//   randomCustPerHour: function () {
//     for (var i = 0; i < storeHours.length; i++) {
//       var custPerHourInt = Math.random() * (this.maximumCust - this.minimumCust) + this.minimumCust;
//       custPerHourInt = Math.round(custPerHourInt);
//       this.custPerHour.push(custPerHourInt);
//     }
//   },

//   cookiesPerHour: function () {
//     var avgCookiesCalc = 0;
//     for (var i = 0; i < storeHours.length; i++) {
//       avgCookiesCalc = Math.floor(this.custPerHour[i] * this.avgCookiesCust);
//       this.soldPerHour.push(avgCookiesCalc);
//     }
//   },

//   totalCookiesSold: function () {
//     var cookiesSoldCalc = 0;
//     for (var i = 0; i < storeHours.length; i++) {
//       cookiesSoldCalc += this.soldPerHour[i];
//     }
//     this.totalSold = cookiesSoldCalc;
//   },

//   renderSales: function () {
//     // Access the parent element from the DOM.
//     var ulElem = document.getElementById('capitol-hill');
//     for (var i = 0; i < storeHours.length; i++) {
//       // 1. Create element.
//       var listItemElem = document.createElement('li');
//       // 2. Give it content.
//       listItemElem.innerHTML = storeHours[i] + ':<br> ' + this.soldPerHour[i];
//       //3. Append it to the DOM.
//       ulElem.appendChild(listItemElem);
//     }
//   }
// };
// function callCapHill() {
//   capHill.randomCustPerHour();
//   capHill.cookiesPerHour();
//   capHill.totalCookiesSold();
//   capHill.renderSales();
// }
// callCapHill();

// ulElem = document.getElementById('capitol-hill');
// listItemElem = document.createElement('li');
// listItemElem.textContent = 'Total: ' + capHill.totalSold;
// ulElem.appendChild(listItemElem);

// // //Alki

// var alkiBeach = {
//   minimumCust: 2,
//   maximumCust: 16,
//   avgCookiesCust: 4.6,
//   custPerHour: [],
//   soldPerHour: [],
//   totalSold: 0,

//   randomCustPerHour: function () {
//     for (var i = 0; i < storeHours.length; i++) {
//       var custPerHourInt = Math.random() * (this.maximumCust - this.minimumCust) + this.minimumCust;
//       custPerHourInt = Math.round(custPerHourInt);
//       this.custPerHour.push(custPerHourInt);
//     }
//   },

//   cookiesPerHour: function () {
//     var avgCookiesCalc = 0;
//     for (var i = 0; i < storeHours.length; i++) {
//       avgCookiesCalc = Math.floor(this.custPerHour[i] * this.avgCookiesCust);
//       this.soldPerHour.push(avgCookiesCalc);
//     }
//   },

//   totalCookiesSold: function () {
//     var cookiesSoldCalc = 0;
//     for (var i = 0; i < storeHours.length; i++) {
//       cookiesSoldCalc += this.soldPerHour[i];
//     }
//     this.totalSold = cookiesSoldCalc;
//   },

//   renderSales: function () {
//     // Access the parent element from the DOM.
//     var ulElem = document.getElementById('alki-beach');
//     for (var i = 0; i < storeHours.length; i++) {
//       // 1. Create element.
//       var listItemElem = document.createElement('li');
//       // 2. Give it content.
//       listItemElem.innerHTML = storeHours[i] + ':<br> ' + this.soldPerHour[i];
//       //3. Append it to the DOM.
//       ulElem.appendChild(listItemElem);
//     }
//   }
// };
// function callAlkiBeach() {
//   alkiBeach.randomCustPerHour();
//   alkiBeach.cookiesPerHour();
//   alkiBeach.totalCookiesSold();
//   alkiBeach.renderSales();
// }
// callAlkiBeach();

// ulElem = document.getElementById('alki-beach');
// listItemElem = document.createElement('li');
// listItemElem.textContent = 'Total: ' + alkiBeach.totalSold;
// ulElem.appendChild(listItemElem);

var storeTable = document.getElementById('store');


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'];

var allStores = [];



function Store (location, minCust, maxCust, avgCookie) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.hourlySales = [];
  this.dailySales = 0;
  allStores.push(this);
}

//render method
Store.prototype.renderRow = function(){
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = this.location;

  function renderHours() {
    var theadElement = document.getElementById('store');
    var thElement = document.createElement('td');
    thElement.textContent = '';
    theadElement.appendChild(thElement);
    for(var i =0; i < hours.length; i++){
      thElement = document.createElement('th');
      thElement.textContent = hours[i];
      theadElement.appendChild(thElement);
    }
    thElement = document.createElement('th');
    thElement.textContent = 'Cookie Total';
    theadElement.appendChild(thElement);
  }
  renderHours();

  trElement.appendChild(tdElement);
  for(var i = 0; i < hours.length; i++){
    tdElement= document.createElement('td');
    tdElement.textContent = this.hourlySales[i];
    trElement.appendChild(tdElement);
  }


  tdElement = document.createElement('td');
  tdElement.textContent = this.dailySales;
  trElement.appendChild(tdElement);
  storeTable.appendChild(trElement);
};
Store.prototype.randomNumber = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};

Store.prototype.populateHourlySales = function () {
  for (var i = 0; i < hours.length; i++) {
    var customersPerHour = Math.round(this.randomNumber() * this.avgCookie);
    this.hourlySales.push(customersPerHour);



  }
};

Store.prototype.totalSold = function () {
  var cookiesSoldCalc = 0;
  for (var i = 0; i < hours.length; i++) {
    cookiesSoldCalc += this.hourlySales[i];
  }
  this.dailySales = cookiesSoldCalc;
};

var firstPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('Seatac Airport', 3 ,24, 1.2);
var seaCenter = new Store('Seattle Center',11,38,3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alkiBeach = new Store('Alki Beach', 2,16, 4.6);

firstPike.randomNumber();
firstPike.populateHourlySales();
firstPike.totalSold();
firstPike.renderRow();

seaTac.randomNumber();
seaTac.populateHourlySales();
seaTac.totalSold();
seaTac.renderRow();

seaCenter.randomNumber();
seaCenter.populateHourlySales();
seaCenter.totalSold();
seaCenter.renderRow();

capHill.randomNumber();
capHill.populateHourlySales();
capHill.totalSold();
capHill.renderRow();

alkiBeach.randomNumber();
alkiBeach.populateHourlySales();
alkiBeach.totalSold();
alkiBeach.renderRow();








