const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy({
      value: hre.ethers.utils.parseEther("0.1")
    });
    await waveContract.deployed();
    console.log("Contract addy:", waveContract.address);
    
    let contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log("Contract balance: ", hre.ethers.utils.formatEther(contractBalance));

    let waveCount;
    waveCount = await waveContract.getTotalWaves();
    console.log(waveCount.toNumber());

    /**
     * Let's send a few waves!
     */
    let waveTxn = await waveContract.wave("A message!");
    await waveTxn.wait(); // Wait for the transaction to be mined

    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log("Contract balance: ", hre.ethers.utils.formatEther(contractBalance));

    const [_, randomPerson] = await hre.ethers.getSigners();

    await waveContract.addToWhitelist(randomPerson.address);



    waveTxn = await waveContract.connect(randomPerson).wave("Another message!");
    await waveTxn.wait(); // Wait for the transaction to be mined

    try {
      // should produce an error to wait 15 minutes
      waveTxn = await waveContract.connect(randomPerson).wave("Another message!");
      await waveTxn.wait(); // Wait for the transaction to be mined

      waveTxn = await waveContract.connect(randomPerson).wave("Another message!");
      await waveTxn.wait(); // Wait for the transaction to be mined
    } catch (err) {
      console.log("Error works properly: ", err.message);
    }

    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);
  };
  
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();