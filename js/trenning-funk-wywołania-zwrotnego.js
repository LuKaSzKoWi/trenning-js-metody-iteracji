// Funkcja makePizza zwraca ciąg znaków z wiadomością do klienta.

// Dopełnij kod w taki sposób, aby zmienna result zawierała wynik działania funkcji makePizza, a zmienna pointer zawierała referencję do funkcji makePizza.

// Zadeklarowana została funkcja makePizza
// Zadeklarowana została zmienna result
// Wartością zmiennej result jest ciąg znaków "Your pizza is being prepared, please wait."
// Wartość zmiennej result jest otrzymywana przez wywołanie funkcji
// Zadeklarowana została zmienna pointer
// Wartością zmiennej pointer jest referencja do funkcji makePizza


function makePizza(pointer) {
  return "Your pizza is being prepared, please wait.";
}

result = makePizza();
pointer = makePizza;
 

// ZADANIE #2

// Funkcja makeMessage przyjmuje jeden parametr, nazwę pizzy do doręczenia, pizzaName, i zwraca ciąg znaków z wiadomością do klienta.

// Dopełnij funkcję makeMessage w taki sposób, aby oczekiwała jako drugiego parametru(parametr callback) funkcji zwrotnej,
// a następnie zwracała wynik jej wywołania.Funkcje deliverPizza lub makePizza będą przekazywane jako callback do makeMessage oraz
// będą oczekiwać jako argumentu nazwy gotowej pizzy, która powinna zostać doręczona.

// Zadeklarowana została funkcja deliverPizza
// Zadeklarowana została funkcja makePizza
// Zadeklarowana została funkcja makeMessage
// Funkcja makeMessage przyjmuje dwa parametry nazwane zgodnie z zadaniem, pizzaName i callback
// Wywołanie makeMessage("Royal Grand", makePizza) zwraca ciąg znaków "Pizza Royal Grand is being prepared, please wait..."
// Wywołanie makeMessage("Ultracheese", deliverPizza) zwraca ciąg znaków "Delivering Ultracheese pizza."


function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}


// Powyższy kod wykonuje następujące kroki:

// Definiuje funkcję deliverPizza, która przyjmuje nazwę pizzy i zwraca komunikat z informacją o dostarczeniu tej pizzy.
// Definiuje funkcję makePizza, która przyjmuje nazwę pizzy i zwraca komunikat z informacją o przygotowywaniu tej pizzy.
// Definiuje funkcję makeMessage, która przyjmuje dwa parametry: pizzaName i callback.
// Funkcja ta wywołuje przekazaną funkcję callback z argumentem pizzaName i zwraca wynik tego wywołania.
// Dzięki temu funkcja makeMessage może przyjmować zarówno makePizza, jak i deliverPizza jako funkcje zwrotne (callback).


// ZADANIE #3

// Funkcja makePizza ma dwa parametry: pizzaName — nazwa pizzy oraz callback — funkcja zwrotna.
// Podczas uruchamiania, makePizza wywołuje ten callback, przekazując mu pizzaName jako argument.

// Dopełnij drugie wywołanie funkcji makePizza(pizzaName, callback), przekazując jako drugi argument inline'ową funkcję callback eatPizza(pizzaName).
// Callback eatPizza loguje ciąg "Eating pizza <nazwa pizzy>", gdzie < nazwa pizzy > jest wartością parametru pizzaName.

// Zadeklarowana została funkcja makePizza
// Funkcja makePizza przyjmuje dwa parametry
// Drugim argumentem przy wywołaniu makePizza("Ultracheese") jest funkcja eatPizza z jednym parametrem pizzaName

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}`);
});

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});


// W tym kodzie:

// Funkcja makePizza przyjmuje dwa parametry: pizzaName i callback.Najpierw loguje komunikat o przygotowywaniu pizzy,
// a następnie wywołuje callback, przekazując mu pizzaName.
// Funkcja deliverPizza jest zdefiniowana, aby przyjmować pizzaName i logować komunikat o dostarczaniu pizzy.
// Pierwsze wywołanie makePizza przekazuje "Royal Grand" jako nazwę pizzy i funkcję deliverPizza jako callback.
// Drugie wywołanie makePizza przekazuje "Ultracheese" jako nazwę pizzy i inline'ową funkcję eatPizza jako callback, która loguje komunikat o jedzeniu pizzy.

// Wynikiem wykonania tego kodu będą logi:

// Pizza Royal Grand is being prepared, please wait...
// Delivering pizza Royal Grand
// Pizza Ultracheese is being prepared, please wait...
// Eating pizza Ultracheese


// ZADANIE #4

// Funkcja calculateTotalPrice(orderedItems) przyjmuje jeden parametr orderedItems — tablicę liczb,
//     oraz oblicza całkowitą sumę jej elementów, która jest przechowywana w zmiennej totalPrice i zwracana jako wynik funkcji.

// Dopełnij wywołanie metody forEach, przekazując jej funkcję callback,
//     która przy każdej iteracji dodaje wartość bieżącego elementu tablicy orderedItems do totalPrice.

// Zadeklarowana została funkcja calculateTotalPrice(orderedItems)
// Wywołanie funkcji calculateTotalPrice([12, 85, 37, 4]) zwraca 138
// Wywołanie funkcji calculateTotalPrice([164, 48, 291]) zwraca 503
// Wywołanie funkcji calculateTotalPrice([412, 371, 94, 63, 176]) zwraca 1116
// Wywołanie funkcji z losowymi, ale poprawnymi argumentami zwraca poprawną wartość

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

   orderedItems.forEach(function(item) {
    totalPrice += item;
  });

  return totalPrice;
}, 

// W tym kodzie:

// Funkcja calculateTotalPrice przyjmuje jeden parametr orderedItems, który jest tablicą liczb.
// Inicjalizuje zmienną totalPrice na 0.
// Używa metody forEach na tablicy orderedItems, przekazując jej funkcję callback, która przy każdej iteracji dodaje wartość bieżącego elementu do totalPrice.
// Funkcja zwraca wartość totalPrice po zakończeniu iteracji przez wszystkie elementy tablicy.

// orderedItems to tablica liczb, którą przekazujemy jako argument do funkcji calculateTotalPrice.
// Metoda forEach wykonuje przekazaną funkcję zwrotną (callback) dla każdego elementu w tablicy.
// W każdej iteracji funkcji forEach, bieżący element tablicy orderedItems jest przekazywany jako argument do funkcji zwrotnej. Ten argument nazwano item.
// Oto jak działa iteracja z forEach:

// W pierwszej iteracji item będzie równy pierwszemu elementowi tablicy orderedItems.
// W drugiej iteracji item będzie równy drugiemu elementowi tablicy orderedItems.
// I tak dalej, aż do ostatniego elementu tablicy.
// Każde wywołanie funkcji zwrotnej dodaje wartość item do totalPrice, co w efekcie daje sumę wszystkich elementów tablicy orderedItems.

// Oto jak działa iteracja z forEach:

// W pierwszej iteracji item będzie równy pierwszemu elementowi tablicy orderedItems.
// W drugiej iteracji item będzie równy drugiemu elementowi tablicy orderedItems.
// I tak dalej, aż do ostatniego elementu tablicy.
// Każde wywołanie funkcji zwrotnej dodaje wartość item do totalPrice, co w efekcie daje sumę wszystkich elementów tablicy orderedItems.

