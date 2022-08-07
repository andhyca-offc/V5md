let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} Hewan ${htka}

*DAFTAR HEWAN:*
◉ Naga
◉ Anjing
◉ Rubah
◉ Kuda
◉ Kucing
◉ Lele
◉ Ayam
◉ Babi
◉ Babi Hutan
◉ Monyet
◉ Sapi
◉ Kerbau
◉ Buaya
◉ Panda
◉ Kambing
◉ Gajah
◉ Harimau
◉ Banteng
◉ Orca
◉ Ikan
◉ Udang
◉ Bawal
◉ Nila
◉ Hiu
◉ Lobster
◉ Lumba Lumba
◉ Dory
◉ Buntal
◉ Cumi
◉ Gurita
◉ Kepiting
◉ Paus
◉ Phoenix


HayðŸ‘‹, Mau Beli Hewan? Isi Formulir Berikut!

*FORMULIR PEMBELIAN*
◉ Hewan: 
◉ Jumlah hewan yang akan dibeli:
◉ Harga hewan yang akan dibeli:
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
handler.command = /^buyhwnbot$/i
handler.private = false

export default handler