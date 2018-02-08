$(function () {
  $('#login').on('click', function () {
    console.log('inside login.js')
    $.ajax({
      type: 'post',
      url: '/users/login',
      async: false,
      data: {
        'action': 'login',
        'mobile': $('#login-mobile').val(),
        'pwd': $('#login-pwd').val()
      },
      error: function (err) {
        console.log(err)
      },
      success: function (data) {
        console.log('login.js huo de data =' + data)
        if (data === 'ok') {
          location.href = ('/user/register')
        }
      }
    })
  })
})
