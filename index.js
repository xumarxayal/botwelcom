const Discord = require ("discord.js")
const moment = require ("moment")
const config = require("./config.json");
const client = new Discord.Client();
const prefix = config.prefix;
const color = "#303135";

client.login("ODM2OTcyOTAxMTk4MjAwOTA0.YIlxwQ.JskSdHTvvJoEd6abDAARWEGCN_w");


client.on('ready', () => {
    console.log('MrFox is ready')
    client.user.setPresence({
        activity: {
            type: "PLAYING",
            name: `Mr.xumar`
        }, 
        status: "idle"
    })
});





//Mr.BAD

client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(
    channel => channel.name === "☀┃𝖶𝖾𝗅𝖼𝗈𝗆𝖾"
  );
  let DarkMan = member.user.avatarURL();
  if (!channel) return;
  const joinembed = new Discord.MessageEmbed()
   
    .setTitle(``)
    .setDescription(`
      > hello sir ${member} welcome to
      > __${member.guild.name}__ we hope you enjoy with us.`
      )
    .setAuthor(`${member.guild.name}`, `https://cdn.discordapp.com/attachments/827541229734592522/836962152430043186/image0.gif`)
    .setColor(color) 
    .setImage("https://cdn.discordapp.com/attachments/701779288772444160/836964659831504946/image0.gif")
    .addField(
      `</>`,`__[xumar offical](https://discord.gg/Q4234CdZry)__`)
    
  channel.send(joinembed);
});
