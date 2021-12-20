// 스크롤
window.onload = function () {
  var elm = ".home-section";
  $(elm).each(function (index) {
      // 개별적으로 Wheel 이벤트 적용
      $(this).on("mousewheel DOMMouseScroll", function (e) {
          e.preventDefault();
          var delta = 0;
          if (!event) event = window.event;
          if (event.wheelDelta) {
              delta = event.wheelDelta / 120;
              if (window.opera) delta = -delta;
          } else if (event.detail)
              delta = -event.detail / 3;
          var moveTop = $(window).scrollTop();
          var elmSelecter = $(elm).eq(index);
          // 마우스휠을 위에서 아래로
          if (delta < 0) {
              if ($(elmSelecter).next() != undefined) {
                  try {
                      moveTop = $(elmSelecter).next().offset().top;
                  } catch (e) {}
              }
              // 마우스휠을 아래에서 위로
          } else {
              if ($(elmSelecter).prev() != undefined) {
                  try {
                      moveTop = $(elmSelecter).prev().offset().top;
                  } catch (e) {}
              }
          }

          // 화면 이동 0.8초(800)
          $("html,body").stop().animate({
              scrollTop: moveTop + 'px'
          }, {
              duration: 800,
              complete: function () {}
          });
      });

      
  });
  
  

  
}

  // 다음 비디오로 넘어가기
  $(function(){
    var auds = document.getElementsByClassName('myvideo');
    var audLength = auds.length;
    for(var i = 0 ; i < audLength ;  i++){
      auds[i].addEventListener('ended', function(e){
        $(".quick-nav > li").eq($(".quick-nav > li.active").index() + 1).trigger("click");
      });
    }


  // 퀵 버튼
    var $nav = $(".quick-nav li"),
        $contents = $(".home-section");

      $nav.click(function(x){ 
        x.preventDefault();
        //$(this).addClass('active').siblings().removeClass('active');
        var idx =  $(this).index();
        var section = $contents.eq(idx)
        var sectionDistance = section.offset().top;

        $('html').stop().animate({scrollTop:sectionDistance});

        if (idx < 3) {
          for (var i = 0; i < $(".myvideo").length; i++) {
            var vid = $(".myvideo").eq(i).get(0);
            if (i == idx) {
              vid.play();
            } else {
              vid.pause();
              vid.current_time = 0;
            }
          }              
        }
        
      });

      $(window).scroll(function(){
        $contents.each(function(){
          if($(this).offset().top <= $(window).scrollTop()){
            var idx = $(this).index();
            $nav.removeClass('active');
            $nav.eq(idx).addClass('active');
          }
        });
      });

  });
  

$(document).ready(function () {
  // 메뉴 버튼
  $(".menu-toggle").click(function () {
    $(this).toggleClass("active");
    $(".menu-container").fadeToggle();

  })

  $(".menu-item").on("click", function() {
  $(".menu-toggle").trigger("click")
  })

   // 메뉴 마우스오버시 circle 생기기
   $(".menu-item").mouseover(function () {
    $(this).children(".circle").show().css({
      "display": "inline-block"
    });
  }).mouseout(function () {
    $(this).children(".circle").fadeOut()
  });

  // tooltip
  $('.tooltip').css('opacity', 0);
  $('.quick-nav li').on('mouseover', function () {
    if ($(this).hasClass('active')) {
      var left = $(this).offset().left;
      var top = $(this).offset().top;
      $('.tooltip').css({
        'left': left - $('.tooltip').width() - 15,
        'top': top + 7,
        'opacity': 1,
      });
    }
  }).on('mouseleave', function () {
    $('.tooltip').css({
      'opacity': 0,
    });
  });


// contact 부분
  $(".formArea1, .formArea2").hide();
  $(".cont-inq").click(function(){
    $(".cont-user").hide();
    $(".formArea1").fadeIn();
    $(".formArea1 .cont-inner-tit").hide();
    $(".home-section.cont-section").find(".cont-tit").html("Create a service <span>with INFOIN</span>")
    
    var h = $(window).height() - $(".cont-user").height();
    $(".home-section.cont-section").css("height", h + "px");
  });

  $(".apply_inq").click(function(){
    $(".cont-user").hide();
    $(".formArea2").fadeIn();
    $(".formArea2 .cont-inner-tit").hide();
    $(".home-section.cont-section").find(".cont-tit").html("Be an INFOIN'S <span>PEOPLE</span>");
    
    var h = $(window).height() - $(".cont-user").height();
    $(".home-section.cont-section").css("height", h + "px");
  });

  // contact 뒤로가기 버튼
  const INVALID_KEYS = [13, 16, 17, 18, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46];
      $("#button1").on("click", function(e){
        e.preventDefault();
        $(".formArea1").hide();
        $(".cont-user").show();
        $(".home-section.cont-section").find(".cont-tit").html("Contact")

      })

      $("#button3").on("click", function(e){
        e.preventDefault();
        $(".formArea2").hide();
        $(".cont-user").show();
        $(".home-section.cont-section").find(".cont-tit").html("Contact")
      })

  // 개인정보처리방침 팝업
  $(function(){
    $(".pop-btn").click(function(){
        modalClose();
    });
    $(".popup-open").click(function(){    
        $("#popup").fadeIn();
       
    });
    $(".pop-btn").click(function(){
        modalClose(); 
    });
    function modalClose(){
        $("#popup").fadeOut(); 
    }
  });

  $(function(){
    $(".pop-btn").click(function(){
        modalClose();
    });
    $(".popup-open1").click(function(){  
        $("#popup1").fadeIn();
       
    });
    $(".pop-btn").click(function(){
        modalClose(); 
    });
    function modalClose(){
        $("#popup1").fadeOut(); 
    }
  });

  // 의뢰하기 팝업
  $(function(){
    $(".pop-btn").click(function(){
        modalClose();
    });
    $(".success").click(function(){    
        $("#popup-apply").fadeIn();
       
    });
    $(".pop-btn").click(function(){
        modalClose(); 
    });
    function modalClose(){
        $("#popup-apply").fadeOut(); 
    }
  });

  $(function(){
   
    $(".close").click(function(){
        modalClose();
        
    });
    $("#button4").click(function(){   
        $("#popup-apply1").fadeIn();
       
    });
    $(".close").click(function(){
      console.log(close)
        modalClose(); 
    });
    function modalClose(){
        $("#popup-apply1").fadeOut(); 
    }
  });


  


})