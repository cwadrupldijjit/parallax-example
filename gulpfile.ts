/// <reference path="typings/main.d.ts" />

'use strict';

let gulp = require('gulp');
let tsc = require('gulp-typescript');
let sourcemaps = require('gulp-sourcemaps');
let watch = require('gulp-watch');

let pathToRef = './typings/main.d.ts';
let pathToServerTs = [pathToRef, './server/**/*.ts'];
let pathToPublicTs = [pathToRef, './public/**/*.ts'];
let tsconfig = function(module, experimentalDecorators, emitDecoratorMetadata) {
    this.target = 'es5';
    this.moduleResolution = 'node';
    this.noImplicitAny = false;
    this.removeComments = false;
    
    this.module = module;
    this.experimentalDecorators = experimentalDecorators;
    this.emitDecoratorMetadata = emitDecoratorMetadata;
};

function compileServer() {
    gulp.src(pathToServerTs)
        .pipe(sourcemaps.init())
            .pipe(tsc(new tsconfig('commonjs', null, null)))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./server'));
}

function compilePublic() {
    gulp.src(pathToPublicTs)
        .pipe(sourcemaps.init())
            .pipe(tsc(new tsconfig('system', true, true)))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public'));
}

function watcher() {
    watch(pathToServerTs, compileServer);
    watch(pathToPublicTs, compilePublic);
}

gulp.task('tsc-server', compileServer);
gulp.task('tsc-public', compilePublic);
gulp.task('watch', watcher);

gulp.task('default', ['tsc-server', 'tsc-public', 'watch']);