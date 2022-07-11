const { network,deployments,getNamedAccounts,ethers } = require("hardhat")
const {developmentChains}=require("../helper-hardhat-config")

const BASE_FEE=ethers.utils.parseEther("0.25")//0.25 is the premium. It cost 0.25 link per request
//the reason it  costs 0.25 link per request versus the priceFeed didn't cost anything is because,
//each of the priceFeed being sponsored by a group of protocols who are paying for all these request,
//since there is no sponsor for BASE_FEE, we are thee only one requesting for the randomness, we get to be the ones ,
// to actually sponsor getting this random number
const GAS_PRICE_LINK =1e9//1000000000//calculated based on the gas price of the chain
module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const args=[BASE_FEE,GAS_PRICE_LINK]
  if (developmentChains.includes(network.name)) {
    log("Local network detected!")
  }
  //deploy a mock vrfCoordinator..
  await deploy("VRFCoordinatorV2Mock",{
     from:deployer,
     log:true,
     args:args,
  })
  log("Mocks deployed")
  log("-------------------------")
}
module.exports.tags=["all","mocks"]
