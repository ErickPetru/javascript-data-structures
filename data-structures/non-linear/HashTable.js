export class Hashers {
  static byLength (value) {
    return value.toString().length
  }

  static byFirstChar (value) {
    return value.toString()[0].toLowerCase()
  }

  static byFNV (value) {
    let hash = 0x811c9dc5
    value = Buffer.from(value)
    for (let i = 0; i < value.length; i++) {
      hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24)
      hash = hash ^ value[i]
    }
    return hash >>> 0
  }
}

export default class HashTable {
  constructor (hash = Hashers.byFNV) {
    if (!hash instanceof Function)
      throw Error(`The hash must be a valid function.`)

    this._buckets = new Map()
    this._length = 0
    this._hash = hash
  }

  // #region Properties
  get length () {
    return this._length
  }
  // #endregion

  // #region Methods
  insert (value) {
    const hash = this._hash(value)
    if (!this._buckets.has(hash))
      this._buckets.set(hash, [])

    const items = this._buckets.get(hash)
    items.push(value)
    this._buckets.set(hash, items)
    return ++this._length
  }

  contains (value) {
    const hash = this._hash(value)
    if (!this._buckets.has(hash))
      return false
    else {
      const items = this._buckets.get(hash)
      return !!(items && items.length)
    }
  }

  remove (value) {
    const hash = this._hash(value)
    if (!this._buckets.has(hash))
      return null
    else {
      const items = this._buckets.get(hash)
      const index = items.findIndex(i => i === value)
      if (index === -1)
        return null
      else {
        items.splice(index, 1)
        this._length--
        return value
      }
    }
  }

  toString () {
    if (this._length === 0) return '{}'

    let result = '{ '
    this._buckets.forEach((value, key) => {
      result += key + ': '
      if (value) {
        result += JSON.stringify(value) + ', '
      } else {
        result += 'null, '
      }
    })
    return result.slice(0, -2) + ' }'
  }
  // #endregion
}
