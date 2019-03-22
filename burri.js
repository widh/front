(function () {
  var cq = document.cookie.split(';')
  cq.forEach(function (ci) {
    var c = ci.split('=')
    if ('ptDark' === c[0].trim()) {
      if (c[1][0] === 't') {
        document.documentElement.style.setProperty('background-color', 'rgb(34, 34, 34)')
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.style.setProperty('background-color', 'rgb(234, 234, 234)')
      }
    }
  })
})()

window.onload = function () {
  const setCookie = function (value) {
    var date = new Date()
    date.setTime(date.getTime() + 315360000000)
    var expires = "expires=" + date.toUTCString()
    document.cookie = "ptDark=" + value + ";" + expires + ";path=/;domain=widh.me"
  }
  const lightSwitch = document.getElementById('switch')
  lightSwitch.onclick = function () {
    var isDark = document.body.classList.contains('dark')
    if (isDark) {
      document.body.classList.remove('dark')
      document.documentElement.style.setProperty('background-color', 'rgb(234, 234, 234)')
    } else {
      document.body.classList.add('dark')
      document.documentElement.style.setProperty('background-color', 'rgb(34, 34, 34)')
    }
    setCookie(!isDark)
  }
  lightSwitch.onmouseup = function (event) {
    event.target.blur()
  }
}
