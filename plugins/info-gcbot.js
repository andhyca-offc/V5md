let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.wm
let str = `
✧─────『 *Group Official* 』─────✧
🍀 AndhycaBotz OFC :
https://chat.whatsapp.com/DTtOcmrCAkKFrVZJD6jb6M
🍀 AndhycaFriend :
https://chat.whatsapp.com/FlUqXS0bje12Fxdw8BVykk
🍀 ShiroBot OFC :
https://chat.whatsapp.com/LMXN8ZkUmvfHGsURriEJOE
✧─────『 *Keuntungan* 』─────✧
☘ Bisa Gunain fitur grup
☘ Tau info tentang BOT
☘ BOT online 24 jam
☘ Discount harga sewa BOT
☘ Discount harga jadi Premium Member
✧──────────···──────────✧
`.trim()
conn.sendButton(m.chat, str, `${botol}`, [['🎀 List Menu', '.menu'],['🎗 Sewa BOT', '.sewabot'],['🎁 Buy Premium', '.premium']],m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
