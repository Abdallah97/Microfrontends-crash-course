const path = require("path");
const Htmlplugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "asset/[hash][ext]",
        clean: true,
    },
    devServer: {
        port: 3004,
        open: true,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new Htmlplugin({
            template: "./src/index.html",
            chunks: ["index"],
            filename: "index.html"
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/assets/images"),
                    to: path.resolve(__dirname, "dist","assets/images"),
                }
            ]
        }),
        new ModuleFederationPlugin({
            name: "JsApp",
            filename: "remoteEntry.js",
            exposes: {
                "./JsApp": "./src/index.js"
            }
        })
    ],
    module: {
        rules: [
            {
                test: /.(avif|webp|png|jpg|jpeg|svg)$/,
                type: "asset/resource"
            },
            {
                test: /\.(css)$/, 
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /.(ttf|woff|woff2|eot|otf)$/,
                type: "asset/resource"
            }
        ]
    }
}