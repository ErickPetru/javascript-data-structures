declare class Queue {
  /**
    * Creates a new empty queue.
    */
  constructor ();

  /**
    * Gets the current length of the queue.
    */
  readonly length: number;

  /**
    * Gets the first element of the queue.
    */
  readonly first: Element;

  /**
    * Gets the last element of the queue.
    */
  readonly last: Element;

  /**
    * Inserts an element to the end of the queue, returning its new length.
    * @param value The new value to be inserted as an element.
    */
  enqueue (value: any): number;

  /**
    * Removes the first element from the queue and returns it.
    */
  dequeue (): any;
}

export default Queue;
