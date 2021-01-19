const Discord = require("discord.js");
const redditimage = require("@sujalgoel/reddit-image");


module.exports = {
    name: "meme",
    description: "This is a Meme Command!",
    async execute(message, args){
        var sbr = "";
        if(args.length == 1){
            sbr = args[0]
        }
        const post = await redditimage.fetch({ type: "custom", total: 1, subreddit:[sbr] });
        const data = post[0]

        //console.log(data)

        const msg = await message.channel.send("Loading...")

        const Embed = new Discord.MessageEmbed()
        .setTitle(`${data.title}`)
        .setURL(data.postLink)
        .setFooter(`Posted by ${data.author}`)
        .setImage(data.image)
        .setAuthor("Send from: " + message.author.username, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`)

/*         await msg.delete()
        await message.delete() */
        message.channel.send(Embed)
        
    }
}