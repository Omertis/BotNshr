cconst Discord = require('discord.js');
const A7MD = new Discord.Client();
let timer;
console.log("BOT ONLINE");

A7MD.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [` 
  **
**هاذا سرفرى  : 
سرفر اسطورى اقسم بالله 
[- الفاعليه القادمه ]
كيب  OptiFine  -
رانك  في اي بي هاى بكسل  -
حسابين فول اكسس ماين كرافت - 
--> شروط الفاعليه <--
لو انته فزت الكيب لازم تدخل  تكون مدخل 15 عضو
لو انته فزت ال فى اى بى لازم تكون مدخل 10 اعضاء 
والحسابين الفول اكسس عادى
---------------------------------------
الى ما راح ينفذ القوانين ما راح ياخد شي حتى لو فزت 
وبس 
تم التغير من النيترو لكيب
لمعرفة كم شخص جبته للسيرفر اكتب** `!invites`
**رابط :link: ***https://discord.gg/7g22RFp*** [ السيرفر ] 
The invite for yuo ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
