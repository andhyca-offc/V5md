let handler = async (m, { conn }) => {
let info = `
*${htki} ONLINE ${htka}*
          
   📛 Bot Sedang Online
`
const sections = [
   {
    title: `✃ INFO`,
	rows: [
	    {title: "🎀 List Menu", rowId: '.menu', description: 'List Menu 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐁𝐨𝐭𝐳-𝐌𝐝ོ' },
	{title: "📽️ Youtube Bot", rowId: '.ytbot', description: 'Youtube Bot' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "🌸 Sapa Bot", rowId: '.salken', description: 'Mari Menyapa 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐁𝐨𝐭𝐳-𝐌𝐝ོ' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "CLICK HERE 📤",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.customPrefix = /^(bot)$/i
handler.command = new RegExp

export default handler