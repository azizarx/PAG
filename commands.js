const {prefix} = require('./config.json');
module.exports = (client,aliases,callback)=>{
    client.on('message',msg =>{
      const {content} = msg;
    });
}