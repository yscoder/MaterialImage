const gulp = require('gulp')
const uglify = require('gulp-uglify')
const browserSync = require('browser-sync')

const src = './src/'
const dist = './dist/'

gulp.task('js', () => {
    return gulp.src(src + 'materialImage.js')
        .pipe(uglify({
            preserveComments: 'license'
        }))
        .pipe(gulp.dest(dist))
})

gulp.task('default', ['js'])

gulp.task('dev', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })

    gulp.watch(['index.html', src + '*.*'], browserSync.reload)
})