let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
• @${nomorown.split`@`[0]} •
––––═┅═━ ${nameown} ═┅═━––––
• @+62 857-9440-8499 •
––––═┅═━ ${nameown} ═┅═━––––
• @+62 895-3305-84590 •
––––═┅═━ ${nameown} ═┅═━––––

📮 *Note:*
⪧ Owner tidak menerima save contact
⪧ Owner berhak blockir tanpa alasan
⪧ Berbicaralah yang sopan & tidak spam
⪧ Owner Hanya merespon yang berkaitan dengan BOT
⪧ No Telp
⪧ Chat aneh = Block`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
*💌 Nama* : Andhyca
*✉️ Nama RL* : 𝐴𝑛𝑑ℎ𝑦𝑐𝑎ᵇᵒᵗᶻ
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : Privateˡᵃᵘᶜʰ
*🎨 Umur* : Privateʸᵉᵃʳˢ ᵒˡᵈ
*🧮 Kelas* : Privateᶜˡᵃˢˢ
*🧩 Hobby* : Ngebot, Menulis, Dan Membuat Sketch
*💬 Sifat* : Baik, Ramah, Mudah Memahami Orang Lain
*🗺️ Tinggal* : Indonesia, jawa, bandung
*❤️ Suka* : Semuanya Kecuali 🪵 Dan 🪨
*💔 Benci* : Jin, Syetan, Dajjal, Manusia Caper, Orang Aneh.

*- - sᴋɪʟʟs: - -* 
> JavaScript [70.7%]
> Python [11.4%]
> CSS [4.1%]
> Html [0.9%]
> Recode [76.8%]
> Create Webs [88.9%]

───────[ SOSIAL MEDIA ]───────

📷 *Instagram:* ${sig}
🐈 *Group Chat:* ${sgc}
🥏 *Whatsapp* wa.me/${nomorown}
🌐 *Discord:* https://discord.com/
🌏 *Website:* https://wa.me/6285872761910
🎶 *Tiktok:* https://tiktok.com/

`
  let teks = ' '
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	    {title: "📞 • Nomor", rowId: ".owner nomor"},
	{title: "📜 • Biodata", rowId: ".owner bio"},
	{title: "🌐 • Website", rowId: ".website"},
	{title: "🌎 • Script", rowId: ".sc"},
	{title: "👤 • Nama", rowId: ".nameown"},
	{title: "🏮 • Youtube", rowId: ".ytbot"},
	{title: "📸 • Instagram", rowId: ".ig"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".donasi"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "🌹CLICK HERE ꊥ",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["🎀 ʟɪsᴛ ᴍᴇɴᴜ", '.command'], [null, null],[null,null]], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['creator']
handler.tags = ['main', 'info']
handler.command = /^(creator)/i

export default handler
