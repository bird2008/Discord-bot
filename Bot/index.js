const Discord = require('discord.js');
const chalk = require('chalk');
const prefix = "!"
const client = new Discord.Client();

const log = console.log

client.on('ready', () => {
  log(chalk.red`Zalogowałem jako ${client.user.tag}!`);
});
// czy użytkownik jest botem
client.on('message', msg => {
  const { author, guild } = msg
  if (author.bot || !guild) {
    return
  }

  if (msg.content.indexOf(prefix) !== 0) return

  msg.reply("siemanko")

  if (msg.content === '!ping') {
    msg.channel.send('pong');
  }
});

client.login("ODIyNDYxMzU4OTAxNjkwMzg4.YFSm1A.EI22aWtONwBMp59qLwBTDjkcNLg");
