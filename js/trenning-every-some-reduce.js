// ZADNIEA #1 - "EVERY"

// Dopełnij funkcję isEveryUserActive(users) tak, aby sprawdzała,
// czy wszyscy użytkownicy są teraz aktywni(właściwość isActive) i zwracała true lub false.

// Zadeklarowana została zmienna isEveryUserActive
// Do zmiennej isEveryUserActive przypisana została funkcja strzałkowa z parametrem (users)
// Do iteracji po parametrze users używana jest metoda every()
// Wywołanie funkcji z określoną tablicą użytkowników zwraca false


const isEveryUserActive = (users) => {
  return users.every(user => user.isActive);
};

// W powyższym kodzie:

// Funkcja isEveryUserActive jest zadeklarowana jako funkcja strzałkowa, która przyjmuje jeden parametr: users.
// Metoda every() jest używana do sprawdzenia, czy wszyscy użytkownicy mają właściwość isActive ustawioną na true.
// Przykładowe wywołanie funkcji z podaną tablicą użytkowników zwraca false,
// ponieważ nie wszyscy użytkownicy są aktywni(np.Moore Hensley i Ross Vazquez mają isActive ustawione na false).


// ZADANIE #2 - "SOME"

// Dopełnij funkcję isAnyUserActive(users) tak,
// aby sprawdzała obecność przynajmniej jednego aktywnego użytkownika(właściwość isActive) i zwracała true lub false.

// Zadeklarowana została funkcja isAnyUserActive
// Do zmiennej isAnyUserActive przypisana została funkcja strzałkowa z parametrem (users)
// Do iteracji po parametrze users używana jest metoda ome()
// Wywołanie funkcji z określoną tablicą użytkowników zwraca true

const isAnyUserActive = (users) => {
  return users.some(user => user.isActive);
};


// ZADANIE #3 - "REDUCE"

// Serwis gamingowy potrzebuje funkcjonalności do obliczania średniego czasu spędzonego w grach przez jednego gracza.
// Zmienna players przechowuje obiekt, w którym kluczem jest nazwisko gracza, a wartością jego czas gry.
// Zmienna playtimes przechowuje tablicę wartości obiektu players, czyli tablicę czasu gry wszystkich graczy.
// Wartością zmiennej averagePlayTime będzie średni czas spędzony przez jednego gracza w grach.

// Dopełnij kod tak, aby zmienna totalPlayTime zawierała całkowity czas gry z tablicy playtimes. Należy użyć metody reduce().

// Zadeklarowana została zmienna players
// Wartością zmiennej players jest obiekt graczy z czasem gry każdego z nich
// Zadeklarowana została zmienna playtimes
// Wartością zmiennej playtimes jest tablica [1270, 468, 710, 244]
// Zadeklarowana została zmienna totalPlayTime
// Wartością zmiennej totalPlayTime jest liczba 2692
// Do iteracji po tablicy playtimes używana jest metoda reduce()
// Zadeklarowana została zmienna averagePlayTime

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((total, playtime) => total + playtime, 0);

const averagePlayTime = totalPlayTime / playtimes.length;


// ZADANIE #4 - "REDUCE"

// Dopełnij funkcję calculateTotalBalance(users) tak, aby obliczała i zwracała sumę wszystkich środków(właściwość balance),
// które są przechowywane przez użytkowników z tablicy users.

// Zadeklarowana została zmienna calculateTotalBalance
// Do zmiennej calculateTotalBalance przypisana jest funkcja strzałkowa z parametrem (users)
// Do iteracji po parametrze users używana jest metoda reduce()
// Wywołanie funkcji z określoną tablicą użytkowników zwraca liczbę 20916

const calculateTotalBalance = (users) => {

  return users.reduce((total, user) => total + user.balance, 0 );
};


// ZADANIE #5

// Zmienna players przechowuje tablicę obiektów, z których każdy posiada właściwości name, playtime i gamesPlayed.

// Nasz serwis musi obliczyć średni czas spędzony w jednej grze dla każdego gracza i uzyskać całkowitą sumę tych wartości czasu w zmiennej
// totalAveragePlaytimePerGame.Można obliczyć czas dla każdego gracza, dzieląc jego czas(właściwość playtime) przez liczbę gier(właściwość gamesPlayed).

// Wskazówki:

// Użyj metody reduce() do iteracji po tablicy players i obliczenia całkowitej sumy średniego czasu na grę.
// Wewnątrz callbacku funkcji reduce(), podziel playtime gracza przez gamesPlayed, aby uzyskać średni czas spędzony na grze przez każdego gracza.
// Przechowuj wynik w zmiennej acc i zwracaj go na końcu każdej iteracji.
// Inicjalizuj parametr acc metody reduce() początkową wartością 0, aby uniknąć uzyskania NaN podczas obliczeń.
// W rezultacie zmienna totalAveragePlaytimePerGame będzie zawierać całkowitą sumę średniego czasu gry dla wszystkich graczy.
// Zadeklarowana została zmienna players
// Wartością zmiennej players jest tablica obiektów graczy
// Zadeklarowana została zmienna totalAveragePlaytimePerGame
// Wartością zmiennej totalAveragePlaytimePerGame jest liczba 1023
// Do iteracji po tablicy players używana jest metoda reduce()


// Zadeklarowana została zmienna players
const players = [
  { name: "Player1", playtime: 1270, gamesPlayed: 4 },  // Średni czas na grę: 1270 / 4 = 317.5
  { name: "Player2", playtime: 468, gamesPlayed: 2 },   // Średni czas na grę: 468 / 2 = 234
  { name: "Player3", playtime: 710, gamesPlayed: 3 },   // Średni czas na grę: 710 / 3 = 236.67
  { name: "Player4", playtime: 244, gamesPlayed: 1 }    // Średni czas na grę: 244 / 1 = 244
];

// Używanie metody reduce() do obliczenia całkowitej sumy średniego czasu na grę
const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
  // Obliczanie średniego czasu na grę dla danego gracza
  const averagePlaytimePerGame = player.playtime / player.gamesPlayed;
  // Dodawanie średniego czasu do akumulatora
  return acc + averagePlaytimePerGame;
}, 0);

console.log(totalAveragePlaytimePerGame); // Output: 1023
// W powyższym kodzie:

// players to tablica obiektów, gdzie każdy obiekt reprezentuje gracza i zawiera właściwości name, playtime i gamesPlayed.
// totalAveragePlaytimePerGame jest obliczana za pomocą metody reduce(), która iteruje po tablicy players.
// Wewnątrz callbacku metody reduce() średni czas na grę dla każdego gracza jest obliczany przez podzielenie playtime przez gamesPlayed.
// Wynik jest sumowany do akumulatora (acc), który jest inicjalizowany wartością 0.
// Na końcu całkowita suma średniego czasu gry dla wszystkich graczy jest przechowywana w zmiennej totalAveragePlaytimePerGame i wyświetlana za pomocą console.log().
// Dzięki temu podejściu uzyskujemy poprawną wartość całkowitej sumy średniego czasu gry dla wszystkich graczy.