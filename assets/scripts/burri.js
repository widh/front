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
  // NOTE : Array shuffle code by https://stackoverflow.com/q/6274339
  const isCellular = navigator.connection && navigator.connection.type === 'cellular';
  const bgURLs = isCellular ? [
    '/assets/images/0901.jpg',
    '/assets/images/0708.jpg',
  ] : [
    '/assets/videos/irona_fall.mp4',
    '/assets/images/0874.JPG',
    '/assets/images/0726.jpg',
    '/assets/images/0901.jpg',
    '/assets/images/0708.jpg',
  ];
  for (let i = bgURLs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [bgURLs[i], bgURLs[j]] = [bgURLs[j], bgURLs[i]];
  }
  const bgLoadFuture = [];
  let bgIteration = 0;
  for (let i = 0; i < bgURLs.length; i += 1) {
    bgLoadFuture.push(new Promise((resolve) => {
      const request = new XMLHttpRequest();
      request.open('GET', bgURLs[i]);
      request.responseType = 'blob';
      request.onload = resolve;
      request.send();
    }));
  }
  const article = document.querySelector('article');
  setTimeout(() => {
    // Do this after at least 1 second
    Promise.all(bgLoadFuture).then((data) => {
      const objectURLs = [];
      const objectTypes = [];
      const objectTypesOrigin = [];
      for (let i = 0; i < data.length; i += 1) {
        objectURLs.push((window.URL || window.webkitURL).createObjectURL(data[i].target.response));
        objectTypes.push(data[i].target.response.type.indexOf('image') !== -1 ? 'img' : 'video');
        objectTypesOrigin.push(data[i].target.response.type);
      }
      const changeBackground = (fadeOut = true) => {
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
              objectTypes[bgIteration] === 'video' ? ` autoplay muted loop controls="false" type="${objectTypesOrigin[bgIteration]}"` : ''
            }></${objectTypes[bgIteration]}>`;
          bgIteration = bgIteration + 1 >= objectURLs.length ? 0 : bgIteration + 1;
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
      setInterval(changeBackground, 30000);
      changeBackground(false);
    }).catch(() => {
      console.error('Failed to load backgrounds!');
    });
  }, 1000);

  // Active blurer
  const blurer = () => {
    document.activeElement.blur();
  };
  document.body.onmouseup = blurer;
  document.body.ontouchend = blurer;
};
