function fullName(firstName,lastName){
    return firstName + lastName
}
let result = fullName("Narasimhulu", "Vasam")
let expected = "NarasimhuluVasam";

if(result != expected){
    throw new error(`${result} is not equal to ${expected}`)
}else{
    return result
}

function finalAmount(amount ,tax){
    return  amount + (amount * tax/100)
}
let result = finalAmount(1000,5)
let expected = 1030;

if(result != expected){
    throw new Error(`${result} is not equal to ${expected}`);
}else{
    result
}
