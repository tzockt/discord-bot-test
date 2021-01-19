const Discord = require("discord.js");
const fs = require("fs");
const config = JSON.parse(fs.readFileSync("./utils/config.json", "utf8"));

module.exports = {
    name: "help",
    description: "This is a help Command!",
    async execute(message, args){
        const Embed = new Discord.MessageEmbed()
            .setTitle(message.client.user.username)
            .addFields(
                { name: "You need help?", value: "Send an email to: **info@n-mayr.net**"},
                { name: 'Prefix:', value: config.prefix }
            )
            .setColor("#2980b9")
            .setFooter(`Command from ${message.author.username}`);

        const sended = await message.channel.send(Embed);
        sended.delete({timeout: 10000});

        message.delete();
    }
}