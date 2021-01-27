const {prefix} = require('./config.json');
let ping = require('./commands/ping');
let meme = require('./commands/meme');
let commands = {ping,meme};
module.exports = async (msg) =>{
    let args = msg.content.split(" ")
    let command = args.shift()
    if (command.charAt(0)==prefix){
        command = command.substring(1).toLowerCase()
        commands[command](msg,args)
}}