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
                var mm = "datail-ok";
                if(data === mm){
                    location.href = ('/detail');
                }
            }
        })

    })
});