// @flow

import React from 'react';
import styles from './loading.scss';

export default function Loading(/* props */) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ballScaleRippleMultiple}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
