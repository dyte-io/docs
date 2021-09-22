const { ProvidePlugin } = require('webpack');

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
        module: {
          rules: [
            {
              test: /\.m?js/,
              resolve: {
                fullySpecified: false,
              },
            },
          ],
        },
        plugins: [
          new ProvidePlugin({
            process: require.resolve('process/browser'),
            Buffer: ['buffer', 'Buffer'],
          }),
        ],
        resolve: {
          fallback: {
            stream: false,
            path: false,
            process: false,
          },
        },
      };
    },
  };
};
