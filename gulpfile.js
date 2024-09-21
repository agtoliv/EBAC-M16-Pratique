const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

//Compilação SASS
function compilaSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function comprimeImages(){
    return gulp.src('./source/images/*.{jpg,png,gif,svg}')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJS(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}


exports.default = gulp.parallel(compilaSass, comprimeImages, comprimeJS);
//exports.default = function (){
  //  gulp('./source/styles/*scss'), {ignoreInitial: false}, gulp.series(compilaSass);
//}