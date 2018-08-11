const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var parentDir = path.join(__dirname, '');

module.exports = {
    entry: [
        path.join(parentDir, './app/index.js')
    ],
    module: {
        rules: [
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=100000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            {
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader" // creates style nodes from JS strings
                }]
            },{
                test: /\.(scss|css)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: path.join(parentDir, './app/index.html'),
            minify:  {
                collapseWhitespace: true,
                preserveLineBreaks: true,
                removeComments: true
              }
        }), 
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true, // enable gzip compression
        historyApiFallback: true,
        inline: true,
        https: false,
        inline: true,
        port: 9999,
        proxy: {
            '/api/': {
              target: 'http://localhost:3000',
              secure: false
            }
          }
    }
}