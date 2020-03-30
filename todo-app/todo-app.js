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

const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed
}) 

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left.`
document.querySelector('body').appendChild(summary)

// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(function (paragraph) {
//   if (paragraph.textContent.includes('the')) {
//     paragraph.remove()
//   }
// })