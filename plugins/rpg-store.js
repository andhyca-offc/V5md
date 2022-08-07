let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '7'
let sn = '6'
let ss = '12'
let sp = '8'
let sv = '7'
let ph = '6'
let pn = '11'
let pp = '15'
let pv = '50'
let ppm = '77'
let info = `
❏ –––––– 『 RPG - Store 』 ––––––
┊✦ Rp.${sh}K/40 Item
┊✦ Rp.${sn}K/800 Exp
┊✦ Rp.${ss}K/10 Bibit Tanaman
┊✦ Rp.${sp}K/12 Hewan
┊✦ Rp.${sv}K/6 Buah
┊✦ Rp.${ph}K/6 Limit Last Rpg
┊✦ Rp.${pn}K/7 Peralatan                                                      
┊✦ Rp.${pp}K/200 Exp Hewan
╰═┅═━––––––๑


⌕ ❙❘❙❘❘❚❙❘❘❚❘❘❘ ❙❘❘❙ ❘❙❚❘❘❚ ❘❙❙❙❚❙❘❙❚❘❙ ⌕
`
const sections = [
   {
	title: `${htjava} Rpg Store ✦-------`,
	rows: [
	    {title: "🎗️• Buy Item Bot", rowId: '.buyitembot', description: '☀︎︎ Yee.. kamu bakalan dapat 40 item' },
	    {title: "🎗️• Buy Exp", rowId: '.buyexpbot', description: '☀︎︎ Yee.. exp mu naik kalo beli ini' },
	{title: "🎗️• Buy Bibit Tanaman", rowId: '.buybibittanaman', description: '☀︎︎ Murah ni.. dapet 10 biji tanaman' },
	{title: "🎗️• Buy Hewan", rowId: '.buyhwnbot', description: '☀︎︎ Wow 12 hewan, keren banget' },
	{title: "🎗️• Buy Buah", rowId: '.buybuah', description: '☀︎︎ Nanti kekurangan buah lho >-<' },
	{title: "🎗️• Buy Limit Last Rpg", rowId: '.buylastrpg', description: '☀︎︎ Biar bisa claim hadiah' },
	{title: "🎗️• Buy Peralatan", rowId: '.buyperalatan', description: '☀︎︎ Peralatanmu ada berapa?...' },
	{title: "🎗️• Buy Exp Hewan", rowId: '.buyexphewan', description: '☀︎︎ lumayan si, 200 itu udah banyak buangedd' },
	]
    }, {
    title: `${htjava} Payment ✦-------`,
	rows: [
	    {title: "💳• 𝗗𝗮𝗻𝗮", rowId: '.dana', description: '𝗠𝗘𝗟𝗔𝗡𝗝𝗨𝗧𝗞𝗔𝗡: Pembayaran via Dana' },
	    {title: "💳• 𝗚𝗼𝗣𝗮𝘆", rowId: '.gopay', description: '𝗠𝗘𝗟𝗔𝗡𝗝𝗨𝗧𝗞𝗔𝗡: Pembayaran via GoPay' },
	{title: "💳• 𝗢𝘃𝗼", rowId: '.ovo', description: '𝗠𝗘𝗟𝗔𝗡𝗝𝗨𝗧𝗞𝗔𝗡: Pembayaran via Ovo' },
	{title: "💸• 𝗣𝘂𝗹𝘀𝗮 𝗜𝗻𝗱𝗼𝘀𝗮𝘁", rowId: '.pulsasmartfren', description: '𝗠𝗘𝗟𝗔𝗡𝗝𝗨𝗧𝗞𝗔𝗡: Pembayaran via Pulsa Indosat' },
	{title: "💸• 𝗣𝘂𝗹𝘀𝗮 𝗫𝗹 𝗔𝘅𝗶𝗮𝘁𝗮", rowId: '.pulsatri', description: '𝗠𝗘𝗟𝗔𝗡𝗝𝗨𝗧𝗞𝗔𝗡: Pembayaran via Pulsa Xl Axiata' },	
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
  buttonText: "𑁍 Click Here 𑁍",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['storerpg']
handler.tags = ['store']
handler.command = /^(storerpg)$/i

export default handler