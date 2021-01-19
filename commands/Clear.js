const Discord = require("discord.js");

module.exports = {
    name: "clear",
    description: "Clear Messenge",
    execute(message, args) {
        if (!args[1]) return message.reply('Error, please define second argument')
        message.channel.bulkDelete(args[1]); //please note that you need other code that i posted 


    }
}