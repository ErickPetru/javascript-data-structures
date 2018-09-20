declare class Element {
  /**
    * Creates a new element wrapper for the desired value.
    * @param value Value of the element.
    */
  constructor (value: any);

  /**
    * Gets or sets the element's value.
    */
  value: any;

   /**
     * Gets or sets the next element. Returns null if it's the last one.
     */
  next: Element;
}

export default Element;
