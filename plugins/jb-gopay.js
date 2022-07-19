let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} GOPAY ${htka}

Hay👋‹, ingin melanjutkan pembayaran?

💌 *Pembayaran*
💳 Via: Gopay
📞 Nomor: 085872761910
👤 A/n: Ⓚ︎🅘︎Ⓝ︎🅖︎ • 𝐴𝑛𝑑ℎ𝑦𝑐𝑎ᵍᵃⁿᶻ
📝 Mitra: 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐁𝐨𝐭𝐳-𝐌𝐝ོ
💰 Metode pembayaran: Online ( ~Cod~ )

📣 *Buy & Website*

Sewa Bot: Wa.me/62895330584590+.sewabot

Buy Premium :Wa.me/62895330584590+.premium

Group Official :https://chat.whatsapp.com/DTtOcmrCAkKFrVZJD6jb6M

✏️ _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan saldo.
Pastikan saldo kamu mencukupi untuk bertransaksi!


❗KLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '📜 QRIS', url: 'https://telegra.ph/file/0f1f1b37a5577c73be0f6.jpg'}},
    {index: 4, quickReplyButton: {displayText: '🗒️ Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^gopay$/i
handler.private = true

export default handler
