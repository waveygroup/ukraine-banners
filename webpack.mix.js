const mix = require('laravel-mix');

mix.js('src/banner.js', 'dist')
   .sass('src/banner.sass', 'dist');
