$(document).ready(function(){
    // 화면크기 설정
      $(".home-section , .home-bg").css({"height":$(window).height()+'px'})

    // 메뉴 버튼
      $(".menu-toggle").click(function(){
      $(this).toggleClass("active");
      $(".quick-nav").hide();
      $(".menu-container").fadeToggle();
    });

    // 메뉴 마우스오버시 circle 생기기
      $(".menu-item").mouseover(function(){
      $(this).children(".circle").show().css({"display":"inline-block"});
    }).mouseout(function(){
      $(this).children(".circle").fadeOut()
    });

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

    $(window).scroll(function(){
      $contents.each(function(){
        if($(this).offset().top <= $(window).scrollTop()){
          var idx = $(this).index();
          $nav.removeClass('active');
          $nav.eq(idx).addClass('active');
        }
      });
    });

    window.onload = function () {
      var elm = ".home-section";
      console.log(elm);
      var page4curImgIdx = 0;
      var page5curImgIdx = 0;
      var page6curImgIdx = 0;
      $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
          e.preventDefault();
          var delta = 0;
          var isMoveUp = false;
          var isMoveDown = false;
          if (!event) event = window.event;
          if (event.wheelDelta) {
              delta = event.wheelDelta / 120;
              if (window.opera) delta = -delta;
          } 
          else if (event.detail)
              delta = -event.detail / 3;
          var moveTop = $(window).scrollTop();
          var elmSelecter = $(elm).eq(index);
          // 마우스휠을 위에서 아래로
          if (delta < 0) {
              if ($(elmSelecter).next() != undefined) {
                  try{
                      moveTop = $(elmSelecter).next().offset().top;
                      isMoveUp = false;
                      isMoveDown = true;
                  }catch(e){}
              }
          // 마우스휠을 아래에서 위로
          } else {
              if ($(elmSelecter).prev() != undefined) {
                  try{
                      moveTop = $(elmSelecter).prev().offset().top;
                      isMoveUp = true;
                      isMoveDown = false;
                  }catch(e){}
              }
          }
          if(index == 0){
            var vid = $(".myvideo").eq(1).get(0);
            vid.play();
            var prevVid = $(".myvideo").eq(0).get(0);
            prevVid.pause();
            prevVid.current_time = 0;    
          }else if(index == 1){
            if(isMoveUp && !isMoveDown){
              var vid = $(".myvideo").eq(0).get(0);
              vid.play();
              var prevVid = $(".myvideo").eq(1).get(0);
              prevVid.pause();
              prevVid.current_time = 0;  
            } else if(!isMoveUp && isMoveDown){
              var vid = $(".myvideo").eq(2).get(0);
              vid.play();
              var prevVid = $(".myvideo").eq(1).get(0);
              prevVid.pause();
              prevVid.current_time = 0;  
            }    
          }else if(index == 2){
            if(isMoveUp && !isMoveDown){
              var vid = $(".myvideo").eq(1).get(0);
              vid.play();
              var prevVid = $(".myvideo").eq(2).get(0);
              prevVid.pause();
              prevVid.current_time = 0;  
            } else if(!isMoveUp && isMoveDown){
              
              var prevVid = $(".myvideo").eq(2).get(0);
              prevVid.pause();
              prevVid.current_time = 0;  
            }    
          }else if(index == 3){
            if(isMoveUp && !isMoveDown){
              var vid = $(".myvideo").eq(2).get(0);
              vid.play();
              
            }
          }
          if(index == 4) {
            var imgF = document.querySelector(".imgF");
            var imgS = document.querySelector(".imgS");
                      
            if(delta < 0) {
              if(page4curImgIdx >= 2) {
                // 화면 이동 0.8초(800)
                $("html,body").stop().animate({
                  scrollTop: moveTop + 'px'
                }, {
                  duration: 800, complete: function () {
                  }
                });
              }
              if(page4curImgIdx < 2) {
                page4curImgIdx++;
              }
            } else {
              if(page4curImgIdx == 0) {
                // 화면 이동 0.8초(800)
                $("html,body").stop().animate({
                  scrollTop: moveTop + 'px'
                }, {
                    duration: 800, complete: function () {
                    }
                });
              }
              if(page4curImgIdx > 0) {
                page4curImgIdx--;
              }
            }
            var target = $(".home-section").eq(index).get(0);
            target.style.backgroundImage = `url('img/mockup_info${page5curImgIdx}.png')`
            imgF.src = "./img/solution_3d"+page4curImgIdx+".jpg";
            imgS.src = "./img/solution_sub_3d"+page4curImgIdx+".jpg";

          } else if(index == 5) {
            var imgF = document.querySelector(".imgF1");
            var imgS = document.querySelector(".imgS1");
            /*if(isMoveDown && !isMoveUp){
              var target = $(".home-section").eq(index + 1).get(0);
              target.style.backgroundImage = "url('img/mockup_info2.png')"
            
            }*/

            if(delta < 0) {
              if(page5curImgIdx >= 2) {
                // 화면 이동 0.8초(800)
                $("html,body").stop().animate({
                  scrollTop: moveTop + 'px'
                }, {
                  duration: 800, complete: function () {
                  }
                });
              }
              if(page5curImgIdx < 2) {
                page5curImgIdx++;
              }
            } else {
              if(page5curImgIdx == 0) {
                // 화면 이동 0.8초(800)
                $("html,body").stop().animate({
                  scrollTop: moveTop + 'px'
                }, {
                    duration: 800, complete: function () {
                    }
                });
              }
              if(page5curImgIdx > 0) {
                page5curImgIdx--;
              }
            }
            var target = $(".home-section").eq(index).get(0);
            target.style.backgroundImage = `url('img/mockup_info${page5curImgIdx}.png')`
            imgF.src = "./img/sol_info"+page5curImgIdx+".png";
            imgS.src = "./img/sol_sub_info"+page5curImgIdx+".png";

          } else if(index == 6) {
            var imgF = document.querySelector(".imgF2");
            var imgS = document.querySelector(".imgS2");
            if(delta < 0) {
              if(page6curImgIdx >= 1) {
                // 화면 이동 0.8초(800)
                $("html,body").stop().animate({
                  scrollTop: moveTop + 'px'
                }, {
                  duration: 800, complete: function () {
                  }
                });
              }
              if(page6curImgIdx < 1) {
                page6curImgIdx++;
              }
            } else {
              if(page6curImgIdx == 0) {
                // 화면 이동 0.8초(800)
                $("html,body").stop().animate({
                  scrollTop: moveTop + 'px'
                }, {
                    duration: 800, complete: function () {
                    }
                });
              }
              if(page6curImgIdx > 0) {
                page6curImgIdx--;
              }
            }
            
            var target = $(".home-section").eq(index).get(0);
            var corrected_index = page6curImgIdx >= 2 ? 1 : page6curImgIdx;
            target.style.backgroundImage = `url('./img/mockup_co${corrected_index}.png')`
            imgF.src = "./img/sol_co"+page6curImgIdx+".png";
            imgS.src = "./img/sol_sub_co"+page6curImgIdx+".png";
          } else {
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
          }

     
});