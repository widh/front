window.onload = function () {
  // Lightmode
  if (document.documentElement.classList.contains('dark'))
    document.querySelector('meta[name=theme-color]').content = '#000000';
  const setCookie = function (value) {
    const date = new Date();
    date.setTime(date.getTime() + 315360000000);
    document.cookie = `modarkbul=${value};expires=${date.toUTCString()};path=/;domain=widh.me`;
  };
  const toggleLight = () => {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('background-color', '#faf9f8');
      document.querySelector('meta[name=theme-color]').content = '#faf9f8';
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('background-color', '#000000');
      document.querySelector('meta[name=theme-color]').content = '#000000';
    }
    setCookie(!isDark);
  };
  const lightSwitch = document.getElementById('switch');
  lightSwitch.onclick = toggleLight;
  lightSwitch.title = 'Press here to change brightness mode';

  // Loader
  lightSwitch.style.setProperty('animation', 'none');
  window.addEventListener('beforeunload', () => {
    lightSwitch.style.setProperty('animation', 'shiney 3.2s ease-in-out infinite');
  });

  // Changing banner
  let textIter = 0;
  const textBanners = document.getElementById('banner').querySelectorAll('span');
  const textChanger = () => {
    const nowText = textBanners[(textIter++) % textBanners.length];
    const nextText = textBanners[textIter % textBanners.length];
    nowText.classList.add('transparent');
    window.setTimeout(() => {
      nowText.classList.add('removed');
      nextText.classList.remove('removed');
      window.setTimeout(() => {
        nextText.classList.remove('transparent');
      }, 20);
    }, 240);
  };
  Array.prototype.slice.call(textBanners).slice(1).forEach((banner) => {
    banner.classList.add('transparent');
    banner.classList.add('removed');
  });
  if (textBanners.length > 0) {
    window.setInterval(textChanger, 5000);
  }

  // Active blurer
  const blurer = () => {
    document.activeElement.blur();
  };
  document.body.onmouseup = blurer;
  document.body.ontouchend = blurer;
};
