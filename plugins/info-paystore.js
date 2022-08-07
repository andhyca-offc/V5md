let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '7'
let sn = '18'
let ss = '27'
let sp = '39'
let sv = '77'
//premium
let ph = '7'
let pn = '15'
let pp = '39'
let pv = '50'
let ppm = '77'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _${sh}k/grup (1 minggu)_
┊⫹⫺ *Normal:* _${sn}k/grup (1 bulan)_
┊⫹⫺ *Standar:* _${ss}k/grup (5 bulan)_
┊⫹⫺ *Pro:* _${sp}k/grup (12 bulan)_                                                      
┊⫹⫺ *Vip:* = _${sv}k/grup (Permanent)_
╰═┅═━––––––๑
╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _${ph}k (1 minggu)_
┊⫹⫺ *Normal:* _${pn}k (1 bulan)_
┊⫹⫺ *Pro:* _${pp}k (4 bulan)_
┊⫹⫺ *Vip:* _${pv}k (8 bulan)_                                               
┊⫹⫺ *Permanent:* = _${ppm}k (Unlimited)_
╰═┅═━––––––๑
*⫹⫺ PAYMENT:*
• *Pulsa:* [${ppulsa}]
• *Dana:* [${pdana}]
• *GoPay:* [${pgopay}]

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau Discount? Join group BOT, Lihat list dibawah lalu pilih yang *💌 Group Official* !
🗣️: Scam ga nih kak?
💬: Enggalah

⌕ ❙❘❙❘❘❚❙❘❘❚❘❘❘ ❙❘❘❙ ❘❙❚❘❘❚ ❘❙❙❙❚❙❘❙❚❘❙ ⌕
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 𑁍 𝗛𝗘𝗠𝗔𝗧", rowId: '.order *Paket:* HEMAT • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sh + 'k (1 minggu)' },
	    {title: "🔖 𑁍 𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sn + 'k (1 bulan)' },
	{title: "🔖 𑁍 𝗦𝗧𝗔𝗡𝗗𝗔𝗥", rowId: '.order *Paket:* STANDAR • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + ss + 'k (5 bulan)' },
	{title: "🔖 𑁍 𝗣𝗥𝗢", rowId: '.order *Paket:* PRO • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sp + 'k (12 bulan)' },
	{title: "🔖 𑁍 𝗩𝗜𝗣", rowId: '.order *Paket:* VIP • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sv + 'k (Permanent)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 ᯽ 𝗛𝗘𝗠𝗔𝗧", rowId: '.order *Paket:* HEMAT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ph + 'k (1 minggu)' },
	    {title: "🌟 ᯽ 𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pn + 'k (1 bulan)' },
	{title: "🌟 ᯽ 𝗣𝗥𝗢", rowId: '.order *Paket:* PRO • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pp + 'k (4 bulan)' },
	{title: "🌟 ᯽ 𝗩𝗜𝗣", rowId: '.order *Paket:* VIP • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pv + 'k (8 bulan)' },
	{title: "🌟 ᯽ 𝗣𝗘𝗥𝗠𝗔𝗡𝗘𝗡𝗧", rowId: '.order *Paket:* PERMANENT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ppm + 'k (UNLIMITED)' },	
	]
	}, {
    title: `${htjava} INFO ✦-------`,
	rows: [
	    {title: "💌 ✎ Group Official", rowId: '.gcbot', description: '✔︎ Join biar dapet Discount' },
	    {title: "🎐 ✎ Event", rowId: '.event', description: '✔︎ Yakin gk mau event yang ada diBOT?...' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "🎀 Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler