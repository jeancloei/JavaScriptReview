let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)
myBook.title = 'Animal farm'
console.log(`${myBook.title} by ${myBook.author}`)

let person = {
  name: 'Jean',
  age: 36,
  location: 'Miami'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
person.age = person.age + 1
console.log(person.age)