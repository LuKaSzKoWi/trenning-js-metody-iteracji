// ZADANIE #1

// Dokonaj refaktoryzacji funkcji calculateTotalPrice(), aby była zadeklarowana jako funkcja strzałkowa.

// Zadeklarowana została zmienna calculateTotalPrice
// Zmiennej calculateTotalPrice przypisana została funkcja strzałkowa z parametrami (quantity, pricePerItem)
// Wywołanie calculateTotalPrice(5, 100) zwraca 500
// Wywołanie calculateTotalPrice(8, 60) zwraca 480
// Wywołanie calculateTotalPrice(3, 400) zwraca 1200
// Wywołanie funkcji z losowymi, ale poprawnymi argumentami zwraca poprawną wartość

// Old

function calculateTotalPrice(quantity, pricePerItem) {
  return quantity * pricePerItem;
}

// New

const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
}


// ZADANIE #2

// Dokonaj refaktoryzacji funkcji calculateTotalPrice(), aby używała niejawnego zwracania.

// Zadeklarowana została zmienna calculateTotalPrice
// Zmiennej calculateTotalPrice przypisana została funkcja strzałkowa z parametrami (quantity, pricePerItem)
// Funkcja używa niejawnego zwracania
// Wywołanie calculateTotalPrice(5, 100) zwraca 500
// Wywołanie calculateTotalPrice(8, 60) zwraca 480
// Wywołanie calculateTotalPrice(3, 400) zwraca 1200
// Wywołanie funkcji z losowymi, ale poprawnymi argumentami zwraca poprawną wartość

// Old

const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
}

// New

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;


// ZADANIA #3

// Dokonaj refaktoryzacji funkcji calculateTotalPrice(orderedItems), zastępując jej deklarację funkcją strzałkową.
// Zastąp również funkcję callback przekazywaną do metody forEach() funkcją strzałkową.

// Old

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  return totalPrice;
}


// New
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}



  
