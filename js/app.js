'use strict'


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


