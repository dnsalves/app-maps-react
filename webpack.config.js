const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules',
            bootstrap: 'modules/bootstrap/dist/js/bootstrap.min.js',
            jquery: 'modules/jquery/dist/jquery.min.js'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('app.css')
    ],
    module: {
        rules: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['env', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                 fallback: "style-loader",
                 use: ["css-loader"]
	  		})
        }]
    }
}