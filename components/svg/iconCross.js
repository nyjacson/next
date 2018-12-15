// @flow

import React from 'react';
import styles from './iconCross.scss';

const IconCross = (props: any) => {
  return (
    <svg
      width="17px"
      height="15px"
      viewBox="0 0 17 15"
      version="1.1"
      className={`${styles.svg} ${props.disableHover ? '' : styles.hoverEnable}`}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
        <g transform="translate(-1233.000000, -33.000000)" stroke="#979797">
          <g transform="translate(1234.000000, 33.000000)">
            <path d="M0.681818182,0.681818182  L14.588235,14.588235" />
            <path className={styles.path2} d="M0.681818182,0.681818182  L14.588235,14.588235" />
            <path
              d="M0.681818182,0.681818182 L14.588235,14.588235"
              transform="translate(7.500000, 7.500000) scale(-1, 1) translate(-7.500000, -7.500000) "
            />
            <path
              className={styles.path1}
              d="M0.681818182,0.681818182 L14.588235,14.588235"
              transform="translate(7.500000, 7.500000) scale(-1, 1) translate(-7.500000, -7.500000) "
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconCross;
