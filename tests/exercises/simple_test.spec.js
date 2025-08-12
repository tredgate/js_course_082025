import { expect } from "chai";

describe("Cvičení: Jednoduchý assert", () => {
  it("Petr = Petr", () => {
    expect("Petr").to.eq("Petr");
  });
});
