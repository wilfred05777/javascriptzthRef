// let + const start -------------------

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90){
    let wizardLevel = true;
    console.log('inside', wizardLevel);
}
console.log('outside', wizardLevel);

const obj = {
    player: 'Jolly',
    experience: 100,
    wizardLevel: false
}
// let + const end ----------------------

// destructuring start ------------------
    const player = obj.player;
    const experience = obj.experience;
    let wizardLevel = obj.wizardLevel;

    const {player, experience} = obj;
    let{ wizardLevel} = obj;


    const name = 'John Wicked';
    const obj = {
        [name]: 'hello',
        [1 + 2]: 'hihi'
    }

    const a = 'Simon';
    const b = true;
    const c = {};
    const obj = {
        a,
        b,
        c
    }

    const obj = {
        player = 'CrossCris',
        experience = 100,
        wizardLevel = false
    }

    const player = 'CrossCris';
    const experience = 100;
    let = wizardLeve = false;

    const {player, experience} = obj;
    let{ wizardLevel} = obj;
// destructuring end   ------------------

// Template Strings start ---------------
    const name = "Sally";
    const age = 33;
    const pet = "Dog";
    const greetingBest = `Hello ${name} you seem to be ${age}. What a lovely ${pet} you have!`; //backticks = template strings

    const greeting = "Hello " + name + " You seem to be dong " + greeting + "!";
    
    const greetingBest = `` //backticks = template strings

    //const greetingBest = `Hello ${name} you seem to be ${age=10}. What a lovely ${pet} you have!`; //backticks = template strings

    // Template Strings end ---------------


// default agruments start ---------------
    function greet(name='', age=30, pet='cat'){
        return `Hello ${name} you seem to be ${age}. What a lovely ${pet} you have!`; //backticks = template strings

    }
// default agruments end   ---------------

// symbol start -------------------------
    let sym1 = Symbol();
    let sym2 = Symbol('foo');
    let sym3 = Symbol('foo');
// symbol end -------------------------



// arrow Functions start -----------------

function add(a, b){
    return a + b;
}
// arrow function syntax 
const add3 = (a, b) => {
    return a + b;
}

const add2 = (a, b) => a + b; //<-----arrow function syntax

// arrow Functions end -----------------