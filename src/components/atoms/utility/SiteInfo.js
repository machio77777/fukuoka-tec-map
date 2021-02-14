import React, { Component } from 'react'

import { count } from '../json/company';

export default class SiteInfo extends Component {

  render() {
    const cnt = count();
    return (
      <div>
        <p>本サイトは福岡市に本社・支社を持つTEC企業をMAP上にまとめたものです。</p>
        <p>主に天神・博多駅周辺にある企業をまとめており、現在 <span className="point">{cnt}</span> 件が登録されています。</p>
        <p>MAP上のマーカーを押下すると、企業HPの公式URLをポップアップ表示されます。</p>
      </div>
    )
  }
}