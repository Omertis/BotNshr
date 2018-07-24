const Discord = require('discord.js');
const A7MD = new Discord.Client();
let timer;
console.log("BOT ONLINE");

A7MD.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [` 
  **
  :hearts:️:paperclips:.
  :heart_eyes: :heart: 
  لسنا الافضل لاكن بوجودك نستمر حياك ف سيرفر سهرات  :musical_score::sparkles:
                                 [ https://discord.gg/TeQvr7b ] 
  الدعووة خاصة لك ... [ ${member}  ]
  **`,`سلام عليكم ياحلو ,تعال ونورنا ناقصنا تواجدك:candle::black_heart:.
  رابط:https://discord.gg/TeQvr7b`,` -رُبما صدفة من غير حُسبان 
  نصبح بها اصدقاء :heartbeat:.
  
  LINK : https://discord.gg/TeQvr7b `]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})

client.login(process.env.BOT_TOKEN);
