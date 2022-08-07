let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./mp3/ilovetoo.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(love|iloveyou|i|you|cinta|imissyou)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

export default handler 