'use client';

import { EthersAdapter, SafeAccountConfig, SafeFactory } from '@safe-global/protocol-kit';
import { ethers } from 'ethers';
import { useCallback, useState } from 'react';

declare global {
	interface Window {
		ethereum: any;
	}
}

export default function AuthPage() {
	const [ethAdapter, setEthAdapter] = useState<EthersAdapter>();
	const [safeWallet, setSafeWallet] = useState<string>();

	const handleConnectMetamask = useCallback(async () => {
		const provider = new ethers.providers.Web3Provider(window.ethereum);

		await provider.send('eth_requestAccounts', []);

		let signer = provider.getSigner();

		if ((await signer.getChainId()) !== 5) {
			await provider.send('wallet_switchEthereumChain', [{ chainId: '0x5' }]);

			await provider.send('eth_requestAccounts', []);

			signer = provider.getSigner();
		}

		setEthAdapter(
			new EthersAdapter({
				ethers,
				signerOrProvider: signer,
			})
		);
	}, []);

	const handleCreateSafeWallet = useCallback(async () => {
		if (!ethAdapter) return alert('NO ETH ADAPTER');

		const safeFactory = await SafeFactory.create({ ethAdapter: ethAdapter });

		const safeAccountConfig: SafeAccountConfig = {
			owners: [(await ethAdapter.getSignerAddress()) ?? ''],
			threshold: 1,
		};

		const safeSdkOwner1 = await safeFactory.deploySafe({ safeAccountConfig });

		const safeAddress = await safeSdkOwner1.getAddress();

		console.log('Your Safe has been deployed:');
		console.log(`https://goerli.etherscan.io/address/${safeAddress}`);
		console.log(`https://app.safe.global/gor:${safeAddress}`);

		setSafeWallet(safeAddress);
	}, [ethAdapter]);

	return (
		<h1>
			{!ethAdapter && <button onClick={handleConnectMetamask}>Connect Metamask</button>}
			{!!ethAdapter && !safeWallet && <button onClick={handleCreateSafeWallet}>Create Safe Wallet</button>}
			{!!ethAdapter && !!safeWallet && <h1>Safe Wallet Created at {safeWallet}</h1>}
		</h1>
	);
}
