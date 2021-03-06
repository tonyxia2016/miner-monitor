const Nicehash = require('./pool/nicehash');
const Miningpoolhub = require('./pool/miningpoolhub');
const Mpos = require('./pool/mpos');
const NodeCryptonotePool = require('./pool/node-cryptonote-pool');
const SnipaNodejsPool = require('./pool/snipa-nodejs-pool');
const DashboardApi = require('./custom/dashboard-api');
const BitcoinBalance = require('./balances/bitcoin-balance');
const CryptoidBalance = require('./balances/cryptoid-balance');
const CounterpartyBalance = require('./balances/counterparty-balance');
const EthereumBalance = require('./balances/ethereum-balance');
const BurstBalance = require('./balances/burst-balance');
const NicehashBalance = require('./balances/nicehash-balance');

function getClassForDashboardType(type) {
  switch(type) {
    case 'nicehash':
      return Nicehash;
    case 'miningpoolhub':
      return Miningpoolhub;
    case 'genericMPOS':
      return Mpos;
    case 'dashboard-api':
      return DashboardApi;
    case 'bitcoinBalance':
      return BitcoinBalance;
    case 'cryptoidBalance':
      return CryptoidBalance;
    case 'counterpartyBalance':
      return CounterpartyBalance;
    case 'ethBalance':
      return EthereumBalance;
    case 'burstBalance':
      return BurstBalance;
    case 'nicehashBalance':
      return NicehashBalance;
    case 'node-cryptonote-pool':
      return NodeCryptonotePool;
    case 'snipa-nodejs-pool':
      return SnipaNodejsPool;
    default:
      throw new Error(`No class matched '${type}'`);
  }
}

module.exports = {
  getClassForDashboardType,
};