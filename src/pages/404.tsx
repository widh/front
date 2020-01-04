import React, { useState, useEffect } from 'react';
import querystring from 'query-string';
import BackStage from '../components/BackStage';
import ImageDescriptors from '../assets/ImageDescriptors';

const NotFound: React.SFC = () => {
  const [linkPlaceholder, setLink] = useState(<></>);

  useEffect(() => {
    let parsedLink = '';
    let reqText = '';
    let reqURL = '';

    try {
      parsedLink = querystring.parse(window.location.search).link.toString();
    } catch {
      parsedLink = '';
    }

    if (parsedLink && parsedLink.length > 0) {
      reqText = `go.wldh.org/${parsedLink}`;
      reqURL = `https://go.wldh.org/${parsedLink}`;
    } else {
      reqText = `www.wldh.org${window.location.pathname}`;
      reqURL = `https://www.wldh.org${window.location.pathname}`;
    }

    setLink(<a href={reqURL}>{reqText}</a>);

    const tpSpan: HTMLElement = document.querySelector('[data-visible="transparent"]');
    tpSpan.dataset.visible = 'opaque';
  }, []);

  return (
    <BackStage
      title="Huh... I don't know."
      detailedTitle="The page that you're looking for does not exist."
      message="I've never done this before... How about typing whole the URL again?"
      image={ImageDescriptors.gIsland}
      metaImage="/images/banner-404.png"
      favicoff
    >
      <span data-visible="transparent">
        Requested URL:
        <br />
        &ensp;&ensp;&ensp;
        {linkPlaceholder}
      </span>
    </BackStage>
  );
};

export default NotFound;
