const actualPoints = 70;
const absolventLimitPoints = 75;
const studentName = "Martin Novák";

if (actualPoints >= absolventLimitPoints) {
  console.log(
    `${studentName} prospěl s ${actualPoints} body. Minimum bylo: ${absolventLimitPoints} bodů`
  );
} else {
  console.log(
    `${studentName} neprospěl s ${actualPoints} body. Minimum bylo: ${absolventLimitPoints} bodů, chybělo mu ${
      absolventLimitPoints - actualPoints
    } bodů`
  );
}
