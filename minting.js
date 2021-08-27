/**
 * Minting Controllers to mint ERC-721 & ERC-1155
 * on Polygon RPC 
 */
const Web3 = require("web3");
const ERC721ABI = require("./config/erc721.json");
const ERC1155ABI = require("./config/erc1155.json");
const ERC721V1ABI = require("./config/erc721_v1.json");
const ERC1155V1ABI = require("./config/erc1155_v1.json");
const EDENFTABI = require("./config/EdeNFT.json")
require('dotenv').config()

var web3 = new Web3("https://rpc-mainnet.maticvigil.com");
var account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);

web3.eth.accounts.wallet.add(account);

const ERC721 = new web3.eth.Contract(
ERC721ABI,
"0x36a8377E2bB3ec7D6b0F1675E243E542eb6A4764"
);
const ERC1155 = new web3.eth.Contract(
ERC1155ABI,
"0x2AFa1b13D2dF7Da8C7942e7Dc14432d4fFD7e459"
);
const ERC721_v1 = new web3.eth.Contract(
ERC721V1ABI,
"0x72B6Dc1003E154ac71c76D3795A3829CfD5e33b9"
);
const ERC1155_v1 = new web3.eth.Contract(
ERC1155V1ABI,
"0xfd1dBD4114550A867cA46049C346B6cD452ec919"
);

const edeNFT = new web3.eth.Contract(
  EDENFTABI,
  "0x6dCA945479B9795D4Af165fF519a9EEc9F366A90"
)

const encodedParams =
  "0x485f0f700000000000000000000000000000000000000000000000000000000000ad253b0000000000000000000000\
00000000000000000000000000000000000013081b00000000000000000000000000000000000000000000000000000000000000600000000000000\
000000000000000000000000000000000000000000000000008676976656e55524c000000000000000000000000000000000000000000000000";

let collection, addresses;

exports.addTokenDetails = async (req, res) => {
    try {
        const {
          minter,
          name,
          description,
          image,
          external_url,
          uri,
          type,
          count,
        } = req.body;
        const newDocument = {
          minter: minter,
          name: name,
          description: description,
          image: image,
          external_url: external_url,
          uri: uri,
          type: type, // ERC721 or ERC1155
          count: count,
          timestamp: Date.now(),
        };
        const result = await collection.insertOne(newDocument);
        res.send(result.data);
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
}

exports.mintNewToken = async (uri) => {

  try {

    const minter = account.address

    let status = await edeNFT.methods.mintNewToken(minter, uri).send({ from: account.address, gas: 500000 });
        
    return Promise.resolve()
  
  } catch(err){
    
    console.log(err);
    
    return Promise.reject()
  }
}