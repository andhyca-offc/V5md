let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} DANA ${htka}

HayðŸ‘‹, ingin melanjutkan pembayaran?

💌 *Pembayaran*
💳 Via: Dana
📞 Nomor: 085872761910
👤 A/n: Andhyca
📦 Mitra: HarithsStoreSHOP_ID
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
    {index: 1, urlButton: {displayText: '🧾 Qris Code', url: 'https://telegra.ph/file/4d91b25a776179f342588.jpg'}},
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
handler.command = /^donasidana$/i
handler.private = false

export default handler