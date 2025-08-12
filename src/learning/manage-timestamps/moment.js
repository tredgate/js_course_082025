// moment.js
// src/learning/manage-timestamps

import moment from "moment";

const currentTimestamp = moment();
console.log("currentTimestamp: " + currentTimestamp);

console.log("Naformátovaný (výchozí) timestamp: " + currentTimestamp.format());

console.log(
  "Datum a čas ve formátu: 15:18 12.8.2025: " +
    currentTimestamp.format("HH:mm D.M.YYYY")
);

// Přidání 5 dnů ke dnešku:
console.log("Za 5 dnů: " + currentTimestamp.add(5, "days").format("D.M.YYYY"));

// Odebrání 14 dnů ode dneška
console.log(
  "Před 14 dny: " + currentTimestamp.subtract(14, "days").format("D.M.YYYY")
);

const czechFormat = moment().locale("cs").format("LLLL");
console.log("Český timestamp: " + czechFormat);
