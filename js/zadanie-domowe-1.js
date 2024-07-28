// Zadanie 1: Nazwy użytkowników

// Napisz funkcję strzałkową getUserNames(users), która przyjmuje jeden parametr users — tablicę obiektów użytkowników. Funkcja powinna zwrócić tablicę nazw wszystkich użytkowników (właściwość name) z tablicy users.



// Weź poniższy kod i wklej go po deklaracji swojej funkcji, aby sprawdzić poprawność jej działania. W konsoli wyświetlone zostaną wyniki jej wywołań.



console.log(
  getUserNames([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    balance: 3793
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    balance: 2278
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    balance: 2764
  },
])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]




// Zostaw ten kod do sprawdzenia swojemu mentorowi.

// Na co będzie zwracał uwagę mentor podczas sprawdzania:

// Zadeklarowano zmienną getUserNames;
// Zmienna getUserNames przypisano funkcję strzałkową z parametrem (users);
// Do iteracji po parametrze users użyto metody map();
// Wywołanie funkcji z określoną tablicą użytkowników zwraca tablicę ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"];
// Wywołanie funkcji z losowymi, ale poprawnymi argumentami zwraca poprawną wartość.


const getUserNames = (users) => users.map(user = user.name);


// Wyjaśnienie:
// Deklaracja zmiennej getUserNames:

// Przypisujemy do zmiennej funkcję strzałkową, która przyjmuje jeden parametr users.
// Metoda map:

// Używamy metody map, aby iterować po tablicy users i zwrócić nową tablicę zawierającą tylko właściwość name z każdego obiektu użytkownika.
// Testowanie funkcji:

// Używamy przykładowych danych do sprawdzenia, czy funkcja zwraca oczekiwaną tablicę nazwisk użytkowników.
// Wynik wywołania funkcji z przykładowymi danymi powinien zwrócić tablicę nazwisk użytkowników:
// ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"].