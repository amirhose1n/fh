const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
config = {
  entry: path.resolve(__dirname, 'src','index.tsx'),
  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      inject:true,
      template: './public/index.html'
    }),
  ],
  resolve: {
    plugins: [
       new TsConfigPathsPlugin()
    ]
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {test : /\.(js)$/, use:'babel-loader'},
    ],
  
  },
  devServer: {
    compress: true,
    port: 9000,
    open: true,
    inline: false
  }
}

module.exports = (env, argv) => {
  return config;
};