declare class Stack {
  /**
    * Creates a new empty stack.
    */
  constructor ();

  /**
    * Gets the current length of the stack.
    */
  readonly length: number;

  /**
    * Gets the top element of the stack.
    */
  readonly top: Element;

  /**
    * Inserts an element to the top of the stack, returning its new length.
    * @param value The new value to be inserted as an element.
    */
  push (value: any): number;

  /**
    * Removes the last element from the stack and returns it.
    */
  pop (): any;
}

export default Stack;
