// Array
// const notes = ['Note1', 'Note2', 'Note3']

// Array of objects 
const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Canada'
}, {
  title: 'Habbits to work on',
  body: 'Eat netter, and exercise more'
}, {
  title: 'Office modification',
  body: 'Overall improvement'
}]

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch  = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
}

console.log(findNotes(notes, 'next'))

const note = findNote(notes, 'Office modification')
console.log(note)

// console.log(notes.length)
// console.log(notes[notes.length - 1])

// Pop removes the last items 
// console.log(notes.pop())

// Push adds an item at the end
// notes.push('My new notes')

// console.log(notes.shift)
// notes.unshift('My first notes')

// Splice removes items
// notes.splice(1, 1, 'New second item')

// notes[2] = 'This is now the new note 3'

// notes.forEach(function (item, index) {
//   console.log(index)
//   console.log(item)
// })

// for (let count = 0; count <= 2; count++) {
//   console.log(count)
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//   console.log(notes[count])
// }

// const findNote = function (notes, noteTitle) {
//   const index  = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//   return notes[index]
// }


// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function (note, index) {
//   console.log(note)
//   return note.title === 'Habbits to work on'
// })
// console.log(index)