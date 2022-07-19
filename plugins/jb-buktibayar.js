let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Sudah membayar? 」
│
│ • *Jika sudah bayar ikuti langkah berikut.*
│
│1. Kirim bukti pembayaran dan klik tombol *Bukti* di bawah
│2. Tunggu confirm dari owner
│3. Bukti palsu tidak akan di respon & terkena banned!
❏────
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '📞 Hubungi Owner', url: 'https://wa.me/6285872761910'}},
    {index: 4, quickReplyButton: {displayText: '📩 Bukti', id: '.order Bukti pembayaran Nya'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^sudahbayar$/i
handler.private = true

export default handler
