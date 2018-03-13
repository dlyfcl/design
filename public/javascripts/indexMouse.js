$(function () {
  // 鼠标移入显示喜欢图标
  $('.ready li .image').mouseenter(function () {
    $(this).children('.mask').css({
      display: 'block'
    })
  });
  $('.ready li .image').mouseleave(function () {
    $(this).children('.mask').css({
      display: 'none'
    })
  });

  // 点击选择电影类型和区域
  $('.con').on('click', '.type-area span', function () {
    $(this).parent().children('span').attr('class', '')
    $(this).attr('class', 'active')
  });

  // 排行绑的鼠标移入移除事件
  $('.week li .sp0 .sp1').mouseenter(function () {
    $(this).parent().parent().parent().find('img').attr('class', '')
    $(this).parent().parent().children('div').children('img').attr('class', 'show')
  });

  // 正在热映的电影鼠标移入移除事件
  $('.content .movie li .listCon').mouseenter(function () {
    $(this).children('.mask').css({
      display: 'block'
    });
    $('.content .butn .btn').css({
      display: 'block'
    })
  });
  $('.content .movie li .listCon').mouseleave(function () {
    $(this).children('.mask').css({
      display: 'none'
    });
    $('.content .butn .btn').css({
      display: 'none'
    })
  });
  $('.content .butn .btn').mouseenter(function () {
    // console.log("ssssssssssssssssssss")
    $('.content .movie li .listCon').children('.mask').css({
      display: 'none'
    });
    $(this).css({
      display: 'block'
    })
  });

  // 热门电影列表的点击滑动事件
  $('.con').on('click', '.content .butn .before', function () {
    var W = $('.content .movie li').width();
    var paddT = $('.content .movie .Li').css('padding-left').split('px')[0];
    var Left = $('.content .movie ul').css('left').split('px')[0];
    var critical = (W * 3 + paddT * 3) * 3;
    var s = Left - W * 3 - paddT * 3 + 'px';
    var S = Math.abs(Left - W * 3 - paddT * 3);
    $('.content .movie ul').animate({left: s}, 1000);
    if (parseInt(critical) == parseInt(S)) {
      $('.content .movie ul').animate({left: 0}, 0.0001)
    }
  });
  $('.con').on('click', '.content .butn .next', function () {
    var Left = $('.content .movie ul').css('left').split('px')[0];
    var W = $('.content .movie li').width();
    var paddT = $('.content .movie .Li').css('padding-left').split('px')[0];
    var s = Left * 1 + W * 3 + paddT * 3 + 'px';
    var final = -(W * 3 + paddT * 3) * 3 + 'px';
    if (Left == 0) {
      $('.content .movie ul').animate({left: final}, 0.0000001);
      var newLeft = $('.content .movie ul').css('left').split('px')[0];
      $('.content .movie ul').animate({left: newLeft * 1 + W * 3 + paddT * 3 + 'px'}, 1000)
    }else if (parseInt(W * 3 + paddT * 3) == parseInt(Math.abs(Left))) {
      $('.content .movie ul').animate({left: s}, 1000);
      $('.content .movie ul').animate({left: final}, 0.0000001)
    }else {
      $('.content .movie ul').animate({left: s}, 1000)
    }
  });


    // 开头轮播图的点击事件
    var num = -1;
    var num2 = 2;
    var i;
    var timer = null;
    function NextPlay() {
        $(".info session").attr("class","hide");
        num++;
        $(".shuffling .head img").eq(num).fadeIn(1500).siblings().fadeOut(1500);
        $(".info .top img").eq(num).fadeIn(1500).siblings().fadeOut(1500);
        $(".info session").eq(num).attr("class","show");
        if(num == 3){
            num = 0;
            $(".shuffling .head img").eq(num).fadeIn(1500).siblings().fadeOut(1500);
            $(".info .top img").eq(num).fadeIn(1500).siblings().fadeOut(1500);
            $(".info session").eq(num).attr("class","show");
        }
        i = num;
    }
    function BeforePlay() {
        if(typeof i === 'undefined'){
            $(".info session").attr("class","hide");
            num2--;
            $(".shuffling .head img").eq(num2).fadeIn(1500).siblings().fadeOut(1500);
            $(".info .top img").eq(num2).fadeIn(1500).siblings().fadeOut(1500);
            $(".info session").eq(num2).attr("class","show");
            if(num2 < 0){
                num2 = 2;
                $(".shuffling .head img").eq(num2).fadeIn(1500).siblings().fadeOut(1500);
                $(".info .top img").eq(num2).fadeIn(1500).siblings().fadeOut(1500);
                $(".info session").eq(num2).attr("class","show");
            }
        }else{
            $(".info session").attr("class","hide");
            i--;
            $(".shuffling .head img").eq(i).fadeIn(1500).siblings().fadeOut(1500);
            $(".info .top img").eq(i).fadeIn(1500).siblings().fadeOut(1500);
            $(".info session").eq(i).attr("class","show");
            if(i < 0){
                i = 2;
                $(".shuffling .head img").eq(i).fadeIn(1500).siblings().fadeOut(1500);
                $(".info .top img").eq(i).fadeIn(1500).siblings().fadeOut(1500);
                $(".info session").eq(i).attr("class","show");
            }
        }
    }
    function autoPlay() {
        timer = setInterval(function () {
            NextPlay();
        },5000)
    }
    autoPlay();
    $('.shuffling .next').on("click",function(){
        clearInterval(timer);
        NextPlay();
    });

    $('.shuffling .before').on("click",function(){
        clearInterval(timer);
        BeforePlay();
    });

    // 鼠标移入移出显示前后按钮
    $('.shuffling').mouseenter(function () {
        clearInterval(timer);
        $('.shuffling .before').css({
            display: 'block'
        });
        $('.shuffling .next').css({
            display: 'block'
        })
    });
    $('.shuffling').mouseleave(function () {
        autoPlay();
        $('.shuffling .before').css({
            display: 'none'
        });
        $('.shuffling .next').css({
            display: 'none'
        })
    });


    //点击进入电影详情页面
    $(".shuffling .head img").on("click", function () {
      var imgUrl = $(this).attr("src");
      $.ajax({
          type: 'post',
          url: '/cinemas/detail',
          data: {
              "action":"detail",
              "src": imgUrl
          },
          error: function (err) {
              console.log(err);
          },
          success: function (data) {
              if(data === "info"){
                  location.href = ('/detail');
              }
          }
      })
    })

    $("#nav .want span").on("click",function(){
      console.log("111")
      $.ajax({
        type: 'post',
        url: '/users/want',
        data:{
          "action":"want"
        },
        error: function (err) {
            console.log(err);
        },
        success: function (data) {
            console.log(data);
            if(data === "login"){
              location.href = ('/user/login')
            }
        }
      })
    })

    // want see
    $(".ready .image .mask span").on("click",function(){
      // console.log($(this))
      $(this).parent().children("img").attr("src","../images/love.png");
    })
});
