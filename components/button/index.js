// @flow

import React from 'react';
import Link from 'next/link';
import styles from './button.scss';

type Props = {
  onClick: ?Funtion,
  href: ?String,
  query: ?Object,
  label: String,
  imgSrc: ?String,
  imgAlt: ?String,
  theme: ?String
};

type State = {
  onHover: boolean
};

export class Button extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.contactRef = React.createRef();
    this.state = {
      onHover: false
    };
  }

  handleHoverOn = () => {
    this.setState({
      onHover: true
    });
  };

  handleHoverOff = () => {
    this.setState({
      onHover: false
    });
  };

  render() {
    const href = {
      pathname: this.props.href || '',
      query: this.props.query || {}
    };

    const buttonTheme = this.props.theme === 'secondary' ? styles.secondary : '';

    const buttonContents = () => (
      <button
        type="button"
        className={`${styles.button} ${this.state.onHover ? styles.onHover : ''} ${buttonTheme}`}
        onMouseEnter={this.handleHoverOn}
        onMouseLeave={this.handleHoverOff}
        onClick={this.props.onClick || null}
      >
        <span>{this.props.label}</span>
        {this.props.imgSrc && <img className={styles.iconWrapper} src={this.props.imgSrc} alt={this.props.imgAlt} />}
      </button>
    );
    return this.props.href ? (
      <Link href={href}>
        <a href>{buttonContents()}</a>
      </Link>
    ) : (
      buttonContents()
    );
  }
}
