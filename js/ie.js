 

function isunie(url){
    if ( myBrowser() != "IE9" && myBrowser() != "IE8"&& myBrowser() != "IE10") {
        window.location.href = url;
     }
}
 
var h=$(window).height();
$(".qkycontent").css("height",h+"px");

 function  indexss() {
    isunie("index.html");

    tops(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
    $(window).scroll(function () {
         //console.log(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
        var body_scr = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
         tops(body_scr);
     });
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


function scroll() {
    if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
    {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
      // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { //  剩下的肯定是怪异模式的
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}


var qkyindex = function () {
    isunie("index.html");
	top2(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
	$(window).scroll(function(){
		 var body_scr=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		 top2(body_scr);	
	});
	pageimg($(".page"), 1920, 664);
		 window.onresize = function () {
		pageimg($(".page"), 1920, 664);
	}

	var inbox = new Swiper(".inbox", {
		//initialSlide :1,
		//pagination : '.swiper-pagination',
		//paginationClickable :true,
		autoplay : 3000
	});

	$(".icon-but a").click(function () {
		if ($(this).hasClass("left")) {
			inbox.slidePrev();
		} else {
			inbox.slideNext();
		}
	});

	login();
}

var qkystu = function () {
   
	top2(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
	$(window).scroll(function(){
		 var body_scr=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		 top2(body_scr);	
	});
	pageimg($(".page"), 1920, 664);
		 window.onresize = function () {
		pageimg($(".page"), 1920, 664);
	}
	login();
}

var qkyoa = function () {
	top2(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
	$(window).scroll(function(){
		 var body_scr=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		 top2(body_scr);	
	});
	pageimg($(".page"), 1920, 897);
		 window.onresize = function () {
		pageimg($(".page"), 1920, 897);
	}
	login();
}
var qky = function () {
    
	top2(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
	$(window).scroll(function(){
		 var body_scr=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		 top2(body_scr);	
	});
	pageimg($(".page"), 1920, 664);
		 window.onresize = function () {
		pageimg($(".page"), 1920, 664);
	}
	login();
}

var cases = function () {
    isunie("index.html");
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
    isunie("index.html");
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
    isunie("index.html");
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
        if (myBrowser() == "IE8") {
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

function tops(scro) {
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
   var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器 
   var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器 
   var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器 
   var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器 
  
   if (isIE)  
   { 
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);"); 
      reIE.test(userAgent); 
      var fIEVersion = parseFloat(RegExp["$1"]); 
      if(fIEVersion == 7) 
      { return "IE7";} 
      else if(fIEVersion == 8) 
      { return "IE8";} 
      else if(fIEVersion == 9) 
      { return "IE9";} 
      else if(fIEVersion == 10) 
      { return "IE10";} 
      else if(fIEVersion == 11) 
      { return "IE11";} 
      else
      { return "0"}//IE版本过低 
    }//isIE end 
      
    if (isFF) { return "FF";} 
    if (isOpera) { return "Opera";} 
    if (isSafari) { return "Safari";} 
    if (isChrome) { return "Chrome";} 
    if (isEdge) { return "Edge";} 
}