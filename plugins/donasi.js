import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let handler = async(m, { conn, text, usedPrefix, command }) => {
//let pp = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image')

let str = `${global.wm}

┌─「 Donasi • Pulsa 」
│ • *axis:* [083193831650]
│ • *axis2:* [083823763755]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Dana:* [6283823763755]
│ • *Gopay:* [Pake Qris Aja]
│ • *Ovo:* [Pake Qris Aja]
│ • *Link Aja:* [Pake Qris Aja]
❏────`
let wibu = `https://telegra.ph/file/1fc8425ad032e21b145bd.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Sewa Bot','.sewa', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/_ctzhid",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'AR-MODS-DEV-V3 MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
