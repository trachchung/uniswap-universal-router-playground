import "@nomiclabs/hardhat-ethers";
import dotenv from 'dotenv'
import { ethers } from "ethers";
dotenv.config()
// const provider = ethers.getDefaultProvider(process.env.FORK_URL || "https://eth-mainnet.public.blastapi.io")
// const blockNumber = provider.getBlockNumber()
export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
      chainId: 1,
      forking: {
        url: `${process.env.FORK_URL}`,
        blockNumber: 17961885,
      },
    },
  },
}
