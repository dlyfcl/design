$(function () {
    $(".shuffling .head img").on("click", function () {
        var imgUrl = $(this).attr("src");
        console.log(imgUrl);
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
                location.href = ('/detail');
            }
        })

    })
});