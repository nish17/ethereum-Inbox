const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

class Car {
  park() {
    return "parking";
  }
  drive() {
    return "driving";
  }
}

describe("testing Car class", () => {
  it("should park the Car", () => {
    const car = new Car();
    assert.equal(car.park(), "parking");
  });
  it("should drive the Car", () => {
    const car = new Car();
    assert.equal(car.drive(), "driving");
  });
});
