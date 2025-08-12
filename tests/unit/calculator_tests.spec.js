// calculator_tests.spec.js
// tests/unit
import { expect } from "chai";
import { Calculator } from "../../src/calculator/calculator.js";

describe("Testy kalkulačky", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
    console.log("beforeEach: běžím před každým testem");
  });

  before(() => {
    console.log("before: běžím před prvním testem");
  });

  afterEach(() => {
    console.log("afterEach: běžím po každém testu.");
  });

  after(() => {
    console.log("after: běžím po posledním testu");
  });

  it("Calculator.add(1, 1) to equal 2", () => {
    const actualResult = calc.add(1, 1);
    expect(actualResult).to.equal(2);
  });

  it("Calculator.subtract(2, 1) to equal 1", () => {
    const actualResult = calc.subtract(2, 1);
    expect(actualResult).to.equal(1);
  });

  it("Calculator.multiply(3, 7) to equal 21", () => {
    const actualResult = calc.multiply(3, 7);
    expect(actualResult).to.equal(21);
  });

  it("Calculator.divide(25, 5) to equal 5", () => {
    const actualResult = calc.divide(25, 5);
    expect(actualResult).to.equal(5);
  });
});
