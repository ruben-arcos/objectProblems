//Pt. 1

//1. Write a JavaScript program to list the properties of a JavaScript object.

//Sample object:
let student = {
name : "David Rayy",
sclass : "VI",
rollno : 12
 };

 let properties = Object.keys(student);
 console.log(properties.join(',')) //Output: name,sclass,rollno

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

let student2 = {
name : "David Rayy",
sclass : "VI",
rollno : 12 
};

console.log(student);
delete student2.rollno;
console.log(student2)

// 3. Write a JavaScript program to get the length of a JavaScript object.

let student3 = {
name : "David Rayy",
sclass : "VI",
rollno : 12 
};

console.log(Object.keys(student3).length);


// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

let Library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

   for (let i = 0; i < Library.length; i++) {
    let book = Library[i];
    let bookInfo = book.title + ' by ' + book.author;

    if (book.readingStatus === true) {
        console.log(bookInfo + '- Reading status: Finished reading')
    } else {
        console.log(bookInfo + ' - Reading status: Not finished reading')
    }
   }

   console.log(Library)

// 5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.


// 6. Write a bubble sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]


// 7. Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]


// 8. Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"


// 9. Write a JavaScript program to calculate circle area and perimeter.
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.


// 10. Write a JavaScript program to sort an array of JavaScript objects.

let library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

const { emitKeypressEvents } = require('readline');
// Expected Output:

// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]


// 11. Write a JavaScript function to print all the methods in a JavaScript object.
// Test Data :
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]


// 12. Write a JavaScript function to parse an URL.

//store url in variable
// let url = 'https://www.youtube.com'

// //created a parser using createElement() method
// let parser = document.createElement('a');
// parser.href = url;

// //host the url
// console.log(parser.host);

// //hostname of the url
// console.log(parser.hostname);

// //pathname of url
// console.log(parser.pathname);

// //search in the url
// console.log(parser.search);

const { URL } = require('url');

let url = 'https://techcrunch.com/2023/07/13/telly-starts-shipping-free-ad-supported-tvs-first-round-customers/';

// Parse the URL using the URL constructor from the 'url' module
let parsedUrl = new URL(url);

console.log(parsedUrl.host);
console.log(parsedUrl.hostname);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);



// 13. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.

// 14. Write a JavaScript function to retrieve all the values of an object's properties.

const country = {
    name: 'Spain',
    capital: 'Madrid',
    population: 48196693,
    language: 'Spanish',
}

console.log(country.keys)
// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

// 16. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.

// 17. Write a JavaScript function to check whether an object contains a given property.

let person = {
    name: 'John',
    age: 30,
    city: 'Barcelona',
    birthdate: 'Sept 01 1998',
    eyeColor: 'blue'
}

console.log('birthplace' in person)
console.log(person.hasOwnProperty('eyeColor'))

// 18. Write a JavaScript function to check whether a given value is a DOM element.
