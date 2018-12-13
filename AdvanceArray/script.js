// Advanced Arrays

// var array = [1, 2, 3, 10, 16];

const array = [1, 2, 3, 10, 16];

const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2);
})
console.log('forEach', double);

// map, filter, reduce

const mapArray = array.map((num)=>{
    return num *2;
});

const mapArray2 = array.map(num => num * 2); // short hand method
console.log('map', mapArray2);

// filter 
const filterArray = array.filter(num => {
    return num > 5;
});
console.log('filter', filterArray); //filter array long method

// filter short hand style method 
const filterArray2 = array.filter(num => num > 5); // filter short hand method
console.log('filter short hand', filterArray2); // filter shorthand method output

// reduce 
const reduceArray = array.reduce((accumulator, num)=>{
    return accumulator + num;
}, 0);
console.log('Reduce',reduceArray);


// --------------------------------------------------
const array = [
    {
        username    : "Elton",
        password    : "1234",
        age         : 30,
        sex         : "Male",
        occupation  : "Worker",
        cityAddress : "Panabo"       
    },
    {
        username    : "Julian",
        password    : "1234",
        age         : 30,
        sex         : "Male",
        occupation  : "Worker",
        cityAddress : "Panabo"       
    },
]
