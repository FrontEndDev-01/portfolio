
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: new Date().getTime() + '_[name].js',
    chunkFilename: '[name]-chunk.js'
  },
  devServer: {
    historyApiFallback: true,
    port: 11000
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.(png|jpg|jpeg|gif|svg|ico)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.mp4$/,
        use: [
            {
                loader: "file-loader",
                options: {
                    name: "[name].[ext]"
                }
            }
        ]
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new Dotenv({
      path: "./.env"
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: [".*", ".tsx", ".ts", ".js", ".jsx"],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@helpers': path.resolve(__dirname, 'src/utils/helpers'),
      '@constants': path.resolve(__dirname, 'src/utils/constants'),
      '@services': path.resolve(__dirname, 'src/utils/services'),
      '@modals': path.resolve(__dirname, 'src/components/Modal'),
    }
     },
}