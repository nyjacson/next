// @flow

import React from 'react';
import styles from './accordion.scss';

type Props = {
  children: any,
  open: boolean
};

export default function Accordion(props: Props) {
  return <div className={`${styles.wrapper} ${props.open ? styles.open : styles.close}`}>{props.children}</div>;
}
