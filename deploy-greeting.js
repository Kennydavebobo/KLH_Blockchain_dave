async function main() {
  const Greeting = await ethers.getContractFactory("Greeting");
  const greeting = await Greeting.deploy();

  await greeting.deployed();

  console.log("Greeting deployed to:", greeting.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
