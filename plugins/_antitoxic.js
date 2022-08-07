let handler = m => m

let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|asu/i // tambahin sendiri

handler.before = function (m, { isOwner, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe && isOwner) return !0
    let chat = db.data.chats[m.chat]
    let user = db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)

    if (!chat.antiBadword && !chat.isBanned && !user.banned && isBadword && !isOwner && !isAdmin) {
        user.warn += 1
        this.sendButton(m.chat, `*–––––– 『 Badword terdeteksi! 』 ––––––*
Warning: ${user.warn} / 3
Jika warning mencapai 3 kamu akan *dibanned+kick*

    
📮 *Note:*
• Karena salah satu member disini telah berkata Toxic, Terpaksa BOT akan melakukan iklan
• Izin promotion/promosi/iklan kepada ADMIN dan SEMUA PESERTA

*BINGUNG MAU SEWA BOT? SEWA 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐁𝐨𝐭𝐳-𝐌𝐝ོ AJA!*
_⫹⫺ 1 Minggu = Rp.5k_ 𝗛𝗲𝗺𝗮𝘁
_⫹⫺ 1 Bulan = Rp.15k_ 𝗡𝗼𝗿𝗺𝗮𝗹
_⫹⫺ 5 Bulan = Rp.23k_ 𝗦𝘁𝗮𝗻𝗱𝗮𝗿
_⫹⫺ 12 Bulan = Rp.35k_ 𝗣𝗿𝗼
_⫹⫺ Permanen = Rp.50K_ 𝗩𝗶𝗽

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


“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`, wm, '💌 Group Official', sgc, '🌹 Owner', '.owner', m)
        if (user.warn >= 3) {
            user.banned = true
            if (m.isGroup) {
                if (isBotAdmin) {
                	this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
                   //this.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
                }
            }
        }
    }
    return !0
}
export default handler 