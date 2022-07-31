
let handler = async (m, { conn }) => {
  try {
    /*conn.sendTemplateButtonDoc(m.chat, col, `*Link Group:* ${await conn.getName(m.chat)}\n\nhttps://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat), wm, 'Info Grup', '.infogrup', m)*/

conn.sendMessage(m.chat, {
  text: `Andhyca BOT Website`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `📸 Instagram Owner`,
      url: 'https://instagram.com/andhycarsrofficial'
    }
  }],
  footer: wm
})

  } catch {
    conn.reply(m.chat, `*𝗔𝗖𝗖𝗦𝗘𝗦𝗦 𝗔𝗥𝗘 𝗗𝗘𝗡𝗜𝗘𝗗* 〄\n *ᴄᴏᴍᴍᴀɴᴅ* •Jadikan @${conn.user.jid.split('@')[0]} sebagai admin untuk menggunakan perintah ini!`, m, { mentions: [conn.user.jid] })
  }
}
handler.help = ['website']
handler.tags = ['info']
handler.command = /^web|website?$/i

handler.group = false
handler.admin = false
//handler.botAdmin = true

export default handler 