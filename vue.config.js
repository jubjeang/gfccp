module.exports = {
  devServer: {
      disableHostCheck: true,
      port: 4000,
      public: '0.0.0.0:4000',
      proxy: "http://localhost:3344"
  },
  publicPath: "/"
}