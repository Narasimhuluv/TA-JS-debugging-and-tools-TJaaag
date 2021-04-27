function fullName(firstName,lastName){
    return firstName + lastName
}
let result = fullName("Narasimhulu", "Vasam")
let expected = "NarasimhuluVasam";

if(result !== expected){
    throw new error(`${result} is not equal to ${expected}`)
}

let amount = 1000;
function finalAmount(tax){
    return amount += (amount * tax/100)
}
let result = finalAmount(5)
let expected = 1030;

if(result != expected){
    throw new error(`${result} is not equal to ${expected}`);
}
