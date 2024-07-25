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

const descendingReleaseDates = releaseDates.toSorted((a, b) => b -a);