const path = require('path');
const webpack = require('webpack');
const React = require('react') ;

module.exports = {
    mode:'production',
    entry: ['babel-polyfill','./main.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
             new webpack.ProvidePlugin({
                   _: 'lodash'
     }),
    new webpack.ProvidePlugin({
        "React": "react",
    })
   ]
};