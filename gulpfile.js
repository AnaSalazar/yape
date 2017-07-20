var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

var rutas = {
  rutaHTML:           "src/index.html",
  rutaValidacionHTML: "src/validacion.html",
  rutaCodigoHTML:     "src/codigo.html",
  rutaDatosHTML:      "src/datos.html",
  rutaSplashHTML:     "src/splash.html",
  rutaTarjetaHTML:    "src/registro-tarjeta.html",
  rutaSCSS:           "src/assets/scss/main.scss",
  rutaJS:             "src/assets/js/app.js",
  rutaPostJS:         "src/assets/js/post.js"
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

gulp.task("actualizarValidacionHTML",function(){
  gulp.src(rutas.rutaValidacionHTML)
  .pipe(gulp.dest("public/views/"))
});

gulp.task("actualizarCodigoHTML",function(){
  gulp.src(rutas.rutaCodigoHTML)
  .pipe(gulp.dest("public/views/"))
});

gulp.task("actualizarPostJS", function(){
  gulp.src(rutas.rutaPostJS)
  .pipe(gulp.dest("public/js/"))
});

gulp.task("actualizarDatosHTML",function(){
  gulp.src(rutas.rutaDatosHTML)
  .pipe(gulp.dest("public/views/"))
});

gulp.task("actualizarSplashHTML",function(){
  gulp.src(rutas.rutaSplashHTML)
  .pipe(gulp.dest("public/views/"))
});

gulp.task("actualizarTarjetaHTML",function(){
  gulp.src(rutas.rutaTarjetaHTML)
  .pipe(gulp.dest("public/views/"))
});

gulp.task('watchChanges',function(){
    browserSync.init({
        server:{
            baseDir: "./public"
        }
    })
    gulp.watch(rutas.rutaHTML, ["html-watch"] );
    gulp.watch(rutas.rutaSCSS, ["sass-watch"] );
    gulp.watch(rutas.rutaJS, ["js-watch"] );
    gulp.watch(rutas.rutaValidacionHTML, ["htmlValidacion-watch"] );
    gulp.watch(rutas.rutaCodigoHTML, ["htmlCodigo-watch"] );
    gulp.watch(rutas.rutaPostJS, ["post-watch"] );
    gulp.watch(rutas.rutaDatosHTML, ["htmlDatos-watch"] );
    gulp.watch(rutas.rutaSplashHTML, ["htmlSplash-watch"] );
    gulp.watch(rutas.rutaTarjetaHTML, ["htmlTarjeta-watch"] );
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

gulp.task('htmlValidacion-watch',['actualizarValidacionHTML'],function(){
  browserSync.reload();
});

gulp.task('htmlCodigo-watch',['actualizarCodigoHTML'],function(){
  browserSync.reload();
});

gulp.task('post-watch',['actualizarPostJS'],function(){
  browserSync.reload();
});

gulp.task('htmlDatos-watch',['actualizarDatosHTML'],function(){
  browserSync.reload();
});

gulp.task('htmlSplash-watch',['actualizarSplashHTML'],function(){
  browserSync.reload();
});

gulp.task('htmlTarjeta-watch',['actualizarTarjetaHTML'],function(){
  browserSync.reload();
});
