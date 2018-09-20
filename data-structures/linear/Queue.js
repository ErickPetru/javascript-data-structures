import Element from './Element'

export default class Queue {
  constructor () {
    this._length = 0
    this._first = null
    this._last = null
  }

  // #region Properties
  get length () {
    return this._length
  }

  get first () {
    return this._first
  }

  get last () {
    return this._last
  }
  // #endregion

  // #region Methods
  enqueue (value) {
    const inserted = new Element(value)
    if (this._first === null) {
      this._first = inserted
      this._last = inserted
    } else {
      this._last.next = inserted
      this._last = inserted
    }
    return ++this._length
  }

  dequeue () {
    if (this._first === null) return null
    const removed = this._first
    if (removed.next === null) this._last = null
    this._first = removed.next
    this._length--
    return removed.value
  }
  // #endregion
}
