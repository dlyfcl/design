$(function () {
    $.ajax({
        type: 'post',
        url: '/cinemas/cinema',
        data: {
            "action": "cinema"
        },
        error: function (err) {
            console.log(err);
        },
        success: function (data) {
            // console.log(data);
            for (var i = 0; i < data.length; i++) {
                $(".cinemaContent .left").append("<div class='cinema'>" +
                    "<div class='CinemaLeft'><div class='cinameLeft'>" +
                    "<img src='" + data[i].src + "'><div class='mask'>" +
                    "<img src='../images/love-2.png'><span>想看</span></div></div>" +
                    "<div class='price'><span class='sp1'>" + data[i].price + "</span>" +
                    "<span class='sp2'>元起</span><span class='buy'>选座购票</span></div></div>" +
                    "<div class='cinemaRight'><span class='title'>" + data[i].name + "</span>" +
                    "<span class='bg'>" + data[i].intro + "</span>" +
                    "<span class='type'>" + data[i].timeLen + " - " + data[i].type + "</span>" +
                    "<span class='actor'>导演： " + data[i].actor + "</span>" +
                    "<span class='starring'>主演： " + data[i].mainAct + "</span>" +
                    "<span class='time'>" + data[i].goTime + "</span></div></div>");
            }
            // 想看的mask的显示与隐藏
            $(".cinema .cinameLeft img,.mask").on("mouseenter", function () {
                $(this).parent().children(".mask").show();
            })
            $(".cinema .cinameLeft img").on("mouseout", function () {
                $(this).parent().children(".mask").hide();
            })
            // 排行绑的鼠标移入移除事件
            $('.week li .sp0 .sp1').mouseenter(function () {
                $(this).parent().parent().parent().find('img').attr('class', '')
                $(this).parent().parent().children('div').children('img').attr('class', 'show')
            });

            $(".cinameLeft .mask span").on("click", function () {
                var Name = $(this).parent().parent().parent().parent().children(".cinemaRight").children(".title").text();
                if ($(this).parent().children("img").attr("src") === "../images/love-2.png") {
                    $(this).parent().children("img").attr("src", "../images/love.png");
                    $(".cinameLeft .mask").hide();
                    console.log(Name);
                    $.ajax({
                        type: "post",
                        url: "/cinemas/cinema",
                        data: {
                            "name": Name,
                            "action": "add"
                        },
                        error: function (err) {
                            console.log(err);
                        },
                        success: function (data2) {
                            console.log(data2)
                            if (data2 === "haved") {
                                alert("已经收藏过");
                            } else if (data2 === "login") {
                                location.href = "/user/login"
                            }
                        }
                    })
                } else {
                    $(this).parent().children("img").attr("src", "../images/love-2.png");
                    $(".cinameLeft .mask").hide();
                    $.ajax({
                        type: "post",
                        url: "/cinemas/cinema",
                        data: {
                            "cinemaName": Name,
                            "action": "nine"
                        },
                        error: function (err) {
                            console.log(err);
                        },
                        success: function (data3) {
                            console.log(data3)
                            console.log("data");
                        }
                    })
                }
            })
            $(".cinemaContent .type ul li span").on("click", function () {
                $(".cinemaContent .type ul").find("span").attr("class", "");
                $(this).attr("class", "active");
                var cont = $(this).text();
                $(".cinema").hide();
                console.log(cont);
                for(var s = 0;s < $(".cinema").length;s++){
                    if($(".cinema").eq(s).children(".cinemaRight").children(".type").text().indexOf(cont) !== -1){
                        $(".cinema").eq(s).show();
                    }
                }
            })
            $("#all").on("click",function(){
                event.stopPropagation();
                $(".cinema").show();
            })
        }
    })
})