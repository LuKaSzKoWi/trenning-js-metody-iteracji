// ZADANIE #1

// Tablica planets zawiera nazwy planet.Dopełnij kod tak,
// aby zmienna planetsLengths zawierała tablicę składającą się z długości nazw każdej planety w tablicy planets.Należy użyć metody map().

// Zadeklarowana została zmienna planets
// Wartością zmiennej planets jest tablica ["Earth", "Mars", "Venus", "Jupiter"]
// Zadeklarowana została zmienna planetsLengths
// Wartością zmiennej planetsLengths jest tablica [5, 4, 5, 7]
// Do iteracji po tablicy używana jest metoda map()

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map(planet => planet.length);

// Wyjaśnienie:
// Deklaracja Tablicy planets:

// planets jest tablicą z nazwami planet: ["Earth", "Mars", "Venus", "Jupiter"].
// Użycie Metody map():

// map() iteruje przez każdy element w tablicy planets.
// Funkcja strzałkowa planet => planet.length jest przekazywana do map(). Dla każdego elementu planet, ta funkcja zwraca długość nazwy planety (planet.length).
// Wynik:

// planetsLengths to nowa tablica, której elementami są długości nazw planet z tablicy planets.


// ZADANIE #2

// Tablica books zawiera kolekcję obiektów książek, z których każdy zawiera właściwości title, author, rating.
// Używając metody map(), spraw, aby zmienna titles zawierała tablicę tytułów wszystkich książek(właściwość title) z tablicy books.

// Zadeklarowana została zmienna books
// Wartością zmiennej books jest tablica
// Zadeklarowana została zmienna titles
// Wartością zmiennej titles jest tablica ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
// Do iteracji po tablicy books używana jest metoda map() jako czysta funkcja


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

const titles = books.map(book => book.title);

// Wyjaśnienie:
// Deklaracja Tablicy books:

// books to tablica obiektów, z których każdy zawiera właściwości title, author i rating.
// Użycie Metody map():

// Metoda map() jest używana do iteracji przez każdy obiekt w tablicy books.
// Funkcja strzałkowa book => book.title jest przekazywana do map().
// Dla każdego obiektu book w tablicy books, ta funkcja zwraca wartość właściwości title.
// Wynik:

// titles to nowa tablica, która zawiera tytuły książek z tablicy books.
// Tablica titles po wywołaniu funkcji map() będzie zawierała tytuły książek: ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"],
// zgodnie z oczekiwanym wynikiem.

// ZADANIE #3

// Tablica books zawiera kolekcję obiektów książek, z których każdy zawiera właściwość genres,
//  której wartością jest tablica gatunków.Używając metody flatMap(),
// spraw by zmienna genres zawierała tablicę gatunków wszystkich książek(właściwość genres) z tablicy books.

// Zadeklarowana została zmienna books
// Wartością zmiennej books jest tablica obiektów
// Zadeklarowana została zmienna genres
// Wartością zmiennej genres jest tablica ["adventure", "history", "fiction", "horror", "mysticism"]
// Do iteracji po tablicy books używana jest metoda flatMap()


const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

const genres = books.flatMap(book => book.genres);