// ZADANIE #1

// Zmienna releaseDates jest tablicą liczb, określających lata publikacji książek.
// Zmienna authors jest tablicą ciągów znaków obejmującą autorów książek.

// Dopełnij kod tak, aby zmienna ascendingReleaseDates zawierała kopię tablicy releaseDates posortowaną rosnąco,
// a zmienna alphabeticalAuthors zawierała kopię tablicy nazwisk autorów authors posortowaną alfabetycznie.Użyj metody toSorted()

// Zadeklarowana została zmienna releaseDates
// Wartością zmiennej releaseDates jest tablica [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Zadeklarowana została zmienna authors
// Wartością zmiennej authors jest tablica ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// Zadeklarowana została zmienna ascendingReleaseDates
// Wartość zmiennej ascendingReleaseDates jest tablicą [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Zadeklarowana została zmienna alphabeticalAuthors
// Wartością zmiennej alphabeticalAuthors jest tablica ["Bernard Cornwell", "Fyodor Dostoevsky", "Robert Sheckley", "Tanith Lee"]
// Użyta została metoda toSorted()

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

const ascendingReleaseDates = releaseDates.toSorted();

const alphabeticalAuthors = authors.toSorted();



// ZADANIE #2

// Zmienna releaseDates jest tablicą liczb, określających lata publikacji książek.

// Biblioteka online powinna wyświetlać książki posortowane według daty publikacji,
// w porządku rosnącym lub malejącym.Dopełnij kod tak, a
// by zmienna ascendingReleaseDates otrzymała kopię tablicy releaseDates posortowaną rosnąco,
//     a zmienna descendingReleaseDates otrzymała kopię posortowaną malejąco.

// Zadeklarowana została zmienna releaseDates
// Wartością zmiennej releaseDates jest tablica [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Zadeklarowana została zmienna ascendingReleaseDates
// Wartość zmiennej ascendingReleaseDates jest tablicą [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Zadeklarowana została zmienna descendingReleaseDates
// Wartością zmiennej descendingReleaseDates jest tablica [2016, 2012, 2008, 1997, 1984, 1973, 1967]

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = releaseDates.toSorted((a, b) => a -b);

const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);


// ZADANIE #3

// Zmienna authors jest tablicą ciągów znaków obejmującą autorów książek.

// Biblioteka online powinna wyświetlać książki posortowane według autora w kolejności alfabetycznej i odwrotnej kolejności alfabetycznej.
// Dopełnij kod tak, aby zmienna authorsInAlphabetOrder otrzymywała kopię tablicy authors posortowaną alfabetycznie,
//     a zmienna authorsInReversedOrder otrzymywała kopię posortowaną w odwrotnej kolejności alfabetycznej.

// Zadeklarowana została zmienna authors
// Wartością zmiennej authors jest tablica ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
// Zadeklarowana została zmienna authorsInAlphabetOrder
// Wartością zmiennej authorsInAlphabetOrder jest tablica ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// Zadeklarowana została zmienna authorsInReversedOrder
// Wartością zmiennej authorsInReversedOrder jest tablica ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]
// Użyta została metoda toSorted()


const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];

const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));


// ZADANIE #4

// Tablica books zawiera tablicę obiektów książek, z których każdy zawiera właściwości title, author, rating.

// Dopełnij kod tak, aby:

// Zmienna sortedByAuthorName zawierała tablicę książek posortowanych według nazwiska autora w porządku alfabetycznym.
// Zmienna sortedByReversedAuthorName zawierała tablicę książek posortowanych według nazwiska autora w odwrotnej kolejności alfabetycznej.
// Zmienna sortedByAscendingRating zawierała tablicę książek posortowanych rosnąco.
// Zmienna sortedByDescentingRating zawierała tablicę książek posortowanych malejąco.
// Zadeklarowana została zmienna books
// Wartością zmiennej books jest pierwotna tablica obiektów książek
// Zadeklarowana została zmienna sortedByAuthorName
// Wartością zmiennej sortedByAuthorName jest tablica książek posortowanych według nazwiska autora w porządku alfabetycznym
// Zadeklarowana została zmienna sortedByReversedAuthorName
// Wartością zmiennej sortedByReversedAuthorName jest tablica książek posortowanych według nazwiska autora w odwrotnej kolejności alfabetycznej
// Zadeklarowana została zmienna sortedByAscendingRating
// Wartością zmiennej sortedByAscendingRating jest tablica książek posortowanych według rosnącego ratingu
// Zadeklarowana została zmienna sortedByDescentingRating
// Wartością zmiennej sortedByDescentingRating jest tablica książek posortowanych według malejącego ratingu
// Do iteracji po tablicy books używana jest metoda toSorted()


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
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];

const sortedByAuthorName = books.toSorted((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));

const sortedByReversedAuthorName = books.toSorted((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));

const sortedByAscendingRating = books.toSorted((firstBook, secondBook) => firstBook.rating - secondBook.rating);

const sortedByDescentingRating = books.toSorted((firstBook, secondBook) => secondBook.rating - firstBook.rating);


// Wyjaśnienie:
// Deklaracja zmiennej books:

// books zawiera pierwotną tablicę obiektów książek.
// Sortowanie według nazwiska autora w porządku alfabetycznym:

// sortedByAuthorName używa toSorted() z funkcją porównującą nazwiska autorów za pomocą localeCompare.
// Sortowanie według nazwiska autora w odwrotnej kolejności alfabetycznej:

// sortedByReversedAuthorName używa toSorted() z funkcją porównującą nazwiska autorów za pomocą localeCompare w odwrotnej kolejności.
// Sortowanie według rosnącego ratingu:

// sortedByAscendingRating używa toSorted() z funkcją porównującą ratingi w porządku rosnącym.
// Sortowanie według malejącego ratingu:

// sortedByDescendingRating używa toSorted() z funkcją porównującą ratingi w porządku malejącym.
// Uwaga:
// Metoda toSorted() tworzy nową posortowaną tablicę, pozostawiając oryginalną tablicę books bez zmian.



// ZADANIE #5

// Tablica books zawiera tablicę obiektów książek, z których każdy zawiera właściwości title, author, rating.

// Dopełnij kod tak, aby zmienna names zawierała tablicę nazwisk autorów w kolejności alfabetycznej,
//   których oceny książek są większe niż wartość zmiennej MIN_BOOK_RATING.Należy użyć łańcucha metod.

// Zadeklarowana została zmienna books
// Wartością zmiennej books jest pierwotna tablica obiektów
// Zadeklarowana została zmienna MIN_BOOK_RATING
// Wartością zmiennej MIN_BOOK_RATING jest liczba 8
// Zadeklarowana została zmienna names
// Wartością zmiennej names jest tablica ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
// Zmienna names powinna zostać utworzona przy użyciu łańcucha metod filter, map, toSorted, podczas gdy inne zmienne nie powinny być deklarowane

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
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter(book => book.rating > MIN_BOOK_RATING)  
  .map(book => book.author)                      
  .toSorted((a, b) => a.localeCompare(b));   

//   Wyjaśnienie:
// filter:

// Filtruje tablicę books, wybierając tylko te książki, których ocena (rating) jest większa niż MIN_BOOK_RATING.
// map:

// Mapuje przefiltrowaną tablicę do tablicy nazwisk autorów (author).
// sort:

// Sortuje tablicę nazwisk autorów alfabetycznie przy użyciu metody localeCompare.
// Rezultat to tablica names, która zawiera nazwiska autorów w kolejności alfabetycznej, których książki mają oceny większe niż 8.