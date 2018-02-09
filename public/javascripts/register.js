$(function () {
  // 正则
  // 密码中的特殊字符的正则判断
  var regPasswordSpecial = /[~!@#%&=;':",./<>_\}\]\-\$\(\)\*\+\.\[\?\\\^\{\|]/
  // 密码中的字符判断
  var passwordReg = /[a-zA-Z]/
  // 密码长度判断
  var passwordLengthReg = /^.{6,12}/
  // 密码中的数字判断
  var passwordReg2 = /[0-9]/
  //   邮箱格式判断
  var regEmail = /^[a-zA-Z\d]+([-_.][A-Za-z\d]+)*@([a-zA-Z\d]+[-.])+[a-zA-Z\d]{2,5}$/
  // mobile
  var mobileReg = /^1[3|4|5|8][0-9]\d{4,8}/
  // mobile length
  var mobileLengthReg = /^.{11}/

  var arr = [false, false, false, false]

  $('#register-mobile').blur(function () {
    if ($(this).val() === '') {
      $('.tips:eq(0)').text('请填写手机号')
    }else if (mobileReg.test($(this).val()) === true && mobileLengthReg.test($(this).val()) === true) {
      $('.tips:eq(0)').text('')
      arr[0] = true
      console.log(arr)
    }else {
      $('.tips:eq(0)').text('请检查手机格式')
    }
  })

  $('#register-pwd').blur(function () {
    if ($(this).val() === '') {
      $('.tips:eq(1)').text('请设置密码')
    }else if (passwordReg.test($(this).val()) === true && passwordReg2.test($(this).val()) === true && passwordLengthReg.test($(this).val()) === true) {
      $('.tips:eq(1)').text('')
      arr[1] = true
      console.log(arr)
    }else {
      $('.tips:eq(1)').text('密码格式错误')
    }
  })

  $('#register-pwdAgain').blur(function () {
    if ($(this).val() === '') {
      $('.tips:eq(2)').text('请确认密码')
    }else if ($(this).val() === $('#register-pwd').val()) {
      $('.tips:eq(2)').text('')
      arr[2] = true
      console.log(arr)
    }else {
      $('.tips:eq(2)').text('两次密码输入不一致')
    }
  })

  var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
  function reload () {
    var code = ''
    for (var i = 0;i < 6;i++) {
      var num = Math.floor(Math.random() * codeChars.length)
      code += codeChars[num]
    }
    $('#yz').html(code)
  }
  reload()

  $('.verification .change').on('click', function () {
    reload()
  })

  $('#register').on('click', function () {
    if ($('#code').val() === '') {
      $('.tips:eq(3)').text('请输入验证码')
      reload()
    }else if ($('#code').val().toLowerCase() === $('#yz').text().toLowerCase()) {
      $('.tips:eq(3)').text('')
      arr[3] = true
      console.log(arr)
    }else {
      $('.tips:eq(3)').text('验证码错误')
      reload()
    }

    var flag = 0
    for (var i = 0;i < arr.length;i++) {
      if (arr[i] === true) {
        flag++
      }
    }
    if (flag === 4) {
      $.ajax({
        type: 'post',
        url: '/users/register',
        data: {
          'action': 'register',
          'mobile': $('#register-mobile').val(),
          'pwd': $('#register-pwd').val()
        },
        error: function (err) {
          console.log(err)
        },
        success: function (data) {
          console.log(data)
          if (data === 'register-ok') {
            location.href = ('/user/login')
          }else if (data === 'register-no') {
            alert('该手机号已经被注册')
          }else {
            alert('error')
          }
        }
      })
    }
  })
})
