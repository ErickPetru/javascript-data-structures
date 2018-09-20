import Element from './Element'

export default class Stack {
  constructor () {
    this._length = 0
    this._top = null
  }

  // #region Properties
  get length () {
    return this._length
  }

  get top () {
    return this._top
  }
  // #endregion

  // #region Methods
  push (value) {
    const inserted = new Element(value)
    inserted.next = this._top
    this._top = inserted
    return ++this._length
  }

  pop () {
    if (this._length === 0) return null
    const removed = this._top
    this._top = removed.next
    this._length--
    return removed.value
  }
  // #endregion
}
