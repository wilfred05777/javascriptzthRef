// reference type
var object1 = {value: 10};
var object2 = object;
var object3 = {value: 10};

// Context vs scope
    // console.log(this=== window)  
const object4 ={
    a: function(){
        console.log(this);
    }
}

//instantiation
class Player {
    constructor(name, type){
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor (name, type){
        super(name,type)
        console.log('wizard', this);
    }
    play(){
       console.log(`Weeee I'm a ${this.type}`); 
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('ERdo', 'Dark Magic');

// Classical Inheritance
    // var Player = function(name, type){
    //     this.name = name;
    //     this.type = type;
    // }

    // Player.prototype.introduce = function(){
    //     console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    // }

    // var wizard1 = new Player('Shelly', 'Healer');
    // var wizard2 = new Player('SHawn', 'Dark Magic');

    // wizard1.play = function(){
    //     console.log(`WEEEEE I'm a ${this.type}`);
    // }
    // wizard2.play = function(){
    //     console.log(`WEEEEE I'm a ${this.type}`);
    // }