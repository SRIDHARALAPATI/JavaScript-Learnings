//Hositing
getName();
console.log(num);
console.log(getName);

var num=2;
function getName(){
  console.log("Sridhar Reddy Alapati")
}
// console.log(num);
// console.log(getName());

/********************************************************************************************* */
// Scope chain example and debugging for understanding

function a(){
  var s="sridhar";
  b();
  function b(){
    console.log(s);
  }
}

a();

/********************************************************************************************* */
// block scope  example and its behavaiour in browser

{
  var x=10;
  let y=100;
  const z= 1000;
  console.log(x);
  console.log(y);
  console.log(z);
}
console.log(x); //we can access because it is gloabl -leval acceess
console.log(y); // we can't access  variable because is y is declared with let , it is a blockl-level scope
console.log(z);// we can't access  variable because is z is declared with const , it is a blockl-level scope
