import { Node } from './node';
export class LinkedList<T> {
  private head: Node<T> | null;
  public length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value: T): void {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  remove(value: T): void {
    let current = this.head;
    if (current?.value === value) {
      this.head = current.next || null;
      this.length--;
      return;
    }

    while (current !== null && current.next?.value !== value) {
      current = current.next ?? null;
    }

    if (current === null || current.value === null) {
      return;
    }
    current.next = current.next?.next ?? null;
    this.length--;
    return;
  }
  toString(): string {
    let current = this.head;
    const str: Array<T> = [];
    while (current) {
      str.push(current.value);
      current = current.next || null;
    }
    return str.join(', ');
  }
}
