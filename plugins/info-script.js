let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `๑–––┅═━🌹UNTUK APA?┅═━–––๑
           
      📮 Private. Di Yt Ada Banyak
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '📽️ Youtube', url: 'https://youtube.com/channel/UCACHvReRmw2fxgMutPFCBWg'}},
    {index: 1, urlButton: {displayText: '🔌 Github', url: sgh}},
    {index: 4, quickReplyButton: {displayText: '🎀 Menu', id: '.menu'}},
    {index: 5, quickReplyButton: {displayText: '🌹 Owner', id: '.owner'}},
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
handler.command = /^script|sc$/i

export default handler