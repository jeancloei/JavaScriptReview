// Multiple arguments 
let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 1, 5)
  console.log(result)

//Default arguments 
let getScoreText = function (name = 'Jean', score = 0) {
  return `Name: ${name} - Score: ${score}`
  //return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText()
console.log(scoreText)

let getTip = function(total, tipPercent = .20) {
  let percent = tipPercent * 100
  let tip     = total * tipPercent
  return `A ${percent}% tip on $${total} would be $${tip}`
  // return total * tipPercent
}

let tip = getTip(50)
console.log(tip)

// let name = 'JDom'
// let age  = 36
// console.log(`Hello my name is ${name}! I am ${age} years old.`)

