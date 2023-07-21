const CONTRACT_NAME = "nft-mint-frontend.siberium.testnet";

function getConfig(env) {
  switch (env) {
    case "production":
    case "mainnet":
      return {
        networkId: "111111",
        nodeUrl: "https://rpc.main.siberium.net",
        contractName: CONTRACT_NAME,
        helperUrl: "https://helper.mainnet.metamask.io",
      };
    case "development":
    case "testnet":
      return {
        networkId: "111000",
        nodeUrl: "https://rpc.test.siberium.net",
        contractName: CONTRACT_NAME,
        helperUrl: "https://helper.testnet.metamask.io",
      };
    default:
      throw Error(
        `Unconfigured environment '${env}'. Can be configured in src/config.js.`
      );
  }
}

module.exports = getConfig;
