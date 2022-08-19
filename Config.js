// 👈 يمكنك تغيير هذا اختيارك
// 👈 You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🐼'] // 👈 Enter your Emoji 
global.emoji02 = ['🦋'] //👈 Enter your Emoji
global.notice = ` *Hi 🥰 I m*
* المطور انوس👑 *
* عمري 17 سنة مطور ... *
* من المغرب *
* انا اتعلم فقط. *
* ليس اكتر..*
* انا طالب *
*Follow My Instagram - https://instagram.com/only_otakuu?igshid=YmMyMTA2M2Y=*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+212617434196'] //👈  Enter Your number
عالمي . premium  =   [ '+212617434196' ] //+212617434196
عالمي . ownernomer   =   '+212617434196'   // 👈 أدخل رقمك
global.ownername = 'anos' //👈 Enter Your name
global.botname = 'A N O S ＢＯＴ' //👈 Enter Your Bot name
عالمي . تذييل     =     '© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 anos'     // 👈 أدخل اسمك
عالمي . ig  =  'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8'  // 👈 يمكنك تغيير هذا اختيارك
global.region = 'Morocco, South Morocco,anos' // 👈 You Can change this your choice
global.sc = 'error'
global.fbt = 'Follw Us ℹ️' // 👈 Enter (Subscribe/Follow/Like now)
global.myweb = 'https://instagram.com/only_otakuu?igshid=YmMyMTA2M2Y='// 👈 Enter your Social media link to follow now button
global.welcome = '*Welcome To The Group 🦋*' // 👈 You Can change this your choice
global.bye = '*Bye bye Mother fucker 🐼*' // 👈 You Can change this your choice
عالمي . packname   =     'ANOS-BOTv8'          // 👈 يمكنك تغيير هذا اختيارك  
عالمي . المؤلف  =  'ANOS DEVELOPMENT'  // 👈 يمكنك تغيير هذا اختيارك
عالمي . sessionName   =   الخاصة   بـ // 👈 يمكنك تغيير هذا اختياركاختيارك
عالمي . برية          = [ ''         ،         '!'         ،         "."         ،         '🛰️'         ،         '⚓'         ،         '] // يمكنك تغيير هذا اختيارك
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
عالمي . thumb =   "https://ibb.co/SdS6YQy" 
عالمي . Spoty  =  "https://ibb.co/SdS6YQy"
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: 'Done 🦋', // 👈 You Can change this your choice
    admin: 'This Feature Is Only For Admin!', // 👈 You Can change this your choice
    botAdmin: 'Bot Must Be Admin First!', // 👈 You Can change this your choice
    owner: 'This Feature Is Only For Owner!', // 👈 You Can change this your choice
    group: 'Feature Used Only For Groups!', // 👈 You Can change this your choice
    private: 'Features Used Only For Private Chat!', // 👈 You Can change this your choice
    bot: 'This Feature Is Only For Bot', // 👈 You Can change this your choice
    wait: '```Please Wait...```', // 👈 You Can change this your choice
    error: 'Error! Maybe Api Key Is Expired🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // 👈 You Can change this your choice
// Do Not Change 👇 
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
