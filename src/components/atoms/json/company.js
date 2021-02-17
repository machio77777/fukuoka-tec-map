
// 共通定数
export const CATEGORY_ALL = 'all';
export const CATEGORY_SIER = 'sier';
export const CATEGORY_JISHA_SERVICE = 'jisha_service';
export const CATEGORY_CONSULTING = 'consulting';
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
    createData(11, 'レベルファイブ', 'https://www.level5.co.jp/index.php', 33.582426, 130.400831, CATEGORY_ETC),
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
  ]
}