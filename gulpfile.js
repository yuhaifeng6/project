const gulp = require('gulp');

/*
	拷贝html文件
*/
gulp.task("copy-html", function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})


/*
	拷贝图片
*/
gulp.task("images", function(){
	return gulp.src("images/*.{jpg,png,gif}")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

/*
	使用gulp-sass-china 编译scss文件
	gulp-minify-css
	gulp-rename
*/
const scss = require("gulp-sass-china");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("common", function(){
	return gulp.src("stylesheet/common.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("_common.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("top", function(){
	return gulp.src("stylesheet/top.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("top.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("foot", function(){
	return gulp.src("stylesheet/foot.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("foot.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("scss1", function(){
	return gulp.src("stylesheet/index.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("scss2", function(){
	return gulp.src("stylesheet/register.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("register.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("scss3", function(){
	return gulp.src("stylesheet/enter.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("enter.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("scss4", function(){
	return gulp.src("stylesheet/list.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("list.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("scss5", function(){
	return gulp.src("stylesheet/order.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("order.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("scss6", function(){
	return gulp.src("stylesheet/particulars.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("particulars.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
/*
	拷贝js文件
*/
gulp.task("scripts", function(){
	return gulp.src(["*.js", "!gulpfile.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

/*
	拷贝数据
*/
gulp.task("data", function(){
	return gulp.src(["*.json", "!package.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

/*
	建立工程的任务
*/
gulp.task("build", ["copy-html", "common","top", "foot", "scss1", "scss2", "scss3", "scss4", "scss5", "scss6", "images", "scripts", "data"], function(){
	console.log("编译成功");
});

/*
	编写监听
*/
gulp.task("watch", function(){
	gulp.watch(["*.json", "!package.json"], ["data"]);
	gulp.watch(["*.js", "!gulpfile.js"], ['scripts']);
	gulp.watch(["stylesheet/common.scss"], ["common"]);
	gulp.watch(["stylesheet/top.scss"], ["top"]);
	gulp.watch(["stylesheet/foot.scss"], ["foot"]);
	gulp.watch(['stylesheet/index.scss'], ['scss1']);
	gulp.watch(["stylesheet/register.scss"], ["scss2"]);
	gulp.watch(["stylesheet/enter.scss"], ["scss3"]);
	gulp.watch(["stylesheet/list.scss"], ["scss4"]);
	gulp.watch(["stylesheet/order.scss"], ["scss5"]);
	gulp.watch(["stylesheet/particulars.scss"], ["scss6"]);
	gulp.watch(["images/*.{jpg,png,gif}"] ['images']);
	gulp.watch(["*.html"], ['copy-html']);
})

/*
	gulp-connect 启动服务
*/
const connect = require("gulp-connect");
gulp.task("server", function(){
	connect.server({
		root: 'dist',
		livereload: true
	})
})

/*
	启动默认任务
*/
gulp.task("default", ['watch', "server"]);