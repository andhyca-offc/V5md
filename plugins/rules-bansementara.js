let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} RULES ${htka}

 > *BANNED SEMENTARA* :
┃• Spam
┃• Send Iklan ke BOT
┃• Send hoax ke BOT
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
handler.command = /^bansementara$/i

export default handler


//BISA KALIAN GANTI BEBAS AJA, HAPUS? GPP