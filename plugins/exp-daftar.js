import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "📆 Select Your Age Here !",
	rows: [
	    {title: "📛 Random Years", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "🎂 O L D",
	rows: [
	    {title: "🌸•30< Years ʚĭɞ", rowId: '.daftar ' + namae + '.30 '},
	    {title: "🎐•29< Years ʚĭɞ", rowId: '.daftar ' + namae + '.29 '},
	    {title: "🌸•28< Years ʚĭɞ", rowId: '.daftar ' + namae + '.28 '},
	{title: "🎐•27< Years ʚĭɞ", rowId: '.daftar ' + namae + '.27 '},
	{title: "🌸•26< Years ʚĭɞ", rowId: '.daftar ' + namae + '.26 '},
	{title: "🎐•25< Years ʚĭɞ", rowId: '.daftar ' + namae + '.25 '},
	{title: "🌸•24< Years ʚĭɞ", rowId: '.daftar ' + namae + '.24 '},
	{title: "🎐•23< Years ʚĭɞ", rowId: '.daftar ' + namae + '.23 '},
	{title: "🌸•22< Years ʚĭɞ", rowId: '.daftar ' + namae + '.22 '},
	{title: "🎐•21< Years ʚĭɞ", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: "🎀 Y O U N G",
	rows: [
	    {title: "🌸•20< Years ʚĭɞ", rowId: '.daftar ' + namae + '.20 '},
	    {title: "🎐•19< Years ʚĭɞ", rowId: '.daftar ' + namae + '.19 '},
	    {title: "🌸•18< Years ʚĭɞ", rowId: '.daftar ' + namae + '.18 '},
	{title: "🎐•17< Years ʚĭɞ", rowId: '.daftar ' + namae + '.17 '},
	{title: "🌸•16< Years ʚĭɞ", rowId: '.daftar ' + namae + '.16 '},
	{title: "🎐•15< Years ʚĭɞ", rowId: '.daftar ' + namae + '.15 '},
	{title: "🌸•14< Years ʚĭɞ", rowId: '.daftar ' + namae + '.14 '},
	{title: "🎐•13< Years ʚĭɞ", rowId: '.daftar ' + namae + '.13 '},
	{title: "🌸•12< Years ʚĭɞ", rowId: '.daftar ' + namae + '.12 '},
	{title: "🎐•11< Years ʚĭɞ", rowId: '.daftar ' + namae + '.11 '},
	{title: "🌸•10< Years ʚĭɞ", rowId: '.daftar ' + namae + '.10 '},
	{title: "🎐•9< Years ʚĭɞ", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `│›Please select your age at the bottom button...`,
  footer: `┗ *ʏᴏᴜʀ ɴᴀᴍᴇ:* ${conn.getName(m.sender)}\n<❔>  ANDHTCA BOTZ\nBy Andhyca`,
  title: "▢━━━━「 Registration 」━━━━▢",
  buttonText: "🚀•ഒ Register ഒ•🚀",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `📮 *Warning:* Kamu Sudah ter daftar di database, Apa kamu ingin mendaftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw 'Hi Kakak, Kakek, Atau Nenek 🎗️'
  if (age < 5) throw 'Hi 🎗'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
  ━━━━ 「 *Successful Registration* 」━━━
  .
╭━━「 *ᴜsᴇʀs* 」
│▸ *sᴛᴀᴛᴜs:* ☑️ sᴜᴄᴄᴇssғᴜʟ
│▸ *ɴᴀᴍᴇ:* ${name}
│▸ *ᴀɢᴇ:* ${age} ʏᴇᴀʀs
│▸ *sɴ:* ${sn}
╰═┅═━––––––๑

ғᴏʟʟᴏᴡ ɪɴsᴛᴀɢʀᴀᴍ: https://instagram.com/andhycarsrofficial
`
  let buttonMessage= {
'document':{'url':'https://instagram.com/andhycarsrofficial'},
'mimetype':global.ddocx,
'fileName':'▢━━━━「 Registration 」━━━━▢',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':global.sig,
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/2d9ee1ffd5d907259190a.jpg')).buffer(),
'sourceUrl':'https://instagram.com/andhycarsrofficial'}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.owner','buttonText':{'displayText':'🌹 Ownҽr'},'type':1},
{'buttonId':'.ping','buttonText':{'displayText':'🐾 Spҽҽd'},'type':1},
{'buttonId':'.menu','buttonText':{'displayText':'🎀 List Mҽɳυ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler
