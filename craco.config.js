// craco.config.js (in root)
const path = require('path');
module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@custom-types': path.resolve(__dirname, 'src/custom-types'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@vendor': path.resolve(__dirname, 'src/vendor'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@images': path.resolve(__dirname, 'src/images'),
        },
    },
};