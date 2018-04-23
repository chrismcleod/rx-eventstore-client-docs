const path = require('path');

module.exports = {
  entry: [
    './lib/index.js'
  ],
  output: {
    publicPath: '/',
    filename: 'public/bundle.js'
  },
  resolve: {
    extensions: [
      '.mjs',
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
      '.web.js',
      '.js',
      '.json',
      '.web.jsx',
      '.jsx',
    ]
  },
  module: {
    rules: [{
      test: /\.(js|jsx|mjs)$/,
      loader: 'source-map-loader',
      enforce: 'pre',
      include: path.resolve('./src')
    }, {
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'public/[name].[hash:8].[ext]',
        }
      }],
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
          plugins: () => ([
            require('postcss-flexbugs-fixes'),
            require('autoprefixer')({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009',
            }),
          ]),
        },
      },
      {
        loader: 'sass-loader'
      }],
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('autoprefixer')({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009',
            }),
          ],
        },
      }],
    }, {
      // Exclude `js` files to keep "css" loader working as it injects
      // it's runtime that would otherwise processed through "file" loader.
      // Also exclude `html` and `json` extensions so they get processed
      // by webpacks internal loaders.
      exclude: [/\.js$/, /\.html$/, /\.json$/, /\.scss$/, /\.css$/],
      loader: 'file-loader',
      options: {
        name: 'public/[name].[hash:8].[ext]',
      },
    }]
  },
  mode: "development"
};
