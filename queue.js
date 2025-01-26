function Queue() {
  let items = [];

  this.enqueue = function (element) {
    items.push(element);
  };

  this.dequeue = function () {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return items.shift();
  };

  this.front = function () {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return items[0];
  };

  this.isEmpty = function () {
    return items.length === 0;
  };

  this.size = function () {
    return items.length;
  };

  this.print = function () {
    return items.join(", ");
  };
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.print());
console.log(queue.front());

queue.dequeue();
console.log(queue.print());

console.log(queue.size());
console.log(queue.isEmpty());
