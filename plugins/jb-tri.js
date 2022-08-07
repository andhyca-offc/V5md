let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} XL AXIATA ${htka}

HayðŸ‘‹, ingin melanjutkan pembayaran?

💌 *Pembayaran*
💳 Via: Pulsa Xl Axiata
📞 Nomor: 087829536442
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
    {index: 1, urlButton: {displayText: '💸 Transfer Pulsa', url: 'https://developer.iak.id/'}},
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
handler.command = /^donasitri$/i
handler.private = true

export default handler