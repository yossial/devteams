const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    optimizeImagesInDev: true,
    imagesFolder: 'images',
    mozjpeg: {
      quality: 75,
    },
    webp: {
      preset: 'default',
      quality: 65,
    },
  }],


]);

