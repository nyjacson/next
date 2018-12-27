// @flow

import React from 'react';
import styles from './canvas.scss';

type Props = {};

type State = {
  canvasWidth: number,
  canvasHeight: number
};

export default class Canvas extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.canvasWrapperRef = React.createRef();
    this.state = {
      canvasWidth: 0,
      canvasHeight: 0
    };
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
    this.canvasWrapperRef.current.addEventListener('click', console.log('test'));
    // const bgImg = new Image();
    // bgImg.src = '/static/img/top.jpg';
    // bgImg.width = this.state.canvasWidth;
    // bgImg.height = this.state.canvasHeight;
    // const ctx = this.getContext();
    // bgImg.filter = 'blur(4px)';
    // bgImg.onload = () => {
    //   ctx.drawImage(bgImg, 0, 0, this.state.canvasWidth, this.state.canvasHeight);
    // };
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  getContext() {
    return this.canvasRef.current.getContext('2d');
  }

  onResize = () => {
    const clientHeight =
      (this.canvasWrapperRef && this.canvasWrapperRef.current && this.canvasWrapperRef.current.clientHeight) || 0;
    const clientWidth =
      (this.canvasWrapperRef && this.canvasWrapperRef.current && this.canvasWrapperRef.current.clientWidth) || 0;

    this.setState(
      {
        canvasWidth: clientWidth,
        canvasHeight: clientHeight
      },
      () => {
        this.draw();
      }
    );
  };

  draw = () => {
    const ctx = this.getContext();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillRect(0, 0, this.state.canvasWidth, this.state.canvasHeight);
  };

  render() {
    return (
      <div className={styles.topbgImg} ref={this.canvasWrapperRef}>
        <canvas
          ref={this.canvasRef}
          width={this.state.canvasWidth || 0}
          height={this.state.canvasHeight || 0}
          onMouseEnter={() => console.log('down')}
        />
      </div>
    );
  }
}
