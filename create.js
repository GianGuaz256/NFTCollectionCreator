const path = require('path')
const { mintNewToken } = require('./minting')
const { pinFileToIPFS, pinJSONToIPFS} = require('./utils/ipfs')
const fs = require('fs')
require('dotenv').config()

const create = {}

create.createScript = async function(number){

    let pathToImage = path.join('./output');
    let file;

    try {
        if(fs.existsSync(`${pathToImage}/${number}.png`)) {
            console.info("{INFO} The file exists");
            file = fs.createReadStream(`${pathToImage}/${number}.png`)
        } else {
            console.info('{ERROR} No file found');
        }
    } catch (err) {
        console.error('{ERROR}', err);
    }
    
    if(file){
        //Salvare immagine sull'IPFS
        const imageHash = await pinFileToIPFS(file);
        console.info('{INFO} Image Hash =', imageHash)

        const uri = "https://gateway.pinata.cloud/ipfs/" + imageHash
    
        try {
            ipfsHash = await pinJSONToIPFS({
                name: process.env.COLLECTION_NAME + `_#${number}`,
                image: uri,
                description: `This is the #${number} of the ${process.env.COLLECTION_NAME}`
            });
            console.info('{INFO} IPFS Hash done')
        } catch (err) {
            console.info("{ERROR} Error Uploading files on IPFS", err);
        }

        console.info('{INFO} Started minting token...')    
        
        await mintNewToken(uri).then((value)=>{
            console.info('{SUCCESS} Minted new Token of the collection', process.env.COLLECTION_NAME)
        }).catch((err)=>{
            console.info('{ERROR} Error while minting')
        })
    }


}

module.exports = create;