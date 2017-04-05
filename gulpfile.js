const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const eslint = require('gulp-eslint');

const src = './src/';
const dist = './dist/';

const buildEs5 = () => gulp.src(`${src}index.js`)
        .pipe(rename('MaterialImage.js'))
        .pipe(babel({
          presets: ['es2015'],
          plugins: [
            ['transform-es2015-modules-umd', {
              globals: {
                'es6-promise': 'Promise',
              },
            }],
          ],
        }))
        .pipe(rename('materialImage.es5.js'))
        .pipe(gulp.dest('dist'));

gulp.task('build', () => buildEs5()
        .pipe(uglify({
          preserveComments: 'license',
        }))
        .pipe(rename('materialImage.min.js'))
        .pipe(gulp.dest(dist)));

gulp.task('es5', () => buildEs5());

gulp.task('dev', () => {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });

  gulp.watch('index.html', browserSync.reload);
  gulp.watch(`${src}*.*`, ['es5']).on('change', browserSync.reload);
});

gulp.task('lint', () => gulp.src(`${src}index.js`)
    .pipe(eslint())
    .pipe(eslint.format()));

gulp.task('default', ['build']);
