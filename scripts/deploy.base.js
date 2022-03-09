const hardhat = require('hardhat');

const simpleDeployFunc = async (contractName, contractParams) => {
	try {
		const [deployer] = await ethers.getSigners(); // get accounts

		console.log(
			`Deploying contract ${contractName} with the account ${deployer.address}`
		);

		const Factory = await hardhat.ethers.getContractFactory(contractName); // Getting the Contract
		const factory = await Factory.deploy(...contractParams); //deploying the contract

		await factory.deployed(); // waiting for the contract to be deployed

		console.log(`contract ${contractName} deployed to ${factory.address}`);
	} catch (error) {
		const str = JSON.stringify(error);
		console.error(`Error when deploy script ${contractName}: ${str}`);
	}
};

const getDeployFunc = async () => {
	try {
		const [deployer] = await ethers.getSigners(); // get accounts
		const deployFunc = async (contractName, contractParams) => {
			try {
				console.log(
					`Deploying contract ${contractName} with the account ${deployer.address}`
				);

				const Factory = await hardhat.ethers.getContractFactory(contractName); // Getting the Contract
				const factory = await Factory.deploy(...contractParams); //deploying the contract

				await factory.deployed(); // waiting for the contract to be deployed

				console.log(`contract ${contractName} deployed to ${factory.address}`);
			} catch (error) {
				const str = JSON.stringify(error);
				console.error(`Error when deploy script ${contractName}: ${str}`);
			}
		};
		return deployFunc;
	} catch (error) {
		const str = JSON.stringify(error);
		console.error(`Error when get deploy function: ${str}`);
		process.exit(1);
	}
};

module.exports = {
	simpleDeployFunc,
	getDeployFunc,
};
