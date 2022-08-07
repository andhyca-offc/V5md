let handler = async (m, { conn }) => {
let info = `
*${htki} INFO 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ ${htka}*


📮 *Note:* Wajib patuhi S&K 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ

♨️ *Iklan:* Join group BOT juga, biar bisa gunain fitur grup ( Klik button *💌 Group Official* untuk bergabung
`
const sections = [
   {
    title: `✃ INFO`,
	rows: [
	    {title: "☃︎📖 ┊ Rules", rowId: '.rules', description: 'S&K Fangz BOT' },
	    {title: "☃︎🎉 ┊ Random Sticker", rowId: '.fangz', description: 'Dijamin Kamu Dapat' },
	    {title: "☃︎📑 ┊ Event", rowId: '.event', description: 'Event 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' },
	{title: "☃︎💵 ┊ Sewa BOT", rowId: '.sewa', description: 'Sewa 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' },
	{title: "☃︎🗣️ ┊ Request Fitur", rowId: '.request', description: 'Request Fitur 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' },
	{title: "☃︎🌏 ┊ Lokasi BOT", rowId: '.loc2', description: 'Lokasi 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' },
	{title: "☃︎💌 ┊ Group Official", rowId: '.gcbot', description: 'Group Chat 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' },	
	]
    },{
    title: `✃ INFO BOT`,
	rows: [
	    {title: "ଘ🧰 ┊ Version Bot", rowId: '.cekversi', description: 'Versi 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' },
	    {title: "ଘ🌏 ┊ Lokasi BOT", rowId: '.loc2', description: 'Lokasi 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' },
	{title: "ଘ⚡ ┊ Speed Bot", rowId: '.speed', description: 'Speed 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' },
	{title: "ଘ📊 ┊ Status Bot", rowId: '.botstats', description: 'Sistem 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "꧁ꨄ︎ CLICK HERE ꨄ꧂︎",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "💌 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(infobot)$/i

export default handler