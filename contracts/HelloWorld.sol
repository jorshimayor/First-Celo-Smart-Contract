// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Define the smart contract
contract HelloWorld {
	// Declare a public string variable named "message"
	string public message;

	// Define a constructor that sets the initial message
	constructor(string memory initMessage) {
    	message = initMessage;
	}

	// Define a function that updates the message
	function updateMessage(string memory newMessage) public {
    	message = newMessage;
	}
}
