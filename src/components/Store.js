import { createStore } from 'redux';
import { show } from './atoms/json/company'

const initData = {
  company : show()
}

// レデューサー
export function companyReducer(state = initData, action) {
  switch (action.type) {
    case 'ALL' :
      return viewReducer(state, action);
    case 'FIND' :
      return findReducer(state, action);
    default :
      return state;
  }
}

// 初期表示のレデュース処理
function viewReducer(state, action) {
  return {
    company : []
  }
}
// カテゴリ検索のレデュース処理
function findReducer(state, action) {

  let key = action.find;
  let companys = show();
  let fdata = [];

  if (key !== 'all') {
    companys.forEach((value) => {
      if (value.category.indexOf(key) >= 0) {
        fdata.push(value);
      }
    });
  } else {
    fdata = show();
  }
  return {
    company : fdata,
  };
}

// 初期表示のアクション
export function view() {
  return {
    type : 'ALL',
  }
}
// 絞り込みのアクション
export function find(key) {
  return {
    type : 'FIND',
    find : key
  }
}

// ストア作成
export default createStore(companyReducer);