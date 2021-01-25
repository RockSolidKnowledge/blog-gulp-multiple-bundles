// https://github.com/sindresorhus/gulp-autoprefixer
const autoprefixer = require('gulp-autoprefixer');
// https://github.com/gulpjs/gulp
const gulp = require('gulp');
// https://github.com/hparra/gulp-rename
const rename = require('gulp-rename');
// https://github.com/dlmanning/gulp-sass
const sass = require('gulp-sass');
// https://github.com/ubirak/gulp-uglifycss
const uglifycss = require('gulp-uglifycss');
// https://github.com/grncdr/merge-stream
const merge = require('merge-stream');

const CONFIGS = [
    require('./gulp.config.foo'),
    require('./gulp.config.bar')
];

function css() {
    const tasks = CONFIGS.map(config => {
        return gulp.src(config.css.sourcePaths)
            .pipe(sass(config.thirdParty.sassOptions).on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(uglifycss(config.thirdParty.uglifyCssOptions))
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest(config.css.exportPath))
    });

    return merge(tasks);
}

exports.build = css;
