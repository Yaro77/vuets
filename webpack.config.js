const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const NODE_ENV = process.env.NODE_ENV || "development";

let config = {
  mode: NODE_ENV,
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: [
          NODE_ENV !== 'production' ? "vue-style-loader" : MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          NODE_ENV !== 'production' ? "vue-style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.tsx?/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".json", ".vue"],
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css",
    })
  ],
  devtool: "#eval-source-map"
};

if (NODE_ENV === "production") {

  config = {
    ...config,

    devtool: "#source-map",

    optimization: {
      ...config.optimization,
      minimize: true
    },

    plugins: [
      ...config.plugins,

      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: '"production"'
        }
      })
    ]

  };
}

module.exports = config;