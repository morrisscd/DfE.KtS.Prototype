'use strict';
var debug = require('debug');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./app/routes/index');
var users = require('./app/routes/users');

var app = express();

console.log(path.join(__dirname, '/app/views'));
// view engine setup
//app.set('views', path.join(__dirname, '/app/views'));
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, '/app/public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        //res.render('error', {
        //    message: err.message,
        //    error: err
        //});
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    //res.render('error', {
    //    message: err.message,
    //    error: {}
    //});
});

runGulp()

function runGulp() {
    const spawn = require('cross-spawn')

    process.env['FORCE_COLOR'] = 1
    var gulp = spawn('./node_modules/.bin/gulp')
    gulp.stdout.pipe(process.stdout)
    gulp.stderr.pipe(process.stderr)
    process.stdin.pipe(gulp.stdin)

    console.log('completed gulp');

    gulp.on('exit', function (code) {
        console.log('gulp exited with code ' + code.toString())
    })
}

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
