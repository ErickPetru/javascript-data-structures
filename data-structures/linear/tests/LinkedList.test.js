import LinkedList from '../LinkedList'
import Element from '../Element'

let games = new LinkedList()

test('create empty instance', () => {
  expect(games).toBeInstanceOf(LinkedList)
  expect(games.length).toBe(0)
  expect(games.first).toBeNull()
})

test('verify readonly properties', () => {
  expect(() => games.length++).toThrow()
  expect(() => games.first = 'test').toThrow()
})

test('append one element', () => {
  expect(games.append('The Sims')).toBe(1)
  expect(games.length).toBe(1)
  expect(games.first).toBeInstanceOf(Element)
  expect(games.first.value).toBe('The Sims')
})

test('prepend one element', () => {
  expect(games.prepend('StarCraft')).toBe(2)
  expect(games.length).toBe(2)
  expect(games.first).toBeInstanceOf(Element)
  expect(games.first.value).toBe('StarCraft')
  expect(games.first.next.value).toBe('The Sims')
})

test('insert two elements', () => {
  expect(games.insert('Mortal Kombat', 1)).toBe(3)
  expect(games.length).toBe(3)
  expect(games.first.next).toBeInstanceOf(Element)
  expect(games.first.next.value).toBe('Mortal Kombat')

  expect(games.insert('Twinsen\'s Odyssey', 0)).toBe(4)
  expect(games.length).toBe(4)
  expect(games.first).toBeInstanceOf(Element)
  expect(games.first.value).toBe('Twinsen\'s Odyssey')
})

test('get an element', () => {
  let game = games.get(3)
  expect(game).toBeInstanceOf(Element)
  expect(game.value).toBe('The Sims')
})

test('get with invalid position', () => {
  let game = games.get(5)
  expect(game).toBeNull()
})

test('remove element by index', () => {
  expect(games.removeAt(2)).toBe('Mortal Kombat')
  expect(games.length).toBe(3)
})

test('remove with invalid index', () => {
  expect(games.removeAt(8)).toBeNull()
  expect(games.length).toBe(3)
})

test('remove element by value', () => {
  expect(games.remove('Twinsen\'s Odyssey')).toBe('Twinsen\'s Odyssey')
  expect(games.length).toBe(2)
  expect(games.first).toBeInstanceOf(Element)
  expect(games.first.value).toBe('StarCraft')
})

test('remove with invalid value', () => {
  expect(games.remove('Cuphead')).toBeNull()
  expect(games.length).toBe(2)
})
