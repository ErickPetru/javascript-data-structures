/** Some sample hash functions. */
declare class Hashers {
  /**
   * The FNV-1 version of the non-cryptographic hash function
   * created by Glenn Fowler, Landon Curt Noll, and Kiem-Phong Vo.
   * @param value The value to be hashed.
   */
  static byFNV (value: any) : number;

  /**
   * A basic example of hash function, returning the
   * length after casting the received value as string.
   * @param value The value to be hashed.
   */
  static byLength (value: any) : number;

  /**
   * A basic example of hash function, returning the first
   * character after casting the received value as string.
   * @param value The value to be hashed.
   */
  static byFirstChar (value: any) : string;
}

declare class HashTable {
  /**
    * Creates a new empty stack.
    * @param hash Optional hash function to be used for hashing values.
    * Defaults to Fowler-Noll-Vo algorithm if not provided.
    */
  constructor (hash?: ((value: any) => number|string));

  /**
    * Gets the current length of the table.
    */
  readonly length: number;

  /**
    * Inserts a value to the table, returning its new length.
    * @param value The new value to be inserted.
    */
  insert (value: any): number;

  /**
    * Removes the desired element from the table and returns it.
    * @param value The value to be removed.
    * @returns The removed value or null if not found.
    */
  remove (value: any): any;
}

export default HashTable;
export { Hashers, HashTable };
