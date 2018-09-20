import Stack from '../Stack'
import Element from '../Element'

let books = new Stack()

test('create empty instance', () => {
  expect(books).toBeInstanceOf(Stack)
  expect(books.length).toBe(0)
  expect(books.top).toBeNull()
})

test('verify readonly properties', () => {
  expect(() => books.length++).toThrow()
  expect(() => books.top = 'test').toThrow()
})

test('push three elements', () => {
  expect(books.push('A Game of Thrones')).toBe(1)
  expect(books.push('A Clash of Kings')).toBe(2)
  expect(books.push('A Storm of Swords')).toBe(3)
  expect(books.length).toBe(3)
  expect(books.top).toBeInstanceOf(Element)
  expect(books.top.value).toBe('A Storm of Swords')
})

test('pop two elements', () => {
  expect(books.pop()).toBe('A Storm of Swords')
  expect(books.pop()).toBe('A Clash of Kings')
  expect(books.length).toBe(1)
  expect(books.top).toBeInstanceOf(Element)
  expect(books.top.value).toBe('A Game of Thrones')
})

test('pop last element', () => {
  expect(books.pop()).toBe('A Game of Thrones')
  expect(books.length).toBe(0)
  expect(books.top).toBeNull()
})
