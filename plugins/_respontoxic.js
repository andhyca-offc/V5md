//*
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `${global.wm}
    
📮 *Note:*
• Karena ${pushname} telah berkata Toxic, Terpaksa BOT akan melakukan iklan
• Izin promotion/promosi/iklan kepada ADMIN dan SEMUA PESERTA

*BINGUNG MAU SEWA BOT? SEWA 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐁𝐨𝐭𝐳-𝐌𝐝ོ AJA!*
_⫹⫺ 1 Minggu = Rp.5k_ 𝗛𝗲𝗺𝗮𝘁
_⫹⫺ 1 Bulan = Rp.15k_ 𝗡𝗼𝗿𝗺𝗮𝗹
_⫹⫺ 5 Bulan = Rp.23k_ 𝗦𝘁𝗮𝗻𝗱𝗮𝗿
_⫹⫺ 12 Bulan = Rp.35k_ 𝗣𝗿𝗼
_⫹⫺ Permanen + 1 bulan Premium = Rp.50K_ 𝗩𝗶𝗽

𝐏𝐚𝐲𝐦𝐞𝐧𝐭𝐍𝐲𝐚𝐚 :
• Ovo
• Dana
• Gopay
• Pulsa


*JANGAN LUPA PREMIUMNYA BIAR FITUR PREMIUM KEBUKAN, DAN LIMIT MU JADI UNLIMITED!*
_⫹⫺ 1 Minggu = Rp.5k_ 𝗛𝗲𝗺𝗮𝘁
_⫹⫺ 1 Bulan = Rp.10k_ 𝗡𝗼𝗿𝗺𝗮𝗹
_⫹⫺ 4 Bulan = Rp.30k_ 𝗦𝘁𝗮𝗻𝗱𝗮𝗿
_⫹⫺ 8 Bulan = Rp.40k_ 𝗣𝗿𝗼
_⫹⫺ Permanen = Rp.55K_ 𝗩𝗶𝗽

𝐏𝐚𝐲𝐦𝐞𝐧𝐭𝐍𝐲𝐚𝐚 :
• Ovo
• Dana
• Gopay
• Pulsa
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🔥👿 *JAGOAN MANA NGENTOD?* 😈🔥', 'status@broadcast')
}
handler.customPrefix = /^(anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|asu)$/i
handler.command = new RegExp

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
 