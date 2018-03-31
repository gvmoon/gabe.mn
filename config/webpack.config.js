const path = require('path');

function resolve(...args) {
	return path.resolve(__dirname, '..', 'gabe_mn', ...args);
}

module.exports = {
	devtool: 'source-map',
	entry: {
		index: resolve('src', 'js', 'index.js')
	},
	module: {
		rules: [{
			test: /\.vue/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: [
						['env', {
							targets: {
								browsers: ["last 2 versions", "safari >= 7"]
							}
						}]
					]
				}
			},
			'vue-loader'
		]}, {
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
					name: '[name].[ext]',
					outputPath: 'fonts/',
					publicPath: 'static/fonts/'
				}
			}]
		}]
	},
	output: {
		filename: 'js/[name].js',
		path: resolve('static')
	},
	resolve: {
		alias: {
			'@components': resolve('src', 'components'),
			'@nm': path.resolve('node_modules'),
			'@scss': resolve('src', 'scss')
		},
		extensions: ['.js', '.scss', '.vue']
	}
};
