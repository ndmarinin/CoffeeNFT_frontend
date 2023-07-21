const CONTRACT_NAME = "nft-mint-frontend.siberium.testnet";

function getConfig(env) {
  switch (env) {
    case "production":
    case "mainnet":
      return {
        networkId: "111111",
        nodeUrl: "https://rpc.main.siberium.net",
        contractName: CONTRACT_NAME,
        helperUrl: "https://helper.mainnet.siberium.net.ru",
        explorerUrl: "https://explorer.main.siberium.net.ru",
        walletUrl: "https://metamask.io",
      };
    case "development":
    case "testnet":
      return {
        networkId: "111000",
        nodeUrl: "https://rpc.test.siberium.net",
        contractName: CONTRACT_NAME,
        helperUrl: "https://helper.testnet.siberium.net",
        explorerUrl: "https://explorer.test.siberium.net",
        walletUrl: "https://metamask.io",
      };
    default:
      throw Error(
        `Unconfigured environment '${env}'. Can be configured in src/config.js.`
      );
  }
}

module.exports = getConfig;
