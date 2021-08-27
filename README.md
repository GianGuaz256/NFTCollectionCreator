<h1 align="center">
	NFT Collection Creator
</h1>

<p align="center">
  <a href="" target="blank"><img src="https://www.larvalabs.com/public/images/product/cryptopunks/punk-variety-2x.png" width="500" alt="Crypto Punk" /></a>
</p>

<p align="center" style="margin: 10px">A script for creating random images from layers and deploying them on the <a href="https://polygon.technology/">Polygon Network</a> at a very low cost and super fast. Sell your art in minutes on <a href="https://opensea.io/">Opensea</a> and earn ETH.</p>

<h2>
	Installation
</h2>

```bash
$ git clone https://github.com/GianGuaz256/NFTCollectionCreator.git
$ cd ./NFTCollectionCreator
$ npm install
```

<h2>
	Create .env file
</h2>

Create an **_.env_** file and add the following parameter in order to setup the script:

`PORT=8000`
`COLLECTION_NAME=<Your collection name>`
`COLLECTION_QUANTITY=<Number of Tokens>`
`PINATA_API_KEY=<Your Pinata Api Key>`
`PINATA_SECRET_API_KEY=<Your Pinata Secret Api Key>`
`PRIVATE_KEY=<Your Ethereum Private Key>`

<h2>
	Other Configuration & Services
</h2>

<h4 style="">Add Polygon</h4>

First of all you should add the <a href="https://polygon.technology/">Polygon Network</a> into your Wallet (if you use Metamask use <a href="https://docs.matic.network/docs/develop/metamask/config-polygon-on-metamask/">this guide</a>). Then send to that address on the Polygon Network some MATIC tokens in order to pay the network fee for deploying the ERC-721 Contract.

<h4 style="">Subscribe to Pinata</h4>

Second, you should subscribe to <a href="https://www.pinata.cloud/">Pinata</a> and your keys. Pinata is a cloud service that help you to interact with the <a href="https://ipfs.io/">IPFS</a> that is a protocol to store your NFTs metadata in a decentralized and secure way. Once you have created a free account you now have 1GB of space for your NFTs, you can click on your Profile and select _Api key_.

<h4 style="">Get your Ethereum Private Key</h4>

Now lets find your Ethereum Private Key. If you use Metamask click on the three vertical dots near your _Account_ and select _Account Detail_ and then _Export Private Key_. 

**_DISCLAIMER: Pay attention when you export your private key, if someone has access to it they can steal all your funds._**

<h2>
	Add layers
</h2>

The script creates random images from so-called "layers". Before thinking about the style of your collection you have to think about the way it will be defined and start creating the layers that compose it.

Layers are generally formatted as 100x100 .png images with a specific piece of our images inside. The layers will be placed one on top of the other depending on the information you find in the configuration file.

Once you have added the layers in the input folder you are ready to create the random images by typing the command:

```bash
$ npm run create-image
```

which will populate the output folder.

<h2>
	Create NFTs
</h2>

Once you have created the images that are part of your collection, you are ready to deploy and create the actual tokens. In the **_.env_** file you have seen that you can change the parameters of the tokens, such as the number of tokens and the name of the collection. 

Once you've set the parameters, just type the command:

```bash
$ npm run create-token
```

and wait for the process to complete. The logs were created specifically to provide all the most relevant information during the token creation process. Once created you can see directly on <a href="https://opensea.io/">Opensea</a> the set of tokens that now belong to your address.

<h2>
	Stay in touch
</h2>

Author: Guazzo Gianmarco
- <a href="https://www.linkedin.com/in/gianmarco-guazzo/">LinkedIn</a>
- <a href="https://www.blockacademy.it/">Website</a>
- <a href="https://guazzogianmarco.medium.com/">Medium</a>

**_Thanks to @HashLips for the generative-art-opensource project with the script to create the random images. If you want to look at the source code check <a href="https://github.com/HashLips/generative-art-opensource">this</a> out._**