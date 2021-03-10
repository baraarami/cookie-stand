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
   let method = document.getElementById(this.name);
   for (let i=0; i< this.workHour.length;i++){
       this.cookiesArr.push(this.getNumcookies());
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
   let method = document.getElementById(this.name);
   for (let i=0; i< this.workHour.length;i++){
       this.cookiesArr.push(this.getNumcookies());
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
   let method = document.getElementById(this.name);
   for (let i=0; i< this.workHour.length;i++){
       this.cookiesArr.push(this.getNumcookies());
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
   let method = document.getElementById(this.name);
   for (let i=0; i< this.workHour.length;i++){
       this.cookiesArr.push(this.getNumcookies());
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
   let method = document.getElementById(this.name);
   for (let i=0; i< this.workHour.length;i++){
       this.cookiesArr.push(this.getNumcookies());
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
let tabel = document.getElementById('Tabel');



function head (){
  let tabel =document.createElement
  let tHead =document.createElement('th');
  tabel.appendChild(tHead);
  for (let i=0 ; i < Head.length ; i++) {
    tHead.textContent = Head[i];
  }
}
head =( ['Citys'.'6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']) ;

let workHour =['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm'];
function City(name , minCustomerHourly , maxCustomerHourly , avgCustemetCookies ){
  this.name =name;
  this.minCustomerHourly = minCustomerHourly;
  this.maxCustomerHourly = maxCustomerHourly;
  this.avgCustemetCookies = avgCustemetCookies; 
  this.totalCookiesPerHour=[];
  this .totalCookiesPerDay=0;
   

     City.prototype.custemerHourly = function(){
     let CustemerNum=Math.floor(Math.random()*(this.maxCustomerHourly - this.maxCustomerHourly));
     console.log(CustemerNum);
     return CustemerNum;
     };

     City.prototype.numberCookies=function () {
       return Math.floor(this.avgCustemetCookies * this.custemerHourly);
       
     };
    
    City.prototype.render=function () {
      let tabel = document.getElementById('Tabel');
      let tabelRow=document.createElement('tr');
      tabelRow.textContent = this.name ;
      tabel.appendChild(tabelRow);

      for (let i=0 ; i < workHour.length ; i++){
        this.totalCookiesPerHour.push(this.numberCookies());
        this totalCookiesPerDay = this.totalCookiesPerDay + this.totalCookiesPerHour[i];
        tabelRow.textContent = this.totalCookiesPerHour[i];
        console.log(this.totalCookiesPerHour[i]);
      }
      tabelRow.textContent = this.totalCookiesPerDay;
      console.log(this.totalCookiesPerDay);
    };
}
//function getRandomnum(minemam , maxemam){
 // return Math.floor(Math.random()*(maxemam - minemam + 1) + minemam);
//}

 let Seattle = new City("Seattle" ,24 , 65 , 6.3 ) ;
 Seattle.Tabel();
 let Tokyo = new City("Tokyo", 3 , 24 , 1.2 );
 Tokyo.Tabel();
 let Dubai = new City("Dubai", 11 , 38 , 3.7 );
 Dubai.Tabel();
 let Paris = new City("Paris", 20 ,38 , 2.3 );
 Paris.Tabel();
 let Lima = new City("Lima" , 2 , 16 , 4.6 );
Lima.Tabel();

function creatFooter(){
  let tabel =document.getElementById('Table');
  let trow =document.createElement('tr');
  table.appendChild(trow);
  for (let i=0 ; i<Head.length ; i++)
  {
    trow.textContent = Seattle.cookiesArr[i] + Tokyo.cookiesArr[i] + Dubai.cookiesArr[i] + Paris.cookiesArr[i] + Lima.cookiesArr[i]; 
  }
  
  trow.textContent=Seattle.total + Tokyo.total + Dubai.total + Paris.total + Lima.total; 
}

creatFooter();
