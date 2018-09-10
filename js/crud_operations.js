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
    
});
