let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `📮 *FOLLOW INSTAGRAM OWNER*

Atau Bisa Lewat Link Dibawah Ini :
https://instagram.com/andhycarsrofficial
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '📸 *@andhycarsrofficial* 📸', 'status@broadcast') 
}
handler.help = ['ig']
handler.tags = ['info']
handler.command = /^(github)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

export default handler 