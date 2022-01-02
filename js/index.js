// 스크롤
window.onload = function () {

  setTimeout(function() {
    $(".quick-nav>li").eq(0).trigger("click");
  }, 300);

  $(".dimBg").on("mousewheel DOMMouseScroll", function(e) {
    e.preventDefault();
    e.stopPropagation();
  });


  var _touch = false;

  var elm = ".home-section";
  $(elm).each(function (index) {
      // 개별적으로 Wheel 이벤트 적용
      const that = this;

      var _y;
    
      $(this).on("touchstart", function(e) {
        _touch = true;
        _y = e.originalEvent.touches[0].clientY;
      });

      $(this).on("mousewheel DOMMouseScroll", function (e) {
        $(".scrollLock").css("overflow", "hidden");
        var delta = 0;
        var y = 0;
        if (e.originalEvent.touches) {
          if (e.originalEvent.touches.length != 0) {
            y = e.originalEvent.touches[0].clientY;
            delta = y - _y;
          }
        } else {
          if (!event) event = window.event;
          if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
          } else if (event.detail) delta = -event.detail / 3;
        }
  
          var moveTop = $(window).scrollTop();
          var elmSelecter = $(elm).eq(index);
          // 마우스휠을 위에서 아래로

          var isMoveUp = false;
          var isMoveDown = false;
          if (delta < 0) {
              if ($(elmSelecter).next() != undefined) {
                  try {
                      moveTop = $(elmSelecter).next().offset().top;
                      isMoveUp = false;
                      isMoveDown = true;
                  } catch (e) {}
              }
              // 마우스휠을 아래에서 위로
          } else if (delta > 0) {
              if ($(elmSelecter).prev() != undefined) {
                  try {
                      moveTop = $(elmSelecter).prev().offset().top;
                      isMoveUp = true;
                      isMoveDown = false;
                  } catch (e) {}
              }
          }

          //core1 
          if (index == 0) {
            if (isMoveDown) {
              var vid = $(".myvideo").eq(1).get(0);
              vid.play();
              var prevVid = $(".myvideo").eq(0).get(0);
              prevVid.pause();
              prevVid.current_time = 0;
              //node 떼었다 붙이기.
              const elem = $(that).next().children("div.project-info").children("h3.project-tit")[0];
              const newOne = elem.cloneNode(true);
              elem.parentNode.replaceChild(newOne, elem);
            }
          //core 2
          } else if (index == 1) {
            if (isMoveUp && !isMoveDown) {
              var vid = $(".myvideo").eq(0).get(0);
              vid.play();
              var prevVid = $(".myvideo").eq(1).get(0);
              prevVid.pause();
              prevVid.current_time = 0;

              //node 떼었다 붙이기.
              const elem = $(that).prev().children("div.project-info").children("h3.project-tit")[0];
              const newOne = elem.cloneNode(true);
              elem.parentNode.replaceChild(newOne, elem);
            } else if (!isMoveUp && isMoveDown) {
              var vid = $(".myvideo").eq(2).get(0);
              vid.play();
              var prevVid = $(".myvideo").eq(1).get(0);
              prevVid.pause();
              prevVid.current_time = 0;

              //node 떼었다 붙이기.
              const elem = $(that).next().children("div.project-info").children("h3.project-tit")[0];
              const newOne = elem.cloneNode(true);
              elem.parentNode.replaceChild(newOne, elem);
            }
          //core3
          } else if (index == 2) {
            if (isMoveUp && !isMoveDown) {
              var vid = $(".myvideo").eq(1).get(0);
              vid.play();
              var prevVid = $(".myvideo").eq(2).get(0);
              prevVid.pause();
              prevVid.current_time = 0;
              //node 떼었다 붙이기.
              const elem = $(that).prev().children("div.project-info").children("h3.project-tit")[0];
              const newOne = elem.cloneNode(true);
              elem.parentNode.replaceChild(newOne, elem);
            } else if (!isMoveUp && isMoveDown) {
              $(".tooltip").text("about");
              var prevVid = $(".myvideo").eq(2).get(0);
              prevVid.pause();
              prevVid.current_time = 0;

              $(".company-tit").html('');

              let html = '';
              html += '<li>';
              html += '   <a class="active">'
              html += '       <span class="txt">WE WANT TO BE</span>'
              html += '       <span class="line"></span>'
              html += '   </a>'
              html += '</li>'
              html += '<li>';
              html += '   <a class="active">'
              html += '       <span class="txt">YOUR FRIEND</span>'
              html += '       <span class="line"></span>'
              html += '   </a>'
              html += '</li>'
              $(".company-tit").html(html);
            }
          //about
          } else if (index == 3) {
            if (isMoveUp && !isMoveDown) {
              var vid = $(".myvideo").eq(2).get(0);
              vid.play();
              //node 떼었다 붙이기.
              const elem = $(that).prev().children("div.project-info").children("h3.project-tit")[0];
              const newOne = elem.cloneNode(true);
              elem.parentNode.replaceChild(newOne, elem);
            }


            if (isMoveDown && e.originalEvent.touches) {
              $(".main-logo").css("display", "none");
            }

          }
          //solution 1
          else if(index == 4){

          }
          //solution 2
          else if(index == 5){
           
          }
          else if(index == 6){

          }
          else if(index == 7){
            if (e.originalEvent.touches) {
              if (e.originalEvent.touches.length != 0) {
                var st = $(window).scrollTop();
                if (st - delta > window.innerHeight * 7) {
                  $(window).stop().scrollTop(st - delta);
                  _y = y;
                  return;
                }
              }
            }

            _y = y;
          }

          

          // 화면 이동 0.8초(800)
          if (index < 7 || index == 7 && isMoveUp) {
            if ($("html,body").is(":animated")) return;
            $("html,body").stop().animate({
              scrollTop: moveTop + 'px'
            }, {
              duration: 800,
              complete: function () {
                $(".scrollLock").css("overflow", "auto");

              }
            });
    
          } else {
            $(".scrollLock").css("overflow", "auto");
          }
        

      });


      
  });

  // solution
  $(".solution-img-btn").on("click", function() {
    
    var p = $(this).parents(".home-section");
    const section = $(this).parents("section");
    const isNotBgChange = section.hasClass("home-section-bg");
    var len = p.find(".solution-img").find("img").length / 2;

    console.log(len);

    if (p.hasClass("s1")) {
      p.removeClass("s1").addClass("s2");

      // if (len == 3) {
      //   if(isNotBgChange) return true;
      //   section[0].style.backgroundImage = `url('img/mockup_info${1}.png')`;
      // } else if (len == 2) {
      //   section[0].style.backgroundImage = `url('img/mockup_co${1}.png')`;
      // }

    } else if (p.hasClass("s2")) {
      if (len == 3) {
        p.removeClass("s2").addClass("s3");
        // if(isNotBgChange) return true;
        // section[0].style.backgroundImage = `url('img/mockup_info${2}.png')`;
      } else if (len == 2) {
        p.removeClass("s2").addClass("s1")
        // section[0].style.backgroundImage = `url('img/mockup_co${0}.png')`;
      }
    } else if (p.hasClass("s3")) {
      p.removeClass("s3").addClass("s1");
      // if (len == 3) {
      //   if(isNotBgChange) return true;
      //   section[0].style.backgroundImage = `url('img/mockup_info${0}.png')`;
      // }
    }

   

  });

  $(".img-num>li").on("click", function() {
    var idx = $(this).index() + 1;
    $(this).parents(".home-section").removeClass("s1 s2 s3").addClass("s" + idx);
  });

  // menu btn
  $(function(){
    $(".menu-toggle").click(function () {
      $(this).toggleClass("active");
 
      $(".menu-container , .lang ").stop().fadeToggle();
     
      
    });

  
    $(".menu-item").on("click", function() {
      if ($(".menu-container").is(":animated")) return;
      $(".menu-toggle").trigger("click");
    });

     // 메뉴 마우스오버시 circle 생기기
    $(".menu-item").mouseover(function () {
      $(this).children(".circle").show().css({
        "display": "inline-block"
      });
    }).mouseout(function () {
      $(this).children(".circle").fadeOut();
    });

    nextVideo();
  });
};


// 다음 비디오로 넘어가기
function nextVideo() {
  var auds = document.getElementsByClassName('myvideo');
  var audLength = auds.length;
  for (var i = 0; i < audLength; i++) {
    auds[i].addEventListener('ended', function (e) {
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
  })
  $(window).scroll(function(){
    var idx = Math.round($(window).scrollTop() / $(window).height());
    idx = idx > 7 ? 7 : idx;
    if ($(".quick-nav>li").eq(idx).hasClass("active")) return;
    var before_idx = $(".quick-nav>li.active").index();
    $nav.removeClass('active');
    $nav.eq(idx).addClass('active');
  });


  // popup
  // 개인정보처리방침 팝업
  $(function(){
    $(".pop-btn").click(function(){
        modalClose();
    });
    $(" .data ").click(function(){    
        $(".popup").fadeIn();
      
    });
    $(".pop-btn").click(function(){
        modalClose(); 
    });
    function modalClose(){
        $(".popup").fadeOut(); 
    };
  });

  $(function(){
    $(".pop-btn").click(function(){
        modalClose();
    });
    $(".bold").click(function(){    
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
    $(".formArea2 .bold").click(function(){  
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

    // $(".success").click(function(){    
    //   $("#popup-apply").fadeIn();
       
    // });
    
    function modalClose(){
        $("#popup-apply").fadeOut(); 
    }
  });
  $(function(){
    $("#popup-apply1-m").find(".pop-btn.close").click(function(){
      modalClose();
    })
    function modalClose(){
      $("#popup-apply1-m").fadeOut();
    }
  })


  $(function(){
   
    // $("#button4").click(function(){   
    //     $("#popup-apply1").fadeIn();
       
    // });
    $(".close").click(function(){
      console.log(close)
        modalClose(); 
    });

    function modalClose(){
        $("#popup-apply1").fadeOut(); 
    }
  });
  $(function(){
    $("#popup-file").find(".pop-btn.close").click(function(){
      modalClose();
    })
    function modalClose(){
      $("#popup-file").fadeOut();
    }
  })
  $(function(){
    $("#popup-file1").find(".pop-btn.close").click(function(){
      modalClose();
    })
    function modalClose(){
      $("#popup-file1").fadeOut();
    }
  })

  // 레이어 팝업
  $('.btn-example1').click(function(){
    var $href = $(this).attr('href');
    layer_popup($href);
  });
  /*function layer_popup(el){

    var $el = $(el);		//레이어의 id를 $el 변수에 저장
    var isDim = $el.prev().hasClass('dimBg');	//dimmed 레이어를 감지하기 위한 boolean 변수

    isDim ? $('.dim-layer1').fadeIn() : $el.fadeIn();

    var $elWidth = ~~($el.outerWidth()),
        $elHeight = ~~($el.outerHeight()),
        docWidth = $(document).width(),
        docHeight = $(document).height();

    // 화면의 중앙에 레이어를 띄운다.
    if ($elHeight < docHeight || $elWidth < docWidth) {
        $el.css({
            marginTop: -$elHeight /2,
            marginLeft: -$elWidth/2
        })
    } else {
        $el.css({top: 0, left: 0});
    }

    $el.find('#button1').click(function(){
        isDim ? $('.dim-layer1').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
        return false;
    });

    $('.layer .dimBg').click(function(){
        $('.dim-layer1').fadeOut();
        return false;
    });

    

}*/


    $('.btn-example').click(function(){
        var $href = $(this).attr('href');
        layer_popup($href);
    });
    function layer_popup(el){

      var $el = $(el);		//레이어의 id를 $el 변수에 저장
      var isDim = $el.prev().hasClass('dimBg');	//dimmed 레이어를 감지하기 위한 boolean 변수
      var dimLayer = $el.closest('.dim-layer');
      isDim ? dimLayer.fadeIn() : $el.fadeIn();

      var $elWidth = ~~($el.outerWidth()),
          $elHeight = ~~($el.outerHeight()),
          docWidth = $(document).width(),
          docHeight = $(document).height();

      // 화면의 중앙에 레이어를 띄운다.
      if ($elHeight < docHeight || $elWidth < docWidth) {
          // $el.css({
          //     marginTop: -$elHeight /2,
          //     marginLeft: -$elWidth/2
          // })
      } else {
          $el.css({top: 0, left: 0});
      }

      $el.find('input[value="뒤로가기"]').click(function(){
          isDim ? dimLayer.fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
          return false;
      });

      dimLayer.find('.dimBg').click(function(){
          dimLayer.fadeOut();
          return false;
      });
  }

  
  /* 팝업 바디 스크롤 방지 */
  const body = document.getElementsByTagName('body')[0];
  body.classList.add('scrollLock');
  
}
