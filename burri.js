(function () {
  const cq = document.cookie.split(';');
  cq.forEach(function (ci) {
    const c = ci.split('=');
    if ('modarkbul' === c[0].trim()) {
      if (c[1][0] === 't') {
        document.documentElement.style.setProperty('background-color', 'rgb(0, 0, 0)');
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.style.setProperty('background-color', 'rgb(240, 240, 240)');
      }
    }
  });
})();

window.onload = function () {
  // Lightmode
  if (document.documentElement.classList.contains('dark')) {
    document.querySelector('meta[name=theme-color]').content = '#000000';
  }
  const setCookie = function (value) {
    var date = new Date();
    date.setTime(date.getTime() + 315360000000);
    var expires = 'expires=' + date.toUTCString();
    document.cookie = 'modarkbul=' + value + ';' + expires + ';path=/;domain=widh.me';
  };
  const toggleLight = function () {
    var isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('background-color', 'rgb(240, 240, 240)');
      document.querySelector('meta[name=theme-color]').content = '#f0f0f0';
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('background-color', 'rgb(0, 0, 0)');
      document.querySelector('meta[name=theme-color]').content = '#000000';
    }
    setCookie(!isDark);
  };
  const lightSwitch = document.getElementById('switch');
  lightSwitch.onclick = toggleLight;
  lightSwitch.onmouseup = function (event) {
    event.target.blur();
  };
  lightSwitch.ontouchend = function (event) {
    event.target.blur();
  };

  // Loader
  lightSwitch.style.setProperty('animation', 'none');
  window.addEventListener('beforeunload', function () {
    lightSwitch.style.setProperty('animation', 'opa-wave 2s infinite');
  });

  // Changing banner
  let textIter = 0;
  const textBanners = document.getElementById('banner').querySelectorAll('span');
  const textChanger = function () {
    const nowText = textBanners[(textIter++) % textBanners.length];
    const nextText = textBanners[textIter % textBanners.length];
    nowText.classList.add('transparent');
    window.setTimeout(function () {
      nowText.classList.add('removed');
      nextText.classList.remove('removed');
      window.setTimeout(function () {
        nextText.classList.remove('transparent');
      }, 20);
    }, 240);
  };
  Array.prototype.slice.call(textBanners).slice(1).forEach(function (banner) {
    banner.classList.add('transparent');
    banner.classList.add('removed');
  });
  if (textBanners.length > 0) {
    window.setInterval(textChanger, 5000);
  }

  // Onclick blurer
  const links = document.querySelectorAll('#links a');
  links.forEach(function (link) {
    link.onclick = function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    };
  });
};
