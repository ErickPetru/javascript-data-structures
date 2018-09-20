import Queue from '../Queue'
import Element from '../Element'

let names = new Queue()

test('create empty instance', () => {
  expect(names).toBeInstanceOf(Queue)
  expect(names.length).toBe(0)
  expect(names.first).toBeNull()
  expect(names.last).toBeNull()
})

test('verify readonly properties', () => {
  expect(() => names.length++).toThrow()
  expect(() => names.first = 'test').toThrow()
  expect(() => names.last = 'test').toThrow()
})

test('enqueue one element', () => {
  expect(names.enqueue('Eric Cartman')).toBe(1)
  expect(names.length).toBe(1)
  expect(names.first).toBeInstanceOf(Element)
  expect(names.first).toEqual(names.last)
  expect(names.first.value).toBe('Eric Cartman')
})

test('enqueue three elements', () => {
  expect(names.enqueue('Kenny McCormick')).toBe(2)
  expect(names.enqueue('Kyle Broflovski')).toBe(3)
  expect(names.enqueue('Stan Marsh')).toBe(4)
  expect(names.length).toBe(4)
  expect(names.first).toBeInstanceOf(Element)
  expect(names.last).toBeInstanceOf(Element)
  expect(names.first.value).toBe('Eric Cartman')
  expect(names.last.value).toBe('Stan Marsh')
})

test('dequeue three elements', () => {
  expect(names.dequeue()).toBe('Eric Cartman')
  expect(names.dequeue()).toBe('Kenny McCormick')
  expect(names.dequeue()).toBe('Kyle Broflovski')
  expect(names.length).toBe(1)
  expect(names.first).toBeInstanceOf(Element)
  expect(names.first).toEqual(names.last)
  expect(names.first.value).toBe('Stan Marsh')
})

test('dequeue last element', () => {
  expect(names.dequeue()).toBe('Stan Marsh')
  expect(names.length).toBe(0)
  expect(names.first).toBeNull()
  expect(names.last).toBeNull()
})
