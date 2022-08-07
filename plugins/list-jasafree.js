let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *STORE BOT* ${htka}

╭━━━━「 *JOIN FREE* 」
│━━━━
│━━━━ Aman? 100%
│
│
┝⊰◈ *🛒 Harga jasa join free 1 day :*
│• Free/1 Grup
│
│• Cara? Chat Owner, Klik button dibawah ini!
│
┝⊰◈ *Info :*
│
│• Chat Wa.me/6285872761910
│• Jika nomor diatas tidak aktif, Tekan button owner dibawah
│
┝⊰◈ *🛒 Payment :*
│
│• Tekan Button Payment Di Bawah Ini ☟︎︎︎
╰━━━━━━━━━━━━»
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '🌹 Owner', url: 'https://wa.me/6285794408499?text=📑Bang+mau+coba+fitur+masukin+bot+gratis+1+hari'}},
    {index: 4, quickReplyButton: {displayText: '💰 ᴘ ᴀ ʏ ᴍ ᴇ ɴ ᴛ 💰', id: '.payment'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^jasafree$/i

export default handler