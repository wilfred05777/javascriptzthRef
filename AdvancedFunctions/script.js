// old style of syntax in javascript start -----
function first(){
    var greet = 'Hi';
    function second(){
        alert(greet);
    }
    return second;
}

var newFunc = first();
newFunc();
// old style of syntax in javascript end ----

// modified new syntax
const first = () =>{
    const greet = 'Hi';
    const second=() =>{
        const name = "bobby";
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures = a function ran. the Function executed. It's never going to execute again.
// BUt ts
const newFunc = const second = () =>{

}

//Currying
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

//Compose 
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose (sum, sum)(5);

// avoiding side effects, functional purity.
 