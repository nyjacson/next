// @flow

import React from 'react';
import Particles from 'react-particles-js';
import styles from './particle.scss';

type Props = {};

type State = {
  type: String
};

export default class Particle extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.particleRef = React.createRef();
    this.state = {
      width: 1200,
      height: 500
    };
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    const clientHeight = (this.particleRef && this.particleRef.current && this.particleRef.current.clientHeight) || 0;
    const clientWidth = (this.particleRef && this.particleRef.current && this.particleRef.current.clientWidth) || 0;

    this.setState({
      width: clientWidth,
      height: clientHeight
    });
  };

  render() {
    return (
      <div className={styles.pargicleWrapper} ref={this.particleRef}>
        <Particles
          width={this.state.width}
          height={this.state.height}
          params={{
            particles: {
              number: {
                value: 10,
                density: {
                  enable: true, //シェイプの密集度を変更するか否か
                  value_area: 100 //シェイプの密集度
                }
              },
              shape: {
                type: 'circle', //シェイプの形（circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像）
                stroke: {
                  width: 0, //シェイプの外線の太さ
                  color: '#ffcc00' //シェイプの外線の色
                }
              },
              opacity: {
                value: 0.5, //シェイプの透明度
                random: false, //シェイプの透明度をランダムにするか否か
                anim: {
                  enable: false, //シェイプの透明度をアニメーションさせるか否か
                  speed: 10, //アニメーションのスピード
                  opacity_min: 0.1, //透明度の最小値
                  sync: false //全てのシェイプを同時にアニメーションさせるか否か
                }
              },
              size: {
                value: 3, //シェイプの大きさ
                random: true, //シェイプの大きさをランダムにするか否か
                anim: {
                  enable: false, //シェイプの大きさをアニメーションさせるか否か
                  speed: 40, //アニメーションのスピード
                  size_min: 0.1, //大きさの最小値
                  sync: false //全てのシェイプを同時にアニメーションさせるか否か
                }
              },
              color: {
                value: ['#222537', '#EA625F', '222537'] //シェイプの色
              },
              line_linked: {
                enable: true, //線を表示するか否か
                distance: 150, //線をつなぐシェイプの間隔
                color: '#222537', //線の色
                opacity: 0.2, //線の透明度
                width: 1 //線の太さ
              },
              move: {
                speed: 10, //シェイプの動くスピード
                straight: false, //個々のシェイプの動きを止めるか否か
                direction: 'none', //エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
                out_mode: 'bounce' //エリア外に出たシェイプの動き(out、bounceより選択)
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'bubble' //マウスオーバー時に発動する動き(下記modes内のgrab、repulse、bubbleより選択)
                },
                onclick: {
                  enable: true, //クリックが有効か否か
                  mode: 'repulse' //クリック時に発動する動き(下記modes内のgrab、repulse、bubble、push、removeより選択)
                }
              },
              modes: {
                grab: {
                  distance: 100,
                  line_linked: {
                    opacity: 0.6
                  }
                },
                bubble: {
                  size: 6,
                  distance: 40
                },
                repulse: {
                  distance: 100,
                  duration: 0.6
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            }
          }}
        />
      </div>
    );
  }
}
