export class Book {
  constructor(title,author,description,pages,currentPage,read){
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = 1;
    this.read = false;
  }
  readBook(page){
    if(page < 0 || page > this.pages){
      return 0;
    }
    else if(page >= 1 && page < this.pages){
      this.currentPage = page;
      return 1;
    }
    else if( page === this.pages){
      this.currentPage = page;
      this.read = true;
      return 1;
    }
  }
}

//instances to check the code functionality 

let book1 = new Book('Book1','william','It is a test book number 1',23,0);
let book2 = new Book('Book2','Jack','It is a test book number 2',50,0);
let book3 = new Book('Book12','Harvey','It is a test book number 3',100,0);

export const books = [book1,book2,book3];
