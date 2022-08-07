let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw '*𝗔𝗖𝗦𝗘𝗦𝗦 𝗔𝗥𝗘 𝗗𝗘𝗡𝗜𝗘𝗗* 〄\n *ᴄᴏᴍᴍᴀɴᴅ* • Pengguna tidak ada didalam data base !'
    m.reply(`${global.db.data.users[who].limit} Limit Left=͟͟͞͞🏀`)
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
export default handler 