const fetch = require("node-fetch");
const Discord = require('discord.js');
module.exports = async (msg,args) =>{
    try{
        subreddit = args.join(" ")
        const url = `https://meme-api.herokuapp.com/gimme/${subreddit}`
        response = await fetch(url);
        json = await response.json();
        if (json.code == '404'){
            msg.channel.send(json.message)
        }
        else{
        await msg.delete();
       const Embed = new Discord.MessageEmbed()
       .setTitle(`A meme from r/${json.subreddit}`)
       .setURL(`https://www.reddit.com/r/${json.subreddit}`)
       .setColor('RANDOM')
       .setImage(json.url)
       .setFooter('69420')
      await msg.channel.send(Embed);
    }
}
    catch(err){
      msg.channel.send(err);
    }
}
