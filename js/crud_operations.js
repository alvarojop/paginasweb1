$(document).ready(function(){

    $('#btntop').click(function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    $('#btninicio').click(function () {
        $('#divPartialView').load('html/inicio.html', function(data) {
            $(this).html(data);
        });
    });

    $('#btnfacturas').click(function () {
        $('#divPartialView').load('html/list.html', function(data) {
            $(this).html(data);
        });
    });

    $('#btncreate').click(function () {
        $('#divPartialView').load('html/create.html', function(data) {
            $(this).html(data);
        });
    });

    $('#btndetail').click(function () {
        $('#divPartialView').load('html/read.html', function(data) {
            $(this).html(data);
        });
    });

    $('#btnedit').click(function () {
        $('#divPartialView').load('html/update.html', function(data) {
            $(this).html(data);
        });
    });

    $('#btndelete').click(function () {
        $('#divPartialView').load('html/delete.html', function(data) {
            $(this).html(data);
        });
    });

    $('#btnback').click(function () {
        $('#divPartialView').load('html/list.html', function(data) {
            $(this).html(data);
        });
    });

});
