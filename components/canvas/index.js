// @flow

import React from 'react';
import styles from './canvas.scss';
import Loading from '../loading';

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
      // mouseX: 0,
      // mouseY: 0,
      key: 0,
      isDrawing: false,
      loaded: false
    };
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
    this.onLoad();
    // this.loopAnimation();
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

  resetCanvas = () => {
    this.setState(
      {
        key: Math.random()
      },
      () => {
        this.initializeCanvas();
      }
    );
  };

  mouseMove = e => {
    if (this.state.isDrawing) {
      this.drawLine(e);
    }
  };

  mouseLeave = () => {
    this.setState({
      isDrawing: false
    });
    this.resetCanvas();
  };

  getMousePositon = e => {
    const rect = this.canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  lineDistance = (point1x, point1y, point2x, point2y) => {
    let xs = 0;
    let ys = 0;
    xs = point2x - point1x;
    xs *= xs;
    ys = point2y - point1y;
    ys *= ys;
    return Math.sqrt(xs + ys);
  };

  // controlMouseStatus = (dX, dY) => {
  //   this.setState({
  //     mouseStoped: dX < 3 && dY < 3
  //   });
  // };

  // mouseEnter = e => {
  //   const mousePos = this.getMousePositon(e);
  //   this.setState({
  //     startX: mousePos.x,
  //     startY: mousePos.y
  //   });
  // };

  mouseUp = () => {
    this.setState({
      isDrawing: false
    });
  };

  mouseDown = e => {
    const mousePos = this.getMousePositon(e);
    this.setState({
      startX: mousePos.x,
      startY: mousePos.y,
      isDrawing: true
    });
  };

  onLoad = () => {
    console.log('loaded');
    this.setState({
      loaded: true
    });
  };

  drawLine = e => {
    if (this.state.isDrawing) {
      const { startX, startY } = this.state;
      const mousePos = this.getMousePositon(e);
      const mouseX = mousePos.x;
      const mouseY = mousePos.y;
      const dX = mouseX - startX;
      const dY = mouseY - startY;
      // const endX = startX + dX / 10;
      // const endY = startY + dY / 10;
      const endX = startX + dX;
      const endY = startY + dY;
      const distance = this.lineDistance(startX, startY, endX, endY);
      const ctx = this.getContext();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = 1 + parseInt(distance, 10) / 4;
      ctx.lineWidth = 20;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      this.setState({
        startX: endX,
        startY: endY
      });
    }
  };

  // loopAnimation = () => {
  //   requestAnimationFrame(this.loopAnimation);
  //   this.drawLine();
  // };

  render() {
    return (
      <div className={styles.topbgImg} ref={this.canvasWrapperRef}>
        {!this.state.loaded && <Loading />}
        <canvas
          key={this.state.key}
          ref={this.canvasRef}
          width={this.state.canvasWidth || 0}
          height={this.state.canvasHeight || 0}
          // onMouseEnter={e => this.mouseEnter(e)}
          onMouseLeave={e => this.mouseLeave(e)}
          onMouseMove={e => this.mouseMove(e)}
          onMouseDown={e => this.mouseDown(e)}
          onMouseUp={() => this.mouseUp()}
          onLoad={this.onLoad}
        />
      </div>
    );
  }
}
