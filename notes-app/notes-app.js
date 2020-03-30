const ps = document.querySelectorAll('p')

const notes = [{
  title: 'my next trip',
  body: 'I would like to go to Canada'
}, {
  title: 'Habbits to work on',
  body: 'Eat netter, and exercise more'
}, {
  title: 'Office modification',
  body: 'Overall improvement'
}]

// Dom - Ducument Object Model

// Query and remove 
// const p = document.querySelector('p')

// p.remove()

// Query all and remove 

ps.forEach(function (p) {
  p.textContent = '*****'
  console.log(p.textContent)
  // p.remove()
})

// Add a neew element 
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from Java Script'
document.querySelector('body').appendChild(newParagraph)
