// @flow

import React from 'react';
import Particles from 'react-particles-js';

type Props = {};

type State = {
  type: String
};

export default class Particle extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      type: 'inside'
    };
  }

  render() {
    console.log('type', this.state.type);
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 10,
              density: {
                enable: true, //シェイプの密集度を変更するか否か
                value_area: 200 //シェイプの密集度
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
              value: '#222537' //シェイプの色
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
              out_mode: 'out' //エリア外に出たシェイプの動き(out、bounceより選択)
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'bubble'
              }
            },
            modes: {
              bubble: {
                size: 6,
                distance: 40
              }
            }
          }
        }}
      />
    );
  }
}
