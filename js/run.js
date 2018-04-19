define(function (require, exports) { //dedine闭包  
	var loads=require("./load");//加载机制引用
	var loadData=require("./loadData");//图片资源引用
function isie(url){
	if (  myBrowser() =="IE8" || myBrowser() == "IE9"|| myBrowser() == "IE10") {
		window.location.href=url;
	}
}

exports.index = function () {
	isie("indexie.html");
		loads.pageimg($(".page"), 1920, 1080);
		window.onresize = function () {
			loads.pageimg($(".page"), $(window).width(), $(window).height());
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
		top(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
		$(window).scroll(function(){
			 var body_scr=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			 top(body_scr);	
		});

		

		$(".join_btn").click(function(){
			$(this).parent().find(".join_select").slideToggle(200);
		});
		$(".join_select").on("click","a",function(){
			$(this).parents(".join_inputlist").find(".join_btn").val($(this).text());
			$(this).parent().slideUp(200);
		});
		$(".join_radio").on("click","a",function(){
			$(this).addClass("active").siblings().removeClass("active");
		})
	}

	exports.case= function () {
		isie("indexie.html");
		loads.pageimg($(".page"), 1920,1080);
		window.onresize = function () {
			loads.pageimg($(".page"),1920, 1080);
		}
		login();
		top2(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
		$(window).scroll(function(){
			 var body_scr=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			 top2(body_scr);	
		});
		
	}
	exports.coop= function () {
		isie("indexie.html");
		loads.pageimg($(".page"), 1920,1080);
		window.onresize = function () {
			loads.pageimg($(".page"),1920, 1080);
		}
		login();
		top2(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
		$(window).scroll(function(){
			 var body_scr=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			 top2(body_scr);	
		});
		
	}
	exports.us= function () {
		isie("indexie.html");
		loads.pageimg($(".page"), 1920,1080);
		window.onresize = function () {
			loads.pageimg($(".page"),1920, 1080);
		}
		login();
		top2(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
		$(window).scroll(function(){
			 var body_scr=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			 top2(body_scr);	
		});
		
	}

	exports.qkyindex = function () {
		isie("indexie.html");
		top2(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
		$(window).scroll(function(){
			 var body_scr=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			 top2(body_scr);	
		});
		loads.startPreload(loadData.onemf.concat(loadData.index),function(){
			$(".loadprogress").fadeOut(200);
        	//document.getElementById("loadprogress").style.display="none";
			loads.setImg(loads.preload._loadItemsById);
			loads.pageimg($(".page"), 1920, 664);
         	window.onresize = function () {
			loads.pageimg($(".page"), 1920, 664);
         	}
		});//加载首页需要的图片

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

	exports.qkystu = function () {
		isie("index_stuie.html");
		top2(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
		$(window).scroll(function(){
			 var body_scr=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			 top2(body_scr);	
		});
		loads.startPreload(loadData.onemf.concat(loadData.stu),function(){
			$(".loadprogress").fadeOut(200);
			loads.setImg(loads.preload._loadItemsById);
			loads.pageimg($(".page"), 1920, 664);
         	window.onresize = function () {
				loads.pageimg($(".page"), 1920, 664);
         	}
		});//加载学生综合素质需要的图片
		login();
	}

	exports.qkyoa = function () {
		isie("index_oaie.html");
		top2(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
		$(window).scroll(function(){
			 var body_scr=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			 top2(body_scr);	
		});
		loads.startPreload(loadData.onemf.concat(loadData.oa),function(){
			$(".loadprogress").fadeOut(200);
			loads.setImg(loads.preload._loadItemsById);
			loads.pageimg($(".page"), 1920, 897);
         	window.onresize = function () {
				loads.pageimg($(".page"), 1920, 897);
         	}
		});//加载学生综合素质需要的图片
		login();
	}
	exports.qky = function () {
		isie("index_qkyie.html");
		top2(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
		$(window).scroll(function(){
			 var body_scr=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			 top2(body_scr);	
		});
		loads.startPreload(loadData.onemf.concat(loadData.qky),function(){
			$(".loadprogress").fadeOut(200);
			loads.setImg(loads.preload._loadItemsById);
			loads.pageimg($(".page"), 1920, 664);
         	window.onresize = function () {
				loads.pageimg($(".page"), 1920, 664);
         	}
		});//加载学生综合素质需要的图片
		login();
	}

	function login(){
		$(".loginbut").click(function () {
			if ( myBrowser() == "IE8") {
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

	function top(scro){
		if(scro>=100){
			$(".qkyheader").addClass("notop");
			
		}else{
			$(".qkyheader").removeClass("notop");
			
		}
		if(scro>=500){
			
			$(".zh-login-box").removeClass("in-onepage");
		}else{
			
			$(".zh-login-box").addClass("in-onepage");
		}
	}
	function top2(scro){
		if(scro>=100){
			$(".qkyheader").addClass("notop");
			
		}else{
			$(".qkyheader").removeClass("notop");
			
		}
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
	//辅助函数
	exports.isNull = function (data) {
		return (data == "" || data == undefined || data == null) ? "kong" : data;
	}
	exports.selectDraw = function (id, data, fun) {
		var optionHtml = "";
		for (var i = 0; i < data.length; i++) {
			optionHtml += '<option value="' + data[i][1] + '" uid="' + data[i][0] + '">' + data[i][1] + '</option>';
		}
		id.html(optionHtml);
		id.change(function () {
			var onse = $(this).find("option:selected");
			fun(onse.attr("value"), onse.attr("uid"));
		});
	}
	exports.setSelect = function (id, toid) {
		id.find("option[uid='" + toid + "']").attr("selected", true);
	}
	exports.getUrl = function (name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	}
});