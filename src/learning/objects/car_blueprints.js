export class CarBlueprint {
  constructor(color, engine, fuel, carName) {
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.carName = carName;
    this.wheels = 4; // ? Hardcode hodnota
    console.log(
      `Auto "${carName}" bylo vyrobeno s vlastnostmi: \n\t - motor: ${engine} \n\t - typ paliva: ${fuel}\n\t barva: ${color} \n\t počet kol: ${this.wheels}`
    );
    console.log(`Auto "${this.carName}" je:
          - Připravené
          - Vhodné do provozu`);
    this.addDivider();
  }

  logCarProperties() {
    console.log(
      `Informace o autě: ${this.carName} \n\tbarva: ${this.color},\n\tmotor:${this.engine},\n\tpalivo: ${this.fuel}, \n\tpočet kol: ${this.wheels}`
    );
    this.addDivider();
  }

  addDivider() {
    console.log("-----------------------");
  }

  repaint(newColor) {
    const oldColor = this.color;
    this.color = newColor;
    console.log(
      `Auto ${this.carName} bylo přebarveno z "${oldColor}" na "${this.color}"`
    );
  }

  getColor() {
    return this.color;
  }
}
