$(function () {
    // 鼠标移入移出显示前后按钮
    $(".shuffling").mouseenter(function () {
        // clearInterval(timer);
        $(".shuffling .before").css({
            display:"block"
        });
        $(".shuffling .next").css({
            display:"block"
        })
    });
    $(".shuffling").mouseleave(function () {
        // play();
        $(".shuffling .before").css({
            display:"none"
        });
        $(".shuffling .next").css({
            display:"none"
        })
    });

    // 鼠标移入显示喜欢图标
    $(".ready li .image").mouseenter(function () {
        $(this).children(".mask").css({
            display:"block"
        })
    });
    $(".ready li .image").mouseleave(function () {
        $(this).children(".mask").css({
            display:"none"
        })
    });

    // 点击选择电影类型和区域
    $(".con").on("click",".type-area span",function () {
        $(this).parent().children("span").attr("class","");
        $(this).attr("class","active");
    });
    
    // 排行绑的鼠标移入移除事件
    $(".week li .sp0 .sp1").mouseenter(function () {
        $(this).parent().parent().parent().find("img").attr("class","");
        $(this).parent().parent().children("div").children("img").attr("class","show");
    });

    // 正在热映的电影鼠标移入移除事件
    $(".content .movie li .listCon").mouseenter(function () {
        $(this).children(".mask").css({
            display: "block"
        });
        $(".content .butn .btn").css({
            display: "block"
        });
    });
    $(".content .movie li .listCon").mouseleave(function () {
        $(this).children(".mask").css({
            display: "none"
        });
        $(".content .butn .btn").css({
            display: "none"
        });
    });
    $(".content .butn .btn").mouseenter(function () {
        // console.log("ssssssssssssssssssss");
        $(".content .movie li .listCon").children(".mask").css({
            display: "none"
        });
        $(this).css({
            display: "block"
        })
    });

    // 热门电影列表的点击滑动事件
    $(".con").on("click",".content .butn .before",function () {
        var W = $(".content .movie li").width();
        var paddT = $(".content .movie .Li").css('padding-left').split("px")[0];
        var Left = $(".content .movie ul").css("left").split("px")[0];
        var critical = (W*3 + paddT*3)*3;
        var s = Left - W*3 - paddT*3 + "px";
        var S = Math.abs(Left - W*3 - paddT*3);
        $(".content .movie ul").animate({left: s},1000);
        if(parseInt(critical) == parseInt(S)){
            $(".content .movie ul").animate({left: 0},0.0001);
        }
    });
    $(".con").on("click",".content .butn .next",function () {
        var Left = $(".content .movie ul").css("left").split("px")[0];
        var W = $(".content .movie li").width();
        var paddT = $(".content .movie .Li").css('padding-left').split("px")[0];
        var s = Left*1 + W*3 + paddT*3 + "px";
        var final = -(W*3 + paddT*3)*3 + "px";
        if(Left == 0){
            $(".content .movie ul").animate({left: final},0.0000001);
            var newLeft = $(".content .movie ul").css("left").split("px")[0];
            $(".content .movie ul").animate({left: newLeft*1 + W*3 + paddT*3 + "px"},1000);
        }else if(parseInt(W*3 + paddT*3) == parseInt(Math.abs(Left))){
            $(".content .movie ul").animate({left: s},1000);
            $(".content .movie ul").animate({left: final},0.0000001);
        }else{
            $(".content .movie ul").animate({left: s},1000);
        }
    });
});