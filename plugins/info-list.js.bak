let handler = async (m, { conn }) => {
let info = `
*${htki} INFO BOT ${htka}*
`
const sections = [
   {
	title: `✃ STATS`,
	rows: [
	    {title: "ଘ 📊Test Speed", rowId: '.testspeed', description: 'Test Speed' },
	    {title: "ଘ 📉Stats Server", rowId: '.statserver', description: 'Status server' },
	{title: "ଘ 👤Nama Creator", rowId: '.nameown', description: 'Owner Fangz BOT' },
	{title: "ଘ 💰Donasi", rowId: '.donasi', description: 'Support Fangz' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "ଘ 📖Rules", rowId: '.rules', description: 'S&K Fangz BOT' },
	    {title: "ଘ ⛔No Menu", rowId: '', description: 'No menu' },
	    {title: "ଘ 📑Event", rowId: '.event', description: 'Event Dari Kami' },
	{title: "ଘ ⚡Speed", rowId: '.speed', description: 'Speed Fangz BOT' },
	{title: "ଘ 💵Sewa BOT", rowId: '.sewa', description: 'Sewa Fangz BOT' },
	{title: "ଘ 🗣️Request Fitur", rowId: '.request', description: 'Request Fitur Fangz BOT' },
	{title: "ଘ 🌏Lokasi BOT", rowId: '.loc2', description: 'Lokasi Fangz BOT' },
	{title: "ଘ 🧰Version Bot", rowId: '.cekversi', description: 'Versi Fangz BOT' },
	{title: "ଘ 🤖Sapa Bot", rowId: '.salken', description: 'Menyapa Fangz BOT' },
	]
    },{
    title: `✃ INFO BOT`,
	rows: [
	    {title: "ଘ 🧰Version Bot", rowId: '.cekversi', description: 'Versi Fangz BOT' },
	    {title: "ଘ 🌏Lokasi BOT", rowId: '.loc2', description: 'Lokasi Fangz BOT' },
	{title: "ଘ 🤖Sapa Bot", rowId: '.salken', description: 'Menyapa Fangz BOT' },
	{title: "ଘ ⚡Speed Bot", rowId: '.speed', description: 'Speed Fangz BOT' },
	{title: "ଘ 📊Status Bot", rowId: '.botstats', description: 'Sistem Fangz BOT' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "📮C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['info', 'infobot']
handler.tags = ['info']
handler.command = /^(info|infobot)$/i

export default handler