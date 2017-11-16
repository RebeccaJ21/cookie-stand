'use strict'

var pike= {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookieSales: 6.3,
  hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomCustomersPerHour: function(min,max) {
    var randomNumber= Math.random()*(max-min)+min;
    return Math.floor(randomNumber);
  },
cookiesPerHour: function() {
  var cookies= this.avgCookieSales*this.randomCustomersPerHour(this.minCustomers,this.maxCustomers);
  return cookies;
  },
cookieArray: function() {
  var cookieArray= [];
  //this.hours.length
  for (var Hour=0; Hour<this.hours.length; Hour++){
    var numberofCookies= this.cookiesPerHour();
    cookieArray.push(numberofCookies);
  }
   this.cookieSales= cookieArray;
}

}

var airport= {
  name:'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookieSales: 1.2,
  hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomCustomersPerHour: function(min,max) {
    var randomNumber= Math.random()*(max-min)+min;
    return Math.floor(randomNumber);
  },
cookiesPerHour: function() {
  var cookies= this.avgCookieSales*this.randomCustomersPerHour(this.minCustomers,this.maxCustomers);
  return cookies;
  },
cookieArray: function() {
  var cookieArray= [];
  //this.hours.length
  for (var Hour=0; Hour<this.hours.length; Hour++){
    var numberofCookies= this.cookiesPerHour();
    cookieArray.push(numberofCookies);
  }
   this.cookieSales= cookieArray;
}
}

var center= {
  name:'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookieSales: 3.7,
  hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomCustomersPerHour: function(min,max) {
    var randomNumber= Math.random()*(max-min)+min;
    return Math.floor(randomNumber);
  },
cookiesPerHour: function() {
  var cookies= this.avgCookieSales*this.randomCustomersPerHour(this.minCustomers,this.maxCustomers);
  return cookies;
  },
cookieArray: function() {
  var cookieArray= [];
  //this.hours.length
  for (var Hour=0; Hour<this.hours.length; Hour++){
    var numberofCookies= this.cookiesPerHour();
    cookieArray.push(numberofCookies);
  }
   this.cookieSales= cookieArray;
}
}

var hill= {
  name:'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookieSales: 2.3,
  hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomCustomersPerHour: function(min,max) {
    var randomNumber= Math.random()*(max-min)+min;
    return Math.floor(randomNumber);
  },
cookiesPerHour: function() {
  var cookies= this.avgCookieSales*this.randomCustomersPerHour(this.minCustomers,this.maxCustomers);
  return cookies;
  },
cookieArray: function() {
  var cookieArray= [];
  //this.hours.length
  for (var Hour=0; Hour<this.hours.length; Hour++){
    var numberofCookies= this.cookiesPerHour();
    cookieArray.push(numberofCookies);
  }
   this.cookieSales= cookieArray;
}
}

var alki= {
  name:'SeaTac Airport',
  minCustomers: 2,
  maxXustomers: 16,
  avgXookieSales: 4.6,
  hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomCustomersPerHour: function(min,max) {
    var randomNumber= Math.random()*(max-min)+min;
    return Math.floor(randomNumber);
  },
cookiesPerHour: function() {
  var cookies= this.avgCookieSales*this.randomCustomersPerHour(this.minCustomers,this.maxCustomers);
  return cookies;
  },
cookieArray: function() {
  var cookieArray= [];
  //this.hours.length
  for (var Hour=0; Hour<this.hours.length; Hour++){
    var numberofCookies= this.cookiesPerHour();
    cookieArray.push(numberofCookies);
  }
   this.cookieSales= cookieArray;
}
}
