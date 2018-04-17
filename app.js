'use strict';

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

function renderHours() {
  var trElement = document.createElement('tr');
  var theadElement = document.getElementById('store');
  var thElement = document.createElement('th');
  thElement.textContent = '';
  trElement.appendChild(thElement);
  for (var i = 0; i < hours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Cookie Total';
  trElement.appendChild(thElement);
  theadElement.appendChild(trElement);
}
renderHours();

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

// var openingElement = document.getElementById('opening');

// openingElement.addEventListener('click', function() {
//   alert('clicked');
// }
function addLocationSubmitted(event) {
  event.preventDefault();
  var formElement = event.target;

  var newLocation = new Store(formElement.storeName.value,
    Number(formElement.minimumCust.value),
    Number(formElement.maximumCust.value), Number(formElement.averageSales.value));

  console.log(newLocation);



  newLocation.randomNumber();
  newLocation.populateHourlySales();
  newLocation.totalSold();
  newLocation.renderRow();
}

var storeFormElement = document.getElementById('get-store');
storeFormElement.addEventListener('submit', addLocationSubmitted);




