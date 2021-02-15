
function createData(
  id,
  name, 
  url, 
  longitude, 
  latitude,
  area,
) { return { 
  id: id,
  name: name, 
  url: url, 
  idx: [longitude, latitude],
  area: area
};};

function createCompanys() {
  return [
    createData(1, 'アジアクエスト', 'https://www.asia-quest.jp/', 33.590505, 130.396005, 'tenjin'), //
    createData(2, 'ペンシル', 'https://www.pencil.co.jp/', 33.589216, 130.402635, 'tenjin'), //
    createData(3, 'ヌーラボ', 'https://nulab.com/ja/', 33.58655, 130.392373, 'tenjin'), //
    createData(4, 'しくみデザイン', 'https://www.shikumi.co.jp/', 33.585434, 130.417267, 'hakata'),
    createData(5, 'GMOペパボ', 'https://pepabo.com/', 33.590124, 130.396294, 'tenjin'), //
    createData(6, 'エニセンス', 'https://anysense.co.jp/', 33.592322, 130.402154, 'tenjin'),
    createData(7, 'キャッチアップ', 'https://catchup.co.jp/', 33.590148, 130.391484, 'tenjin'), //
    createData(8, 'さくらインターネット', 'https://www.sakura.ad.jp/corporate/', 33.588544, 130.389413, 'tenjin'), //
    createData(9, 'クラウドエース', 'https://www.cloud-ace.jp/', 33.587974, 130.423059, 'hakata'),
    createData(10, 'ラック', 'https://www.lac.co.jp/', 33.588089, 130.416331, 'hakata'),
    createData(11, 'レベルファイブ', 'https://www.level5.co.jp/index.php', 33.582426, 130.400831, 'tenjin'), //
    createData(12, 'クラスメソッド', 'https://classmethod.jp/', 33.590233, 130.424018, 'hakata'),
    createData(13, 'チームラボ', 'https://www.team-lab.com/', 33.588409, 130.404367, 'tenjin'), //
    createData(14, 'ヤマップ', 'https://corporate.yamap.co.jp/', 33.597227, 130.408528, 'hakata'),
    createData(15, 'オンサイト', 'https://on-sight.biz/recruit/', 33.59246, 130.402214, 'tenjin'), //
  ]
}

export function show() {
  return createCompanys();
}

export function count() {
  return createCompanys().length;
}