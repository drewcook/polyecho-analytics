export const CONFIG = {
	TEMPLATE: {
		// 1. Set your NFT collection contract address
		collection_address: '0xBd0136694e9382127602abFa5AA0679752eaD313',

		// 2. Set your blockchain chain ID where your NFT collection contract address is deployed (see below for value options)
		block_chain_id: '80001',

		// 3. Set the default title of your dashboard. If found, this template uses the NFT Collection name for the title.
		title: 'PolyEchoNFT Collection',

		// 4. (Optional) Display the floor price chart
		timeseries_chart: true,

		// 5. (Optional) Set your banner image
		// PolyEchoNFT Default Image
		banner_picture:
			'https://bafkreia7jo3bjr2mirr5h2okf5cjsgg6zkz7znhdboyikchoe6btqyy32u.ipfs.dweb.link/',
	},

	// Supported networks - just for your reference
	FILTER_OPTIONS: [
		{ name: 'Ethereum', value: 1 },
		{ name: 'Polygon', value: 137 },
		{ name: 'Polygon Mumbai', value: 80001 },
		{ name: 'Avalanche', value: 43114 },
		{ name: 'Fantom', value: 250 },
		{ name: 'Moonbeam', value: 1284 },
		{ name: 'Moonriver', value: 1285 },
		{ name: 'Arbitrum', value: 42161 },
		{ name: 'Shiden', value: 336 },
	],
	// Supported timeframes - just for your reference
	GRAPH_OPTIONS: [
		{ name: '7 Days', value: 7 },
		{ name: '1 Month', value: 30 },
		{ name: '3 Month', value: 90 },
		{ name: '1 Year', value: 365 },
		{ name: 'All time', value: 0 },
	],
}
