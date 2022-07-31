export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 7) {
                global.db.data.users[m.sender].banned = true
                m.reply('*⌦ kamu akan di banned*\n*karena spam.*\n\nLaporkan ke owner dengan cara klik link berikut\n\n📮 wa.me/62895394988123?text=📫Hallo+fangz+no+saya+di+banned+tolong+di+unban')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}