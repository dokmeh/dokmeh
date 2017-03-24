var navli;
var navNum;
var body;
var homecon;
var n = 0;
var i = 0;
var mouseSpeed = 0;


$(document).ready(function () {
    //loading('open');
    navli = $('.menu-li');
    navNum = $('.menu-li').length;
    body = $('body');
    n = 0;
    i = 0;

    body.addClass('body-op');
    //rain();
    gyro();
    setTimeout(function () {
        loading('open');
    }, 0);
    window[$('body').attr('data-page')]();
    $('nav.menu ul li a').click(function () {
        $('title').text($(this).attr('data-title'));
        $('body').attr('data-page', $(this).attr('data-page'));
        window.history.pushState({}, $(this).attr('data-title'), $(this).attr('href'));
        loadAjax($(this).attr('href'));
        return false;
    });
    $(window).on('popstate', function () {
        url = window.location.href.replace($('base').attr('href'), '');
        loadAjax(url);
    });

});

function loadAjax(url) {
    loading('open');
    setTimeout(function () {
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'html',
            cache: false,
            beforeSend: function (xhr) {
                rain('off');
                $('.inner-ajax *').off();
            },
            success: function (result, status, xhr) {
                console.log(url + 'a');
                $('.inner-ajax').html(result);
                window[$('body').attr('data-page')]();
                $('body').removeClass('black');


            }
        });
    }, 1000);

}

//Pages functions
//Home
function home() {

    setTimeout(function () {
        loading('close');
    }, 2500);
    var el = document.querySelector('.home-disc');
    setTimeout(function () {
        $('.home-container').addClass('op')
        shuffleLet(el);
        //let b = baffle('.home-disc').reveal(1000);

        $('.home-audio')[0].play();
        // $('.home-disc').mouseenter(shuffleLet(el));
    }, 4000);


    //let b = baffle(el).start();


    /*        .then(function () {
     var el = document.querySelector('h1');
     var animate = shuffleLetters(el, {
     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima suscipit debitis necessitatibus nihil repellat a porro quibusdam earum excepturi vero, unde, autem, sint dolorem. Nam, pariatur doloribus animi ipsam esse.',
     step: 1,
     fps: 60
     });

     setTimeout(function () {
     console.log('multiple firing');
     shuffleLetters(el, {
     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima suscipit debitis necessitatibus nihil repellat a porro quibusdam earum excepturi vero, unde, autem, sint dolorem. Nam, pariatur doloribus animi ipsam esse.',
     step: 1,
     fps: 60
     });
     }, 1000);

     return animate;
     })*/
    // .then(function () {
    //     return shuffleLetters(document.querySelector('.second'), {
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, magnam, inventore. Impedit fugiat est, ex nobis voluptatum laborum unde officia aut quae placeat omnis repellendus nam. Nam, magni tenetur doloremque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, magnam, inventore.',
    //         step: 30
    //     });
    // })
    // .then(function () {
    //     var third = document.querySelectorAll('.third');
    //     for (var i = 0; i < third.length; i++) {
    //         third[i].hidden = false;
    //     }
    //     return shuffleLetters(third);
    // })
    // .then(function () {
    //     console.log('finish');
    // });


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
function projects() {
    loading('close');
    console.log('This is projects page!');
    $('.project-box').click(function () {
        $('title').text($(this).attr('data-title'));
        $('body').attr('data-page', $(this).attr('data-page'));
        window.history.pushState({}, $(this).attr('data-title'), $(this).attr('href'));
        loadAjax($(this).attr('href'));
        return false;
    });
}

//Project
function project() {
    loading('close');

}

//Contact
function contact() {

    setTimeout(function () {
        loading('close');
    }, 1800);
    console.log('This is contactt page!');
    console
    var n = 3000;
    setTimeout(function () {
        var el1 = document.querySelectorAll('.contact-global-h h3');
        var el2 = document.querySelectorAll('.contact-global-h a:not(.socials),.contact-global-h p');
        /*shuffleLet(el1).then(function () {
         return shuffleLet(el2);
         })*/


        shuffleLetters(el1)
            .then(function () {

                var animate = shuffleLetters(el2, {
                    step: 30,
                    fps: 15
                });
                return animate;
            })
            .then(function () {
                init();
            })
            .then(function () {
                havearrow();
            })


    }, n);
    setTimeout(function () {


    }, n + 1000);
    var nth = 0;
    $('.find-out-jok').click(function () {
        $('.video-for-jok').addClass('op');
        $('.video-for-jok video').eq(nth).addClass('op').get(0).play();

        $('.video-for-jok video').eq(nth).bind("ended", function () {
            $(this).removeClass('op');
        });
        nth++;
        if (nth >= $('.video-for-jok video').length) {
            nth = 0;
        }
    })

}

//About
function about() {
    setTimeout(function () {
        loading('close');
    }, 1800);
}

function rain(status) {
    if (status == 'on') {
        setTimeout(function () {
            var w = body.width();
            var h = body.height();
            var bw = $('.rain-box').width();
            var whNum = (w * h / (bw * bw) + 50);

            for (i = 0; i <= whNum; i++) {
                $(".bg-effect").append('<div class="rain-box"><div class="rain-sp"></div></div>');
            }
            for (i = 0; i <= (whNum); i++) {
                var n = Math.floor(Math.random() * (4 + 1));
                $('.rain-box').eq(i).addClass('blur' + n);
            }


            var line = $('.bg-effect .rain-box');
            var max = line.length;
            var n = 0;
            setInterval(function () {
                n = Math.floor(Math.random() * (max + 1));
                line.eq(n).addClass('o');
            }, 100);
            setInterval(function () {
                n = Math.floor(Math.random() * (max + 1));
                line.eq(n).removeClass('o');
            }, 70);
            $(".bg-effect").addClass('op');
        }, 2000);
    } else {
        $(".bg-effect").addClass('op');
        setTimeout(function () {
            $(".bg-effect *").off();
        }, 2000);

    }

}
function loading(status) {
    console.log(status);
    if (status == 'open') {
        $('.loading').addClass('op');
        rain('off');
    }
    if (status == 'close') {
        $('.loading').removeClass('op opf');
        $('body').removeClass('black');
        rain('on');
    }

}


function gyro() {


    var has_touch = 'ontouchstart' in document.documentElement;
    var accX, accY, width, height, xA, yA, movement;

    if (has_touch || screen.width <= 699) {

        (resize = function () {

            height = $(window).height();
            width = $(window).width();

            $('.bg-effect').width(width).height(height);


        })();

        window.ondevicemotion = function (event) {

            accX = Math.round(event.accelerationIncludingGravity.x * 10) / 10;
            accY = Math.round(event.accelerationIncludingGravity.y * 10) / 10;

            movement = 10;

            xA = -(accX / 10) * movement;
            yA = -(accY / 10) * movement;


            run();

        }

    } else {

        $('.content').show();

        $('.bg-effect').addClass('fullscreen').mousemove(function (e) {

            width = $(this).width();
            height = $(this).height();

            accX = (((e.pageX - this.offsetLeft) * 2 / width) * 10) - 10;
            accY = (((e.pageY - this.offsetTop) * 2 / width) * 10) - 10;

            xA = -(accX * 10);
            yA = -(accY * 10);

            movement = 2;

            run();

        });


    }

    function run() {
        bX = -(xA * 2);
        bY = -(yA * 2);
        //$('.bg-effect').css({'left': (bX) + 'px'});
        //alert(xA);


        $('.home-container').css({
            '-webkit-transform': 'rotateY(' + (-bX * 2) + 'deg)',
            '-moz-transform': 'rotateY(' + (-bX * 2) + 'deg)',
            '-ms-transform': 'rotateY(' + (-bX * 2) + 'deg)',
            'transform': 'rotateY(' + (-bX * 2) + 'deg)'
        });
        //$('.menu').css({'-webkit-transform':'rotateY('+(-bX*2)+'deg)','-moz-transform':'rotateY('+(-bX*2)+'deg)','-ms-transform':'rotateY('+(-bX*2)+'deg)','transform':'rotateY('+(-bX*2)+'deg)'});

    }


}
var thread;
var set;

function mousedegree() {
    $(window).mousemove(function (e) {
        //getDirection(e);
        if (!set) {
            x1 = e.pageX, //set starting mouse x
                y1 = e.pageY, //set starting mouse y
                set = true;
        }
        clearTimeout(thread);
        thread = setTimeout(callback.bind(this, e), 100);
    });

    function getAngle(x1, y1, x2, y2) {
        var distY = Math.abs(y2 - y1); //opposite
        var distX = Math.abs(x2 - x1); //adjacent
        var dist = Math.sqrt((distY * distY) + (distX * distX)); //hypotenuse,
        //don't know if there is a built in JS function to do the square of a number
        var val = distY / dist;
        var aSine = Math.asin(val);
        return aSine * (270 / Math.PI); //return angle in degrees
    }

    function callback(e) {
        x2 = e.pageX; //new X
        y2 = e.pageY; //new Y

        console.log("ANGLE: " + getAngle(x1, y1, x2, y2));
        console.log("mouse has stopped");

        $('.rain-box').css({'transform': 'rotate(' + getAngle(x1, y1, x2, y2) + 'deg)'});
        set = false;
    }
}
function mouseEventListener() {

    var counter;
    var a = 0;
    var nb = 0;
    counter = setInterval(function () {
        $('.rain-box').eq(a).addClass('a');
        a += nb;
        if (a <= 0) {
            a = 0;
        }
        console.log(a);
    }, 500);
    $(document).mousemove(function (evt) {
        nb = 1;
    });
    $(document).on('mousemoveend', function () {


        nb = -1;
    });


}
(function ($) {
    var timeout;
    $(document).on('mousemove', function (event) {
        if (timeout !== undefined) {
            window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(function () {
            // trigger the new event on event.target, so that it can bubble appropriately
            $(event.target).trigger('mousemoveend');
        }, 100);
    });
}(jQuery));


function shuffleLet(el) {
    shuffleLetters(el,
        {
            step: 70,
            fps: 70
        }
    );
}

function havearrow() {
    var svgarrow = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.2 12.7" style="enable-background:new 0 0 36.2 12.7;" xml:space="preserve"><style type="text/css">.st0{fill:none;stroke:#000000;stroke-miterlimit:10;}</style><g><g><line class="st0" x1="35" y1="6.4" x2="0" y2="6.4"/></g><polyline class="st0" points="29.5,0.4 35.5,6.4 29.5,12.4 	"/></g></svg>';
    $('body').find('.have-arrow').append(svgarrow);
}