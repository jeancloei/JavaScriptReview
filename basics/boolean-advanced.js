let isAccountLocked = false
let userRole        ='Admin'

// if (isAccountLocked) {
//   console.log('Is account locked')
// } else {
//   console.log('Welcome!')
// }

if (isAccountLocked) {
  console.log('Is account locked')
} else if (userRole === 'Admin') {
  console.log('Welcome Admin!')
} else {
  console.log("Welcome!")
}

let temp = 44

if (temp <= 32) {
  console.log('It is frezzing ouside.')
} else if (temp >= 110){
  console.log('It is hot outside.')
} else {
  console.log('Go for it. it is nice outside.')
}

