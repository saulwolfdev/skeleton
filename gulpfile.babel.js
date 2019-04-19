import gulp from "gulp"
import sass from "gulp-sass"
import autoprefixer from "gulp-autoprefixer"
import pug from "gulp-pug"
import babel from "gulp-babel"
import concat from "gulp-concat"
import uglify from "gulp-uglify"
import plumber from "gulp-plumber"
import browserSync from "browser-sync"

const server = browserSync.create()

gulp.task("sass",()=>{
    gulp.src("./dev/scss/styles.scss")
    .pipe(plumber())
    .pipe(sass({
        outputStyle:"compact"
    }))
})
.pipe(autoprefixer({
    browsers:["last 3 versions"]
}))
.pipe(gulp.dest("./public/css"))
.pipe(server.stream())
gulp.task("pug",()=>{
    gulp.src("./dev/pug/*.pug")
    .pipe(plumber())
    .pipe(pug({
        pretty:true
    }))
    .pipe(gulp.dest("./public"))
})
gulp.task("babel",()=>{
    gulp.src("./dev/js/*.js")
    .pipe(plumber())
    .pipe(babel({
        presets:["env"]
    }))
    .pipe(gulp.dest("./dev/js/es5"))
})
gulp.task("default",()=>{
    server.init({
        server:"./public"
    })
})
gulp.watch("./dev/scss/styles.scss",["sass"])
gulp.watch("./dev/pug/*.pug",["pug"].on("change",server.reload))
gulp.watch("./dev/js/*.js",["babel","compres"]).on("change",server.reload)