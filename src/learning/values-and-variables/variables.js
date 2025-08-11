let firstName = "Petr";
// ! "Petr" = let firstName; // Toto není možné!

console.log(firstName);

let lastName; // ? Deklarace proměnné, hodnota: undefined
lastName = "Fifka"; // ? Inicializace proměnné, nastavuji hodnotu

console.log(lastName);

firstName = "Alžběta";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

firstName = "Jiří";

console.log(firstName);

// * Proměnná var
var city = "Praha";
var city = "Brno"; // ! Redeklarace proměnné - možné přepsání původní proměnné bez toho, aniž bychom o tom věděli - přicházíme o data

{
  var river = "Labe";
}
console.log(river); // ! Proměnná var se deklaruje pro celý modul (soubor), můžu použít i mimo blok -> může způsobit problémy s duplicitou a přepisováním proměnných - ztráta dat

// * Proměnná let
{
  let country = "Česko";
  console.log(country);
}
// console.log(country); // ! Nemůžu použít proměnnou let mimo blok kódu

// * Proměnná const
const mountain = "Sněžka";
// mountain = "Praděd"; // ! Nemůžu měnit const proměnnou
// const tree; // ! Nemůžu jen deklarovat, vždy musím i inicializovat

/*
Více 
řádková
poznámka
*/
