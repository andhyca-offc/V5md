let handler = async (m, { conn }) => {
let info = `
*${htki} PAYMENT ${htka}*

©2022 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ Official 
`
const sections = [
   {
	title: `✃ ᴘ ᴀ ʏ ᴍ ᴇ ɴ ᴛ`,
	rows: [
	    {title: "💳 ✦ Dana", rowId: '.dana', description: '♡︎ Bayar melalui Dana' },
	    {title: "💳 ✦ Gopay", rowId: '.gopay', description: '♡︎ Bayar melalui Gopay' },
	{title: "💳 ✦ Ovo", rowId: '.ovo', description: '♡︎ Bayar melalui Ovo' },
	{title: "💵 ✦ Pulsa Indosat", rowId: '.pulsasmartfren', description: '♡︎ Bayar melalui pulsa My Im3' },
	{title: "💵 ✦ Pulsa Xl Axiata", rowId: '.pulsastri', description: '♡︎ Bayar melalui pulsa Xl' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "💰 ᴘ ᴀ ʏ ᴍ ᴇ ɴ ᴛ 💰",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['pay', 'payment']
handler.tags = ['store']
handler.command = /^(pay(ment)?|payment)$/i
handler.private = true

export default handler
