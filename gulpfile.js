'use strict'

var requireDir = require('require-dir')
var gulp    = require('gulp')
var config  = require('./gulp/config')
var browserSync = require('browser-sync')


// Add all the tasks and files, boom!
requireDir('gulp', {
  recurse: true
})

gulp.task('build', gulp.series(
  'clean',
  'main:static',
  'main:scripts',
  'vendor:scripts',
  'main:fonts',
  'vendor:fonts',
  'main:markup',
  'vendor:styles',
  'main:styles'
))


function reload(done) {
  browserSync.reload()
  done()
}

gulp.task('browser-sync', () => {
  return browserSync.init({
    server : {
      baseDir : config.directories.dist.base,
      serveStaticOptions : {
        extensions : ['html']
      }
    },
    open : false,
    logConnections : true
  })
})

gulp.task('watch', done => {
  // Detect changes on the config file
  gulp.watch('gulp/config.js', gulp.series('default', reload))

  //static files
  
      gulp.watch('src/**/*.html', gulp.series( 'main:markup', reload ))
      gulp.watch('src/assets/icons/**/*', gulp.series( 'main:icons', 'main:markup', reload ))
  

  gulp.watch('src/assets/images/**/*', gulp.series( 'main:images', reload ))
  gulp.watch(config.project.fontFiles, gulp.series( 'main:fonts', reload ))

  //scripts
  gulp.watch('src/assets/js/**/*.js', gulp.series( 'main:scripts', reload ))

  //styles
  gulp.watch([
    'src/assets/styles/**/*.scss',
    '!src/assets/styles/vendor/**/*',
  ], gulp.series( 'main:styles', reload ))

  done()
})

gulp.task('serve', gulp.parallel('browser-sync', 'watch'))

gulp.task('release', gulp.series('build', 'zip'))

gulp.task('default', gulp.series('build', 'serve'))
