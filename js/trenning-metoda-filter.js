// ZADANIE #1

// Dopełnij kod tak, aby zmienna evenNumbers zawierała tablicę liczb parzystych z tablicy numbers,
//     a zmienna oddNumbers zawierała tablicę liczb nieparzystych.Pamiętaj, aby używać metody filter().

// Zadeklarowana została zmienna numbers
// Wartością zmiennej numbers jest tablica [17, 24, 82, 61, 36, 18, 47, 52, 73]
// Zadeklarowana została zmienna evenNumbers
// Wartością zmiennej evenNumbers jest tablica [24, 82, 36, 18, 52]
// Zadeklarowana została zmienna oddNumbers
// Wartością zmiennej oddNumbers' jest tablica [17, 61, 47, 73]`
// Do iteracji po tablicy numbers używana jest metoda filter()

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter (number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);


// ZADANIE #2

// Tablica books zawiera kolekcję obiektów książek, z których każdy zawiera właściwości title, author, rating.
//  Używając metody filter(), dopełnij kod tak, aby:

// W zmiennej topRatedBooks znalazła się tablica książek, których ocena (właściwość rating) jest większa lub równa wartości zmiennej MIN_RATING.
// W zmiennej booksByAuthor znalazła się tablica książek napisanych przez autora o nazwisku (właściwość author) pasującym do wartości w zmiennej AUTHOR.
// Zadeklarowana została zmienna books
// Wartością zmiennej books jest tablica obiektów
// Zadeklarowana została zmienna MIN_RATING
// Wartością zmiennej MIN_RATING jest liczba 8
// Zadeklarowana została zmienna AUTHOR
// Wartością zmiennej AUTHOR jest ciąg znaków "Bernard Cornwell"

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);



ZADANIE #3

// Dopełnij funkcję getUsersWithEyeColor(users, color) tak,
// aby zwracała tablicę użytkowników, których kolor oczu(właściwość eyeColour) zgadza się z wartością drugiego parametru colour.

// Zadeklarowana została zmienna getUsersWithEyeColor
// Do zmiennej getUsersWithEyeColor przypisana została funkcja strzałkowa z parametrami (users, color)
// Do iteracji po parametrze users używana jest metoda filter()
// Jeśli parametr color to blue, funkcja zwraca tablicę obiektów użytkowników o nazwach Moore Hensley, Sharlene Bush i Carey Barr
// Jeśli wartość parametru color to green, funkcja zwraca tablicę obiektów użytkowników o nazwach Ross Vazquez i Elma Head
// Jeśli wartość parametru colour to brown, funkcja zwraca tablicę obiektów użytkowników o nazwach Blackburn Dotson i Sheree Anthony
// Jeśli wartością parametru color jest jakikolwiek inny ciąg znaków, funkcja zwraca pustą tablicę

const getUsersWithEyeColor = (users, color) => {
  
    return users.filter(user => user.eyeColor === color);
};



// ZADANIE #4 - METODA "FIND"

// Tablica books zawiera kolekcję obiektów książek, z których każdy zawiera właściwości title, author, rating.

// Używając metody find(), dopełnij kod tak, aby:

// W zmiennej bookWithTitle został utworzony obiekt książki, której nazwa (właściwość title) odpowiada wartości zmiennej BOOK_TITLE.
// W zmiennej bookByAuthor został utworzony obiekt książki, którego autor (właściwość author) odpowiada wartości zmiennej AUTHOR.
// Zadeklarowana została zmienna books
// Wartością zmiennej books jest tablica
// Zadeklarowana została zmienna BOOK_TITLE
// Wartością zmiennej BOOK_TITLE jest ciąg znaków "The Dream of a Ridiculous Man"
// Zadeklarowana została zmienna AUTHOR
// Wartością zmiennej AUTHOR jest ciąg znaków "Robert Sheckley"
// Zadeklarowana została zmienna bookWithTitle
// Wartością zmiennej bookWithTitle jest obiekt książki o nazwie "The Dream of a Ridiculous Man"
// Zadeklarowana została zmienna bookByAuthor
// Wartością zmiennej bookByAuthor jest obiekt książki autora "Robert Sheckley"
// Do iteracji po tablicy books używana jest metoda find()

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
];
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR = "Robert Sheckley";

const bookWithTitle = books.find (book => book.title ===BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);


// ZADANIE #5

// Dopełnij funkcję getUserWithEmail(users, email) tak,
// aby zwracała obiekt użytkownika, którego email(właściwość email) zgadza się z wartością drugiego parametru email.

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email ===email);
};