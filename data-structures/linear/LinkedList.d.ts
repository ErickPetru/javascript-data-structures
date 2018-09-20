declare class LinkedList {
  /**
    * Creates a new empty list.
    */
  constructor ();

  /**
    * Gets the current length of the list.
    */
  readonly length: number;

  /**
    * Gets the first element of the list.
    */
  readonly top: Element;

  /**
   * Searchs for an element at the specified index of the list.
   * Returns `null` if the index isn't being used.
   * @param index The zero-based index to search for an element.
   */
  get (index: number): Element;

  /**
    * Inserts an element into the list at the specified index, returning its new length.
    * @param value The new value to be inserted as an element.
    * @param index The zero-based index at which `value` should be inserted.
    */
  insert (value: any, index: number): number;

  /**
    * Inserts an element to the end of the list, returning its new length.
    * It's just an alias to `LinkedList.insert(value, LinkedList.length)`.
    * @param value The new value to be inserted as an element.
    */
  append (value: any): number;

  /**
    * Inserts an element to the start of the list, returning its new length.
    * It's just an alias to `LinkedList.insert(value, 0)`.
    * @param value The new value to be inserted as an element.
    */
   prepend (value: any): number;

  /**
   * Removes the first occurrence of a specific object from the list and returns it.
   * Returns `null` if the index isn't being used.
   * @param value The value to remove from the list.
   */
  remove (value: any): any;

  /**
   * Removes the element at the specified index of the list and returns it.
   * @param index The zero-based index of the element to remove.
   */
  removeAt (index: number): any;
}

export default LinkedList;
