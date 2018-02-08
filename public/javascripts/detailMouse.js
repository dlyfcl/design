$(function () {
  // 头部想看标志
  $('.detailHead .Mask .container .left').mouseenter(function () {
    $(this).children('.mask').css({
      display: 'block'
    })
  })
  $('.detailHead .Mask .container .left').mouseleave(function () {
    $(this).children('.mask').css({
      display: 'none'
    })
  })

  $('.detailContent .right .nowHot li').mouseenter(function () {
    $(this).children('.hotInfo').children('.zi').children('.sp2').children('.buy').css({
      display: 'block'
    })
  })
  $('.detailContent .right .nowHot li').mouseleave(function () {
    $(this).children('.hotInfo').children('.zi').children('.sp2').children('.buy').css({
      display: 'none'
    })
  })
})
