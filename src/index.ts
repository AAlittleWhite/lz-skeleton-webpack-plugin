import * as HtmlWebpackPlugin from 'html-webpack-plugin';

interface ParamsType {
  rootId?: string;
  title?: string;
  domStr?: string | null;
}
class SkeletonPlugin {
  rootId: string;
  title: string;
  domStr: string | null;
  constructor(params: ParamsType | undefined) {
    this.rootId = params?.rootId || 'root';
    this.title = params?.title || '正在进入中...';
    const template = `
        <style>
            html, body{
                margin: 0;
                padding: 0;
            }
            .root{
                width: 100vw;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content:center;
                align-items:center;
            }
            .spinner{
                width: 30px;
                height: 30px;
                position: relative;
            }
            .enter{
                font-size: 14px;
                color: #000000;
                margin-top: 35px;
                display: flex;
                align-items: center;
            }
            .spinner .spinner-container {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            .spinner-container div {
                width: 6px;
                height: 6px;
                background-color: #fe305d;
                border-radius: 100%;
                position: absolute;
                -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
                animation: bouncedelay 1.2s infinite ease-in-out;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }
            .container2 {
                -webkit-transform: rotateZ(45deg);
                transform: rotateZ(45deg);
            }
            .container3 {
                -webkit-transform: rotateZ(90deg);
                transform: rotateZ(90deg);
            } 
            .circle1 { top: 0; left: 0; }
            .circle2 { top: 0; right: 0; }
            .circle3 { right: 0; bottom: 0; }
            .circle4 { left: 0; bottom: 0; }
               
            .container2 .circle1 {
              -webkit-animation-delay: -1.1s;
              animation-delay: -1.1s;
            }
               
            .container3 .circle1 {
            -webkit-animation-delay: -1.0s;
            animation-delay: -1.0s;
            }
               
            .container1 .circle2 {
                -webkit-animation-delay: -0.9s;
                animation-delay: -0.9s;
            }
            
            .container2 .circle2 {
                -webkit-animation-delay: -0.8s;
                animation-delay: -0.8s;
            }
               
            .container3 .circle2 {
                -webkit-animation-delay: -0.7s;
                animation-delay: -0.7s;
            }
               
            .container1 .circle3 {
                -webkit-animation-delay: -0.6s;
                animation-delay: -0.6s;
            }
               
            .container2 .circle3 {
                -webkit-animation-delay: -0.5s;
                animation-delay: -0.5s;
            }
            
            .container3 .circle3 {
                -webkit-animation-delay: -0.4s;
                animation-delay: -0.4s;
            }
            
            .container1 .circle4 {
                -webkit-animation-delay: -0.3s;
                animation-delay: -0.3s;
            }
            
            .container2 .circle4 {
                -webkit-animation-delay: -0.2s;
                animation-delay: -0.2s;
            }
            
            .container3 .circle4 {
                -webkit-animation-delay: -0.1s;
                animation-delay: -0.1s;
            }
            
            @-webkit-keyframes bouncedelay {
                0%, 80%, 100% { -webkit-transform: scale(0.0) }
                40% { -webkit-transform: scale(1.0) }
            }

            @keyframes bouncedelay {
                0%, 80%, 100% {
                    transform: scale(0.0);
                    -webkit-transform: scale(0.0);
                } 40% {
                    transform: scale(1.0);
                    -webkit-transform: scale(1.0);
                }
            }            
        </style>
        <div id="${this.rootId}">
          <div class="root">
            <div class="spinner">
                <div class="spinner-container container1">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                </div>
                <div class="spinner-container container2">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                </div>
                <div class="spinner-container container3">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                </div>
            </div>
            <p class="enter">${this.title}</>
          </div>  
        </div>`;
    this.domStr = params?.domStr || template;
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('SkeletonPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'SkeletonPlugin',
        (htmlData, callback) => {
          htmlData.html = htmlData.html.replace(
            `<div id="${this.rootId}"></div>`,
            this.domStr
          );
          callback(null, htmlData);
        }
      );
    });
  }
}
export default SkeletonPlugin;
