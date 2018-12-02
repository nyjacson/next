import React from 'react'
import Link from 'next/link';
import IconMenu from '../svg/iconMenu';
import Meta from '../meta';
import COMMON from '../../constants/common';
import styles from './header.scss';

export default function Header({headTitle, onClickMenu}) {
  const onMouseEnter = e => {
    console.log('enter')
    console.log(e.target)
  }

  const onMouseLeave = e => {
    console.log('leave')
  }
  return (
    <div>
      <Meta headTitle={headTitle} />
      <header className={styles.headerWrapper}>
        <div className="ui container py-3">
          <div className={styles.headerInner}>
            <Link href={{ pathname: '/'}}><a className={styles.logo}>Logo</a></Link>
            <a className={styles.menuArea} onClick={onClickMenu} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><span>Menu</span><IconMenu /></a>
          </div>
        </div>
      </header>
    </div>
  )
}

Header.defaultProps = {
  headTitle: 'COMMON.HPName'
}
