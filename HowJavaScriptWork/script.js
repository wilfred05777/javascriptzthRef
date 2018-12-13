//----------------------------------------
function testMe(){
    while(true){
       var x = 2;
       break;
    }
    console.log(x); 
    //Still print 2 even though x is declared inside while loop
 }

//-----------------------------------------

 function testMe(){
    while(true){
       let x = 2;
       break;
    }
    console.log(x); //ReferenceError: x is not defined
 }

//---------------------------------------

 var Person;
{
   let name;
   Person = function(_name){ 
       name = _name;
   };
   Person.prototype.getName = () => name;
}
var person = new Person('Maya');
console.log(name); //Nothing is printed
console.log(person.getName()); //Maya
//------------------------------