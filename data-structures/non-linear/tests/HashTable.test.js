import HashTable from '../HashTable'

let table = new HashTable()

test('create empty instance', () => {
  expect(table).toBeInstanceOf(HashTable)
  expect(table.length).toBe(0)
})

test('verify readonly properties', () => {
  expect(() => table.length++).toThrow()
})

test('insert four elements', () => {
  expect(table.insert('Erick')).toBe(1)
  expect(table.insert('Joice')).toBe(2)
  expect(table.insert('Nick')).toBe(3)
  expect(table.insert('Nina')).toBe(4)
  expect(table.length).toBe(4)
})

test('check existing elements', () => {
  expect(table.contains('Erick')).toBe(true)
  expect(table.contains('Joice')).toBe(true)
  expect(table.contains('Nick')).toBe(true)
  expect(table.contains('Nina')).toBe(true)
})

test('check not existing element', () => {
  expect(table.contains('João')).toBe(false)
  expect(table.contains('Maria')).toBe(false)
})

test('remove two elements', () => {
  expect(table.remove('Erick')).toBe('Erick')
  expect(table.remove('Nick')).toBe('Nick')
  expect(table.length).toBe(2)
  expect(table.contains('Erick')).toBe(false)
  expect(table.contains('Nick')).toBe(false)
})

test('remove not existing element', () => {
  expect(table.remove('Erick')).toBe(null)
  expect(table.length).toBe(2)
})
