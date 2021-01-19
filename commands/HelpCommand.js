const Discord = require("discord.js");
const fs = require("fs");
const config = JSON.parse(fs.readFileSync("./utils/config.json", "utf8"));

module.exports = {
    name: "help",
    description: "This is a help Command!",
    async execute(message, args){
        const Embed = new Discord.MessageEmbed()
        .setTitle("Commands from " + message.client.user.username)
        .setDescription(`My Prefix is ${config.prefix}\n<> = required\n[] = optional`)
        .addFields(
            { name: config.prefix + "help", value: "Sends informations if you need help"},
            { name: config.prefix + "Ping", value: "Client Ping"},
            { name: config.prefix + "meme <subreddit>", value: "Sends a random Meme from Reddit"}
        )
        .setColor("#2980b9")
        .setFooter(`Command from ${message.author.username}`);

        message.channel.send(Embed);
    }
}