let handler = async (m, { conn, usedprefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendButton(m.chat, '『 𝗗𝗢𝗡𝗘 』\n• Created 🅚︎Ⓘ︎🅝︎Ⓖ︎ • 𝐴𝑛𝑑ℎ𝑦𝑐𝑎ᵍᵃⁿᶻ\n• Supported 𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳ོ あ', author, global.API('https://some-random-api.ml', '/canvas/lolice', {
        avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), [['lolice', `${usedprefix}lolice`]], m)
}

handler.help = ['lolice']
handler.tags = ['maker']

handler.command = /^(lolice)$/i

export default handler