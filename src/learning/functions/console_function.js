function logText() {
  console.log("2025-07-14 16:55:00 - Provolal/a jsi funkci");
}

function logTextParam(textParameter) {
  console.log("2025-07-14 16:55:00 - " + textParameter);
}

function getText() {
  return "Vrácený text";
  // * return nám ukončuje funkci, další kroky se již neprovedou
  console.log("Toto se nevypíše");
}

logText();
logText();
logText();
logTextParam("Jsem master JavaScriptu");
logTextParam("Už bude konec! :)");

const givenText = getText();
console.log("Toto se nám vrátilo z funkce: " + givenText);
