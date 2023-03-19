const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode:"development",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:"bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude:/node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title:"Typescript"
            template:"./src/index.html"
        }),
    ],
    resolve: {
        extensions:['.ts','.js']
    }
}