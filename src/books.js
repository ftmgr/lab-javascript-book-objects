// Iteration 1 | Books Array

// Book 1
// title: The Old Man and the Sea
// pages: 128
// author: Ernest Hemingway
// details: {
//    language: English
//    description: One of Hemingway's most famous works, it tells the story of Santiago...
// }

// Book 2
// title: The Airbnb Story
// pages: 256
// author: Leight Gallagher
// details: {
//    language: English
//    description: This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...
// }

// Book 3
// title: Educated - A Memoir
// pages: 352
// author: Tara Westover
// details: {
//    language: English
//    description: Educated is an account of the struggle for self-invention...
// }

// Book 4
// title: The Art of Learning
// pages: 288
// author: Josh Waitzkin
// details: {
//    language: English
//    description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
// }


// Your code here:

const book1 = {
  title: `The Old Man and the Sea`,
  pages: 128,
  author: `Ernest Hemingway`,
  details: {
    language: `English`,
    description: `One of Hemingway's most famous works, it tells the story of Santiago...`,
  },
};

const book2 = {
  title: `The Airbnb Story`,
  pages: 256,
  author: `Leight Gallagher`,
  details: {
    language: `English`,
    description: `This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...`,
  },
};

const book3 = {
  title: `Educated - A Memoir`,
  pages: 352,
  author: `Tara Westover`,
  details: {
    language: `English`,
    description: `Educated is an account of the struggle for self-invention...`,
  },
};

const book4 = {
  title: `The Art of Learning`,
  pages: 288,
  author: `Josh Waitzkin`,
  details: {
    language: `English`,
    description: `The Art of Learning takes readers through Waitzkin's unique journey to excellence.
    He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.`,
  },
};

const book5 = Object.create(book1);

const booksArray = [book1, book2, book3, book4];

// Iteration 2 | Book Details
function getBookDetails(bookObj) {
  // Your code here:
  const str = `${bookObj.title} - ${bookObj.author} - ${bookObj.pages} pages`;
  return str;

}


// Iteration 3 | Delete Language
// Your code here:
booksArray.forEach(function(currentElement) {
  delete currentElement.details.language;

})



// Iteration 4 | Estimated Reading Time
// Your code here:
booksArray.forEach(function(currentElement) {
const readingTime = Math.round((currentElement.pages*500)/90);
currentElement.readingTime = readingTime;
})
console.log(booksArray);





// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionary = {
    "J. K. Rowling": [
        ["Harry Potter and the Philosopher's Stone", 223],
        ["Harry Potter and the Chamber of Secrets", 251],
        ["Harry Potter and the Prisoner of Azkaban", 317],
        ["Harry Potter and the Goblet of Fire", 636],
    ],
    "Neal Stephenson": [
        ["Cryptonomicon", 928],
        ["Anathem", 1008],
        ["Fall; or, Dodge in Hell", 896],
    ],
    "Malcolm Gladwell": [
        ["Outliers", 320],
        ["Blink", 287],
    ],
};

function booksByAuthor(myDictionary) {
  // Your code here:
  const newBook = Object.create(book1);
  const newBookArr = [];


    for(const author in myDictionary) {
      newBook.author = author;
    myDictionary[author].forEach((currentBook) => {
      newBook.title = currentBook[0];
      newBook.pages = currentBook[1];
      newBookArr.push(newBook);
    });
  }
  return newBookArr;
}

booksByAuthor(dictionary);



// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
  // Your code here:
  let sum = 0;

  for(const element in booksArray) {
   sum += booksArray[element].pages;
  }

  return Math.round(sum/booksArray.length);
}
