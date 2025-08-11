const actualAge = "dvacet";
const drinkingAgeLimit = 18;
const fullName = "Josef Nový";

if (actualAge >= drinkingAgeLimit) {
  console.log(`${fullName} již může pít alkohol.`); // ? Pravý alt + ý (pouze Win CZ klávesnice, na Mac: Shift + klávesa vedle enteru), dolar $: pravý alt + ú (Mac: Option + č), složené závorky {}: pravý alt + B, pravý alt + N
} else if (actualAge >= 0) {
  // * Bonus: skloňování
  const ageDiff = drinkingAgeLimit - actualAge;
  let ageWord;
  if (ageDiff == 1) {
    ageWord = "rok";
  } else if (ageDiff < 4) {
    ageWord = "roky";
  } else {
    ageWord = "let";
  }

  console.log(
    `${fullName} ještě nemůže pít alkohol. Chybí mu ještě ${
      drinkingAgeLimit - actualAge
    } ${ageWord}.`
  );
} else {
  console.log("CHYBA: Neplatný věk");
}
