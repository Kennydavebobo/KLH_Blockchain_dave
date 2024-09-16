const { expect } = require("chai");

describe("Greeting", function () {
  let greeting;
  let addr1;

  beforeEach(async function () {
    const Greeting = await ethers.getContractFactory("Greeting");
    greeting = await Greeting.deploy();
    await greeting.deployed();

    [addr1] = await ethers.getSigners();
  });

  it("should greet with 'Hello Anon' by default", async function () {
    expect(await greeting.greet()).to.equal("Hello Anon");
  });

  it("should greet with the set name", async function () {
    await greeting.connect(addr1).setName("Alice");
    expect(await greeting.connect(addr1).greet()).to.equal("Hello Alice");
  });
});
