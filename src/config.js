export const CONFIG = {
	// Note: Class A endpoints (NFTs) are not supported on Polygon, but they are on Arbitrum
	TEMPLATE: {
		// Kovan contract address - https://kovan.etherscan.io/address/0xaeca10e3d2db048db77d8c3f86a9b013b0741ba2
		collection_address: '0xaeca10e3d2db048db77d8c3f86a9b013b0741ba2',
		block_chain_id: 42,

		// Polygon Testnet (Mumbai) address - https://mumbai.polygonscan.com/address/0xBd0136694e9382127602abFa5AA0679752eaD313
		// collection_address: '0xBd0136694e9382127602abFa5AA0679752eaD313',
		// block_chain_id: 80001,

		// Arbitrum Testnet (Rinkeby) address -
		// collection_address: ,
		// block_chain_id: 421611,

		// Set the default title of your dashboard. If found, this template uses the NFT Collection name for the title.
		title: 'PolyEchoNFT Collection',

		// Display the floor price chart
		timeseries_chart: true,

		// Set the banner image to PolyEchoNFT Default Image from NFT.storage
		banner_picture:
			'https://bafkreia7jo3bjr2mirr5h2okf5cjsgg6zkz7znhdboyikchoe6btqyy32u.ipfs.dweb.link/',
	},

	// Supported networks
	FILTER_OPTIONS: [
		{ name: 'Ethereum', value: 1 },
		{ name: 'Kovan', value: 42 },
		{ name: 'Rinkeby', value: 4 },
		{ name: 'Polygon', value: 137 },
		{ name: 'Polygon Mumbai', value: 80001 },
		{ name: 'Arbitrum', value: 42161 },
		{ name: 'Arbitrum Rinkeby', value: 421611 },
	],
	// Supported timeframes
	GRAPH_OPTIONS: [
		{ name: '7 Days', value: 7 },
		{ name: '1 Month', value: 30 },
		{ name: '3 Month', value: 90 },
		{ name: '1 Year', value: 365 },
		{ name: 'All time', value: 0 },
	],
}
