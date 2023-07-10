var features = 'toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,status=no,left=,top=,width=,height=';
function searchPage(features)
{
   var element = document.getElementById('SiteSearch1');
   window.open('sitesearch1-results.html?q='+encodeURIComponent(element.value), '', features);
   return false;
}
$(document).ready(function()
{
   $('#wb_FontAwesomeIcon3').addClass('visibility-hidden');
   $('#FontAwesomeIcon8').addClass('visibility-hidden');
   $('#wb_FontAwesomeIcon10').addClass('visibility-hidden');
   $('#wb_FontAwesomeIcon11').addClass('visibility-hidden');
   $('#wb_FontAwesomeIcon26').addClass('visibility-hidden');
   $('#wb_FontAwesomeIcon27').addClass('visibility-hidden');
   $('#wb_FontAwesomeIcon28').addClass('visibility-hidden');
   $("#wb_ResponsiveMenu1").affix({offset:{top: $("#wb_ResponsiveMenu1").offset().top}});
   $("#wb_ResponsiveMenu1 ul li a").click(function(event)
   {
      $("#wb_ResponsiveMenu1 input").prop("checked", false);
   });
   $("#SlideShow1").conveyerbelt({speed:6, spacing: 7});
   function onScrollFontAwesomeIcon3()
   {
      var $obj = $("#wb_FontAwesomeIcon3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_FontAwesomeIcon3', 'transform-lightspeed-in', 100, 1000);
      }
   }
   onScrollFontAwesomeIcon3();
   $(window).scroll(function(event)
   {
      onScrollFontAwesomeIcon3();
   });
   function onScrollIcon1()
   {
      var $obj = $("#wb_Icon1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('FontAwesomeIcon8', 'transform-lightspeed-in', 200, 1000);
      }
   }
   onScrollIcon1();
   $(window).scroll(function(event)
   {
      onScrollIcon1();
   });
   function onScrollFontAwesomeIcon10()
   {
      var $obj = $("#wb_FontAwesomeIcon10");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_FontAwesomeIcon10', 'transform-lightspeed-in', 300, 1000);
      }
   }
   onScrollFontAwesomeIcon10();
   $(window).scroll(function(event)
   {
      onScrollFontAwesomeIcon10();
   });
   function onScrollFontAwesomeIcon11()
   {
      var $obj = $("#wb_FontAwesomeIcon11");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_FontAwesomeIcon11', 'transform-lightspeed-in', 400, 1000);
      }
   }
   onScrollFontAwesomeIcon11();
   $(window).scroll(function(event)
   {
      onScrollFontAwesomeIcon11();
   });
   function onScrollFontAwesomeIcon26()
   {
      var $obj = $("#wb_FontAwesomeIcon26");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_FontAwesomeIcon26', 'transform-lightspeed-in', 500, 1000);
      }
   }
   onScrollFontAwesomeIcon26();
   $(window).scroll(function(event)
   {
      onScrollFontAwesomeIcon26();
   });
   function onScrollFontAwesomeIcon27()
   {
      var $obj = $("#wb_FontAwesomeIcon27");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_FontAwesomeIcon27', 'transform-lightspeed-in', 600, 1000);
      }
   }
   onScrollFontAwesomeIcon27();
   $(window).scroll(function(event)
   {
      onScrollFontAwesomeIcon27();
   });
   function onScrollFontAwesomeIcon28()
   {
      var $obj = $("#wb_FontAwesomeIcon28");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_FontAwesomeIcon28', 'transform-lightspeed-in', 700, 1000);
      }
   }
   onScrollFontAwesomeIcon28();
   $(window).scroll(function(event)
   {
      onScrollFontAwesomeIcon28();
   });
   searchParseURL('SiteSearch1');
   if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {$('#preloader').remove();}
});
$(window).on('load', function()
{
   $('#preloader').remove();
});
$(document).ready(function()
{
  $('#wb_Carousel2').owlCarousel( { margin: 10, stagePadding: 10, autoplay: true, rewind: true, dotsEach: true, responsive : { 0: { items : 1 }, 480: { items : 3}, 768: { items : 4}, 970: { items : 5}}});
});
$(document).ready(function()
{
  $('#wb_Carousel2').owlCarousel( { margin: 10, stagePadding: 10, autoplay: true, rewind: true, dotsEach: true, responsive : { 0: { items : 1 }, 480: { items : 3}, 768: { items : 4}, 970: { items : 5}}});
});
