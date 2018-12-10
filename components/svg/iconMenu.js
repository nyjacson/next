// @flow

import React from 'react';
import { Motion, spring } from 'react-motion';
// import styles from './iconMenu.scss';

const IconMenu = ({ onHover }: boolean) => {
  const defaultStyle = {
    pathL: spring(16.5, { stiffness: 250 })
  };

  const onHoverStyle = {
    pathL: spring(30, { stiffnexx: 250 })
  };

  return (
    <svg width="35px" height="15px" viewBox="0 0 17 15" version="1.1">
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
        <g id="Menu" transform="translate(-52.000000, -1.000000)" stroke="#343434">
          <g id="icon-menu">
            <Motion style={onHover ? onHoverStyle : defaultStyle}>
              {({ pathL }) => {
                return (
                  <g transform="translate(52.000000, 0.000000)">
                    <path d="M0.5,1.5 L16.5,1.5" id="Line" />
                    <path d={`M0.5,8 L${pathL},8`} id="Line" />
                    <path d="M0.5,15 L16.5,15" id="Line" />
                  </g>
                );
              }}
            </Motion>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconMenu;
