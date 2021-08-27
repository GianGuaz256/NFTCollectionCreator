async function main(){
    const create = require('./create');

    console.info('{START} The end: to be continued, maybe...')

    const numberFiles = process.env.COLLECTION_QUANTITY

    console.info('{INFO} Number = ', numberFiles)

    console.info('{INFO} Start minting collection')

    for(var i=1; i<=numberFiles; i++){
        await create.createScript(i);
    }

    console.info('{END} The end: to be continued, maybe...')
}
main().catch((e)=>console.log('{ERROR} ', e))