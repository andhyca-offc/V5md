let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} OVO ${htka}

HayðŸ‘‹, ingin melanjutkan pembayaran?

💌 *Pembayaran*
💳 Via: Ovo
📞 Nomor: 085794408499
👤 A/n: Andhyca
📦 Mitra: Andhyca Botz
💰 Metode pembayaran: Online ( ~Cod~ )

📣 *Beli*

Sewa Bot: https://wa.me/62895330584590+.sewabot

Buy Premium: https://wa.me/62895330584590+.premium

Join GC Free 1 Day: https://wa.me/6285872761910+Owner+aku+mau+tambahin+bot+ke+grup+ku+yang+free+1+day.+boleh+gk

✏️ _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan saldo.
Pastikan saldo kamu mencukupi untuk bertransaksi!


❗KLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '🧾 Qris Code', url: 'https://telegra.ph/file/0f1f1b37a5577c73be0f6.jpg'}},
    {index: 4, quickReplyButton: {displayText: '📋 ️Sudah Membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^donasiovo$/i
handler.private = true

export default handler