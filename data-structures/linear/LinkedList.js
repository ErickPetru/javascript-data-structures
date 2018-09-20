import Element from './Element'

export default class LinkedList {
  constructor () {
    this._length = 0
    this._first = null
  }

  // #region Properties
  get length () {
    return this._length
  }

  get first () {
    return this._first
  }
  // #endregion

  // #region Methods
  get (index) {
    if (index < 0 || index > this._length) return null
    let target = this._first
    for (let i = 0; i < index; i++) target = target.next
    return target
  }

  insert (value, index) {
    const inserted = new Element(value)
    if (index === 0) {
      inserted.next = this._first
      this._first = inserted
    } else {
      const previous = this.get(index - 1)
      inserted.next = previous.next
      previous.next = inserted
    }
    return ++this._length
  }

  append (value) {
    return this.insert(value, this._length)
  }

  prepend (value) {
    return this.insert(value, 0)
  }

  remove (value) {
    let index = -1, target = this._first
    while (target) {
      if (target.value === value) return this.removeAt(++index)
      else target = target.next && index++
    }
    return null
  }

  removeAt (index) {
    if (index < 0 || index > this._length) return null
    this._length--
    if (index === 0) {
      const removed = this._first
      this._first = removed.next
      return removed.value
    } else {
      const previous = this.get(index - 1)
      const removed = previous.next
      previous.next = removed.next
      return removed.value
    }
  }
  // #endregion
}
