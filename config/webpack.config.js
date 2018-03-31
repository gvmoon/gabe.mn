const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const queryString = require('query-string');

function resolve(...args) {
	return path.resolve(__dirname, '..', 'gabe_mn', ...args);
}

function resolveConfig(...args) {
	return path.resolve(__dirname, ...args);
}

const POSTCSS_CONFIG = 'postcss-loader?' + queryString.stringify({
	options: {
		config: {
			path: resolveConfig('postcss.config.js')
		}
	}
});

module.exports = {
	devtool: 'source-map',
	entry: {
		index: resolve('src', 'js', 'index.js')
	},
	mode: 'development',
	module: {
		rules: [{
			test: /\.vue/,
			use: [
				{
					loader: 'vue-loader' ,
					options: {
						postcss: {
							config: {
								path: resolveConfig('postcss.config.js')
							}
						}
					}
				}
			]
		}, {
			test: /\.scss/,
			use: [
				'style-loader',
				POSTCSS_CONFIG,
				{
					loader: 'css-loader',
					options: {
						sourceMap: true
					}
				},
				'sass-loader'
			]
		}, {
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts/',
					publicPath: 'static/fonts/'
				}
			}]
		}, {
			test: /\.js/,
			exclude: /node_modules/,
			use: ['babel-loader']
		}]
	},
	output: {
		filename: 'js/[name].js',
		path: resolve('static')
	},
	plugins: [
		new CleanWebpackPlugin(resolve('static'), {
			root: resolve()
		}),
		new CopyWebpackPlugin([{
			from: resolve('src', 'img'),
			to: resolve('static', 'img')
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
