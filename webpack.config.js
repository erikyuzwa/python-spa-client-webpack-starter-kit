
'use strict';

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isProd = (process.env.NODE_ENV === 'production');

let plugins = [];

// if we're building for production...
if (!!isProd) {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

plugins.push(new CleanWebpackPlugin(['dist']));

plugins.push(new HtmlWebpackPlugin({
    filename: path.resolve(__dirname, 'dist/templates/index.html'),
    template: path.resolve(__dirname, 'app/templates/index.html'), 
    inject: 'body'
}));

plugins.push(new CopyWebpackPlugin([
    { from: 'app/templates/404.html', to: 'templates' },
    { context: 'app', from: 'static/favicon.ico', to: '../dist/static'},
    { context: 'app', from: '*.py', to: '../dist' }
]));


const config = {

    entry: path.resolve(__dirname, 'app/static/scripts/index.js'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/scripts/[name].bundle.js'
    },

    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            }
        ]
    },

    plugins: plugins,

    resolve: {
        alias: {
            jquery$: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js')
        }
    },

    devServer: {
        contentBase: 'dist',
        port: 5000
    }

};

module.exports = config;
