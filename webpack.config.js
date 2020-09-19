module.exports = {
  // production: JSファイルを最適化された状態で出力する
  // development: ソースマップを有効にしてJSファイルを出力する
  mode: "development",

  // 出力するJSのファイルのパス
  entry: "./src/main.ts",

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  // import文で.tsファイルを解決するために設定する
  resolve: {
    extensions: [
      ".ts", ".js"
    ]
  }
};
