// First I create class object

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Then the second step is to create object instance.
const harryPotterBook = new Book("Harry Potter", "Joanne Rowling", "1997");

console.log(harryPotterBook);
console.log(harryPotterBook.getSummary());

//And then I create deep copy of that object

const newObjCopy = JSON.parse(JSON.stringify(harryPotterBook));
console.log("Cloned object: ", newObjCopy);
