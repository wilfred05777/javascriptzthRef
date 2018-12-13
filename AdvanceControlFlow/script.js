// condition ? expr1 : expr2;

    function isUserValid(bool){
        return bool;
    }

    var answer = isUserValid(true) ? "You May Enter" : "Acces Denied";

    var automatedAnswer = "Your account # is " + ( isUserValid(false) ? "12345" : "Not available");



// Switch

function moveCommand(direction){
    var whatHappens;
    switch(direction){
        case "forward":
            whatHappens = "You encounter a monster";
            break;
        case "back":
            whatHappens = "You encounter a monster";
            break;
        case "right":
            whatHappens = "You run into a troll";
            break;
        case "left":
            whatHappens = "You run into a troll";
            break;
        default: 
            whatHappens = "Please Enter a valid direction";
    
    }
    return whatHappens;
}


