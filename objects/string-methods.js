let name = ' Jean Jdom ' 

// Length property
console.log(name.length)

// Convert to upper case (method)
console.log(name.toUpperCase())

//convert to lower case 
console.log(name.toLowerCase())

// Includes method
let password = 'abc123password098'
console.log(password.includes('password'))

// Trim 
console.log(name.trim())

let isValidPassword = function (password) {
  return password.length > 8 && !password.includes('password')
  
  // or
  // if (password.length > 8 && !password.includes('password')) {
  //   return true
  // } else {
  //   return false
  // }
}

console.log(isValidPassword('asfp'))
console.log(isValidPassword('abc123!@#'))
console.log(isValidPassword('asdpasspassword'))