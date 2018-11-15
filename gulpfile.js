var gulp         = require('gulp'), // Подключаем Gulp
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

gulp.task('sass', function () {
    gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
}) ;
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});


gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/*.css', ['css']); // Наблюдение за css файлами в папке css
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/scss/**/*.scss', browserSync.reload);
    gulp.watch('app/css/*.css', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/scripts/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

gulp.task('clear', function () {
    return cache.clearAll();
});

gulp.task('default', ['watch']);