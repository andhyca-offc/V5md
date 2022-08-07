let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `๑–––┅═━ ♨️ PRIVATE ┅═━–––๑
           
📮 *Note:* Script ini tidak gratis dan tidak diperjual belikan!
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '💌 Group Official', url: sgc}},
    {index: 1, urlButton: {displayText: '📸 Instagram Owner', url: sig}},
    {index: 4, quickReplyButton: {displayText: '🎀 List Menu', id: '.menu'}},
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