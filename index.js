import 'colors'
import fs from 'fs'
import path from 'path'
import prompt from 'async-prompt'

console.clear()
console.log('Data Structures in JavaScript\n'.cyan)

const files = fs.readdirSync(path.join(__dirname, 'samples'))
files.forEach((file, i) => console.log(`${ (`(${ i + 1 })`).yellow } ${ file.replace(/\.js/g, '').green }`))

console.log()
const option = await prompt('Which sample number do you want to run? '.yellow)

try {
  const target = require(`./samples/${ files[option - 1] }`)
  console.clear()
  if (!target.default || typeof target.default !== 'function') throw new Error()
  await target.default()
  console.log()
} catch (error) {
  if (error && error.message.indexOf('Cannot find module') === -1) console.error(error)
  else console.error('Sorry, it\'s not a valid option!'.red)
  console.log()
}
