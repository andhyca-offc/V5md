let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} OVO ${htka}

👋‘‹, ingin melanjutkan pembayaran?

💌 *Pembayaran*
💳 Via: Ovo
📞 Nomor: 085794408499
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
    {index: 1, urlButton: {displayText: '📜 QRIS', url: 'https://telegra.ph/file/503024e6364186ad45a9f.jpg'}},
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
handler.command = /^ovo$/i
handler.private = true

export default handler
