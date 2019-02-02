const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");

bot.on("ready", async () => {
	console.log(`${bot.user.username} is online!`);

	bot.user.setActivity("User", {type: "Watching"});
});

bot.on("message", async message => {
	let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);

	let commandfile = bot.commands.get(cmd.slice(prefix.length));
	if(commandfile) commandfile.run(bot,message,args);
  
  //if(cmd === `${prefix}userinfo`){
	// 
	// module.exports.run = async (bot, message, args) => {
    //  let uicon = message.author.avatarURL
    // 	let userembed = new Discord.RichEmbed()
    // 	.setAuthor(message.author.username)
    //  .addField("Tag", message.author.tag)
    // 	.setColor("#ff6a00")
    // 	.setThumbnail(uicon)
    //
    // 	return message.channel.send(userembed);
    // }
  
  
  });	

bot.login(tokenfile.token);
