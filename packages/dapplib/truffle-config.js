require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strong radar soap code inside light army genuine'; 
let testAccounts = [
"0xd27873df6c0e3d668e2ce07583e1a400e2245d6a04bf75adea932b39296d2874",
"0x9f01e8581560b6649ceb5ccb625dafb75021147fa9bf5682782a79cf89e680ad",
"0x44649a6c757716b7f8c71ccdb6cbd54eacd70a818d86bc9071d20d2552cadb1d",
"0x902c18465d8e69412f0b81c2bca71fe7350bd081e79b1e397006a2a18df79e99",
"0x65b9db27266ab2c36f8b109f4aa969f870623885effc4c79bc75a6467d40e993",
"0x286324496e55635e800d4042ac13a851ea7881560d1420f89716f91ca9fb8ed5",
"0xd7da923ea9e3e0d313b35f4ca70a3e6ed0fb34665b6ab5ca6f583f6733f1ac35",
"0x6293b019657bb0fd0ac7d4f1a6fd979c796295bce8a3ff87c9a64fb63f1958b9",
"0x0e9271ebc1cb1a13015e137a68acf30829f0a20ab09f03f01747b7f2174bb330",
"0xffa4b13de523ff9bfd5195c33e4eae3322c8c2b22977324ce1e371787a03944c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

