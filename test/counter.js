const { expect } = require("chai");

describe("Counter", function () {
  let counter;

  beforeEach(async function () {
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.deployed();
  });

  it("should initialize with a count of 0", async function () {
    expect(await counter.getCount()).to.equal(0);
  });

  it("should increase the count", async function () {
    await counter.increase();
    expect(await counter.getCount()).to.equal(1);
  });

  it("should decrease the count", async function () {
    await counter.increase(); // First increase to test decrease
    await counter.decrease();
    expect(await counter.getCount()).to.equal(0);
  });
});
