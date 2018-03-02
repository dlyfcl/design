$(function () {
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
                console.log("detail data" + data);
                if(data === "detail-ok"){
                    // location.href = ('/detail');
                    console.log("yes");
                }
            }
        })

    })
});