'use strict'
/*
const Seattle ={
    name :'Seattle',
    min :23 ,
    max :65 ,
    avg :6.3,
    workHour: ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    cookiesArr : [] ,

   getNumcustomer: function(){
       let Ncustomer=Math.floor(Math.random()*(this.max - this.min + 1) +this.min);
     console.log(Ncustomer);    
       return Ncustomer; 
   },
     
   getNumcookies: function(){
       return Math.floor(this.avg * this.getNumcustomer());
       },

 reselt: function(){
     let sum =0;
   let method = document.getElementById(this.name);
   for (let i=0; i< this.workHour.length;i++){
       this.cookiesArr.push(this.getNumcookies());
       sum+=this.cookiesArr[i];
       let liElement = document.createElement('li');
       liElement.innerText=this.workHour[i] + ':' + this.getNumcookies()+ 'Cookies';
       method.appendChild(liElement);
       console.log(this.workHour[i] + ','+ this.getNumcookies());
   }
 },
};

Seattle.getNumcustomer();
Seattle.reselt();



const Tokyo ={
    name :'Tokyo',
    min :3 ,
    max :24 ,
    avg :1.2,
    workHour: ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    cookiesArr : [] ,

   getNumcustomer: function(){
       let Ncustomer=Math.floor(Math.random()*(this.max - this.min + 1) +this.min);
     console.log(Ncustomer);    
       return Ncustomer; 
   },
     
   getNumcookies: function(){
       return Math.floor(this.avg * this.getNumcustomer());
       },

 reselt: function(){
        let sum =0;
   let method = document.getElementById(this.name);
   for (let i=0; i< this.workHour.length;i++){
       this.cookiesArr.push(this.getNumcookies());
       sum+=this.cookiesArr[i];
       let liElement = document.createElement('li');
       liElement.innerText=this.workHour[i] + ':' + this.getNumcookies()+ 'Cookies';
       method.appendChild(liElement);
       console.log(this.workHour[i] + ','+ this.getNumcookies());
   }
 },
};

Tokyo.getNumcustomer();
Tokyo.reselt();



const Dubai ={
    name :'Dubai',
    min :11 ,
    max :38 ,
    avg :3.7,
    workHour: ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    cookiesArr : [] ,
    

   getNumcustomer: function(){
       let Ncustomer=Math.floor(Math.random()*(this.max - this.min + 1) +this.min);
     console.log(Ncustomer);    
       return Ncustomer; 
   },
     
   getNumcookies: function(){
       return Math.floor(this.avg * this.getNumcustomer());
       },

 reselt: function(){
        let sum =0;
   let method = document.getElementById(this.name);
   for (let i=0; i< this.workHour.length;i++){
       this.cookiesArr.push(this.getNumcookies());
       sum+=this.cookiesArr[i];
       let liElement = document.createElement('li');
       liElement.innerText=this.workHour[i] + ':' + this.getNumcookies()+ 'Cookies';
       method.appendChild(liElement);
       console.log(this.workHour[i] + ','+ this.getNumcookies());
   }
 },
};

Dubai.getNumcookies();
Dubai.reselt();



const Paris ={
    name :'Paris',
    min :20 ,
    max :38 ,
    avg :2.3,
    workHour: ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    cookiesArr : [] ,

   getNumcustomer: function(){
       let Ncustomer=Math.floor(Math.random()*(this.max - this.min + 1) +this.min);
     console.log(Ncustomer);    
       return Ncustomer; 
   },
     
   getNumcookies: function(){
       return Math.floor(this.avg * this.getNumcustomer());
       },

 reselt: function(){
        let sum =0;
   let method = document.getElementById(this.name);
   for (let i=0; i< this.workHour.length;i++){
       this.cookiesArr.push(this.getNumcookies());
       sum+=this.cookiesArr[i];
       let liElement = document.createElement('li');
       liElement.innerText=this.workHour[i] + ':' + this.getNumcookies()+ 'Cookies';
       method.appendChild(liElement);
       console.log(this.workHour[i] + ','+ this.getNumcookies());
   }
 },
};

Paris.getNumcookies();
Paris.reselt();



const Lima ={
    name :'Lima',
    min :2 ,
    max :16 ,
    avg :4.6,
    workHour: ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    cookiesArr : [] ,


   getNumcustomer: function(){
       let Ncustomer=Math.floor(Math.random()*(this.max - this.min + 1) +this.min);
     console.log(Ncustomer);    
       return Ncustomer; 
   },
     
   getNumcookies: function(){
       return Math.floor(this.avg * this.getNumcustomer());
       },


 reselt: function(){
        let sum =0;
   let method = document.getElementById(this.name);
   for (let i=0; i< this.workHour.length;i++){
       this.cookiesArr.push(this.getNumcookies());
       sum+=this.cookiesArr[i];
       let liElement = document.createElement('li');
       liElement.innerText=this.workHour[i] + ':' + this.getNumcookies()+ 'Cookies';
       method.appendChild(liElement);
       console.log(this.workHour[i] + ','+ this.getNumcookies());
   }
 },
};
 

Lima. getNumcookies();
Lima.reselt();
console.log();
*/

//// lab 07 make a consrtructer function to the cookies-stand project 
let tabel = document.getElementById('tabel');
let workHour =['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm'];
function City(name , minCustomerHourly , maxCustomerHourly , avgCustemetCookies ){
  this.name =name;
  this.minCustomerHourly = minCustomerHourly;
  this.maxCustomerHourly = maxCustomerHourly;
  this.avgCustemetCookies = avgCustemetCookies; 
  this.hour = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm'];
  this .cusromerPerHour = [];
  this.CookiesPerHour=[];
  this .totalCookiesPerDay=0;
  this.getNumber= function(){
    for (let i=0 ; i <this.hour.length ; i++){
      this.CookiesPerHour.push(getRandomNumber(this.minCustomerHourly , this.maxCustomerHourly));
    }
  };
   this.getcockisPerHour = function() {
     for (let i=0 ; i <this.hour.length ; i++){
       this.CookiesPerHour.push(Math.ceil(this.avgCustemetCookies * this.cusromerPerHour[i]));
     }
   };
 }
    
  function getRandomNumber(minemam , maxemam){
   return Math.floor(Math.random()*(maxemam - minemam + 1) + minemam);
    }



    let Seattle = new City('Seattle' ,24 , 65 , 6.3 ) ;
    Seattle.getNumber();
    Seattle.getcockisPerHour();
    let Tokyo = new City('Tokyo', 3 , 24 , 1.2 );
    Tokyo.getNumber();
    Tokyo.getcockisPerHour();
    let Dubai = new City('Dubai', 11 , 38 , 3.7 );
    Dubai.getNumber();
    Dubai.getcockisPerHour();
    let Paris = new City('Paris', 20 ,38 , 2.3 );
    Paris.getNumber();
    Paris.getcockisPerHour();
    let Lima = new City('Lima' , 2 , 16 , 4.6 );
    Lima.getNumber();
    Lima.getcockisPerHour();



function head (){
  let headR = document.createElement('tr');
  tabel.appendChild(headR);
  let tableh = document.createElement('th');
  tr.appendChild(tableh);
  tableh.textContent= '     ';
  for (let i =0 ; i < workHour.length ; i++ ){
    let th =document.createElement('th');
    headR.appendChild(th);
    th.textContent= this.workHour[i];
  }
  let th3 =document.createElement('th');
  headR.appendChild(th3);
  th3.textContent= 'Daily location Total';
}
head();

let totals=0;
City.prototype.render = function(){
  let totals =0;
  let row =document.createElement('tr');
  tabel.appendChild(row);
  let dataRow = document.createElement('td');
  row.appendChild(dataRow);
  dataRow.textContent= this.name;
  for ( let i=0 ; i<workHour.length ; i++){
    let dataRow1 = document.createElement('td');
    row.appendChild(dataRow1);
  dataRow1.textContent = this.CookiesPerHour[i];
}
let dataRow3= document.createElement('td')
row.appendChild(dataRow3);
dataRow3.textContent=this.totalCookiesPerDay;

}

function creatFooter(){
  let tr =document.createElement('tr');
  tabel.appendChild(tr);
  let th=document.createElement('th');
  tr.appendChild(th);
  th.textContent= 'totalCookiesPerDay';
  for (let m=0 ; m< Seattle.totalCookiesPerHour.length ; m++)
  {
    for (let i=0 ; i< Element.length ; i++){
      totals+=Element[i].CookiesPerHour[m];
      totals1+=Element[i].CookiesPerHour[m];
    }
    let rowData = document.createElement('td');
    rowk.appendChild(rowData);
    rowData.textContent=totals ;
    totals =0 ; }
    let rowData =document.createElement('td');
    row5,appendChild(rowData);
    rowData.textContent =totals1;
  }
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima();

creatFooter( Seattle , Tokyo , Dubai , Paris , Lima );
