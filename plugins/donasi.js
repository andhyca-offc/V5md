let handler = async (m, { conn }) => {
let info = `
*${htki} DONASI ${htka}*

⚠︎ Donasi, Agar bot online 24 Jam ⚠︎
`
const sections = [
   {
	title: `Metode & Payment Pembayaran`,
	rows: [
	    {title: "💳 ≼≽ Dana", rowId: '.donasidana', description: 'Bayar melalui Dana' },
	    {title: "💳 ≼≽ Gopay", rowId: '.donasigopay', description: 'Bayar melalui Gopay' },
	{title: "💳 ≼≽ Ovo", rowId: '.donasiovo', description: 'Bayar melalui Ovo' },
	{title: "💸 ≼≽ Pulsa Indosat", rowId: '.donasismartfren', description: 'Bayar melalui pulsa' },
	{title: "💸 ≼≽ Pulsa Xl Axiata", rowId: '.donasitri', description: 'Bayar melalui pulsa' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "CLICK HERE 🎁",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ðŸŒŽ Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['donasi', 'donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
handler.private = false

export default handler
