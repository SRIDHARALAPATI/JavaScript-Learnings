//Hositing
/*getName();
console.log(num);
console.log(getName);

var num=2;
function getName(){
  console.log("Sridhar Reddy Alapati")
}*/
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
