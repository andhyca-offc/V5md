let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *STORE BOT* ${htka}

╭━━━━「 *BIKIN LOGO* 」
│━━━━ Testymoni? Cek katalog!
│━━━━ Aman? 100%
│
│
┝⊰◈ *🛒 Harga jasa created Logo :*
│• Logo Gaming (🚹) = Rp.5K/1 logo
│• Logo Gaming (🚺) = Rp.3K/1 logo
│• Logo Store = Rp.5K/1 logo
│
┝⊰◈ *Info :*
│
│• Chat Wa.me/6285872761910
│• Jika nomor diatas tidak aktif, Tekan button owner dibawah
│
┝⊰◈ *🛒 Payment :*
│• Klick button payment dibawah ini ☟︎︎︎
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
handler.command = /^bikinlogo$/i

export default handler