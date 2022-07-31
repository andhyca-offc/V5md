import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan Nama Characternya!\nContoh: #chara Rimuru`
  try {
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url, mal_id, type } = json.results[0]
let charaingfo = `『 𝗖𝗛𝗔𝗥𝗔𝗥𝗖𝗧𝗘𝗥 』

🏷•️ *Id Character:* ${mal_id}
👤• *Name:* ${name}
✏•️ *Nickname:* ${alternative_names}
🎨• *Character Type:* ${type === undefined ? 'Default' : type}
📺• — *Link Watch:* ${url}


『 𝗗𝗢𝗡𝗘 』
• Created 🅚︎Ⓘ︎🅝︎Ⓖ︎ • 𝐴𝑛𝑑ℎ𝑦𝑐𝑎ᵍᵃⁿᶻ
• Supported 𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳ོ あ⁩
                「 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐁𝐨𝐭𝐳-𝐌𝐝ོ あ⁩ 」`

  conn.sendFile(m.chat, image_url, '', charaingfo, m)
 } catch {
  m.reply('*𝗔𝗖𝗦𝗘𝗦𝗦 𝗔𝗥𝗘 𝗗𝗘𝗡𝗜𝗘𝗗* 〄\n *ᴄᴏᴍᴍᴀɴᴅ* • Character Is Unidefined, Coba Kata Kunci Yang Lain !')
 }
}
handler.help = ['character <nama>']
handler.tags = ['anime']
handler.limit = true
handler.command = /^(character)$/i
//kyaa jangan biarkan wabot-aq terbengkalai sampai nurutomo kembali
// Command - Re Edited -- TOXIC-DEVIL == || Character Type ||
export default handler 