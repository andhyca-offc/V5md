import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `☃️ *Mau Apa Cari Owner BOT?*\n`,wm + '\n\n' + botdate, giflogo, [['🎐 Bio Data Owner', '.creator'],['📸 Instagram Owner', '.ig'],['📽️ Youtube Owner', '.ytbot']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: '「 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ | © 🅚︎Ⓘ︎🅝︎Ⓖ︎ • 𝐴𝑛𝑑ℎ𝑦𝑐𝑎ᵍᵃⁿᶻ 」',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: 'https://youtube.com/channel/UCtt_8qM9i8x83BY_U8oozOg'
                      }}
})
}


handler.help = ['owner']
handler.tags = ['info']
handler.command = ['owner']
export default handler