// Function - input (argument), code, output (return value)

let greatUser = function () {
  console.log('Welcome User!')
}

greatUser()
greatUser()
greatUser()

let square = function (num) {
  let result = num * num
  return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)



let convertFahrenheitToCelsius = function (fahrenheit) {
  let result = (fahrenheit - 32) * 5 / 9
  return result
}

let weather      = convertFahrenheitToCelsius(32)
let otherWeather = convertFahrenheitToCelsius(68)

console.log(weather)
console.log(otherWeather)