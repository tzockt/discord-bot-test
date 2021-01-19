const Discord = require('discord.js');
const colors = require("colors");
const fs = require("fs");
const config = JSON.parse(fs.readFileSync("./utils/config.json", "utf8"));

var client = new Discord.Client();

// ----------------------------------------------------------------------------------------------------------------------

client.commands = new Discord.Collection();
const CommandFiles = fs.readdirSync("./commands/").filter(files => files.endsWith(".js"));
for (const file of CommandFiles) {
    const command = require(`./commands/${file}`);
    
    client.commands.set(command.name, command);
}

// ----------------------------------------------------------------------------------------------------------------------
//WHITELIST
//const whitelist = ["714743564822773820", "685201649102618700", "660136797996711946"];

// ----------------------------------------------------------------------------------------------------------------------

client.on("message", message => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

 /*    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")){
        const Embed = new Discord.MessageEmbed()
            .setTitle(message.client.user.username)
            .addField("Error:", "`MANAGE_MESSAGES`")
            .setColor("#c0392b");

        message.channel.send(Embed);
        return;
    }else if(!message.guild.me.hasPermission("SEND_MESSAGES")){
        const Embed = new Discord.MessageEmbed()
            .setTitle(message.client.user.username)
            .addField("Error:", "`SEND_MESSAGES`")
            .setColor("#c0392b");

        message.author.send(Embed);
        return;
    }else if(!whitelist.includes(message.guild.id)){
        const Embed = new Discord.MessageEmbed()
            .setTitle(message.client.user.username)
            .addField("Error:", "`This Guild is not on the Whitelist!`")
            .setColor("#c0392b");

        message.channel.send(Embed);
        return;
    }; */

    if(command === "help"){
        client.commands.get("help").execute(message, args);
    }else if(command === "meme"){
        client.commands.get("meme").execute(message, args);
    }else if(command === "ping"){
        client.commands.get("ping").execute(message, args);
    }


});

// client.on("messageReactionAdd", (messageReaction, user) => {
//     if (messageReaction.emoji.id === "740914495521554522") {
//         if (user.bot) return;
//         TicketChannelAdd.Add(messageReaction.message, user);
        
//     }
// });

// ----------------------------------------------------------------------------------------------------------------------

client.login(config.token);
client.on("ready", () =>{
    var TicketChannelIDs = [];
    console.log(colors.rainbow(`Logged in as ${client.user.tag}!`));
    client.user.setActivity(`Version: ${config.version}`, {type: "PLAYING"});
     
});
