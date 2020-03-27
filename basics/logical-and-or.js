let temp = 55 

// Logical And  Operator - True both sides are true. False otherwise
// Logical Or Operator - True if at least one is true. False otherwise 

if (temp >= 60 && temp <= 90) {
  console.log('It is pretty nice outside.')
} else if (temp <= 0 || temp >= 120) {
  console.log('Do not go outside.')
} else {
  console.log('Eh. Do what you want.')
}

let isGuestOneVegan = true 
let isGusetTwoVegan = true

if (isGuestOneVegan && isGusetTwoVegan) {
  console.log('This is the vegan dishes.')
} else if (isGuestOneVegan || isGusetTwoVegan){
  console.log('This is the vegan dishes and the none vegan.')
} else {
  console.log('This is our menue.')
}
