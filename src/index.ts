import { LinkedList } from './linked-list/linked-list';
class Application {
  public static main(): void {
    const list = new LinkedList<number>();
    list.add(1);
    list.add(2);
    list.add(3);
    list.remove(2);
    list.add(4);
    console.log(list.toString());
  }
}
Application.main();
