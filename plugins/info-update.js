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
			"groupJid": "https://chat.whatsapp.com/DTtOcmrCAkKFrVZJD6jb6M",
			"inviteCode": "https://chat.whatsapp.com/DTtOcmrCAkKFrVZJD6jb6M",
			"groupName": "Andhyca || User 「BOT」 𝕆𝔽ℂ", 
            "caption": "Sudah Versi terbaru", 
            'jpegThumbnail': await ( await fetch(pp)).buffer()
		}
	}
}
conn.sendMessage(m.chat, { text: wm} , { quoted: anu })
}


handler.help = ['infoupdate']

handler.tags = ['ᴘᴇɴᴅɪɴɢ sᴛᴜғғ']

handler.command = /^infoupdate$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

export default handler
