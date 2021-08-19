const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('./fireStore');
require('dotenv').config();
client.login(process.env.TOKEN);
client.on('ready',async () => {
 await console.log(`Logged in as ${client.user.tag}!`);
});
let commandHandler = require('./commands')
 client.on('message',commandHandler);
client.on('guildCreate',async gData =>{
     ownername = client.users.cache.find(a =>a.id == gData.ownerID)
    db.collection('guilds').doc(gData.name).set({
        'guildID' : gData.id,
        'guildName' : gData.name,
        'guildOwner' : ownername.username,
        'guildOwnerID' : gData.ownerID,
        'guildMemberCount' : gData.memberCount,
        'prefix' : '$'
    });
});
