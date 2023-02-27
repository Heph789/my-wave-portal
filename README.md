# Buildspace solidity project. Wave Portal

This is my implementation of the buildspace solidity [tutorial project](https://buildspace.so/p/build-solidity-web3-app).

It allows the user to post messages onto the blockchain if they are on the whitelist of addresses. Whitelisted addresses can add other addresses to the whitelist. There is a two minute cool-down on posting a message to prevent spam. There is also a 1/4 chance that the message poster receives .0001 ETH!

Here is the front-end (runs on Goerli): https://replit.com/@heph789/chaselb-gated-waveportal#src/App.jsx

Here is the demo video: 

Testnet contract address: 0x5ae6135d22E5f889C53ff86B4714Ac594473630b
Goerli contract address v2: 0x9618873D7b3eD19a3ceebBc40F631a7A7d0f0C91 (this one includes message capability)
Goerli contract address v3: 0x3f0A255240EEa6D3531543430c31D3AD04B47B8A (this one is payable)
v4 (30 sec cooldown): 0x75894709dd30F5a1A4224d38FE5Cc38660054F13 (this one has 30 second time limit and awards a jackpot to waves 25% chance)
v4 (2 minute cooldown): 0x94b4ed39dB639F6236c08E9Ad9Db7aF7647E6c81

