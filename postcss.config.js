const tailwindcss = require('./tailwind.config.js');
const autoprefixer = require('autoprefixer');
const importrule = require('postcss-import')

module.exports = {
    plugins: [
        'postcss-preset-env',
        tailwindcss,
        autoprefixer,
        importrule
    ]
};