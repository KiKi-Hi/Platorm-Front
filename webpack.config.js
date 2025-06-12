const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    entry: './src/main.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        publicPath: '/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin()],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        historyApiFallback: true,
        port: 3000,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                use: ['@svgr/webpack', 'file-loader'],
                issuer: {
                    and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};