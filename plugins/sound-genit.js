let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./mp3/genit.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(sayang|ayang|pacar|selingkuh|hamil|intim|genit|tayang)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

export default handler 