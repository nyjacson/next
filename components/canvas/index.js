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
      canvasHeight: 0,
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
      key: 0,
      isDrawing: false
    };
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
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
        this.initializeCanvas();
      }
    );
  };

  initializeCanvas = () => {
    const ctx = this.getContext();
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.fillRect(0, 0, this.state.canvasWidth, this.state.canvasHeight);
  };

  mouseMove = e => {
    this.setState({
      isDrawing: true
    });
    if (this.state.isDrawing) {
      this.drawLine(e);
    }
  };

  mouseLeave = () => {
    this.setState({
      isDrawing: false,
      startX: 0,
      startY: 0
    });
  };

  mouseEnter = e => {
    const rect = e.target.getBoundingClientRect();
    this.setState({
      isDrawing: true,
      startX: e.clientX - rect.left,
      startY: e.clientY - rect.top
    });
  };

  mouseDown = () => {
    this.setState(
      {
        key: Math.random()
      },
      () => {
        this.initializeCanvas();
      }
    );
  };

  drawLine = e => {
    const rect = e.target.getBoundingClientRect();
    const endX = e.clientX - rect.left;
    const endY = e.clientY - rect.top;
    const ctx = this.getContext();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(this.state.startX, this.state.startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    this.setState({
      startX: endX,
      startY: endY
    });
  };

  loop = () => {
    requestAnimationFrame(this.loop);
    this.drawLine();
  };

  render() {
    return (
      <div className={styles.topbgImg} ref={this.canvasWrapperRef}>
        <canvas
          key={this.state.key}
          ref={this.canvasRef}
          width={this.state.canvasWidth || 0}
          height={this.state.canvasHeight || 0}
          onMouseEnter={e => this.mouseEnter(e)}
          onMouseLeave={e => this.mouseLeave(e)}
          onMouseMove={e => this.mouseMove(e)}
          onMouseDown={() => this.mouseDown()}
        />
      </div>
    );
  }
}
