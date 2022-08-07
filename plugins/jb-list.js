let handler = async (m, { conn }) => {
let info = `
*${htki} STORE ${htka}*
          
*📦 Kalau mau dapat discon join GC Bot*
Link: https://chat.whatsapp.com/DTtOcmrCAkKFrVZJD6jb6M

–––––– *🐾 ᴋᴇʙɪᴊᴀᴋᴀɴ 🐾* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan Join Gc Bot!

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

⌕ ❙❘❙❘❘❚❙❘❘❚❘❘❘ ❙❘❘❙ ❘❙❚❘❘❚ ❘❙❙❙❚❙❘❙❚❘❙ ⌕
`
const sections = [
   {
	title: `✃ LIST`,
	rows: [
	    {title: "🛍 ️Jasa Add Follower IG", rowId: '.jasafollower', description: 'Biar Followermu banyak' },
	    {title: "🛍 ️Jasa Premium Member", rowId: '.premium', description: 'Unlock fitur premium' },
	{title: "🛍️ Jasa Sewa BOT", rowId: '.sewabot', description: 'Biar BOT masuk GCmu' },
	{title: "🛍 Jasa Join GC Free 1 Hari", rowId: '.jasafree', description: 'Only one group' },
	{title: "🛍 Jasa Bikin Logo", rowId: '.bikinlogo', description: 'Kamu mau logo apa?' },
	{title: "🛍 Rpg Store", rowId: 'storerpg', description: 'Ayo beli item RPG mu' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "🗃 ️Event", rowId: '.event', description: 'Event 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' },
	    {title: "💰 Sewa Bot", rowId: '.sewa', description: 'Mau sewa 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ?' },
	{title: "🌟 Buy Premium", rowId: '.premium', description: 'Biar limitmu unlimited' },
	{title: "🎀 List Menu", rowId: '.menu', description: 'All Features diBOT' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "📊 Discount", rowId: '.diskon', description: 'Penurunan harga Pembayaran' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "🛒 ʙ ᴜ ʏ",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['storebot']
handler.tags = ['store']
handler.command = /^storebot$/i

export default handler