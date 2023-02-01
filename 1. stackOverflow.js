function infiniteFunction() {
    infiniteFunction();
}

infiniteFunction();

// Zastosowano rekurencję.
// Ponieważ funkcja wywołuje samą siebie, jednak nie został określony warunek, 
// według którego funkcja rzerwie działanie.
// Dlatego funkcja próbuje wykonywać sie w nieskończoność, do momentu zapełnienia Call Stacka.
// Z tego powodu Node.js wyrzuca błąd stack overflow.
