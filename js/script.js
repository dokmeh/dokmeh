var navli;
var navNum;
var body;
var homecon;
var n = 0;
var i = 0;


$(document).ready(function(){
    navli = $('.menu-li');
    navNum = $('.menu-li').length;
    body = $('body');
    homecon = $('.home-container');
    n = 0;
    i = 0;

    body.addClass('body-op');
    rain();
    loading('create');
    loading('open');
    window[$('body').attr('data-page')]();
    $('nav.menu ul li a').click(function(){
        $('title').text($(this).attr('data-title'));
        $('body').attr('data-page', $(this).attr('data-page'));
        window.history.pushState({}, $(this).attr('data-title'), $(this).attr('href'));
        loadAjax($(this).attr('href'));
        return false;
    });
    $(window).on('popstate', function(){
        url = window.location.href.replace($('base').attr('href'), '');
        loadAjax(url);
    });
    // for (i = 0; i<navNum; i++){
    //     n = (i*300);
    //     navli.eq(i).css({'-webkit-transition-delay':n+'ms','-ms-transition-delay':n+'ms','-moz-transition-delay':n+'ms','transition-delay':n+'ms',});
    // }
});

function loadAjax(url)
{
    $.ajax({
        url: url,
        type: 'post',
        dataType: 'html',
        cache: false,
        beforeSend: function(xhr){
            $('.inner-ajax *').off();
        },
        success: function(result, status, xhr){
            $('.inner-ajax').html(result);
            window[$('body').attr('data-page')]();
        }
    });
}

//Pages functions
//Home
function home()
{
    loading('close');
    setTimeout(function () {
        homecon.addClass('op')
    },4000);

}

//Projects
function projects()
{
    console.log('This is projects page!');
    $('.project-box').click(function(){
        $('title').text($(this).attr('data-title'));
        $('body').attr('data-page', $(this).attr('data-page'));
        window.history.pushState({}, $(this).attr('data-title'), $(this).attr('href'));
        loadAjax($(this).attr('href'));
        return false;
    });
}

//Project
function project()
{
    console.log('This is project page!');
}

//Contact
function contact()
{
    console.log('This is contact page!');
}

//About
function about()
{
    console.log('This is about page!');
}

function rain(){

    var w = body.width();
    var h = body.height();
    var bw = $('.rain-box').width();
    var whNum = (w*h / (bw*bw)+50);
    console.log(whNum);
    for(i = 0; i<= whNum; i++){
        $( ".bg-effect" ).append( '<div class="rain-box"><div class="rain-sp"></div></div>' );
    }
    for(i = 0; i<= (whNum); i++){
        var n = Math.floor(Math.random() * (4 + 1));
        $('.rain-box').eq(i).addClass('blur'+n);
    }


    var line = $('.bg-effect .rain-box');
    var max = line.length;
    var n = 0;
    setInterval(function () {
        n =  Math.floor(Math.random() * (max + 1));
        line.eq(n).addClass('o');
    },3);
    setInterval(function () {
        n =  Math.floor(Math.random() * (max + 1));
        line.eq(n).removeClass('o');
    },5);

}
function loading(status) {
    var StageW = $(document).width()/100;
    var i = 0;
    var n = 0;
    if(status == 'create'){
        for (i = 0; i<StageW; i++){
            n = (i*100)+100;
            $( ".loading-bg" ).append( '<div class="loading-lines" style="-webkit-transition-delay: '+n+'ms;-moz-transition-delay: '+n+'ms;-ms-transition-delay: '+n+'ms;-o-transition-delay: '+n+'ms;transition-delay: '+n+'ms;"></div>' );
        }
    }
    if(status == 'open'){
        $('.loading').addClass('op');
    }
    if(status == 'close'){
        $('.loading').removeClass('op');
    }

}