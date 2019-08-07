window.onload = function () {
  // Lightmode
  if (document.documentElement.classList.contains('dark'))
    document.querySelector('meta[name=theme-color]').content = '#000000';
  const setCookie = function (isDark) {
    const date = new Date();
    if (
      (isDark && window.matchMedia("(prefers-color-scheme: dark)").matches)
      || (!isDark && window.matchMedia("(prefers-color-scheme: light)").matches)
    ) {
      date.setTime(0);
    } else {
      date.setTime(date.getTime() + 315360000000);
    }
    document.cookie = `modarkbul=${isDark ? 'dark' : 'light'};expires=${date.toUTCString()};path=/;domain=${document.domain}`;
  };
  const toggleLight = () => {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('background-color', '#ffffff');
      document.querySelector('meta[name=theme-color]').content = '#ffffff';
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
  if (textBanners.length > 0) {
    window.setTimeout(() => {
      textChanger();
      window.setInterval(textChanger, 10000);
    }, 3000);
  }

  // Active blurer
  const blurer = () => {
    document.activeElement.blur();
  };
  document.body.onmouseup = blurer;
  document.body.ontouchend = blurer;
};
