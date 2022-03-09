require('@nomiclabs/hardhat-waffle');
require('solidity-coverage');
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: '0.8.12',
	networks: {
		local: {
			url: 'http://127.0.0.1:8545/',
			accounts: [
				'0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
			],
		},
		rinkeby: {
			url: `${process.env.RINKEBY_INFURA_URL}`,
			accounts: [`${process.env.RINKEBY_DEPLOY_ACCOUNT}`],
		},
	},
};
