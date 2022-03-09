const { getDeployFunc } = require('./deploy.base');

const main = async (contractArr) => {
	if (!contractArr && !contractArr?.length) {
		console.warn(`No contract deployed!`);
		process.exit(1);
	}

	const deployFunc = await getDeployFunc();
	for (const element of contractArr) {
		await deployFunc(element.name, element.params);
	}

	// parallel deploy
	// await Promise.all(contractArr.map((i) => deployFunc(i.name, i.params)));
};

const contractArr = [
	{
		name: 'MyContract',
		params: ['My Contract'],
	},
];

main(contractArr);
