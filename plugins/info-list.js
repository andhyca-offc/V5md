let handler = async (m, { conn }) => {
let info = `
*${htki} INFO 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ ${htka}*
`
const sections = [
   {
	title: `✃ STATS`,
	rows: [
	    {title: "✦📊 ┊ Test Speed", rowId: '.testspeed', description: 'Test Speed 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' },
	    {title: "✦📉 ┊ Stats Server", rowId: '.statserver', description: 'Status server' },
	{title: "✦🌹 ┊ Nama Creator", rowId: '.nameown', description: 'Owner 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' },
	{title: "✦📮 ┊ Donasi", rowId: '.donasi', description: 'Support 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' },
	{title: "✦🌸 ┊ Sapa Bot", rowId: '.salken', description: 'Menyapa 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' },
    ]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "☃︎📖 ┊ Rules", rowId: '.rules', description: 'S&K Fangz BOT' },
	    {title: "☃︎🎉 ┊ Random Sticker", rowId: '.fangz', description: 'Dijamin Kamu Dapat' },
	    {title: "☃︎📑 ┊ Event", rowId: '.event', description: 'Event 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' },
	{title: "☃︎💵 ┊ Sewa BOT", rowId: '.sewa', description: 'Sewa 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' },
	{title: "☃︎🗣️ ┊ Request Fitur", rowId: '.request', description: 'Request Fitur 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' },
	{title: "☃︎🌏 ┊ Lokasi BOT", rowId: '.loc2', description: 'Lokasi 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' },
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
  buttonText: "🎀 CLICK HERE 🎀",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "💌 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['info', 'infobot']
handler.tags = ['info']
handler.command = /^(info|infobot)$/i

export default handler