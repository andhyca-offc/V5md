let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
✧─────[ *Group Official* ]─────✧
🍀 Group 1 :
https://chat.whatsapp.com/DTtOcmrCAkKFrVZJD6jb6M
🍀 Group 2 :
https://chat.whatsapp.com/FlUqXS0bje12Fxdw8BVykk
🍀 Group 3 :
https://chat.whatsapp.com/LMXN8ZkUmvfHGsURriEJOE
✧──────────···──────────✧
`.trim()
conn.sendButton(m.chat, str, `${botol}`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
