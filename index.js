const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: "play.rinaorc.com",
    username: process.argv[4] || 'rolan12',
    logErrors: true,
})

bot.on('login', () => {
  console.log("Bot connecté sur play.rinaorc.com")
  bot.chat("/login 162Abcdef")
  setTimeout(function() {
    bot.chat("/p accept Natous298")
  }, 15000)})