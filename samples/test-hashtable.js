import 'colors'
import prompt from 'async-prompt'
import HashTable, { Hashers } from '../data-structures/non-linear/HashTable'
import { ordinal } from '../utils'

function header (description) {
  console.clear()
  console.log('Non-Linear Hash Table Sample'.cyan)
  console.log(description)
}

export default async () => {
  let value, table = new HashTable(Hashers.byFirstChar)

  do {
    header('Enter values for the table data.\n'.gray)
    value = await prompt(`${ ordinal(table.length + 1) } value: `.yellow)
    if (value) table.insert(value)
  } while (value)

  header('Here\'s the table structure in memory:\n'.gray)
  console.log(table.toString().green)
}
