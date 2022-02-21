// import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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

  module: {
    rules: [
      {
        test: /\.s?css$/, // .css로 끝나는 확장자 찾기 (? s가 있을 수도 있고 없을 수도 있다.)
        use: [
          'style-loader', // html에 css 삽입
          'css-loader', // 먼저 해석. js에서 css 해석할 수 있도록 해줌
          'sass-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' } // static 폴더 안 구성물  -> 복사해서 dist로 들어갈 수 있도록 해줌
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}