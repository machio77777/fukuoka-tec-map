
function createData(name, url, longitude, latitude) {
  return { name: name, url: url, idx: [longitude, latitude] };
}

export function show() {
  return [
    createData('アジアクエスト', 'https://www.asia-quest.jp/', 33.590505, 130.396005),
    createData('ペンシル', 'https://www.pencil.co.jp/', 33.589216, 130.402635),
    createData('ヌーラボ', 'https://nulab.com/ja/', 33.58655, 130.392373),
    createData('しくみデザイン', 'https://www.shikumi.co.jp/', 33.585434, 130.417267),
    createData('GMOペパボ', 'https://pepabo.com/', 33.590124, 130.396294),
    createData('エニセンス', 'https://anysense.co.jp/', 33.592322, 130.402154),
    createData('キャッチアップ', 'https://catchup.co.jp/', 33.590148, 130.391484),
    createData('さくらインターネット', 'https://www.sakura.ad.jp/corporate/', 33.588544, 130.389413),
    createData('クラウドエース', 'https://www.cloud-ace.jp/', 33.587974, 130.423059),
    createData('ラック', 'https://www.lac.co.jp/', 33.588089, 130.416331),
    createData('レベルファイブ', 'https://www.level5.co.jp/index.php', 33.582426, 130.400831),
    createData('クラスメソッド', 'https://classmethod.jp/', 33.590233, 130.424018),
    createData('チームラボ', 'https://www.team-lab.com/', 33.588409, 130.404367),
    createData('ヤマップ', 'https://corporate.yamap.co.jp/', 33.597227, 130.408528),
    createData('オンサイト', 'https://on-sight.biz/recruit/', 33.592322, 130.402154),
  ]
}