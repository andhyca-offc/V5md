import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
	let ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text()
    let nek = ne.split('\n')
    let neko = pickRandom(nek)
	conn.sendButton(m.chat, '『 𝗗𝗢𝗡𝗘 』\n• Created 🅚︎Ⓘ︎🅝︎Ⓖ︎ • 𝐴𝑛𝑑ℎ𝑦𝑐𝑎ᵍᵃⁿᶻ\n• Supported 𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳ོ あ⁩', wm, neko, [['🚀 Nekopoi','.neko']],m)
}
handler.command = /^(neko)$/i
handler.tags = ['anime']
handler.help = ['neko']
handler.limit = true
export default handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}