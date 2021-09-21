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
    // configureWebpack(config) {
    //   return {
    //     resolve: {
    //       alias: {},
    //       fallback: {
    //         buffer: require.resolve('buffer'),
    //         stream: false,
    //         'lodash/fp': false,
    //         '@stoplight/http-spec/oas2': false,
    //         '@stoplight/http-spec/oas3': false,
    //         'stream-browserify': require.resolve('stream-browserify'),
    //         paths: require.resolve('path-browserify'),
    //       },
    //     },
    //   };
    // },
  };
};
