// @flow

import React from 'react';
import styles from './css/service.scss';

type Props = {};

type State = {};

export default class Top extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className={styles.serviceWrapper}>
        <div className={`titleContentsPadding ${styles.topMain}`}>
          <h1 className={styles.h1}>Our services</h1>
          <h2 className={styles.subTitle}>
            我々がご提供できるサービスについて
            <br />
            ご説明いたします。
          </h2>
        </div>

        <div className={styles.consulting}>
          <div className={styles.left}>
            <p className={styles.subText}>CONSULTING SERVICE</p>
            <h2 className={`${styles.h2}`}>UI / UX コンサルティング</h2>
            <p>
              現在運用されているホームページ、または新規で作成するホームページに対してのコンサルティングを実施致します。
              <br />
              基本的な流れとしては、ホームページで実現したいことの確認と、ユーザー視点でのExperienceとのGapをどのように埋めていくのかをご提案させていただきます。
            </p>
            <p>
              予算に応じてDesign
              Systemの制作や、CSS・Designフレームワークの制作、ターゲットユーザー層に対してのユーザーテストの実施等、様々なアプローチから、ユーザー体験をより良いものに作り上げるサポートをさせていただきます。
            </p>
          </div>
          <div className={styles.right}>
            <p className={styles.subText}>PRICE LIST</p>
            <p>サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
          </div>
          <div />
        </div>
        <div className={styles.design}>
          <div className={styles.left}>
            <p className={styles.subText}>PRICE LIST</p>
          </div>
          <div className={styles.right}>
            <p className={styles.subText}>DESIGN SERVICE</p>
            <h2 className={`${styles.h2}`}>デザイン</h2>
            <p>
              御社のブランディングイメージを形にするお手伝いを致します。
              <br />
              経験豊富な弊社精鋭のデザイナーたちが最高のおもてなしを提供します。 具体的には。
            </p>
            <p>
              ・ロゴデザイン
              <br />
              ・名刺作成
              <br />
              ・パンフレットデザイン
              <br />
              ・プレゼンテーション資料作成
              <br />
              ・LP / 販売促進サイトデザイン
              <br />
              ・ホームページデザイン
              <br />
              ・動画制作
            </p>
          </div>
          <div />
        </div>
        <div className={styles.develop}>
          <div className={styles.left}>
            <p className={styles.subText}>DEVELOPMENT SERVICE</p>
            <h2 className={`${styles.h2}`}>ホームページ制作</h2>
            <p>
              HTML、CSS、Javascriptでのコーディング作業をご提供致します。
              <br />
              全ての制作物はレスポンシブ(PC、SP、Tablet等のマルチデバイス)に対応したコーディングをご提供しています。
            </p>
            <p>
              また、SEO対策を考慮したセマンティックなマークアップや、効果的なメタデータのご提案、httpsへの対応等、SEOに強みのあるコーディングの実績にご講評頂いております。
            </p>
            <p>
              その他、既存ページのWordpress化やオリジナルのテンプレート作成も、破損したWordpressの修正なども実施しております。
            </p>
            <p>Reactなど、フレームワークを利用したSPA開発などもご相談ください。</p>
          </div>
          <div className={styles.right}>
            <p className={styles.subText}>PRICE LIST</p>
            <p>サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
          </div>
          <div />
        </div>
      </div>
    );
  }
}
