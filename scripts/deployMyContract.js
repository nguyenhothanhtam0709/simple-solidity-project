async function main() {
	try {
		const MyContract = await ethers.getContractFactory('MyContract');
		const myContract = await MyContract.deploy('My Contract');

		console.log(`My Contract deployed to: ${myContract.address}`);
	} catch (error) {
		console.error(`Error when deploy My Contract: ${error}`);
		process.exit(1);
	}
	process.exit(0);
}

main();
