const Discord = require("discord.js");

module.exports = {
    name: "ping",
    execute(message, args){
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${message.client.ws.ping}ms.`);
        
    }
}