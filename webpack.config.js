// export
const path = require('path')

module.exports = {
  // parcel index.html
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'), //'dist', // 절대 경로
    // filename: 'main.js',
    clean: true
  }
}