var htmlWebPackPlugin = require('html-webpack-plugin');
var htmlWebPackPluginConfig = new htmlWebPackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: "body"
})

module.exports = {
    entry: [
        './app/index.jsx'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
            test: /\.jsx$/, 
            exclude: /node_modules/
        }
        ]
    },
    plugins: [htmlWebPackPluginConfig],
    devtool: 'cheap-module-eval-source-map'
}