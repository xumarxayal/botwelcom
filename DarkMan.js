const Discord = require ("discord.js")
const moment = require ("moment")
const client = new Discord.Client();
const prefix = "D!";


client.login(config.token);








//Mr.BAD

client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(
    channel => channel.name === "rules"
  );
  let DarkMan = member.user.avatarURL();
  if (!channel) return;
  const joinembed = new Discord.MessageEmbed()
   
    .setTitle(``)
    .setDescription(`
      > hello sir ${member} wellcome to
      > __${member.guild.name}__ we hope you enjoy with us.`
      )
    .setAuthor(`${member.guild.name}`, `https://cdn.discordapp.com/attachments/827541229734592522/836962152430043186/image0.gif`)
    .setColor("#303135") 
    .setImage("https://cdn.discordapp.com/attachments/701779288772444160/836964659831504946/image0.gif")
    .addField(
      `</>`,`__[Mr.Fox web](https://mrfox.ga/)__`)
    
  channel.send(joinembed);
});
