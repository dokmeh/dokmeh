var navli;
var navNum;
var body;
var homecon;
var n = 0;
var i = 0;


$(document).ready(function(){
    loading('open');
    navli = $('.menu-li');
    navNum = $('.menu-li').length;
    body = $('body');
    n = 0;
    i = 0;

    body.addClass('body-op');
    //rain();
    gyro();
    //loading('open');
    loadAjax(window[$('body').attr('data-page')]());
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
    loading('open');
    setTimeout(function () {
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'html',
            cache: false,
            beforeSend: function(xhr){
                rain('off');

                    $('.inner-ajax *').off();

            },
            success: function(result, status, xhr){
                $('.inner-ajax').html(result);
                window[$('body').attr('data-page')]();

                setTimeout(function () {
                    $('body').removeClass('black');
                    loading('close');
                    rain('on');
                }, 1000);

            }
        });
    },1000);

}

//Pages functions
//Home
function home() {




    setTimeout(function () {
        $('.home-container').addClass('op')
    }, 2000);
    Typed.new('.home-type', {
        strings: ["who we are...?", "where we start...?", "where we are going...?", "we decide who we are"],
        typeSpeed: 0,
        loop: true,
        showCursor: false,
        startDelay: 4000,
        backDelay: 3000,

    });


/*

    var timeout;
    var count = 0;

    var keyPressed = false;

    $(document).on('keydown mousedown', function (e) {
        var key;
        if (keyPressed === false) {
            keyPressed = true;
/!*            key = String.fromCharCode(e.keyCode);*!/

            //this is where you map your key
            
                console.log(key);
                timeout = setInterval(function () {
                    count++;
                    console.log(count);
                }, 500);
                zoomstatus(true);
                return false;
            
        }
        $(this).on('keyup mouseup mouseleave', function () {
            if (keyPressed === true) {
                keyPressed = false;
                console.log('Key no longer held down');
                if(count<=15){
                    zoomstatus(false);
                }
                clearInterval(timeout);

                return false;
            }
            count = 0;
        });
    });*/

    var timeoutId = 0;

/*    function zoomstatus(x) {
            if(x == true){
                $('.rain-zoom').removeClass('noScale').addClass('scaleUp');
                $('body').removeClass('black');
                $('.inner-ajax, .bg-effect').removeClass('scaleDown').addClass('noScale');
            }else{
                $('body').addClass('black');
                $('.rain-zoom').addClass('noScale').removeClass('scaleUp');
                $('.inner-ajax, .bg-effect').addClass('scaleDown').removeClass('noScale');
            }

    }*/

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

function rain(status){
    if(status == 'on'){
        setTimeout(function () {
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
                $( ".bg-effect" ).addClass('op');
        },2000);
    }else{
        $( ".bg-effect" ).addClass('op');
        setTimeout(function () {
            $( ".bg-effect *" ).off();
        },2000);

    }

}
function loading(status) {
    var StageW = $(document).width()/100;
    var i = 0;
    var n = 0;
    if(status == 'open'){
        $('.loading').addClass('op');
    }
    if(status == 'close'){
        $('.loading').removeClass('op opf');
    }

}



function gyro(){



        var has_touch = 'ontouchstart' in document.documentElement;
        var accX, accY, width, height, xA, yA, movement;

        if(has_touch || screen.width <= 699) {

            (resize = function() {

                height = $(window).height();
                width = $(window).width();

                $('.bg-effect').width(width).height(height);


            })();

            window.ondevicemotion = function(event) {

                accX = Math.round(event.accelerationIncludingGravity.x*10) / 10;
                accY = Math.round(event.accelerationIncludingGravity.y*10) / 10;

                movement = 10;

                xA = -(accX / 10) * movement;
                yA = -(accY / 10) * movement;


                run();

            }

        } else {

            $('.content').show();

            $('.bg-effect').addClass('fullscreen').mousemove(function(e) {

                width = $(this).width();
                height = $(this).height();

                accX = (((e.pageX - this.offsetLeft)*2 / width) * 10) - 10;
                accY = (((e.pageY - this.offsetTop)*2 / width) * 10) - 10;

                xA = -(accX*10);
                yA = -(accY*10);

                movement = 2;

                run();

            });


        }

        function run() {
            bX = -(xA*2);
            bY = -(yA*2)-300;
            $('.bg-effect').css({'left' : (bX)+'px'});
        //alert(xA);


            //$('.home-sign-container').css({'-webkit-transform' : rotate(bX*20)+'deg','transform' : rotate(bX*20)+'deg'});

        }


}
var thread;
var set;

function mousedegree() {
    $(window).mousemove(function(e) {
        //getDirection(e);
        if (!set) {
            x1 = e.pageX, //set starting mouse x
            y1 = e.pageY, //set starting mouse y
            set = true;
        }
        clearTimeout(thread);
        thread = setTimeout(callback.bind(this, e), 100);
    });

    function getAngle (x1, y1, x2, y2) {
        var distY = Math.abs(y2-y1); //opposite
        var distX = Math.abs(x2-x1); //adjacent
        var dist = Math.sqrt((distY*distY)+(distX*distX)); //hypotenuse,
        //don't know if there is a built in JS function to do the square of a number
        var val = distY/dist;
        var aSine = Math.asin(val);
        return aSine * (270/Math.PI); //return angle in degrees
    }

    function callback(e) {
        x2 = e.pageX; //new X
        y2 = e.pageY; //new Y

        console.log("ANGLE: " + getAngle(x1, y1, x2, y2));
        console.log("mouse has stopped");

        $('.rain-box').css({'transform':'rotate('+getAngle(x1, y1, x2, y2)+'deg)'});
        set = false;
    }
}