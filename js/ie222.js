var indexss = function () {
    if (myBrowser() > 10 || myBrowser() == "undefined") {
        window.location.href = "index.html";
    }
    console.log(myBrowser());
    pageimg($(".page"), 1920, 1080);
    window.onresize = function () {
        pageimg($(".page"), $(window).width(), $(window).height());
    }

    var inbox = new Swiper(".inbox", {
        //initialSlide :1,
        //pagination : '.swiper-pagination',
        //paginationClickable :true,
        autoplay: 3000
    });

    $(".icon-but a").click(function () {
        if ($(this).hasClass("left")) {
            inbox.swipePrev();
        } else {
            inbox.swipeNext();
        }
    });
    login();
    top(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
    $(window).scroll(function () {
        var body_scr = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        top(body_scr);
    });



    $(".join_btn").click(function () {
        $(this).parent().find(".join_select").slideToggle(200);
    });
    $(".join_select").on("click", "a", function () {
        $(this).parents(".join_inputlist").find(".join_btn").val($(this).text());
        $(this).parent().slideUp(200);
    });
    $(".join_radio").on("click", "a", function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
}

var cases = function () {
    pageimg($(".page"), 1920, 1080);
    window.onresize = function () {
        pageimg($(".page"), 1920, 1080);
    }
    login();
    top2(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
    $(window).scroll(function () {
        var body_scr = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        top2(body_scr);
    });

}
var coop = function () {
    pageimg($(".page"), 1920, 1080);
    window.onresize = function () {
        pageimg($(".page"), 1920, 1080);
    }
    login();
    top2(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
    $(window).scroll(function () {
        var body_scr = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        top2(body_scr);
    });

}
var us = function () {
    pageimg($(".page"), 1920, 1080);
    window.onresize = function () {
        pageimg($(".page"), 1920, 1080);
    }
    login();
    top2(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
    $(window).scroll(function () {
        var body_scr = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        top2(body_scr);
    });

}


function login() {
    $(".loginbut").click(function () {
        if (myBrowser() == 8) {
            //ie7 8显示提示换高端浏览器
            $(".browser").show();
            $(".browser_close").click(function () {
                $(".browser").fadeOut(200);
            });
        } else {
            $(".zh-login-box").toggleClass("open");
            $(this).toggleClass("active");
        }
    });

}

function top(scro) {
    if (scro >= 100) {
        $(".qkyheader").addClass("notop");

    } else {
        $(".qkyheader").removeClass("notop");

    }
    if (scro >= 500) {

        $(".zh-login-box").removeClass("in-onepage");
    } else {

        $(".zh-login-box").addClass("in-onepage");
    }
}

function top2(scro) {
    if (scro >= 100) {
        $(".qkyheader").addClass("notop");

    } else {
        $(".qkyheader").removeClass("notop");

    }
}

//实现图片全自适应的函数
var pageimg = function (id, w, h) { //输入的参数为，id为父类ID，w,h为该父类里图片的真实的宽高
    id.each(function (i) {
        var tw = $(this).width(); //父类宽
        var th = $(this).height(); //父类高
        var new_imgw = Math.floor((w / h) * th); //根据父类高算图片的实践宽
        var new_imgh = Math.floor((h / w) * tw); //根据父类宽算图片的实践高
        //console.log(tw, th, new_imgw, new_imgh);
        var ml = 0,
            mt = 0;
        if (tw < new_imgw) { //当实践图片宽大于父类宽，启动高限制模式，宽两边裁；
            ml = Math.floor((new_imgw - tw) / 2);
            $(this).find("img").removeClass("w").css("margin-left", -ml + "px");
        } else { //当实践图片宽小于父类宽，启动宽限制模式，高上下两边裁；

            $(this).find("img").addClass("w").css("margin-left", "0px");
            if (th < new_imgh) {
                mt = Math.floor((new_imgh - th) / 2);
                $(this).find("img").css("margin-top", -mt + "px");
            } else {
                $(this).find("img").css("margin-top", "0px");
            }
        }
    });
}
//浏览器判断
function myBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
    if (isIE) {
        var IE5 = IE55 = IE6 = IE7 = IE8 = false;
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        IE55 = fIEVersion == 5.5;
        IE6 = fIEVersion == 6.0;
        IE7 = fIEVersion == 7.0;
        IE8 = fIEVersion == 8.0;
        IE9 = fIEVersion == 9.0;
        return fIEVersion;
    } //isIE end
    if (isFF) {
        return "FF";
    }
    if (isOpera) {
        return "Opera";
    }
}