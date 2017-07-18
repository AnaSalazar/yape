var gulp = require("gulp");
var sass = require("gulp-sass");

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