const PROJECT_ROOT = 'gabe_mn';
const path = require('path');

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
					outputPath: 'fonts/',
					publicPath: 'static/'
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
			'@font': resolve('src', 'font'),
			'@nm': path.resolve('node_modules'),
			'@scss': resolve('src', 'scss')
		},
		extensions: ['.js', '.scss', '.vue']
	}
};
