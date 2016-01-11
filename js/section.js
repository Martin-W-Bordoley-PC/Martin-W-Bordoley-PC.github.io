
var scrollOffset = [0,0,0]
var $win = $(window);
var $doc = $(document);

$win
.on('scroll', function(){
  // this is needed because scroll is triggered when zooming before the zoom event
  scrollOffset[2] = scrollOffset[1];
  scrollOffset[1] = scrollOffset[0];
  scrollOffset[0] = 100 / $win.height() * $win.scrollTop();
  console.log('scroll event', scrollOffset);
})
.on('resize', function(){
  // set back the history because of multiple zooming events
  scrollOffset[0] = scrollOffset[1];
  scrollOffset[1] = scrollOffset[2];
  scrollOffset[2] = 0;
  console.log('zoom event', scrollOffset);
  window.scrollTo(0, scrollOffset[0] / 100 * $win.height());
})





var enlarged = false;

$('#services a').click(function () {
//    $(this).stop(true, false).animate({
//        width: enlarged ? 200 : 400,
//        height: enlarged ? 50 : 400,
//        left: 90,
//        top: 90
//    }, 200);


    $(this).find("small").toggle();
    
    $(this).parent().find(".details").toggle();

//    enlarged = !enlarged;
});



$(window).resize(function() {
  if ($(window).width() < 600) {
    $('.parallax-1').css("background-attachment","scroll");
    $('.parallax-2').css("background-attachment","scroll");
    $('.parallax-3').css("background-attachment","scroll");
  }
 else {
    $('.parallax-1').css("background-attachment","fixed");
    $('.parallax-2').css("background-attachment","fixed");
    $('.parallax-3').css("background-attachment","fixed");
 }
});