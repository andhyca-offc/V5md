import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {

let pp = await conn.profilePictureUrl(m.sender, 'image')

 const anu = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6285240750713-1610340626@g.us",
			"inviteCode": "null",
			"groupName": "Andhyca || User 「BOT」 𝕆𝔽ℂ", 
            "caption": "「 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ | © 🅚Ⓘ︎︎🅝︎Ⓖ • 𝐴𝑛𝑑ℎ𝑦𝑐𝑎ᵍᵃⁿᶻ︎ 」", 
            'jpegThumbnail': await ( await fetch(pp)).buffer()
		}
	}
}
conn.sendMessage(m.chat, { text: wm} , { quoted: anu })
}


handler.help = ['fgc']

handler.tags = ['ᴘᴇɴᴅɪɴɢ sᴛᴜғғ']

handler.command = /^fgc$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

export default handler
