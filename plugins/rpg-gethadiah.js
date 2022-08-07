let handler = async (m, { conn }) => {
let info = `
*${htki} GET HADIAH ${htka}*
`
const sections = [
   {
	title: `✃ CLAIM`,
	rows: [
	    {title: "🌸• Daily", rowId: '.daily', description: 'Hadiah per hari' },
	    {title: "🌸• Weekly", rowId: '.weekly', description: 'Hadiah per minggu' },
	{title: "🌸• Monthly", rowId: '.monthly', description: 'Hadiah per bulan' },
	{title: "🌸• Special", rowId: '.special', description: 'Hadiah special' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "💻• Info BOT", rowId: '.info', description: 'Info Andhyca BOT' },
	    {title: "🗃️• Menu", rowId: '.menu', description: 'Back to menu' },
	{title: "👤• Ownee", rowId: '.owner', description: 'Owner Andhyca BOT' },
	{title: "💰• Sewa BOT", rowId: '.sewa', description: 'Sewa Andhyca BOT' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "🎁 G E T 🎁",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['hadiah', 'claim']
handler.tags = ['rpg']
handler.command = /^(hadiah|claim)$/i

export default handler
