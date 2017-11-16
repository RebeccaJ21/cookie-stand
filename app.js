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
  return Math.floor (cookies);
  },
cookieArray: function() {
  var cookieArray= [];
  //this.hours.length
  for (var Hour=0; Hour<this.hours.length; Hour++){
    var numberofCookies= this.cookiesPerHour();
    cookieArray.push(numberofCookies);
  }
   this.cookieSales= cookieArray;
},
 cookieList: function() {
   var htmlList=document.getElementById(this.name);
   console.log(this.name);
   for (var  i=0; i<this.hours.length; i++) {
     var list= this.hours[i] + ': ' + this.cookieSales[i] + ' cookies';
     console.log(list);
     var listElement= document.createElement('li');
     listElement.textContent= list;
     htmlList.appendChild(listElement);
   }
 }
}
pike.cookieArray();
pike.cookieList();


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
  return Math.floor (cookies);
  },
cookieArray: function() {
  var cookieArray= [];
  //this.hours.length
  for (var Hour=0; Hour<this.hours.length; Hour++){
    var numberofCookies= this.cookiesPerHour();
    cookieArray.push(numberofCookies);
  }
   this.cookieSales= cookieArray;
 },
cookieList: function() {
  var htmlList=document.getElementById(this.name);
  console.log(this.name);
  for (var  i=0; i<this.hours.length; i++) {
    var list= this.hours[i] + ': ' + this.cookieSales[i] + ' cookies';
    console.log(list);
    var listElement= document.createElement('li');
    listElement.textContent= list;
    htmlList.appendChild(listElement);
  }
}
}
airport.cookieArray();
airport.cookieList();


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
  return Math.floor (cookies);
  },
cookieArray: function() {
  var cookieArray= [];
  //this.hours.length
  for (var Hour=0; Hour<this.hours.length; Hour++){
    var numberofCookies= this.cookiesPerHour();
    cookieArray.push(numberofCookies);
  }
   this.cookieSales= cookieArray;
},
cookieList: function() {
  var htmlList=document.getElementById(this.name);
  console.log(this.name);
  for (var  i=0; i<this.hours.length; i++) {
    var list= this.hours[i] + ': ' + this.cookieSales[i] + ' cookies';
    console.log(list);
    var listElement= document.createElement('li');
    listElement.textContent= list;
    htmlList.appendChild(listElement);
  }
}
}
center.cookieArray();
center.cookieList();


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
  return Math.floor (cookies);
  },
cookieArray: function() {
  var cookieArray= [];
  //this.hours.length
  for (var Hour=0; Hour<this.hours.length; Hour++){
    var numberofCookies= this.cookiesPerHour();
    cookieArray.push(numberofCookies);
  }
   this.cookieSales= cookieArray;
},
cookieList: function() {
  var htmlList=document.getElementById(this.name);
  console.log(this.name);
  for (var  i=0; i<this.hours.length; i++) {
    var list= this.hours[i] + ': ' + this.cookieSales[i] + ' cookies';
    console.log(list);
    var listElement= document.createElement('li');
    listElement.textContent= list;
    htmlList.appendChild(listElement);
  }
}
}
hill.cookieArray();
hill.cookieList();


var alki= {
  name:'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookieSales: 4.6,
  hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomCustomersPerHour: function(min,max) {
    var randomNumber= Math.random()*(max-min)+min;
    return Math.floor(randomNumber);
  },
cookiesPerHour: function() {
  var cookies= this.avgCookieSales*this.randomCustomersPerHour(this.minCustomers,this.maxCustomers);
  return Math.floor (cookies);
  },
cookieArray: function() {
  var cookieArray= [];
  //this.hours.length
  for (var Hour=0; Hour<this.hours.length; Hour++){
    var numberofCookies= this.cookiesPerHour();
    cookieArray.push(numberofCookies);
  }
   this.cookieSales= cookieArray;
},
cookieList: function() {
  var htmlList=document.getElementById(this.name);
  console.log(this.name);
  for (var  i=0; i<this.hours.length; i++) {
    var list= this.hours[i] + ': ' + this.cookieSales[i] + ' cookies';
    console.log(list);
    var listElement= document.createElement('li');
    listElement.textContent= list;
    htmlList.appendChild(listElement);
  }
}
}
alki.cookieArray();
alki.cookieList();
