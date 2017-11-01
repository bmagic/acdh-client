module.exports = {
  plugins: [
    require('postcss-easy-import')({prefix: '_'}),
    require('autoprefixer')({}),
    require('postcss-discard-comments')({removeAll:true}),
    require('cssnano')({preset: 'default'})
  ]
}
