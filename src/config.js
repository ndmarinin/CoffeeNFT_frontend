const CONTRACT_NAME = "nft-mint-frontend.siberium.testnet";

function getConfig(env) {
  switch (env) {
    case "production":
    case "mainnet":
      return {
        networkId: "111111",
        nodeUrl: "https://rpc.main.siberium.net",
        contractName: CONTRACT_NAME,
        explorerUrl: "https://explorer.main.siberium.net.ru",
        helperUrl: "https://helper.mainnet.near.org",
        walletUrl: "https://wallet.mainnet.siberium.net.ru",
      };
    case "development":
    case "testnet":
      return {
        networkId: "111000",
        nodeUrl: "https://rpc.test.siberium.net",
        contractName: CONTRACT_NAME,
        explorerUrl: "https://explorer.test.siberium.net",
        helperUrl: "https://helper.testnet.near.org",
        walletUrl: "https://wallet.testnet.siberium.net",
      };
    default:
      throw Error(
        `Unconfigured environment '${env}'. Can be configured in src/config.js.`
      );
  }
}

module.exports = getConfig;
