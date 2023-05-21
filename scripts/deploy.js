// File: scripts/deploy.js

// Define an asynchronous function for deployment
async function main() {
  // Get a contract factory for the HelloWorld contract
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  // Deploy the HelloWorld contract with the initial message
  const helloWorld = await HelloWorld.deploy("Hello, Celo!");

  // Wait for the transaction to be mined
  await helloWorld.deployed();

  // Log the address of the deployed contract
  console.log("HelloWorld deployed to:", helloWorld.address);
}

// Call the main function and handle errors
main()
  .then(() => process.exit(0)) // On success, exit with code 0
  .catch(error => { // On error...
	console.error(error); // Log the error
	process.exit(1); // Exit with code 1
  });
