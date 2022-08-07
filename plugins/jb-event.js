let handler  = async (m, { conn, usedPrefix: _p }) => {
let event = `
┏━°❀❬ *EVENT*❭❀°━┓
┃
┃☺︎︎ *Hanya berlaku bulan ini!* ☻︎
┃
┃> ```Sewa bot:```
┃• ~7K/Grup = (1 minggu)~
┃↳ 5K/Grup = (1 minggu) 📉
┃• ~18K/Grup = (1 bulan)~
┃↳ 15K/Grup = (1 bulan) 📉
┃• ~27K/Grup = (5 bulan)~
┃↳ 23K/Grup = (5 bulan) 📉
┃• ~39K/Grup = (12 bulan)~
┃↳ 35K/Grup = (12 bulan) 📉
┃• ~77K/Grup = (Permanen)~
┃↳ 60K/Grup = (Permanen) 📉
┃
┃> ```Buy Premium:```
┃• ~7K = (1 minggu)~
┃↳ 5K = (1 minggu) 📉
┃• ~15K = (1 bulan)~
┃↳ 10K = (1 bulan) 📉
┃• ~39K = (4 bulan)~
┃↳ 30K = (4 bulan) 📉
┃• ~50K = (8 bulan)~
┃↳ 40K = (8 bulan) 📉
┃• ~77K = (Permanen)~
┃↳ 60K = (Permanen) 📉
┃
┃
┃📮 *Note:*
┃↳ Cara dapetinnya? join grup bot, ketik *.gcbot*
┃↳ No keluar grup setelah masuk, melanggar? ban & block permanen
┃↳ Tidak menerima uang cicilan
┃↳ Bantu sebarin
┗━━━━━━━━━━━━━━━━
`.trim()

  conn.fakeReply(m.chat, event, '62895330584590@s.whatsapp.net', '*Event New*')
}
handler.help = ['event']
handler.tags = ['store']
handler.command = /^(event)$/i

handler.fail = null 

export default handler 

//BELUM JADI