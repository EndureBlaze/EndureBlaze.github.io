!function(e){"use strict";document.getElementsByTagName("body")[0].addEventListener("mousemove",(function(e){s.style.left=e.clientX+"px",s.style.top=e.clientY+"px",t.style.left=e.clientX+"px",t.style.top=e.clientY+"px",a.style.left=e.clientX+"px",a.style.top=e.clientY+"px"}));var s=document.getElementById("cursor"),t=document.getElementById("cursor2"),a=document.getElementById("cursor3");function o(e){t.classList.add("hover"),a.classList.add("hover")}function n(e){t.classList.remove("hover"),a.classList.remove("hover")}n();for(var i=document.querySelectorAll(".hover-target"),c=i.length-1;c>=0;c--)d(i[c]);function d(e){e.addEventListener("mouseover",o),e.addEventListener("mouseout",n)}e(document).on("scroll",(function(){var s=e(this).scrollTop();e(".parallax-fade-top").css({top:s/2+"px",opacity:1-s/300}),e(".parallax-top-shadow").css({top:s/-2+"px"}),e(".parallax-top").css({top:s/2.2+"px"})})),window.scrollReveal=new scrollReveal;new Swiper(".swiper-container",{scrollbar:{el:".swiper-scrollbar",hide:!1,draggable:!0,dragSize:"19"},slidesPerView:"auto",resistance:!0,resistanceRatio:0,speed:800,autoplay:!1,mousewheel:!0,freeMode:!0,grabCursor:!0,touchStartPreventDefault:!1,breakpoints:{1200:{freeMode:!1}}});e("#hero-slider").on("mousedown touchstart",(function(s){e("body").addClass("scale-up")})),e("#hero-slider").on("mouseup touchend",(function(s){e("body").removeClass("scale-up")}));var l,r,u,m;l=void 0,r=void 0,u=function(){r.addEventListener("click",(function(){return m(l,"nav-active")}))},m=function(e,s){e.classList.contains(s)?e.classList.remove(s):e.classList.add(s)},l=document.querySelector("body"),r=document.querySelector(".menu-icon"),document.querySelectorAll(".nav__list-item"),u();e(document).ready((function(){e(".animsition").animsition({inClass:"fade-in-down-sm",outClass:"fade-out-down-sm",inDuration:400,outDuration:400,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",timeout:!0,timeoutCountdown:1500,unSupportCss:["animation-duration","-webkit-animation-duration","-o-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body"}),e("select").niceSelect();jQuery(window).on("scroll",(function(){jQuery(this).scrollTop()>300?jQuery(".scroll-to-top").addClass("active-arrow"):jQuery(".scroll-to-top").removeClass("active-arrow")})),jQuery(".scroll-to-top").on("click",(function(e){return e.preventDefault(),jQuery("html, body").animate({scrollTop:0},400),!1})),e(".case-study-name:nth-child(1)").on("mouseenter touchstart",(function(){e(".case-study-name.active").removeClass("active"),e(".case-study-images li.show").removeClass("show"),e(".case-study-images li:nth-child(1)").addClass("show"),e(".case-study-name:nth-child(1)").addClass("active")})),e(".case-study-name:nth-child(2)").on("mouseenter touchstart",(function(){e(".case-study-name.active").removeClass("active"),e(".case-study-images li.show").removeClass("show"),e(".case-study-images li:nth-child(2)").addClass("show"),e(".case-study-name:nth-child(2)").addClass("active")})),e(".case-study-name:nth-child(3)").on("mouseenter touchstart",(function(){e(".case-study-name.active").removeClass("active"),e(".case-study-images li.show").removeClass("show"),e(".case-study-images li:nth-child(3)").addClass("show"),e(".case-study-name:nth-child(3)").addClass("active")})),e(".case-study-name:nth-child(4)").on("mouseenter touchstart",(function(){e(".case-study-name.active").removeClass("active"),e(".case-study-images li.show").removeClass("show"),e(".case-study-images li:nth-child(4)").addClass("show"),e(".case-study-name:nth-child(4)").addClass("active")})),e(".case-study-name:nth-child(5)").on("mouseenter touchstart",(function(){e(".case-study-name.active").removeClass("active"),e(".case-study-images li.show").removeClass("show"),e(".case-study-images li:nth-child(5)").addClass("show"),e(".case-study-name:nth-child(5)").addClass("active")})),e(".case-study-name:nth-child(6)").on("mouseenter touchstart",(function(){e(".case-study-name.active").removeClass("active"),e(".case-study-images li.show").removeClass("show"),e(".case-study-images li:nth-child(6)").addClass("show"),e(".case-study-name:nth-child(6)").addClass("active")})),e(".case-study-name:nth-child(7)").on("mouseenter touchstart",(function(){e(".case-study-name.active").removeClass("active"),e(".case-study-images li.show").removeClass("show"),e(".case-study-images li:nth-child(7)").addClass("show"),e(".case-study-name:nth-child(7)").addClass("active")})),e(".case-study-name:nth-child(8)").on("mouseenter touchstart",(function(){e(".case-study-name.active").removeClass("active"),e(".case-study-images li.show").removeClass("show"),e(".case-study-images li:nth-child(8)").addClass("show"),e(".case-study-name:nth-child(8)").addClass("active")})),e(".case-study-name:nth-child(9)").on("mouseenter touchstart",(function(){e(".case-study-name.active").removeClass("active"),e(".case-study-images li.show").removeClass("show"),e(".case-study-images li:nth-child(9)").addClass("show"),e(".case-study-name:nth-child(9)").addClass("active")})),e(".case-study-name:nth-child(10)").on("mouseenter touchstart",(function(){e(".case-study-name.active").removeClass("active"),e(".case-study-images li.show").removeClass("show"),e(".case-study-images li:nth-child(10)").addClass("show"),e(".case-study-name:nth-child(10)").addClass("active")})),e(".case-study-name:nth-child(1)").trigger("mouseenter"),e(".background-dark-3").on("mouseover",(function(s){e("body").addClass("cursor-dark")})),e(".background-dark-3").on("mouseout",(function(s){e("body").removeClass("cursor-dark")})),e(".container").fitVids(),e(".vimeo a,.youtube a").on("click",(function(s){s.preventDefault();var t=e(this).attr("href"),a=(e(this).parent(),e(this).parent());e(this).parent().hasClass("youtube")?(e(this).parent().wrapAll('<div class="video-wrapper">'),e(a).html('<iframe frameborder="0" height="333" src="'+t+'?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>')):(e(this).parent().wrapAll('<div class="video-wrapper">'),e(a).html('<iframe src="'+t+'?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=1f2029" width="500" height="281" frameborder="0"></iframe>'))})),e(".video-section").on("mouseover",(function(s){e("body").addClass("video-cursor")})),e(".video-section").on("mouseout",(function(s){e("body").removeClass("video-cursor")}))})),function(e){var s,t,a=e.event;s=a.special.debouncedresize={setup:function(){e(this).on("resize",s.handler)},teardown:function(){e(this).off("resize",s.handler)},handler:function(e,o){var n=this,i=arguments,c=function(){e.type="debouncedresize",a.dispatch.apply(n,i)};t&&clearTimeout(t),o?c():t=setTimeout(c,s.threshold)},threshold:150}}(jQuery)}(jQuery);