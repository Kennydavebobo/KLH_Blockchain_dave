require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networt: {
    sepolia: {
      url: "https://sepolia.drpc.org",
      accounts: ["0x${PRIVATE_KEY}"],
    },
  },
};
