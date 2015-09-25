const gulp = require('gulp');
const ts = require('gulp-typescript');
const argv = require('yargs').argv;

const paths = {
  src: ['src/typings/**/*.d.ts', 'typings/**/*.d.ts', 'src/app/**/*.ts'],
  app: 'lib/app',
  lib: 'lib'
};

const project = ts.createProject({
  typescript: require('typescript'),
  noExternalResolve: true,
  module: argv.module || 'commonjs'
});

gulp.task('ts', () =>
  gulp.src(paths.src)
    .pipe(ts(project))
    .pipe(gulp.dest(paths.app)));

gulp.task('watch', ['ts'], () => {
  gulp.watch(paths.src, ['ts']);
});

gulp.task('default', ['ts']);
