$(function () {
    $.ajax({
        type: 'post',
        url: '/cinemas/cinema',
        data: {
            "action": "want"
        },
        error: function (err) {
            console.log(err);
        },
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                $(".All").append("<div class='wantMovie'><div class='left'>" +
                    "<img src=" + data[i].src + "></div>" +
                    "<div class='right'>" +
                    "<span class='title'>" + data[i].name + "</span>" +
                    "<span class='bg'>" + data[i].intro + "</span>" +
                    "<span class='type'>" + data[i].timeLen + " - " + data[i].type + "</span>" +
                    "<span class='actor'>导演： " + data[i].actor + "</span>" +
                    "<span class='starring'>主演： " + data[i].mainAct + "</span>" +
                    "<span class='time'>" + data[i].goTime + "</span>" +
                    "<input type='button' value='移除'></div></div>")
            }
        }
    })
})