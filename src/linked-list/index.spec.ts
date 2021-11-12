import { LinkedList } from './linked-list';
import { Node } from './node';
describe('test', () => {
  test('Should create Node with value Test ', async () => {
    const node = new Node('Test');
    expect(node.value).toBe('Test');
    expect(node).toBeDefined();
  });

  it('Should create singleLinkedList with 4 values', () => {
    const linkedList = new LinkedList();
    linkedList.add('Abdulrahman');
    linkedList.add('Ahmed');
    linkedList.add('Ali');
    linkedList.add('Omar');
    expect(linkedList).toBeDefined();
    expect(linkedList.length).toBe(4);
  });

  it('Should remove in middle of singleLinkedList with 3 values', () => {
    const linkedList = new LinkedList<string>();
    linkedList.add('Abdulrahman');
    linkedList.add('Ahmed');
    linkedList.add('Ali');
    linkedList.remove('Ahmed');
    expect(linkedList).toBeDefined();
    expect(linkedList.length).toBe(2);
    expect(linkedList.toString()).toBe('Abdulrahman, Ali');
  });
  it('Should not modify the list when removing non-existing value', () => {
    const linkedList = new LinkedList<string>();
    linkedList.add('Abdulrahman');
    linkedList.add('Ahmed');
    linkedList.remove('non-existing-value');
    expect(linkedList).toBeDefined();
    expect(linkedList.length).toBe(2);
    expect(linkedList.toString()).toBe('Abdulrahman, Ahmed');
  });
});
