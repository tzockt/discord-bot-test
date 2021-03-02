const Discord = require("discord.js");

module.exports = {
    name: "delete",
    description: "Delete Messenge",
    execute(message, args) {
        message.channel.bulkDelete(args[0]); //please note that you need other code that i posted 


    }
}