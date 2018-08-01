

function a()
{
    alert("aaaaa!");
}



/*-------------------------------------------------------
	FONTSIZE
-------------------------------------------------------*/

$(function(){
   var currentstyle = readCookie('fontStyle');
   if (currentstyle){
       switchFont(currentstyle);
   };
   $(".sizeL").click(function(){
       switchFont("fontL");
       return false;
   });
   $(".sizeM").click(function(){
       switchFont("fontM");
       return false;
   });
});
function switchFont(className){
   $("body").removeAttr("class").addClass(className);
   createCookie('fontStyle', className, 365);
};
// cookie script http://www.quirksmode.org/js/cookies.html
function createCookie(name,value,days){
   if (days){
   var date = new Date();
   date.setTime(date.getTime()+(days*24*60*60*1000));
   var expires = "; expires="+date.toGMTString();
   }
   else var expires = "";
   document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name){
   var nameEQ = name + "=";
   var ca = document.cookie.split(';');
   for(var i=0;i < ca.length;i++)
   {
   var c = ca[i];
   while (c.charAt(0)==' ') c = c.substring(1,c.length);
   if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
   }
   return null;
}

/*-------------------------------------------------------
	gnav
-------------------------------------------------------*/
$(function() {
    /*gnav*/
    $('.gnav').meanmenu({
        meanMenuClose: "",
        meanMenuOpen: "",
        meanScreenWidth: "768",
    });
});

$(window).load(function () {
    /*fixed*/
    var nav    = $('.gnav'),
        offset = nav.offset();

    $(window).scroll(function () {
        if($(window).scrollTop() > offset.top) {
            //nav.addClass('fixed');
            $('#wrapper').addClass("gnavFixed");
        } else {
            //nav.removeClass('fixed');
            $('#wrapper').removeClass("gnavFixed");
        }
    });
});

$(function() {
    function sliderSetting(){
      var width = window.innerWidth;
      if(width >= 769){
            $('.gnav_menu-list li').hover(function(){
                $("ul:not(:animated)", this).fadeIn(0);
            }, function(){
                $("ul.gnav_menu-innerList",this).fadeOut(100);
            });
       }else{
       }
    }
    // 初期表示時の実行
    sliderSetting();
    // リサイズ時の実行
    $(window).resize( function() {
      sliderSetting();
    });
});

/*-------------------------------------------------------
	TAB
-------------------------------------------------------*/
$(function(){
	$('.tabCont > .tabBox:not(:first-child)').hide();

	$('.tabs').on('click','li:not(".active")',function(){
		var thisTab = jQuery(this).index();
		var tabArea = jQuery(this).parent('.tabs').next('.tabCont');
		$(this).parent('.tabs').find('.active').removeClass('active');
		$(this).addClass('active');
		tabArea.find('.tabBox:visible').fadeOut(0,function(){
		tabArea.find('.tabBox').eq(thisTab).fadeIn(400);
		});
		return false;
	});
    $('.tabs').click(function(){
        return false;
	});
});

/*-------------------------------------------------------
	ACCORDION
-------------------------------------------------------*/

$(function(){
    $(".acc .acc-title").click(function(){
        if($(this).is(".open")){
            $(this).next(".acc-box").slideToggle(400);
            $(this).removeClass("open");
            $(this).addClass("close");
        }else{
            $(this).next(".acc-box").slideToggle(400);
            $(this).removeClass("close");
            $(this).addClass("open");
        }
    }).next().hide();
	$('.acc .open').next().show();
});


/*-------------------------------------------------------
	MODAL
-------------------------------------------------------*/
$(function(){  
	
    $(".modal-open").click(function(){

        var navClass = $(this).attr("class"),
            href = $(this).attr("href");

            $(href).fadeIn();
        $(this).addClass("open");
        return false;
    });

    $(".modal-close").click(function(){
        $(this).parents(".modal").fadeOut();
        $(".modal-open").removeClass("open");
        return false;
    });  
    
});

/*-------------------------------------------------------
	TABLE STRIPE&MOUSEON
-------------------------------------------------------*/

$(function(){
	$(".table-stripe tr:nth-child(even)").addClass("even");
	
	$(".table-highlight tr:not(:first-child)").mouseover(function(){
		$(this).addClass("hover");
	}).mouseout(function(){
		$(this).removeClass("hover");
	});
});


/*-------------------------------------------------------
	DROPDOWN
-------------------------------------------------------*/

$(function(){
	$("ul.dropDown ul.sub").hide();
	$("ul.dropDown li").hover(function(){
		$("ul:not(:animated)",this).slideDown("fast");
	},
	function(){
		$("ul",this).slideUp("fast");
	});
});

/*-------------------------------------------------------
	PAGETOP
-------------------------------------------------------*/
$(function() {
	var topBtn = $('.pageTop');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
			topBtn.fadeIn("fast");
		} else {
			topBtn.fadeOut("fast");
		}
	});
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
});

/*-------------------------------------------------------
	スムーズスクロール
-------------------------------------------------------*/

$(function(){
    //notで他の#付きのリンクのライブラリーを除外
   $('a[href^="#"]:not(.tabs li a , .modal-open , .gnav a , .textSize a)').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - 30;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

