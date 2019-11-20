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

  // Background image
  // NOTE : All major mobile browsers support navigator.connection
  const isCellular = navigator.connection && navigator.connection.type === 'cellular';
  const storageHost = 'https://wowldh.file.core.windows.net/bg-resources/';
  const storageAccessToken = '?sv=2019-02-02&ss=f&srt=o&sp=r&se=2997-07-14T17:11:16Z&st=1997-07-15T09:11:16Z&spr=https&sig=CCi%2FSBbxGmHOaIB%2Fw7QQ53xtVIXtyc1n4XSf5ZFCG5k%3D'
  const bgURLs = isCellular ? [
    '0901.jpg',
    '0708.jpg',
  ] : [
    'irona_fall.mp4',
    '0874.jpg',
    '0726.jpg',
    '0901.jpg',
    '0708.jpg',
  ];
  let isBackgroundDisplayed = false;
  let bgIteration = -1;
  const objectURLs = [];
  const objectTypes = [];
  const article = document.querySelector('article');
  const changeBackground = (fadeOut = true) => {
    bgIteration = bgIteration + 1 >= objectURLs.length ? 0 : bgIteration + 1;
    (fadeOut ? new Promise((resolve) => {
      article.style.setProperty('transition', 'background-color 2.5s ease-in-out');
      setTimeout(() => {
        article.style.setProperty('background-color', 'var(--background)');
        setTimeout(resolve, 2550);
      }, 50);
    }) : Promise.resolve()).then(() => {
      article.style.setProperty('transition', 'background-color 1s ease-in-out');
      document.getElementById('background')
        .outerHTML = `<${objectTypes[bgIteration]} id="background" style="filter: blur(75px);" src="${objectURLs[bgIteration]}"${
        objectTypes[bgIteration] === 'video' ? ' autoplay muted loop controls="false"' : ''
        }></${objectTypes[bgIteration]}>`;
      setTimeout(() => {
        // Make 100ms margin for image rendering
        article.style.setProperty('background-color', 'var(--background-transparent)');
        document.getElementById('background').style.setProperty('filter', 'blur(0px)');
        setTimeout(() => {
          article.style.setProperty('transition', '');
        }, 1000);
      }, 200);
    });
  };
  for (let i = 0; i < bgURLs.length; i += 1) {
    new Promise(() => {
      const request = new XMLHttpRequest();
      request.open('GET', `${storageHost}${bgURLs[i]}${storageAccessToken}`);
      request.responseType = 'blob';
      request.onload = (data) => {
        objectURLs.push((window.URL || window.webkitURL).createObjectURL(data.target.response));
        objectTypes.push(data.target.response.type.indexOf('image') !== -1 ? 'img' : 'video');
        if (!isBackgroundDisplayed) {
          isBackgroundDisplayed = true;
          setInterval(changeBackground, 20000);
          changeBackground(false);
        }
      };
      request.send();
    });
  }
  // Active blurer
  const blurer = () => {
    document.activeElement.blur();
  };
  document.body.onmouseup = blurer;
  document.body.ontouchend = blurer;
};
