const Discord = require('discord.js');
const client = new Discord.Client();
const api = require('imageapi.js');
require('dotenv').config();
const {prefix} = require('./config.json');
client.login(process.env.TOKEN);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);    
  });
 client.on('message', async msg =>{
   if(msg.content[0]== prefix){
     let subreddit = msg.content.split(' ')[1] 
    let command = msg.content.split(' ')[0].slice(1);
    switch(command.toUpperCase()){
    case'PING':
      msg.channel.send('pong');
      console.log(msg.content)
      break;
      case 'MEME':
      try{
      let img = await api(subreddit)
      const Embed = new Discord.MessageEmbed()
      .setTitle(`A meme from r/${subreddit}`)
      .setURL(`https://www.reddit.com/r/${subreddit}`)
      .setColor('RANDOM')
      .setImage(img)
      .setFooter('69420')
      msg.channel.send(Embed);
      }
      catch(err){
        msg.channel.send(err);
      }
      break;
    }
    
  }
  });









