let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} OVO ${htka}

Hay👋‹, ingin Donasi?

💌 *Pembayaran*
💳 Via: Ovo
📞 Nomor: 085794408499
👤 A/n: Ⓚ︎🅘︎Ⓝ︎🅖︎ • 𝐴𝑛𝑑ℎ𝑦𝑐𝑎ᵍᵃⁿᶻ
📝 Mitra: 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐁𝐨𝐭𝐳-𝐌𝐝ོ
💰 Metode pembayaran: Online ( ~Cod~ )


®KLIK *SUDAH BAYAR* JIKA SUDAH TRANSFER 
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '📜 Qr Code', url: 'https://telegra.ph/file/503024e6364186ad45a9f.jpg'}},
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
handler.help = ['ovo']
handler.tags = ['info']
handler.command = /^(donasiovo)$/i
handler.private = true

export default handler
