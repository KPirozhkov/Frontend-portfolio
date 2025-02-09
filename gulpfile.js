const gulp = require("gulp");
const browserSync = require("browser-sync").create();

// Задача: Запуск сервера и отслеживание изменений
gulp.task("serve", function () {
    browserSync.init({
        server: {
            baseDir: "./" // Запускаем сервер из корневой папки
        }
    });

    // Следим за изменениями файлов
    gulp.watch("*.html").on("change", browserSync.reload);
    gulp.watch("css/*.css").on("change", browserSync.reload);
    gulp.watch("js/*.js").on("change", browserSync.reload);
});

// Задача по умолчанию
gulp.task("default", gulp.series("serve"));
