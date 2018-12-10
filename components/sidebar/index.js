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

const Sidebar = (props: Props) => {
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
      <li key={m.name}>
        <Link href={{ pathname: m.path }}>
          <a href>{m.name}</a>
        </Link>
      </li>
    );
  });
  return (
    <div>
      {props.open ? (
        <a href className={styles.sidebarDim} onClick={props.onToggleSlider}>
          &nbsp;
        </a>
      ) : null}
      <CSSTransition in={props.open} timeout={200} classNames="slideFade">
        <nav className={`none ${styles.navWrapper}`}>
          <ul className={styles.nav}>
            <div className={styles.crossIcon}>
              <a href onClick={props.onToggleSlider}>
                <IconCross />
              </a>
            </div>
            {menuRendered}
          </ul>
        </nav>
      </CSSTransition>
    </div>
  );
};

export default Sidebar;
