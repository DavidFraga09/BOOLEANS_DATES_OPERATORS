// && - AND o Conjucion logica

const check1 = 4 > 3 && 10 > 5 // true
const check2 = 4 > 3 && 10 < 5 // true && false -> false
const check3 = 4 < 3 && 10 < 5 // false & false

// || - OR o Disyuncion logica

const check4 = 4 > 3 || 10 > 5 // true
const check5 = 4 > 3 || 10 < 5 // true
const check6 = 4 < 3 || 10 < 5 // false

// ! - NOT - Este operador niega a verdadero o falso y falso a verdadero
let check7 = 4 > 3 
let check8 = !(4>3) // false
let isLightOn = true
let isLightOff = !isLightOn
let isMarried = !false

// INCREMENT OPERATORS - ++
//Pre incremento

let count = 0
console.log (++count)
console.log(count) // 1

//Post incremento

let count1 = 0
console.log (count++)
console.log(count) // 1

// DECREMENT OPERATORS --

//Predecremento
let count2 = 0
console.log (--count)
console.log(count) // -1

//Postdecremento
let count3 = 0
console.log (count--)
console.log(count) // -1

// Ternary operators

let firstCheck = false,
secondCheck = false,
access = firstCheck
? "Acceso Denegado"
: secondCheck 
? "Acceso Denegado"
: "Acceso Permitido";
console.log(access) // Acceso Permitido

let isRaining = true 
isRaining 
? console.log("You need a rain coat")
: console.log("No need for a rain coat")



