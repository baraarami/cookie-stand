'use strict'

//// lab 07 make a consrtructer function to the cookies-stand project 

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let columnHeader = ['Sales/h', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];


function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function City(name, min, max, avarage) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avarage = avarage;
  this.numOfCookiesArr = [];
  this.total = 0;
  this.totalPerHour = 0;
  City.ACity.push(this);
}

City.ACity = [];


City.prototype.getNum = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookiesNum = Math.floor(generateRandomNumber(this.min, this.max) * this.avarage);
    this.numOfCookiesArr.push(cookiesNum);

    this.total += cookiesNum;


  }
};




const creatheader = function () {
  const parentElement = document.getElementById('SALAMON');
  const table = document.createElement('table');
  parentElement.appendChild(table);
  table.setAttribute('id', 'myTable');
  const tr1 = document.createElement('tr');
  table.appendChild(tr1);
  for (let i = 0; i < columnHeader.length; i++) {
    const th1 = document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent = columnHeader[i];
  }
};

creatheader();


City.prototype.render = function () {
  const tableElement = document.getElementById('myTable');
  const tr = document.createElement('tr');
  tableElement.appendChild(tr);
  const td1 = document.createElement('td');
  tr.appendChild(td1);
  td1.textContent = this.name;

  for (let i = 0; i < hours.length; i++) {
    const td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.textContent = this.numOfCookiesArr[i];
  }
  const td3 = document.createElement('td');
  tr.appendChild(td3);
  td3.textContent = this.total;
};






const seattle = new City('Seattle', 23, 65, 6.3, []);
seattle.getNum();
seattle.render();

const tokyo = new City('Tokyo', 3, 24, 1.2, []);
tokyo.getNum();
tokyo.render();

const dubai = new City('Dubai', 11, 38, 3.7, []);
dubai.getNum();
dubai.render();

const paris = new City('Paris', 20, 38, 2.3, []);
paris.getNum();
paris.render();

const lima = new City('Lima', 2, 16, 4.6, []);
lima.getNum();
lima.render();

console.log(City.City);






const cityRaw = function () {
  const tableElement = document.getElementById('myTable');
  const tr = document.createElement('tr');
  tableElement.appendChild(tr);
  const th1 = document.createElement('th');
  tr.appendChild(th1);
  th1.textContent = 'Total of total';
  for (let i = 0; i < hours.length; i++) {
    const th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = seattle.numOfCookiesArr[i] + tokyo.numOfCookiesArr[i] + dubai.numOfCookiesArr[i] + paris.numOfCookiesArr[i] + lima.numOfCookiesArr[i];
  }
  const th3 = document.createElement('th');
  tr.appendChild(th3);
  th3.textContent = seattle.total + tokyo.total + dubai.total + paris.total + lima.total;
};


const creatfooter = function () {
  const tableElement = document.getElementById('myTable');
  const tr = document.createElement('tr');
  tableElement.appendChild(tr);
  const th1 = document.createElement('th');
  tr.appendChild(th1);
  th1.textContent = 'Total of total';
  for (let i = 0; i < hours.length; i++) {
    const th2 = document.createElement('th');
    tr.appendChild(th2);

    
    let totalCookies = 0;
    for (let M = 0; M < City.ACity.length; M++) {
      totalCookies += parseInt(City.ACity[M].numOfCookiesArr[i]);
    }
    th2.textContent = totalCookies;

   }

  const th3 = document.createElement('th');
  tr.appendChild(th3);
  let totalOfTotal = 0;
  for (let B = 0; B < City.ACity.length; B++) {
    totalOfTotal += City.ACity[B].total;
  }

  th3.textContent = totalOfTotal;
  
  console.log(City.ACity);
};


creatfooter();


const formElement = document.getElementById('ADD-NEW-LOCATION');
formElement.addEventListener('submit', function (event) {
  event.preventDefault();

  
  const cityName = event.target.name.value;
  const minNumOfCustomers = event.target.min.value;
  const maxNumOfCustomers = event.target.max.value;
  const avarage = event.target.avarage.value;

  if (Number(maxNumOfCustomers) > Number(minNumOfCustomers)) {
    document.getElementById('myTable').removeChild(document.getElementById('myTable').lastChild);
    const city = new City(cityName, minNumOfCustomers, maxNumOfCustomers, avarage);

    formElement.reset();


    city.getNum();
    city.render();
    console.log(City.ACity);
    creatfooter();
  }

  else {
    alert('please make the Max.Num Of Customers value greater than the Min.Num Of Customers value');
    console.log(alert);

  }

});





