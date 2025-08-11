const a = 6;
const b = 10;
const operation = "add";
let result;

switch (operation) {
  case "add":
    result = a + b;
    break;
  case "subtract":
    result = a - b;
    break;
  case "multiply":
    result = a * b;
    break;
  case "divide":
    result = a / b;
    break;
  default:
    result = "CHYBA: nevalidní operace"; // ? Jen uloží do proměnné result text, neukončí program
    throw new Error("CHYBA: nevalidní operace"); // ? Vyhodí chybu (ukončí program)
}

console.log(`Výsledek operace: ${operation} a čísel: ${a}, ${b} je: ${result}`);
