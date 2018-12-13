// scope = its a variable access

function aa(){
    console.log("test");
}

function bb(){
    var a = "hello";
    //console.log(a);
}

bb();
///----------------------------------------

function bb(){
    var a = "hello";
    //console.log(a);
}

var b = "Can I acces this?";

function bb(){
    var a = "hello";
}

// root scope (window) ---------
var fun = 5; 
function funFunction(){
    //child scope
    var fun = "hellooo";
    console.log(1, fun);
}
function funerFunction(){
    //child scope
    var fun = "byyeee";
    console.log(2, fun);
}
function funestFunction(){
    //child scope
    var fun = "aaaaaaaa";
    console.log(3, fun);
}
console.log("window",fun);
funFunction();
funerFunction();
funestFunction();