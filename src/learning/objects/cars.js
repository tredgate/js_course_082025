import { CarBlueprint } from "./car_blueprints.js";

const dieselCar = new CarBlueprint(
  "Červená",
  "1.6 TDI",
  "Diesel",
  "Diesel auto"
);
dieselCar.logCarProperties();

const petrolCar = new CarBlueprint("Zelená", "1.0 TSI", "Benzín", "Ropák");
petrolCar.logCarProperties();
dieselCar.logCarProperties(); // * Vlastnosti dieselCar i petrolCar jsou nezávislé na sobě

const electricCar = new CarBlueprint("Modrá", "EV 160kW", "Elektřina", "Blesk");
electricCar.logCarProperties();
electricCar.repaint("Stříbrná");
electricCar.logCarProperties();
petrolCar.logCarProperties(); // * Petrol ani DieselCar nebudou přebarvené (fungují nezávisle na sobě)
dieselCar.logCarProperties();

const petrolCarColor = petrolCar.getColor();
console.log("Barva: " + petrolCarColor);

const anothercar = dieselCar;
anothercar.repaint("Růžová");
// ? Jakou barvu bude mít dieselCar?
dieselCar.logCarProperties(); // * Bude mít růžovou barvu, anotherCar a dieselCar je ten samý objekt
