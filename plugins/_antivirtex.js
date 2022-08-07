const { MessageType } = require('@adiwajshing/baileys')
let handler = async function(m, { conn , args, text, isAdmin, isBotAdmin, groupMetadata }) {

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let asu = m.sender
  let vir = asu.split("@s.whatsapp.net")[0]
  if (!m.isGroup) { 
    await m.reply('_Memang-Nya Virtext Itu Mempan?_')
    conn.blockUser(m.sender, "add")
  } else {
  	if (isAdmin) return m.reply('*Admin Mengapa?*')
    await conn.reply(m.chat, `
*–––––– 『 Anti Virtext 』 ––––––*

_Terdeteksi *@${asu.split("@")[0]}* telah mengirim virtex!_
Maaf Kamu akan dikick oleh *ANDHYCA BOT*
`.trim(), m, { 
      contextInfo: {  
        mentionedJid: [asu]
      }
    })
 if (isBotAdmin) {
   conn.groupRemove(m.chat, [asu])
     } else { 
     	m.reply('*𝗔𝗖𝗖𝗦𝗘𝗦𝗦 𝗔𝗥𝗘 𝗗𝗘𝗡𝗜𝗘𝗗* 〄\n *ᴄᴏᴍᴍᴀɴᴅ* • Fitur ini Hanya bisa di gunakan ketika Bot Menjadi Admin !')
    }
  } conn.sendMessage(vir + '@s.whatsapp.net', `${m.text}`, MessageType.text)
}
handler.customPrefix = //i
handler.command = new RegExp

handler.fail = null

export default handler 
