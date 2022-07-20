let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} DANA ${htka}

Hay👋‹, ingin Donasi?

💌 *Pembayaran*
💳 Via: Pulsa Indosat 
📞 Nomor: 085872761910
👤 A/n: Ⓚ︎🅘︎Ⓝ︎🅖︎ • 𝐴𝑛𝑑ℎ𝑦𝑐𝑎ᵍᵃⁿᶻ
📝 Mitra: 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐁𝐨𝐭𝐳-𝐌𝐝ོ
💰 Metode pembayaran: Online ( ~Cod~ )


® KLIK *🗒️ Sudah Membayar* JIKA SUDAH TRANSFER 
`
const templateButtons = [
    {index: 4, quickReplyButton: {displayText: '🗒️ Sudah Membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['smart']
handler.tags = ['info']
handler.command = /^(donasismartften)$/i
handler.private = true

export default handler
