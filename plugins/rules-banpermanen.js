let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} RULES ${htka}

 > *BANNED + BLOK PERMANEN* :
┃• Telphone
┃• Video Call
┃• Meniru/Menyalin Teks² Pesan Pada Bot Tanpa Izin
┃• Send Virtext
┃• Menghina BOT
┃• Spam BOT berlebihan
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '📸 Instagram Owner', url: 'https://instagram.com/andhycarsrofficial'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.tags = ['info']
handler.command = /^banpermanen$/i

export default handler


//BISA KALIAN GANTI BEBAS AJA, HAPUS? GPP