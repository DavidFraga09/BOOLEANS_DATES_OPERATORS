// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types. 
let firtsName = "David"
let lastName = "Dominguez"
let country = "México"
let city = "Hidalgo"
let age = 21
let isMarrie = false;
let year = 2024

console.log(typeof firtsName)
console.log(typeof lastNameName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarrie)
console.log(typeof year)

// Check if type of '10' is equal to 10 
console.log(10 === 10)
// Check if parseInt('9.8') is equal to 10 
console.log(parseInt('9.8') === 10 )

// Boolean value is either true or false. 
// Boolean True "truthy"
console.log(!!8)
console.log(!!12)
console.log(!!"Hi YiYi")
//Boolean False "falsy"
console.log(!!0)
console.log(!!undefined)
console.log(!!"")

/* 5. Figure out the result of the following comparison expression first without using console.log(). 
After you decide the result confirm it using console.log() */
console.log(4 > 3)
console.log(4 >= 3) 
console.log(4 < 3 )
console.log(4 <= 3 )
console.log(4 == 4 )
console.log(4 === 4 )
console.log(4 != 4 )
console.log(4 !== 4 )
console.log(4 != '4')
console.log(4 ==  '4')
console.log(4 ===  '4')

// 6. Use the Date object to do the following activities 
const now = new Date()
// What is the year today? 
console.log(now.getFullYear())
// What is the month today as a number? 
console.log(now.getMonth() + 1)
// What is the date today? 
console.log(now.getDate())
// What day is today as a number? 
console.log(now.getDay())
// What are the hours now?
console.log(now.getHours()) 
// What are the minutes now?
console.log(now.getMinutes()) 
// Find out the numbers of seconds elapsed from January 1, 1970, to now. 
console.log(Math.floor(now.getTime() / 1000))

// 7. Write a script that prompts the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
console.log("Calculate an area of a triangule: ")
let base = parseFloat(prompt("Enter side A: "))
let height = parseFloat(prompt("Enter side B: "))
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`)

// 8. Write a script that prompts the user to enter side a, side b, and side c of the triangle and calculate the perimeter of triangle (perimeter = a + b + c) 
console.log("Calculate the perimeter of triangle")
let sideA = parseFloat(prompt("Enter side A: "))
let sideB = parseFloat(prompt("Enter side B: "))
let sideC = parseFloat(prompt("Enter side C"))
let perimeter = sideA + sideB + sideC
console.log(`The perimeter of the triangle is ${perimeter}`)