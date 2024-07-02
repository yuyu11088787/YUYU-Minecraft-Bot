const mineflayer = require('mineflayer')


const bot = mineflayer.createBot({
  host: 'localhost',
  username: 'Bot',
  auth: 'microsoft',
  port: 25565
})

bot.on('kicked', console.log)
bot.on('error', console.log)