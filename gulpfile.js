var gulp = require("gulp");
var fileinclude = require("gulp-file-include");

gulp.task('fileinclude',function(){
  gulp.src(['page/**/*.html','@page/include/**.html'])
    .pipe(fileinclude({
    	
    }))
    .pipe(gulp.dest('dist'))
})

