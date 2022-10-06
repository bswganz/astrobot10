const isLinkwame = /wa.me/i // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiLinkwame = isLinkwame.exec(m.text)
    
    if (chat.antiLinkwame && isAntiLinkwame) {
        await conn.sendButton(m.chat, `*Link Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinkwame', '/disable antilinkwame'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    
    await conn.sendButton(m.chat, `*Limit anda di reset ke 0*
    
    Karena Mengirim Link Telegram
    
    Ketik *.limit* untuk cek limit`, wm, null, [
        ['Ngechit', `${usedPrefix}ngechit`]
    ], m)
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    return !0
}
