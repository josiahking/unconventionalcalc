const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');
const path = require('path');

const entry = {};
fs.readdirSync('./src/scripts').forEach(file => {
  const name = path.parse(file).name;
  entry[name] = `./src/scripts/${file}`;
});

module.exports = {
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/styles', to: 'assets/styles' },
        { from: 'src/index.html', to: 'index.html'}
      ],
    }),
  ],
  entry,
  output: {
    filename: 'scripts/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
};
