require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture story rifle pave purpose gesture hat army gesture'; 
let testAccounts = [
"0x191e050fed94606f564aa1bfd58747b7b070b6af81b31258ae5961477d42d97d",
"0xde2e23512c1637b0edeac608c85a4a1c92e34fdc99566efd1931b6a0b201968d",
"0x8f2944e7740417566954c0359d06168ab30491d520015c286381ebd4e143d481",
"0xcf8ae4a5f0fec761ef29483c89d8dac3831201d7a3f18a4fd4c99e475b9ef016",
"0x5c2d67c31421d22daa3f9e4ad5455892ad1e688658789de4e27aa0eb8f87f194",
"0x6587ee3d16256c62262439e49853834d9040ed2d9b56ce33b49ad846ee2ef22a",
"0x179d6cda18c0e1c6f2a7b17f6f3051fa6511d80c31aa56c190193a7d5332591e",
"0x88529accd9e1d4bd1cf11de018294e07afc652175578500e37955c1e71fe7917",
"0x97badaf710e8cf976be3286a3e7ce8edf2687a2f90255d33afcd2cca5861ff2a",
"0xc7c9bf48e4a3ecac3f383f5f2c3d3fb59e83994db94e9b665cc33b3824dd543b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

