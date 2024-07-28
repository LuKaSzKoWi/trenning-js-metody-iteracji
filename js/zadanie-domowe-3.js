// Zadanie 3. Sortowanie według liczby znajomych

// Napisz funkcję strzałkową sortByDescendingFriendCount(users), która przyjmuje jeden parametr users — tablicę obiektów użytkowników.

// Funkcja powinna zwrócić tablicę wszystkich użytkowników posortowanych według liczby znajomych w porządku malejącym (właściwość friends).

// Weź poniższy kod i wklej go po deklaracji swojej funkcji, aby sprawdzić poprawność jej działania. Wyniki jego działania zostaną wyświetlone w konsoli.

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female"
//     }
//   ])
// );
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]

const sortByDescendingFriendCount = (users) => users.toSorted((a, b) => b.friens.length - a.friends.length);


// Wyjaśnienie:
// Deklaracja zmiennej sortByDescendingFriendCount:

// Przypisujemy zmiennej funkcję strzałkową, która przyjmuje jeden parametr: users (tablica obiektów użytkowników).
// Metoda toSorted:

// Używamy metody toSorted do utworzenia nowej posortowanej tablicy.
// W funkcji sortującej porównujemy długości tablic friends poszczególnych użytkowników(b.friends.length - a.friends.length),
//     co sortuje użytkowników w porządku malejącym według liczby znajomych.
// Testowanie funkcji:

// Używamy przykładowych danych do sprawdzenia, czy funkcja zwraca poprawnie posortowaną tablicę użytkowników.
// Rezultat wywołania funkcji z przykładowymi danymi powinien zwrócić tablicę użytkowników posortowaną malejąco według liczby ich znajomych.