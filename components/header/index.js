// @flow

import React from 'react';
import Link from 'next/link';
import IconMenu from '../svg/iconMenu';
import Meta from '../meta';
import styles from './header.scss';

export default function Header({ headTitle, onClickMenu }: Object) {
  const onMouseEnter = e => {
    console.log('enter');
    console.log(e.target);
  };

  const onMouseLeave = () => {
    console.log('leave');
  };
  return (
    <div>
      <Meta headTitle={headTitle} />
      <header className={styles.headerWrapper}>
        <div className="ui container py-3">
          <div className={styles.headerInner}>
            <Link href={{ pathname: '/' }}>
              <a href className={styles.logo}>
                Logo
              </a>
            </Link>
            <a
              href
              className={styles.menuArea}
              onClick={onClickMenu}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <span>Menu</span>
              <IconMenu />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
