let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./mp3/haigabut.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(sayonara|bye|goodbye|jumpa|dada|dadah|tata)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

export default handler