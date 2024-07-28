// Zadanie 4. Saldo

// Napisz funkcję strzałkową getTotalBalanceByGender(users, gender), która przyjmuje dwa parametry:

// pierwszy parametr users — tablica obiektów użytkowników,
// drugi parametr gender — ciąg znaków przechowujący płeć.
// Funkcja powinna używać łańcucha wywołań metod i zwracać saldo użytkowników(właściwość balance),
//     których płeć(właściwość gender) odpowiada wartości parametru gender.



// Weź poniższy kod i wklej go po deklaracji swojej funkcji, aby sprawdzić, czy działa poprawnie. Wyniki jego działania zostaną wyświetlone w konsoli.



// const allUsers = [
// 	{
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764
//   }
// ];

// console.log(getTotalBalanceByGender(allUsers, "male")); // 12053

// console.log(getTotalBalanceByGender(allUsers, "female")); // 8863



// Zostaw ten kod do sprawdzenia swojemu mentorowi.

// Na co będzie zwracał uwagę mentor podczas sprawdzania:

// Zadeklarowano zmienną getTotalBalanceByGender;
// Zmiennej getTotalBalanceByGender przypisano funkcję strzałkową z parametrami (users, gender);
// W ciele funkcji użyto łańcucha metod we właściwej kolejności;
// Wartość parametru users nie ulega zmianie;
// Jeśli wartością parametru gender jest ciąg "male", funkcja zwraca liczbę 12053;
// Jeśli wartością parametru gender jest łańcuch female, funkcja zwraca liczbę 8863;
// Wywołanie funkcji z losowymi, ale poprawnymi argumentami zwraca poprawną wartość.

const getTotalBalanceByGender = (users, gender) => users
    .filter(user => user.gender === gender)
    .map(user => user.balance)
    .reduce((total, balance) => total + balance, 0);


//     Wyjaśnienie:
// Deklaracja zmiennej getTotalBalanceByGender:

// Przypisujemy zmiennej funkcję strzałkową, która przyjmuje dwa parametry: users (tablica obiektów użytkowników) i gender (ciąg znaków reprezentujący płeć).
// Metoda filter:

// Używamy metody filter, aby przefiltrować tablicę users, zwracając tylko tych użytkowników, których właściwość gender odpowiada wartości parametru gender.
// Metoda map:

// Po przefiltrowaniu używamy metody map, aby uzyskać tablicę wartości balance dla przefiltrowanych użytkowników.
// Metoda reduce:

// Na końcu używamy metody reduce, aby zsumować wartości balance i uzyskać łączną kwotę. reduce przyjmuje dwa parametry: funkcję redukującą oraz początkową wartość akumulatora (0).
// Testowanie funkcji:

// Używamy przykładowych danych allUsers, aby sprawdzić, czy funkcja zwraca poprawne wyniki dla różnych wartości gender.
// Rezultat wywołania funkcji z przykładowymi danymi powinien zwrócić:

// Suma salda użytkowników płci męskiej: 12053.
// Suma salda użytkowników płci żeńskiej: 8863.