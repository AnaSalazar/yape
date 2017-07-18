var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

var rutas = {
  rutaHTML: "src/index.html",
  rutaSCSS: "src/assets/scss/main.scss",
  rutaJS: "src/assets/js/app.js"
}

gulp.task("actualizarHTML",function(){
  gulp.src(rutas.rutaHTML)
  .pipe(gulp.dest("public/"))
});

gulp.task("actualizarCSS",function(){
  gulp.src(rutas.rutaSCSS)
    .pipe(sass({
      outputStyle: "compressed"})
    .on("error", sass.logError))
    .pipe(gulp.dest("public/css"))
});

gulp.task("actualizarJS", function(){
  gulp.src(rutas.rutaJS)
  .pipe(gulp.dest("public/js"))
})

gulp.task('watchChanges',function(){
    browserSync.init({
        server:{
            baseDir: "./public"
        }
    })
    gulp.watch(rutas.rutaHTML, ["html-watch"] );
    gulp.watch(rutas.rutaSCSS, ["sass-watch"] );
    gulp.watch(rutas.rutaJS, ["js-watch"] );
});

gulp.task('html-watch',['actualizarHTML'],function(){
  browserSync.reload();
});

gulp.task('sass-watch',['actualizarCSS'],function(){
    browserSync.reload();
});

gulp.task('js-watch',['actualizarJS'],function(){
    browserSync.reload();
});
