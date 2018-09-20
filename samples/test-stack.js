import 'colors'
import prompt from 'async-prompt'
import Stack from '../data-structures/linear/Stack'
import { ordinal } from '../utils'

function header (description) {
  console.clear()
  console.log('Linear Stack Sample'.cyan)
  console.log(description)
}

export default async () => {
  let name, books = new Stack()

  do {
    header('Enter book names or leave empty to stop answering.\n'.gray)
    name = await prompt(`${ ordinal(books.length + 1) } book name: `.yellow)
    if (name) books.push(name)
  } while (name)

  header('Here\'s the books popped out from the stack:\n'.gray)
  if (books.length) {
    while (books.length) console.log(books.pop().green)
  } else {
    console.warn('Nothing was inserted into the stack.'.red)
  }
}
