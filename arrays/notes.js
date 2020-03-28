const notes = ['Note1', 'Note2', 'Note3']

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

notes[2] = 'This is now the new note 3'

notes.forEach(function (item, index) {
  console.log(index)
  console.log(item)
})

console.log(notes.length)
console.log(notes)