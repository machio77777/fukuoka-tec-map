
function createData(
  name, 
  url, 
  longitude, 
  latitude,
  area,
) { return { 
  name: name, 
  url: url, 
  idx: [longitude, latitude],
  area: area
};};

function createCompanys() {
  return [
    createData('アジアクエスト', 'https://www.asia-quest.jp/', 33.590505, 130.396005, 'tenjin'), //
    createData('ペンシル', 'https://www.pencil.co.jp/', 33.589216, 130.402635, 'tenjin'), //
    createData('ヌーラボ', 'https://nulab.com/ja/', 33.58655, 130.392373, 'tenjin'), //
    createData('しくみデザイン', 'https://www.shikumi.co.jp/', 33.585434, 130.417267, 'hakata'),
    createData('GMOペパボ', 'https://pepabo.com/', 33.590124, 130.396294, 'tenjin'), //
    createData('エニセンス', 'https://anysense.co.jp/', 33.592322, 130.402154, 'tenjin'),
    createData('キャッチアップ', 'https://catchup.co.jp/', 33.590148, 130.391484, 'tenjin'), //
    createData('さくらインターネット', 'https://www.sakura.ad.jp/corporate/', 33.588544, 130.389413, 'tenjin'), //
    createData('クラウドエース', 'https://www.cloud-ace.jp/', 33.587974, 130.423059, 'hakata'),
    createData('ラック', 'https://www.lac.co.jp/', 33.588089, 130.416331, 'hakata'),
    createData('レベルファイブ', 'https://www.level5.co.jp/index.php', 33.582426, 130.400831, 'tenjin'), //
    createData('クラスメソッド', 'https://classmethod.jp/', 33.590233, 130.424018, 'hakata'),
    createData('チームラボ', 'https://www.team-lab.com/', 33.588409, 130.404367, 'tenjin'), //
    createData('ヤマップ', 'https://corporate.yamap.co.jp/', 33.597227, 130.408528, 'hakata'),
    createData('オンサイト', 'https://on-sight.biz/recruit/', 33.59246, 130.402214, 'tenjin'), //
  ]
}

export function show() {
  return createCompanys();
}

export function count() {
  return createCompanys().length;
}