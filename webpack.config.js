const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },

            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '/src/index.html'),
        }),
    ],


}