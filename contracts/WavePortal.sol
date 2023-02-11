// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    mapping(address => bool) whitelist;

    constructor() {
        console.log("This contract only lets whitelisted addresses wave.");
        whitelist[msg.sender] = true;
    }

    function addToWhitelist(address toAdd) public {
        require(whitelist[msg.sender] == true, "You aren't on the whitelist!");
        whitelist[toAdd] = true;
        console.log("'%s' has been added to whitelist by '%s'!", toAdd, msg.sender);
    }

    function wave() public {
        require(whitelist[msg.sender] == true, "You aren't on the whitelist!");
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}