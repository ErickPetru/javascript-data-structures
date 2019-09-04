import 'colors'
import { readdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url';
import prompt from 'async-prompt'

(async () => {
  try {
    console.clear()
    console.log('Data Structures in JavaScript\n'.cyan)

    const dir = join(dirname(fileURLToPath(import.meta.url)), 'samples')
    let files = readdirSync(dir, { withFileTypes: true })

    files = files.filter(file => file.isFile())
    files.forEach((file, i) => console.log(`${ (`(${ i + 1 })`).yellow
      } ${ file.name.replace(/\.js/g, '').green }`))

    console.log()
    const option = await prompt('Which sample do you wanna run? '.yellow)

    if (!files[option - 1])
      throw new Error('Cannot find module')

    const target = await import(`./samples/${ files[option - 1].name }`)
    if (!target.default || typeof target.default !== 'function')
      throw new Error('Cannot find module')

    console.clear()
    await target.default.call(this)
    console.log()
  } catch (error) {
    if (error && error.message) console.error(error)
    else console.error('Sorry, something wents wrong!'.red)
    console.log()
  }
}).call(this)
