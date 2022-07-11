require("dotenv").config();
require("hardhat-deploy")
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("hardhat-deploy-ethers");

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
const KOVAN_RPC_URL =
process.env.KOVAN_RPC_URL ||
    "https://mainnet.infura.io/v3/fdb9960fee154d058a8b211b3cb550cd"
// const RINKEBY_RPC_URL =
//     process.env.RINKEBY_RPC_URL ||
//     "https://mainnet.infura.io/v3/fdb9960fee154d058a8b211b3cb550cd"
 const PRIVATE_KEY =
    process.env.PRIVATE_KEY ||
    "0x11ee3108a03081fe260ecdc106554d09d9d1209bcafd46942b10e02943effc4a"
 const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  
  defaultNetwork:"hardhat",
  networks:{
    hardhat:{
      chainId:31337,
      blockConfirmations:1,
    },
    rinkeby:{
      url: "https://rinkeby.infura.io/v3/92695d013ef64f9abdbcdfb1f7b951e8",
            accounts: [PRIVATE_KEY],
            
            chainId: 4,
            blockConfirmations: 6,
    },
  },
  solidity: "0.8.7",
  namedAccounts:{
    deployer:{
      default:0,
    },
    etherscan: {
      apiKey: ETHERSCAN_API_KEY,
  },
    player:{
      default:1,
    },
  }
};
