// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Greeting {
    mapping(address => string) private names;

    // Function to set the user's name
    function setName(string memory _name) public {
        names[msg.sender] = _name;
    }

    // Function to greet the user
    function greet() public view returns (string memory) {
        if (bytes(names[msg.sender]).length == 0) {
            return "Hello Anon";
        } else {
            return string(abi.encodePacked("Hello ", names[msg.sender]));
        }
    }
}
