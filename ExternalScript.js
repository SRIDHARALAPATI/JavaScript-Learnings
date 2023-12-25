//Hositing
getName();
console.log(num);
console.log(getName);

var num = 2;
function getName() {
  console.log("Sridhar Reddy Alapati");
}
// console.log(num);
// console.log(getName());

/********************************************************************************************* */
// Scope chain example and debugging for understanding

function a() {
  var s = "sridhar";
  b();
  function b() {
    console.log(s);
  }
}

a();

/********************************************************************************************* */
// block scope  example and its behavaiour in browser

{
  var x = 10;
  let y = 100;
  const z = 1000;
  console.log(x);
  console.log(y);
  console.log(z);
}
console.log(x); //we can access because it is gloabl -leval acceess
// console.log(y); // we can't access  variable because is y is declared with let , it is a blockl-level scope
// console.log(z);// we can't access  variable because is z is declared with const , it is a blockl-level scope

/********************************************************************************************* */

//Shadowing and legal Shadowing

var firstname = "xyz";
let lastname = "abc";

if (true) {
  var firstname = "Sridhar"; // legal shadowing
  let lastname = "Reddy"; // legal shadowing
  console.log(firstname);
  console.log(lastname);
}
console.log(firstname);
console.log(lastname);

// if(true)
// {

//   var lastname="john" // illegal shadowing throws error of lastname already declared
//  ;
//   console.log(lastname);

// }

/********************************************************************************************* */
//clousers

function day() {
  var fi = 2;
  month();
  function month() {
    var se = 4;
    year();
  }
  function year() {
    var ye = 1999;
    console.log(fi);
  }
}
day();

//Clouser complex 1

function clo1() {
  var a = 7;
  function clo2() {
    console.log(a);
  }
  return clo2;
}
var clovar = clo1();
clovar();
/********************************************************************************************* */
//SetTimeout+clousers

// function settime(){
//   var i=10;
//   setTimeout(function(){
//     console.log(i)
//   },1000);
// console.log("Settimeout")
// }

// settime();

// Example 2(complex +interview level)

// function settime2(){
//   for(let i=0;i<=5;i++){
//   setTimeout(() => {
//     console.log(i)
//   }, i*1000);
// }
// console.log("settimeout using for loop +var")
// }
// settime2();

function settime2() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
  console.log("settimeout using for loop +var");
}
settime2();



/********************************************************************************************* */
// callback function example

function call1(f){
  console.log("call 1");
  f();

}


call1(function call2(){
  console.log("call 2 function"); // passing a function as argument to other function
});

setTimeout(()=>{
  console.log("settimeout callback function ")
},7000)

function eventlistner(){
let count=0;
document.getElementById("clickme").addEventListener("click",function xyz(){
  console.log("button clicked",++count);
})
}

eventlistner();