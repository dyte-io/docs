const webpack = require('webpack');

module.exports = function (context, options) {
  return {
    name: 'tailwind-plugin',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins = [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
      ];
      return postcssOptions;
    },
    configureWebpack(config) {
      return {
        plugins: [
          // fixes process is not defined error
          new webpack.DefinePlugin({
            process: {
              env: {},
            },
          }),
        ],
        resolve: {
          fallback: {
            buffer: require.resolve('buffer'),
            events: require.resolve('events'),
            stream: require.resolve('stream-browserify'),

            // doesn't work in browser when you visit /api
            lodash: require.resolve('lodash'),

            // build time errors
            '@stoplight/http-spec/oas2': false,
            '@stoplight/http-spec/oas3': false,

            // cannot solve this
            'abort-controller': require.resolve('abortcontroller-polyfill'),
          },
        },
      };
    },
  };
};
