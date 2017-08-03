'use strict'
const gulp    = require('gulp')
const config  = require('../config')
const when = require('gulp-if')
const $ = require('gulp-load-plugins')()
const production = config.production

gulp.task('main:styles', function() {
  return gulp.src(config.project.cssMainFile)
    .pipe($.sourcemaps.init())
    .pipe(when(!production, $.sourcemaps.init()))
    
        .pipe($.sass({
          includePaths: config.vendor.scssDirectories
        }))
        .on('error', $.sass.logError)
    
    
    
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'iOS 8']
    }))
    .pipe(gulp.dest(config.directories.dist.styles))
    .pipe($.groupCssMediaQueries())
    .pipe($.csscomb())
    .pipe(when(!production, $.sourcemaps.write('./')))
    .pipe(gulp.dest(config.directories.dist.styles))

    .pipe(when(production, $.rename({suffix: '.min'})))
    .pipe(when(production, $.purifycss( config.purify, { info: true } )))
    .pipe(when(production, $.cssnano()))
    .pipe(when(production, gulp.dest(config.directories.dist.styles)))
})

gulp.task('vendor:styles', () => {
  return gulp.src('src/assets/styles/vendor.scss')
  .pipe(when(!production, $.sourcemaps.init()))
  .pipe($.sass({
    includePaths: config.vendor.scssDirectories
  }))
  .on('error', $.sass.logError)
  .pipe($.autoprefixer({
    browsers: ['last 2 versions', 'iOS 8']
  }))
  .pipe($.groupCssMediaQueries())
  .pipe($.csscomb())
  .pipe(when(!production, $.sourcemaps.write('./')))
  .pipe(gulp.dest(config.directories.dist.styles))

  .pipe(when(production, $.rename({suffix: '.min'})))
  .pipe(when(production, $.purifycss( config.purify, { info: true } )))
  .pipe(when(production, $.cssnano()))
  .pipe(gulp.dest(config.directories.dist.styles))
})
