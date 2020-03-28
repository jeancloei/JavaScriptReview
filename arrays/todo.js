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

console.log(todos)