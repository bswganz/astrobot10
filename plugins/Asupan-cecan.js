import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = ('https://api.zeeoneofc.xyz/api/cecan/indonesia?apikey=oODE7ZTH')
	conn.sendButton(m.chat, 'bagaikan bidadari 🐦', wm, await(await fetch(res)).buffer(), [['Next',`.cecan`]],m)
}
handler.help = ['cecan']
handler.tags = ['asupan', 'limitmenu']
handler.limit = true
handler.command = /^(cecan)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
