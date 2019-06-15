var gulp = require('gulp')
rename=require('gulp-rename')//重命名模块
minfyhtml=require('gulp-minify-html')//压缩html模块
minfycss=require('gulp-minify-css')//压缩css模块
uglify=require('gulp-uglify')//压缩js模块
less=require('gulp-less')//less编译模块
imageMin=require('gulp-imagemin')//压缩图片模块
pngquant=require('imagemin-pngquant')//深度压缩图片
concat=require('gulp-concat')//合并css
//html任务
gulp.task('html',function(){
    return gulp.src('html/*.html')
    .pipe(minfyhtml())
    .pipe(rename({suffix:".min"}))//加min后缀
    .pipe(gulp.dest('html/html'));
});
//css任务
gulp.task('css',function(){
    return gulp.src('css/*.css')
    .pipe(minfycss())
    .pipe(rename({suffix:".min"}))//加min后缀
    .pipe(gulp.dest('css/css'));
});
//合并css文件
gulp.task('hecss',function(){
    return gulp.src(['css/*.css','css/*.css'])
    .pipe(concat('hecss.css'))
    .pipe(gulp.dest('css/'))
})
//js任务
gulp.task('script',function(){
    return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix:".min"}))//加min后缀
    .pipe(gulp.dest('js/js'));
});
//less任务
gulp.task('less',function(){
    return gulp.src('less/*.less')
    .pipe(less())
    .pipe(rename({suffix:".min"}))//加min后缀
    .pipe(gulp.dest('css'));
});
//img任务
gulp.task('img', function () {  
    return gulp.src('images/*.*')    
   .pipe(imageMin({
      progressive: true,//无损压缩图片
       svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
       use: [pngquant()],//使用pngquant深度压缩png图片的imagemin插件
       optimizationLevel: 7, //类型：Number  默认：3  取值范围：0-7（优化等级）
       progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
       interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
       multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
})) 
    .pipe(gulp.dest('images/img'));
});

//监听要操作的文件
gulp.task('watch',function(){
    gulp.watch('html/*.html',gulp.task('html'));
    gulp.watch('css/*.css',gulp.task('css'));
    gulp.watch('js/*.js',gulp.task('script'));
    //gulp.watch('images/*.*',gulp.task('img'));
    gulp.watch('less/*.less',gulp.task('less')); 

})
//默认任务,parallel为gulp4.0多个依赖嵌套;gulp.series为gulp4.0依赖
gulp.task('default',gulp.parallel('css','script','watch','html','less','img','hecss'));



