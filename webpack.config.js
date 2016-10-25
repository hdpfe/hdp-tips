var PROD = process.argv.indexOf('-p') >= 0;

module.exports = {
    entry: {
        'hdp-tips': __dirname + '/index.js'
    },
    output: {
        libraryTarget: 'umd',
        library: ['hdpTips'],
        path: __dirname + '/dist',
        filename: PROD ? '[name].min.js' : '[name].js'
    },
    externals: {
        "jquery": "jQuery"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader"},
            { test: /\.tpl$/, loader: 'ejs-compiled' },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=10000&name=[name].[ext]?[hash:8]&max_age=999999' }
        ]
    }
};