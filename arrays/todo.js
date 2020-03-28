const todos = [
  'Buy eggs', 
  'Walk the dog', 
  'Clean the house',
  'Order cat food', 
  'Study'  
]

// console.log(`You have ${todos.length} todos!`)
// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[todos.length - 2]}`)

todos.splice(2, 1)
todos.push('Buy coffee')
todos.shift()

console.log(`You have ${todos.length} todos!`)
todos.forEach(function (todo, index) {
  const num = index + 1
  console.log(`${num}. ${todo}`)
})

// for (let count = 0; count < todos.length; count++) {
//   const num = count + 1
//   const todo = todos[count]
//   console.log(`${num}. ${todo}.`)
// }