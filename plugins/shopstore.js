import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
//-----PRICE
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00 
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    
    let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)

//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let wibb = `${wktuwib}`

let info = 
`
*100% Aᴍᴀɴᴀʜ, Sᴛᴏʀᴇ Nʏᴀ ᴀᴅᴀ ᴅɪʙᴀᴡᴀʜ ɪɴɪ*
`
  /*  {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "🔖 VIP", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },*/
const sections = [{
title: `⟥⟝⟢⟨ Jᴀsᴀ ⟩⟣⟞⟤`,
rows: [
{title: "⟣⟨ JASA Hᴇʀᴏᴋᴜ ⟩⟢",
rowId: '.order ᴊᴀsᴀʙᴏᴛ Hᴇʀᴏᴋᴜ',
description: 'Pʀɪᴄᴇ ᴊᴀsᴀ ɪɴɪ 10 ᴋ' },
{title: "⟣⟨ JASA Mᴏɴɢᴏᴅʙ ⟩⟢",
rowId: '.order ᴊᴀsᴀʙᴏᴛ ᴍᴏɴɢᴏᴅʙ',
description: 'Pʀɪᴄᴇ ᴊᴀsᴀ ɪɴɪ 5 ᴋ' },
]},{
title: `⟥⟝⟢⟨ Bɪᴋɪɴ Fɪᴛᴜʀ ⟩⟣⟞⟤`,
rows: [
{title: "⟣⟨ Fɪᴛᴜʀ Sᴛᴏʀᴇ ⟩⟢",
rowId: '.order Fɪᴛᴜʀ Sᴛᴏʀᴇ',
description: 'Pʀɪᴄᴇ Bɪᴋɪɴ Fɪᴛᴜʀ ɪɴɪ 5 ᴋ' },
]}
]
conn.reply(m.chat, `*Nɪʜ ᴋᴀᴋ ʟɪsᴛ sᴛᴏʀᴇɴʏᴀ ᴍᴀsɪʜ ᴅɪᴋɪᴛ*`.trim(),m) 

const listMessage = {
  text: info,
  footer:  `Hᴀʟʟᴏ Wᴇʟᴄᴏᴍᴇ Tᴏ Mʏ Bᴏᴛ Sᴛᴏʀᴇ ${name}\n📆 : ${week} ${weton} ${date}\n⌛: ${wibb}`,
  title: '⬒ ───⟢⟨ *Mʏ Lɪsᴛ Sᴛᴏʀᴇ* ⟩⟣─── ⬒',
  buttonText: "Pesan Now!",
  sections
}
 
let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
  
  case 'jasabot': 
  let teks = `*${htki} ${command.toUpperCase()} ${htka}*\n📮 : ${text}\n*- @${m.sender.split`@`[0]}*`
conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
   m.reply('☑️ Pesan Telah terkirim ke Owner!\n_*Menunggu Balasan Dari Owner...*_')
  break
  case 'aa': {
  m.reply('ʜᴀʟᴏ:ᴠ')
  }
  break
  
  default:
  if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
  throw false
  }
  /* m.reply('☑️ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')*/
}

handler.help = ['store']
handler.tags = ['store']
handler.command = /^(store|olshop)$/i

export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}