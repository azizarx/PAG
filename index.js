const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
client.login(process.env.TOKEN);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });


      client.on('message', msg =>{
  try {
      if((msg.author.bot == false)&&(msg.content == '=ticket test')&&(msg.author.id == '372142246331416579')){
        const embed = new Discord.MessageEmbed()
      .setColor('#54d1a5')
      .setTitle('Ticket :smile:')
      .addField('React to open a ticket','🎫')
      
      msg.channel.send(embed).then(async embed =>{
       await embed.react('🎫')
    });
      msg.delete();
      }
    } 
    catch (error) {
        console.log(error);
        msg.react("❌");
    }
      });