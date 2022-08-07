let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *STORE BOT* ${htka}

╭━━━━「 *LIST* 」
│━━━━ Testymoni? Cek Katalog!
│━━━━ Aman? 100%
│
│
┝⊰◈ *🛒 Harga jasa up followers IG :*
│
│• 30 Followers = Rp.10K
│• 50 Followers = Rp.19K
│• 100 Followers = Rp.30K
│• 200 Followers = Rp.42K
│• 400 Followers = Rp.55K
│• 600 Followers = Rp.80K
│
┝⊰◈ *Info :*
│
│• Chat Wa.me/6285872761910
│• Jika nomor diatas tidak aktif, Tekan button owner dibawah
│
┝⊰◈ *Payment :*
│
│• Tekan Button Payment Di Bawah Ini ☟︎︎︎
╰━━━━━━━━━━━━»
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '🌹 Owner', url: 'https://wa.me/6285794408499'}},
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
handler.command = /^jasafollower$/i

export default handler