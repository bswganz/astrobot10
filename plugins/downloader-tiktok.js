// ------------------------------------------------ ------------- mengikis kesalahan bochilteam ---------------------------------- ---------------
/*
impor pengambilan dari 'pengambilan simpul'
impor axios dari 'axios'
impor { tiktokdl, tiktokdlv2, tiktokdlv3 } dari '@bochilteam/scraper'

let handler = async (m, { samb, args, usedPrefix, perintah }) => {
    mencoba {
if (!args[0]) throw `Gunakan contoh ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { penulis: { nama panggilan }, video, deskripsi } = menunggu tiktokdlv3(args[0])
    .catch(async _ => menunggu tiktokdlv2(args[0]))
        .catch(async _ => menunggu tiktokdl(args[0]))
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Tidak dapat mengunduh video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4',
` *「 *
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
───── teks─ acocok dengan quali ─ ⇆ ◁ ㅤ ❚❚ ㅤ ▷ ㅤ ─ ─────ans─ Chulisansansansansans pirim ilangan ilangan.
*Nama panggilan:* ${nama panggilan}
*Deskripsi:* ${deskripsi}
_©WH-MODS-BOT-V1🍭_
`.trim(), m)
}
menangkap {
    if (!args[0]) melempar 'Uhm...url nya mana?'
  let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}`
  conn.send2ButtonVid(m.chat, `https://api.lolhuman.xyz/api/tiktokwm?apikey=${lolkey}&url=${args[0]}`, txt, wm, `No Wm`, ` .tiktoknowm ${args[0]}`, `Audio`, `.tta ${args[0]}`, m)
    }
}
handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['pengunduh']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

ekspor penangan default
*/

// --------------------------------------------- pakai scrape social_media_downloader -------------------------------------------------- ------

impor pengambilan dari 'pengambilan simpul'
impor axios dari 'axios'
impor { tiktok } dari "social_media_downloader"
let handler = async (m, { conn, usedPrefix, perintah, teks, argumen }) => {
if (!args[0]) melempar 'Masukkan Tautan'
mencoba {
let p = menunggu tiktok(args[0])
    if (!p.link) melempar 'Tidak dapat mengunduh video!'
    let cap = `*「 🇹 ᴛ ɪ ᴏ *
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
───── teks─ acocok dengan quali ─ ⇆ ◁ ㅤ ❚❚ ㅤ ▷ ㅤ ─ ─────ans─ Chulisansansansansans pirim ilangan ilangan.
*Nama panggilan:* ${p.dev}
*Deskripsi:* ${p.description}
*Url:* ${p.url}

_©WH-MODS-BOT-V1🍭_
`.trim()
conn.send2ButtonVid(m.chat, p.link, cap, author, `Donasi`, `.donasi`, `Audio`, `.tta ${args[0]}`, fakes, adReply)
} tangkap (e) {
    melempar kesalahan
    }
}

handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloaders']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

ekspor penangan default
