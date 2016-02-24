var gulp = require('gulp');
var tslint = require("gulp-tslint");


gulp.task('default', function () {
    // place code for your default task here
});

gulp.task("custom-ts-rules", ()=>
    gulp.src("app/*.ts")
        .pipe(tslint({
            "rulesDirectory": "node_modules/ng2lint/dist/src/"
        }))
        .pipe(tslint.report('prose', {
            emitError: false
        }))
);


