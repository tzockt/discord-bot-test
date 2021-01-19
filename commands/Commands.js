const Discord = require("discord.js");
const fs = require("fs");
const config = JSON.parse(fs.readFileSync("./utils/config.json", "utf8"));

module.exports = {
    name: "cmd",
    description: "This is a cmd Command!",
    async execute(message, args){
        const Embed = new Discord.MessageEmbed()
            .setTitle("Commands from " + message.client.user.username)
            .setDescription(`My Prefix is ${config.prefix}.\n<> = required\n[] = optional`)
            .addFields(
                { name: config.prefix + "help", value: "Sends informations if you need help"},
                { name: config.prefix + "cmd", value: "Sends this message"},
                { name: config.prefix + "meme [ich_iel|dankmemes|me_irl|onejob]", value: "Sends a random Meme from Reddit"}
            )
            .setColor("#2980b9")
            .setFooter(`Command from ${message.author.username}`);

        const sended = await message.channel.send(Embed);
        sended.delete({timeout: 10000});
        message.delete();
    }
}