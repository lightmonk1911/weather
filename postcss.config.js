/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-preset-env')({
      browsers: 'last 2 versions, IE 11',
    }),
  ],
};
