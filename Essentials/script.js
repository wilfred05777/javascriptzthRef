// 4 + 3;

// if(4+3 === 7){
//     // console.log("Hello!");
//     alert("Hello!");
// }

// first way of making a function
    // function sayHello(){
    //     console.log("Hello");
    // }
    // sayHello();

// function expressiong

    // var sayBye = function(){
    //     console.log("Bye");
    // }

    // sayBye();

// explaination 
    // function sing(){
    //     console.log("AHHHHHHHH");
    //     console.log("TEEEEEEE");
    // }
    // sing();

    // function sing2(){
    //     console.log("Laa DEEE daaaa");
    //     console.log(" daaaa");
    // }
    // sing2();

// --------------------------------------------------
//  briliant idea !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function sing(song){
//     console.log(song);
// }
// sing("Laa dee daa");
// sing("Helloo!");
// sing(" Backstreet Back Alright !");

// ----------------------------------------------------
    // function multiply(a, b) {
    //     // console.log(a, b);
    // //    return (a * b);
    // return a * b;
    // };
    // multiply(5,10);

// -----------------------------------------------------

    // function multiply(a, b){
    //     if(a > 10 || b > 10){
    //         return "that's too hard";
    //     } else{
    //         return a*b;
    //     }
    // }
    // multiply (5, 10);

// ----------------------------------------------
    // function divide(a, b){
    //     if (a > 10 || b >10){
    //         return "that's too long";
    //     } else{
    //         return a/b;
    //     }
    // }

    // divide(5,10);

// ---------------------

    // function add(a, b){
    //     if(a > 10 || b > 20)
    //     return ("Thats easy! \n" + (a+b));

    // }
    // add(2,10);

// ------------------------------

    // function multiply(a,b){
    //     return a*b;
    // }
    // alert(multiply(3,4));
    // --------------------------+++++++++++

// ARRAY ----------------
// data structures: Array

    // var list = ["tiger", "cat", "bear", "bird"];
    // console.log(list[0]);


    // var list =[
    //     ["tiger", "cat", "lion","eagle"]
    // ];
    // console.log(list[0][3]);
    // console.log(list[0]);
// ----- ----------------------------------------------

// Data Structures: Object --------------------------
    // var user = {
    //     name: "John",
    //     age: 34,
    //     hobby: "Soccer",
    //     isMarried: false,
    //     spells: ["alakazam","win guardian libyosa","sonic boom", "kamihami wave"]
    // };
    
    // var list = ["apple", "banana", "orange"];

    //-------------------------------------------------
        // CURLY BRACES IS OBJECT
        // var user = {
        //     name: "John",
        //     age: 34,
        //     hobby: "Soccer",
        //     isMarried: false,
        //     spells: ["alakazam","win guardian libyosa","sonic boom", "kamihami wave"],
        //     shout: function(){
        //         console.log("Arrggh!");
        //     }
        // };


        // --------------------------------------
        // BRACES IS AN ARRAY
        // var list=[
        //     {
        //         username: "julian",
        //         password: "secret"
        //     },
        //     {
        //         username: "jess",
        //         password: "1234"
        //     }
        // ];
// data sturctures: Object End _---------------------


//  EXCERCISE BUILD FACEBOOK
//  var database = [
//     {
//         username: "wilfred",
//         password: "superadmin"
//     }
//  ];
 
//  var newsFeed = [
//      {
//         username: "Bobby",
//         timeline: "so tired from all the learning"
//      },
//     {
//         username: "Sally",
//         timeline: "Javasript is soooo Cooool!"
//     }
//  ];

//  var userNamePrompt = prompt ("What's your username?");
//  var passwordPrompt = prompt ("What's your password?"); 

//  function signIn(user,pass){
//      if (   user === database[0].username && 
//             pass === database[0].password   ){
//                 console.log(newsFeed);
//             } else{
//                 alert("Sorry, you Entered Worng Username and Password!"); 
//             }
//  }

//  signIn(userNamePrompt, passwordPrompt);
 //-----------------------------------------------------end of build facebook
   
 
//  // RECAP START -------------------------------------->
//  // function declaration
//     function newFunction(){

//     }

// // function expression
//     var newFunction = function(){

//     };

// // expression - i something that produces a value and it ends with semi-colon (;)
//     var a = 2;

// // calling or invoking a function
//     alert();
//     newFunction(param1, param2);

// // assign a variable 
//     var a = true;

// // function vs method
//     function thisIsAFunction(){

//     }

//     var obj = {
//         thisIsAMethod: function(){

//         }
//     }
//     thisIsAFunction()
//     obj.thisIsAMethod();

// RECAP END -------------------------------------->

// loop

// var todos = [
//     "clean room",
//     "brush teeth",
//     "excercise",
//     "study javascript",
//     "eat healthy"
// ];

// var todoslength = todos.length;
// for (var i = 0; i <todoslength; i++){
//     console.log(todos[i], i);
// }

// todos.forEach(function(todo){
//     console.log(todo);
// })

// for (var i = 0; i < todos.length; i++ ){
//     // console.log(todos[i] + "!");
//     // todos[i] = todos[i] + "!";

// }

// --------------------------------------------------
// var todoslength = todos.length;
// for ( var i = 0; i< todoslength; i++){
//     todos.pop(); 
// }   

// -----------------------------------------------

// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++
// }

// ------------------------
// var counterTwo = 10
// do {
//     console.log(counterTwo);
//     counterTwo++;
// } while (counterTwo = 10);

// --------------------------


//  ------------- EXCERCISE BUILD FACEBOOK 2 start --------------
//  var database = [
//     {
//         username: "wilfred",
//         password: "superadmin"
//     },
//     {
//         username: "rowena",
//         password: "777"
//     },
//     {
//         username: "jm",
//         password: "04"
//     }
//  ];
 
//  var newsFeed = [
//      {
//         username: "Bobby",
//         timeline: "so tired from all the learning"
//      },
//     {
//         username: "Sally",
//         timeline: "Javasript is soooo Cooool!"
//     }
//  ];
 
//  function isUserValid(username, password){
//     for (var i = 0; i < database.length; i++){
//         if(database[i].username === username && 
//             database[i].password ===password){
//             // console.log(newsFeed);
//             return true;
//             } 
//         }
//         return false; 
//     }
 
//     function signIn(username,password){
//         // console.log(isUserValid(username, password));
//          if (isUserValid(username, password)){
//                     console.log(newsFeed);
//                 } else{
//                     alert("Sorry, you Entered Worng Username and Password!"); 
//                 }
//      }

//      var userNamePrompt = prompt ("What's your username?");
//      var passwordPrompt = prompt ("What's your password?");  
//      signIn(userNamePrompt, passwordPrompt);

    //  function signIn(username,password){
   
    //     //  if (   user === database[0].username && 
    //     //         pass === database[0].password   ){
    //     //             console.log(newsFeed);
    //     //         } else{
    //     //             alert("Sorry, you Entered Worng Username and Password!"); 
    //     //         }
    //  }

 //-----------------------------------------end of build facebook 2 ---------
   
// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
//     console.log("Click!!");
// })
// button.addEventListener("mouseenter", function(){
//     console.log("Click!!");
// })
// button.addEventListener("mouseleave", function(){
//     console.log("Click!!");
// })

// <---------------- DOM Events Start --------------------->


// button.addEventListener("click", function(){
//     // console.log("Click is Working");
//     // console.log(input.value);
//     if(input.value.length > 0){
        
//     }
//     var li = document.createElement("li");
//     // li.appendChild(document.createTextNode("Testing"));
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
// });


    // var button = document.getElementById("enter");
    // var input = document.getElementById("userinput");
    // var ul = document.querySelector("ul");

    // function inputLength(){
    //     return  input.value.length;
    // }

    // function createListElement(){
    //     var li = document.createElement("li");
    //     li.appendChild(document.createTextNode(input.value));
    //     ul.appendChild(li);
    //     input.value = ""; 
    // }

    // function addListAfterClick(){
    //         if(inputLength() > 0){
    //             createListElement();
    //         }
    // }
    // function addListAfterKeypress(event){
    //         if(input.value.length > 0 && event.keyCode === 13){
    //             createListElement();
    //         }
    // }

    // button.addEventListener("click", addListAfterClick); 
    // input.addEventListener("keypress", addListAfterKeypress);


// <---------------- DOM Events end --------------------->


// <------- Excercise Background Generator Start -------------->
    
// <------- Excercise Background Generator End -------------->