// import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

// export
module.exports = {
  // parcel index.html
  // 파일을 읽어들이기 시작하는 진입점 설정
  // webpack은 js파일을 진입점 파일로 사용
  entry: './js/main.js',
  
  // 결과물(번들)을 반환하는 설정
  output: {
    // __dirname = 현재 파일이 있는 경로
    path: path.resolve(__dirname, 'dist'), // resolve로 합치기. node.js가 요구하는 절대경로
    filename: 'main.js',
    clean: true
  },
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    })
  ],

  devServer: {
    host: 'localhost'
  }
}