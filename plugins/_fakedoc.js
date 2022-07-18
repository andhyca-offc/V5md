import fs from 'fs'
let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = (await import("@adiwajshing/baileys")).default
const anu = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: '「 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ | © 🅚Ⓘ︎︎🅝︎Ⓖ • 𝐴𝑛𝑑ℎ𝑦𝑐𝑎ᵍᵃⁿᶻ︎ 」', 
                    jpegThumbnail: './thumbnail.jpg'
                          }
                        }
                      }
conn.sendMessage(m.chat,{ text: wm}, { quoted: anu })
}



handler.help = ['doc']

handler.tags = ['ᴘᴇɴᴅɪɴɢ sᴛᴜғғ']

handler.command = /^doc$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true

export default handler
