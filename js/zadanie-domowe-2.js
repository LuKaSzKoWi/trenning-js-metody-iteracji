// Zadanie 2. Użytkownicy ze znajomym

// Napisz funkcję strzałkową getUsersWithFriend(users, friendName), która przyjmuje dwa parametry:

// pierwszy parametr users — tablica obiektów użytkowników,
// drugi parametr friendName — nazwa znajomych do wyszukania.


// Funkcja powinna zwrócić tablicę wszystkich użytkowników z tablicy users, którzy mają znajomego o nazwie friendName.
// Znajomi każdego użytkownika są przechowywani we właściwości friends.Jeśli nie ma użytkowników,
//     którzy mają takiego znajomego, funkcja powinna zwrócić pustą tablicę.

// Wskazówki:

// Metoda filter() może być użyta do utworzenia nowej tablicy z elementami spełniającymi określony warunek.
// Użyj metody includes(), aby sprawdzić czy tablica friends zawiera friendName.


// Weź poniższy kod i wklej go po deklaracji swojej funkcji, aby sprawdzić, czy działa poprawnie. W konsoli wyświetlone zostaną wyniki jego działania.



// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"]
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"]
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []



// Zostaw ten kod do sprawdzenia swojemu mentorowi.

// Na co będzie zwracał uwagę mentor podczas sprawdzania:

// Zadeklarowano zmienną getUsersWithFriend;
// Zmiennej getUsersWithFriend przypisano funkcję strzałkową z parametrami (users, friendName);
// Do iteracji po parametrze users użyto metody filter();
// Jeśli wartością parametru friendName jest ciąg "Briana Decker", funkcja zwraca tablicę obiektów użytkowników o nazwach Sharlene Bush i Sheree Anthony;
// Jeśli wartością parametru friendName jest ciąg "Goldie Gentry", funkcja zwraca tablicę obiektów użytkownika o nazwach Elma Head i Sheree Anthony;
// Jeśli wartością parametru friendName jest ciąg "Adrian Cross", funkcja zwróci pustą tablicę;
// Wywołanie funkcji z losowymi, ale poprawnymi argumentami zwraca poprawną wartość.


const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];





const getUsersWithFriend = (users, friendName) => users
    .filter(user => user.friends
    .icludes(friendName));
    

//         Wyjaśnienie:
// Deklaracja zmiennej getUsersWithFriend:

// Przypisujemy zmiennej funkcję strzałkową, która przyjmuje dwa parametry: users (tablica obiektów użytkowników) i friendName (nazwa znajomego).
// Metoda filter:

// Używamy metody filter, aby przefiltrować tablicę users, zwracając tylko tych użytkowników, których tablica friends zawiera friendName.
// Sprawdzamy obecność friendName w tablicy friends użytkownika za pomocą metody includes.
// Testowanie funkcji:

// Używamy przykładowych danych allUsers, aby sprawdzić, czy funkcja zwraca poprawne wyniki dla różnych wartości friendName.
// Rezultat wywołania funkcji z przykładowymi danymi powinien zwrócić:

// Tablicę użytkowników, którzy mają znajomego "Briana Decker".
// Tablicę użytkowników, którzy mają znajomego "Goldie Gentry".
// Pustą tablicę, jeśli żaden użytkownik nie ma znajomego "Adrian Cross".