module.exports = {
  // production: JSファイルを最適化された状態で出力する
  // development: ソースマップを有効にしてJSファイルを出力する
  mode: "development",

  // エントリーポイント
  entry: {
    main: "./src/main.ts",
    test: "./src/test.ts"
  },

  // 出力先
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },

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
