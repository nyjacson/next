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

export default class Sidebar extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      slideFadeIn: false
    };
  }

  render() {
    const menus = [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'About',
        path: '/'
      },
      {
        name: 'Service',
        path: '/'
      },
      {
        name: 'Blog',
        path: '/'
      }
    ];

    const menuRendered = menus.map(m => {
      return (
        <li key={m.name} className={`${styles.li} ${this.state.slideFadeIn ? styles.slideFadeIn : ''}`}>
          <Link href={{ pathname: m.path }}>
            <a href>{m.name}</a>
          </Link>
        </li>
      );
    });
    return (
      <div>
        {this.props.open ? (
          <a href className={styles.sidebarDim} onClick={this.props.onToggleSlider}>
            &nbsp;
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
