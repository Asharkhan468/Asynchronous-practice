//fetch
//axios
//asyn
//await
//settime out
//set time interval

// const div = document.querySelector("#div");

// .then((res)=>{
//     res.data.map((item)=>{
//         div.innerHTML += `<div class="card" style="width: 14rem;">
//   <img src="${item.image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <p class="card-text">${item.title}</p>
//   </div>
// </div>`;

//     });
// })
// .catch((err)=>{
//     console.log(err);

// })

// axios("https://opentdb.com/api.php?amount=10")
//   .then((res) => {
//     console.log(res.data.results);
//     res.data.results.map((item)=>{
//         div.innerHTML += `<h3>${item.question}</h3>

//    <li>
//    <input type="radio">Hello
//    </li>
//    <li>
//    <input type="radio">Hello
//    </li>
//    <li>
//    <input type="radio">Hello
//    </li>

//      <hr>`;

//   })
// })

// .catch((err) => {
//   console.log(err);
// });

//-----------JS ES6 Concepts-----------//

// Variable Scoping // p
// Closure //p
// lexical scoping //p
// Modules
// Object Methods (keys,values,freez,entries)
// Exponentiation Operator // p
// Optional chaining //p
// Destructuring //p
// Template literals //p
// Destructuring //p
// Default parameters //p
// Rest parameter //p
// Spread Operator //p
// Arrow functions  //p
// Enhanced object literals //p
// Iterators & For..of  //p
// Map  //p
// Array methods  //p
// Higher-order function  //p
// CallBack  //p
// Promises  //p
// Ternary Operator //p

// console.log("Hello world");

//-------closure-------

// function outer() {
//   let userName = "Ashar";
//   function inner() {
//     console.log(userName);
//   }

//   inner();
// }

// outer();

// console.log(userName);


// console.log('Hello world!');



//Rest parameter


// function myFunct(...user){
//   console.log(`Hello ${user}`);
// }

// myFunct('ashar' , 'anas' , 'ahmed');




//Exponentiation Operator

// console.log(4**4);



//--------Optional chaning--------


// const user = {
//     name: "Ali",
//      address: {
//      city:'dhdhdh'
//     }
   
// };





// const data1= user.address && user.address.email;

// const data2 = user.address?.email

// console.log('data1 ==>' , data1);
// console.log('data2 ==>' , data2);




//----------Rest operator-------------

// function sum (...num){
//     return num.reduce((total , num) =>  total + num , 0)
// }

// console.log(sum(6 , 9));




// Example array of objects
// let students = [
//   {
//     name: "John Doe",
//     age: 20,
//     major: "Computer Science"
//   },
//   {
//     name: "Jane Smith",
//     age: 22,
//     major: "Mathematics"
//   },
//   {
//     name: "Sam Johnson",
//     age: 19,
//     major: "Physics"
//   }
// ];




// let data = students.filter( students => students.age>15);


// console.log(data);


function greetUser(user) {
    console.log(`Hello ${user}`);
    
}

export{ greetUser };
 


 







