import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.xteam.xyz/randomimage/jahy?APIKEY=YOURAPIKEY'
	conn.sendButton(m.chat, '『 𝗗𝗢𝗡𝗘 』\n• Created 🅚︎Ⓘ︎🅝︎Ⓖ︎ • 𝐴𝑛𝑑ℎ𝑦𝑐𝑎ᵍᵃⁿᶻ\n• Supported 𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳ོ あ', wm, await(await fetch(url)).buffer(), [['🚀 Jahy',`.${command}`]],m)
}
handler.command = /^(jahy)$/i
handler.tags = ['anime', 'premium', 'nsfw']
handler.help = ['jahy']
handler.premium = true
handler.limit = true

export default handler
