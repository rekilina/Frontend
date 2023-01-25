// core node.js module for absolute path
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');



module.exports = {
	mode: 'production',
	entry: './src/index.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			}
		]
	},
	resolve: {
		extensions: [
			'.ts', '.js'
		]
	},
	devServer: {
		static: "./"
	},
	plugins: [
		// automaticaly delete everything in dist folder before build 
		new CleanPlugin.CleanWebpackPlugin()
	]
};