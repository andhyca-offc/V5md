let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} Buy Item ${htka}

*DAFTAR ITEM:*
◉ Limit
◉ Exp
◉ Coin
◉ Makanan
◉ Shield
◉ Arlok
◉ Money
◉ Atm
◉ Bank
◉ Full Atm
◉ Potion
◉ Emerald
◉ Diamond
◉ Gold
◉ Iron
◉ Umpan
◉ Pet


HayðŸ‘‹, Mau Beli Limit Tambahan? Isi Formulir Berikut!

*FORMULIR PEMBELIAN*
◉ Nama item:
◉ Limit sebelumnya:
◉ Jumlah item yang akan dibeli:
◉ Harga item yang akan dibeli:
◉ Username user:
◉ Nomor user:
◉ Metode pembayaran:


✏️ *Informasi Pembayaran:*

Jika sudah diisi, kirimkan formulir ke owner
Klik tombol owner dibawah ini!


📮 *Note:*
• Jika salah salah satu owner tidak aktif, chat owner yang lain. 
• Jika semua owner tidak aktif, tunggu saja sampai seluruhnya aktif
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '➀ ᴏ ᴡ ɴ ᴇ ʀ', url: 'wa.me/6285872761910'}},
    {index: 1, urlButton: {displayText: '➋ ᴏ ᴡ ɴ ᴇ ʀ', url: 'wa.me/6285794408499'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^buyitembot$/i
handler.private = false

export default handler