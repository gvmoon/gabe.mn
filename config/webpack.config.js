const PROJECT_ROOT = 'gabe_mn';
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve(...loc) {
	return path.resolve(PROJECT_ROOT, ...loc);
}

module.exports = {
	devtool: 'sourcemap',
	entry: {
		index: resolve('src', 'js', 'index.js')
	},
	module: {
		rules: [{
			test: /\.vue/,
			use: ['vue-loader']
		}, {
			test: /\.scss/,
			use: ['style-loader', {
				loader: 'css-loader',
				options: {
					sourceMap: true
				}
			}, 'sass-loader']
		}, {
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			use: [{
				loader: 'file-loader',
				options: {
					outputPath: 'fonts/'
				}
			}]
		}]
	},
	output: {
		filename: 'js/[name].js',
		path: resolve('static', 'dist')
	},
	plugins: [
		new CopyWebpackPlugin([{ 
			from: resolve('src', 'img'),
			to: 'img'
		}])
	],
	resolve: {
		alias: {
			'@components': resolve('src', 'components'),
			'@nm': path.resolve('node_modules'),
			'@scss': resolve('src', 'scss')
		},
		extensions: ['.js', '.scss', '.vue']
	}
};
