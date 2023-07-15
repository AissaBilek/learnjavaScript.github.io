let countBook = -1;

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
  
  this.info = function () {
    console.log(`the ${title}, ${author}, number of pages ${pages}, not ${read}`);
  };
}

let Library = [];

function addBoooktoLibrary() {
  let title = document.getElementById('titleinput').value;
  let author = document.getElementById('authorinput').value;
  let pages = document.getElementById('numberofpagesinput').value;
  let read = document.getElementById('readinput').value;
  afficheLivre(title,author,pages,read)
 
  countBook += 1;

  const objectBook = new Book(title, author, pages, read, countBook);
  console.log(objectBook);
  Library.push(objectBook);
}
const addbookButton = document.getElementById('addnewbook');
addbookButton.addEventListener("click", function(event) {
  const Modal = document.getElementById('dialogue');
  Modal.showModal();
  const resetModal = document.getElementById('myForm');
  resetModal.reset();
});
console.log('hello');

const closeButtonn = document.getElementById('close-button');
closeButtonn.addEventListener('click', function (event) {
  event.preventDefault();
  Modal.close();
});

/////////

const addButtonmodal = document.getElementById('add-button');
addButtonmodal.addEventListener('click', function (event) {
  event.preventDefault();
  addBoooktoLibrary();
  const resetModal = document.getElementById('myForm');
  resetModal.reset();
  const Modal = document.getElementById('dialogue');
  Modal.close();
 
 

});



function afficheLivre(title,author,pages,read) {
  const bookDiv = document.createElement('div')
  bookDiv.id="bagage";
  const removeButton = document.createElement('button');
  removeButton.id='removebook';
  const title1 = document.createElement('div');
  const author1 = document.createElement('div');
  const pages1 = document.createElement('div');
  const read1 = document.createElement('div');
  title1.innerText=` the title of the book is:${title}`
  author1.innerText=`the author of the book is:${author}`
  pages1.innerText=`number of pages of this book is:${pages}`
  read1.innerText=`did you read this book or not?${read}`
  removeButton.innerText=`Remove`;

  bookDiv.appendChild(title1);
  bookDiv.appendChild(author1);
  bookDiv.appendChild(pages1);
  bookDiv.appendChild(read1);
  bookDiv.appendChild(removeButton);
  document.body.appendChild(bookDiv);
  removeButton.addEventListener('click', function () {
    const element1 = document.getElementById('bagage');
    element1.remove();
});

  
  
  }
 



//////////////////

  
  
  


  



