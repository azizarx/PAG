const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const {prefix} = require('./config.json');
client.login(process.env.TOKEN);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);    
  });
 client.on('message', msg =>{
   if(msg.content[0]== prefix){
    let command = msg.content.split(' ')[0].slice(1);
    switch(command){
    case'ping':
      msg.channel.send('pong');
      break;
    }
  }
  });