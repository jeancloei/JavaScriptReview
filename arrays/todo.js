const todos = [{
  text: 'Buy eggs',
  completed: true
}, { 
  text: 'Walk the dog',
  completed: false
}, { 
  text: 'Clean the house',
  completed: true
}, {
  text:'Order cat food', 
  completed: false
}, { 
  text: 'Study', 
  completed: true
}]

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase()
  })
  if (index > -1) {
    todos.splice(index, 1)
  }
}
const getThingsToDo = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed
  })
}

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1
    } else if (!b.completed && a.completed) {
      return 1
    } else {
      return 0
    }
  })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))
// deleteTodo(todos, 'Buy eggs')
// console.log(todos)

// console.log(`You have ${todos.length} todos!`)
// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[todos.length - 2]}`)

// todos.splice(2, 1)
// todos.push('Buy coffee')
// todos.shift()

// console.log(`You have ${todos.length} todos!`)
// todos.forEach(function (todo, index) {
//   const num = index + 1
//   console.log(`${num}. ${todo}`)
// })

// for (let count = 0; count < todos.length; count++) {
//   const num = count + 1
//   const todo = todos[count]
//   console.log(`${num}. ${todo}.`)
// }