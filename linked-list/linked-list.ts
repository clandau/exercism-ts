type Node<T> = {
  val: T,
  next?: Node<T>,
  prior?: Node<T>,
}

export default class LinkedList<T> {
  private head: Node<T> | undefined = undefined;
  private tail: Node<T> | undefined = undefined;
  private length = 0;

  count(): number {
    return this.length;
  }

  push(val: T): LinkedList<T> {
    const node: Node<T> = { val };
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    } else if (this.tail) {
      node.prior = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
    return this;
  }

  pop(): T | null {
    if (!this.length) {
      return null;
    }
    if (this.length === 1) {
      const node = this.head;
      if (node) {
        this.tail = undefined;
        this.head = undefined;
        this.length = 0;
        node.prior = undefined;
        return node.val;
      }
    } else if (this.tail && this.tail.prior) {
      const node = this.tail;
      const prior = this.tail.prior;
      prior.next = undefined;
      this.tail = prior;
      this.length--;
      return node.val;
    }
    return null;
  }
  
  unshift(val: T): LinkedList<T> {
    const node: Node<T> = { val };
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else if (this.head) {
      this.head.prior = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  shift(): T | null {
    if (this.length === 0) return null;
    const node = this.head;
    if (this.length === 1) {
      this.head = undefined;
      this.tail = undefined;
    } else if (this.head) {
      const next = this.head.next;
      if (next) {
        next.prior = undefined;
        this.head = next;
      }
    }
    this.length--;
    if (node) {
      node.next = undefined;
      node.prior = undefined;
      return node.val;
    }
    return null;
  }

  delete(val: T): Node<T> | null {
    let pointer = this.head;
    while (pointer) {
      if (pointer.val === val) {
        // remove
        const node = pointer;
        const prior = pointer.prior;
        const next = pointer.next;
        if (prior && next) {
          // not at the head or tail
          prior.next = next;
          next.prior = prior;
        } else if (prior) {
          // at the tail
          prior.next = undefined;
          this.tail = prior;
        } else if (next) {
          // at the head
          next.prior = undefined;
          this.head = next;
        }
        this.length--;
        return node;
        
      } else {
        pointer = pointer.next;
      }
    }
    return null;
  }
}

