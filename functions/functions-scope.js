// Global Scope (convertFahrenheitToCelsius, tempOne, temp two)
  // Local Scope (fahrenheit, celsius)
    // Local scope (isFreezing )

let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9

  if (celsius <= 0) {
    let isFreezing = true
  }
  
  return celsius
}

let weather      = convertFahrenheitToCelsius(32)
let otherWeather = convertFahrenheitToCelsius(68)

console.log(weather)
console.log(otherWeather)