import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = ('https://api.zeeoneofc.xyz/api/anime/luffy?apikey=oODE7ZTH')
	conn.sendButton(m.chat, 'Saitama Sini maju😎', wm, await(await fetch(res)).buffer(), [['Next',`.lutfy`]],m)
}
handler.help = ['lutfy']
handler.tags = ['anime', 'limitmenu']
handler.limit = true
handler.command = /^(lutfy)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
