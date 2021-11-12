export class Node<T> {
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
  public value: T;
  public next?: Node<T> | null;
}
