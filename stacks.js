function Stack() {
  let items = [];

  this.push = function (element) {
    items.push(element);
  };

  this.pop = function () {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return items.pop();
  };

  this.peek = function () {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return items[items.length - 1];
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

const stack = new Stack();

console.log("Apakah stack kosong?", stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Elemen di stack:", stack.print());
console.log("Elemen teratas:", stack.peek());

stack.pop();
console.log("Elemen di stack setelah pop:", stack.print());

console.log("Ukuran stack:", stack.size());
console.log("Apakah stack kosong?", stack.isEmpty());
