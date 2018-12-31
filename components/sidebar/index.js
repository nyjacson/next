// @flow

import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link';
import IconCross from '../svg/iconCross';
import styles from './sidebar.scss';

type Props = {
  onToggleSlider: Function,
  open: boolean
};

type State = {
  slideFadeIn: boolean
};

export default class Sidebar extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.dimRef = React.createRef();
    this.stokerRef = React.createRef();
    this.state = {
      slideFadeIn: false,
      showStoker: false
    };
  }

  render() {
    const menus = [
      {
        name: 'トップ',
        path: '/'
      },
      {
        name: 'ご利用案内',
        path: '/',
        subMenu: [
          {
            name: 'ホームページ作成の事前準備',
            path: 'homepage'
          }
        ]
      },
      {
        name: 'サービスメニュー',
        path: 'service'
      },
      {
        name: '記事・ブログ',
        path: '/'
      },
      {
        name: 'お問い合わせ',
        path: 'contact'
      }
    ];

    if (this.state.slideFadeIn) {
      this.dimRef.current.addEventListener('mousemove', e => {
        this.stokerRef.current.style.left = `${e.clientX - 10}px`;
        this.stokerRef.current.style.top = `${e.clientY - 10}px`;
      });
      this.dimRef.current.addEventListener('mouseenter', () => {
        this.setState({
          showStoker: true
        });
      });
      this.dimRef.current.addEventListener('mouseleave', () => {
        this.setState({
          showStoker: false
        });
      });
    }

    const menuRendered = menus.map(m => {
      return (
        <li
          key={m.name}
          className={`${styles.li} ${this.state.slideFadeIn ? styles.slideFadeIn : styles.slideFadeOut}`}
        >
          <Link href={{ pathname: m.path }}>
            <a href onClick={this.props.onToggleSlider}>
              {m.name}
            </a>
          </Link>
        </li>
      );
    });
    return (
      <div>
        {this.props.open ? (
          <a href className={styles.sidebarDim} onClick={this.props.onToggleSlider} ref={this.dimRef}>
            &nbsp;
            <i
              ref={this.stokerRef}
              className={`${styles.stoker} ${this.state.showStoker ? styles.showStoker : ''}`}
              styles={{ left: this.state.xPos, top: this.state.yPos }}
            >
              <IconCross disableHover />
            </i>
          </a>
        ) : null}
        <CSSTransition
          in={this.props.open}
          timeout={200}
          classNames="slideFade"
          onEntered={() => {
            this.setState({
              slideFadeIn: true
            });
          }}
          onExit={() => {
            this.setState({
              slideFadeIn: false
            });
          }}
        >
          <nav className={`none ${styles.navWrapper}`}>
            <div className={styles.nav}>
              <div className={styles.crossIcon}>
                <a href onClick={this.props.onToggleSlider}>
                  <IconCross />
                </a>
              </div>
              <div>{menuRendered}</div>
            </div>
          </nav>
        </CSSTransition>
      </div>
    );
  }
}
