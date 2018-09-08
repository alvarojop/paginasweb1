$(document).ready(function(){

    $("#btntop").click(function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    $("#btninicio").click(function() {
        $("#dinicio").attr('class', 'visible text-center');
        $("#dpicosita").attr('class', 'invisible text-center');
        $("#dmichelada").attr('class', 'invisible text-center');
        $("#djagerbomb").attr('class', 'invisible text-center');
        $("#dmojito").attr('class', 'invisible text-center');
        $("#dmargarita").attr('class', 'invisible text-center');

        $("#dinicio").attr('style', 'display:block');
        $("#dpicosita").attr('style', 'display:none');
        $("#dmichelada").attr('style', 'display:none');
        $("#djagerbomb").attr('style', 'display:none');
        $("#dmojito").attr('style', 'display:none');
        $("#dmargarita").attr('style', 'display:none');
    });
    
});
