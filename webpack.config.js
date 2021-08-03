const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

const defaultTitle = ""
const defaultDescription = ""

// add paths for subdomains here
const paths  = [
  {
    name: "",
    title: "",
    description: ""
  },
]

let multipleHtmlPlugins = paths.map(single => {
  return new HtmlWebPackPlugin({
    template: "./static/index.ejs",
    filename: `../docs/${single.name}/index.html`,
    header: {title: single.title},
    meta: {
      description: single.description
    },
  })
});

module.exports = {
    entry: "./src/index.tsx",
    devServer: {
      contentBase: path.join(__dirname, 'docs'),
      compress: true,
      port: 9000
    },
    module: {
      rules: [
        {
            test: /\.(jpe?g|png|gif|svg)$/,
            loader: require.resolve("file-loader") + "?name=../[path][name].[ext]"
        },
        {
          test: /\.(js|tsx)$/,
          exclude: /node_modules/,
          use: "ts-loader"
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(ttf)$/,
          use: {
            loader: "url-loader"
          }
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./static/index.ejs",
          filename: "../docs/index.html",
          meta: {
            description: defaultDescription
          },
          header: {title: defaultTitle},
        }),
        new HtmlWebPackPlugin({
          template: "./static/index.ejs",
          filename: "../docs/404.html",
          header: {title: defaultTitle},
          meta: {
            description: defaultDescription
          }
        }),
      new MiniCssExtractPlugin({
          filename: "style.css",
          path: path.resolve(__dirname, "docs")
        })
      ].concat(multipleHtmlPlugins),
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "docs")
    }
  };