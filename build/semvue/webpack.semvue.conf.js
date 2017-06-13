var webpack = require('webpack');
var path = require('path');
var vueLoaderConfig = require('./../config/vue-loader.conf')

function resolve(dir) {
    return path.join(__dirname, '../..', dir)
}

module.exports = {
    entry: './src/semvue/index.js',
    output: {
        filename: 'index.js',
        library: 'SemVue',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, '../../dist/semvue/'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            '@mocks': resolve('test/mocks')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src/semvue')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src/semvue')]
            },
        ]
    },
    devtool: 'source-map'
};