import 'colors'
import prompt from 'async-prompt'
import Queue from '../data-structures/linear/Queue'
import { ordinal } from '../utils'

function header (description) {
  console.clear()
  console.log('Linear Queue Sample'.cyan)
  console.log(description)
}

export default async () => {
  let name, names = new Queue()

  do {
    header('Enter cast names or leave empty to stop answering.\n'.gray)
    name = await prompt(`${ ordinal(names.length + 1) } character name: `.yellow)
    if (name) names.enqueue(name)
  } while (name)

  header('Here\'s the names dequeued from the queue:\n'.gray)
  if (names.length) {
    while (names.length) console.log(names.dequeue().green)
  } else {
    console.warn('Nothing was inserted into the queue.'.red)
  }
}
