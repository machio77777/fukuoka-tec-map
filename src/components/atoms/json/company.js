
// 共通定数
export const CATEGORY_ALL = 'all';
export const CATEGORY_SIER = 'sier';
export const CATEGORY_JISHA_SERVICE = 'jisha_service';
export const CATEGORY_CONSULTING = 'consulting';
export const CATEGORY_MAKER = 'maker';
export const CATEGORY_GAME = 'game'
export const CATEGORY_ETC = 'etc';

// 企業一覧
export function show() {
  return createCompanys();
}
// 登録企業件数
export function count() {
  return createCompanys().length;
}

function createData(
  id,         // ID
  name,       // 企業名
  url,        // 企業URL 
  longitude,  // 緯度
  latitude,   // 経度
  category    // カテゴリ（自社サービス | SIer | コンサル | その他）
) { return { 
  id: id, name: name, url: url, idx: [longitude, latitude], category: category
};};

function createCompanys() {
  return [
    createData(1, 'アジアクエスト', 'https://www.asia-quest.jp/', 33.590505, 130.396005, CATEGORY_SIER),
    createData(2, 'ペンシル', 'https://www.pencil.co.jp/', 33.589216, 130.402635, CATEGORY_CONSULTING),
    createData(3, 'ヌーラボ', 'https://nulab.com/ja/', 33.58655, 130.392373, CATEGORY_JISHA_SERVICE),
    createData(4, 'しくみデザイン', 'https://www.shikumi.co.jp/', 33.585434, 130.417267, CATEGORY_ETC),
    createData(5, 'GMOペパボ', 'https://pepabo.com/', 33.590124, 130.396294, CATEGORY_JISHA_SERVICE),
    createData(6, 'エニセンス', 'https://anysense.co.jp/', 33.592322, 130.402154, CATEGORY_ETC),
    createData(7, 'キャッチアップ', 'https://catchup.co.jp/', 33.590148, 130.391484, CATEGORY_ETC),
    createData(8, 'さくらインターネット', 'https://www.sakura.ad.jp/corporate/', 33.588544, 130.389413, CATEGORY_JISHA_SERVICE),
    createData(9, 'クラウドエース', 'https://www.cloud-ace.jp/', 33.587974, 130.423059, CATEGORY_SIER),
    createData(10, 'ラック', 'https://www.lac.co.jp/', 33.588089, 130.416331, CATEGORY_SIER),
    createData(11, 'レベルファイブ', 'https://www.level5.co.jp/index.php', 33.582426, 130.400831, CATEGORY_GAME),
    createData(12, 'クラスメソッド', 'https://classmethod.jp/', 33.590233, 130.424018, CATEGORY_SIER),
    createData(13, 'チームラボ', 'https://www.team-lab.com/', 33.588409, 130.404367, CATEGORY_SIER),
    createData(14, 'ヤマップ', 'https://corporate.yamap.co.jp/', 33.597227, 130.408528, CATEGORY_JISHA_SERVICE),
    createData(15, 'オンサイト', 'https://on-sight.biz/', 33.59246, 130.402214, CATEGORY_SIER),
    createData(16, 'ウルシステムズ', 'https://www.ulsystems.co.jp/', 33.59728, 130.409324, CATEGORY_CONSULTING),
    createData(17, 'SHIFT', 'https://www.shiftinc.jp/', 33.594678, 130.397856, CATEGORY_SIER),
    createData(18, 'freee', 'https://corp.freee.co.jp/', 33.590874, 130.39855, CATEGORY_JISHA_SERVICE),
    createData(19, 'TIS西日本株式会社', 'https://www.tis-w.co.jp/', 33.588709, 130.422767, CATEGORY_SIER),
    createData(20, 'Fusic', 'https://fusic.co.jp/works/', 33.593675, 130.40133, CATEGORY_ETC),
    createData(21, 'Braveridge', 'https://www.braveridge.com/', 33.576393, 130.253079, CATEGORY_ETC),
    createData(22, 'Gigi', 'https://www.gigi.tokyo/', 33.589162, 130.395307, CATEGORY_JISHA_SERVICE),
    createData(23, 'シード･コーポレーション', 'https://seed24.jp/', 33.589162, 130.395307, CATEGORY_JISHA_SERVICE),
    createData(24, 'サイバーコネクトツー', 'http://www.cc2.co.jp/', 33.593468, 130.415998, CATEGORY_GAME),
    createData(25, 'ガンバリオン', 'https://www.ganbarion.co.jp/', 33.581914, 130.40291, CATEGORY_GAME),
    createData(26, 'アカツキ福岡', 'https://fukuoka.aktsk.jp/', 33.582702, 130.392294, CATEGORY_GAME),
    createData(27, 'システムソフト・ベータ', 'http://www.ss-beta.co.jp/index.html', 33.594215, 130.405297, CATEGORY_GAME),
    createData(28, 'フロム・ソフトウェア', 'https://www.fromsoftware.jp/jp/', 33.598218, 130.406425, CATEGORY_GAME),
    createData(29, 'KLab', 'https://www.klab.com/jp/', 33.595835, 130.395745, CATEGORY_GAME),
    createData(30, 'クロスゲームズ', 'https://www.cross-games.jp/', 33.589864, 130.39053, CATEGORY_GAME),
    createData(31, 'ベガコーポレーション', 'https://www.vega-c.com/', 33.591981, 130.4111, CATEGORY_JISHA_SERVICE),
    createData(32, 'エクシーズ', 'https://www.xseeds.co.jp/', 33.59609, 130.417163, CATEGORY_ETC),
    createData(33, 'アソウ・アルファ', 'https://alpha.ahc-net.co.jp/', 33.590695, 130.397278, CATEGORY_ETC),
    createData(34, '富士通九州システムズ', 'https://www.fujitsu.com/jp/group/kyushu/', 33.58904, 130.430261, CATEGORY_MAKER),
    createData(35, 'メディアファイブ', 'http://www.media5.co.jp/', 33.582375, 130.400854, CATEGORY_ETC),
    createData(36, 'シティアスコム', 'https://www.city.co.jp/', 33.59243, 130.354117, CATEGORY_SIER),
    createData(37, 'ディーゼロ', 'https://www.d-zero.co.jp/', 33.582903, 130.399302, CATEGORY_ETC),
    createData(38, '九州NSソリューションズ', 'https://www.nssol.nipponsteel.com/kyushu/', 33.589971, 130.41768, CATEGORY_MAKER),
    createData(39, '富士ソフト', 'https://www.fsi.co.jp/', 33.581911, 130.424611, CATEGORY_SIER),
    createData(40, 'Sansan', 'https://jp.corp-sansan.com/', 33.589162, 130.395307, CATEGORY_JISHA_SERVICE),
    createData(41, 'サイバーコム', 'https://www.cy-com.co.jp/', 33.59466, 130.402738, CATEGORY_SIER),
  ]
}