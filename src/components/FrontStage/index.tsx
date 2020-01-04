import React from 'react';
import Wrapper from '../_Wrapper';
import Features from '../../assets/Features';
import VectorImages, { WVectorImageDOMConverter } from '../../assets/VectorImages';

import $ from './style.scss';

/* React Components */
const FrontStage: React.SFC = () => {
  const rwldh = (
    <>
      {WVectorImageDOMConverter(VectorImages.wldh)}
      <style>
        {`
          [data-id="switch"] path { fill: #e34; }
        `}
      </style>
    </>
  );

  return (
    <Wrapper
      main
      requiredFeatures={[
        Features.promise, Features.cssVar, Features.cssFilter,
      ]}
      className={$.mainbody}
    >
      <div data-id="background" aria-hidden="true" />
      <article>
        <header data-id="brand" aria-label="Header">
          <h1 className={$.hidden}>World of wldh</h1>
          <button data-id="switch" aria-hidden="true" tabIndex={-1} type="button">
            {rwldh}
          </button>
          <h2 aria-hidden="true">Short Messages</h2>
          <span className={$['text-roller']}>
            <span data-id="banner-container">
              <span data-id="banner">
                <span>
                  <b>
                    Wldh
                  </b>
                  &nbsp;
                  is a hangul typing of Jio.
                </span>
                <br />
                <span data-transparent="true" data-removed="true">With wldh, nothing is inconceivable.</span>
              </span>
              <br />
              <span data-id="banner-message"><b>Be eigenius.</b></span>
            </span>
          </span>
        </header>
        <section data-id="links">
          <h2 aria-hidden="true">Links</h2>
          <nav aria-label="List of links about myself">
            <ul data-id="outer-link-container" className={$['link-container']}>
              <li role="none presentation"><a data-lang="Korean" href="https://blog.wldh.org/"><span>Blog</span></a></li>
              {/* <li role="none presentation"><a href="https://www.wldh.org/projects/"><span>Projects</span></a></li> */}
              <li role="none presentation"><a href="https://github.com/wldh-g/"><span>GitHub</span></a></li>
              {/* <li role="none presentation"><a href="https://www.wldh.org/resume/"><span>Resume</span></a></li> */}
              <li role="none presentation"><a href="https://www.instagram.com/with_jio/"><span>Instagram</span></a></li>
              <li className={$['link-container']}>
                <span className={$.hidden}>Other Links</span>
                <ul aria-hidden="true">
                  <li role="none presentation"><a href="https://www.facebook.com/wldh.aa"><span>Facebook</span></a></li>
                  <li role="none presentation"><a href="https://www.linkedin.com/in/wldh/"><span>LinkedIn</span></a></li>
                  <li role="none presentation"><a href="https://twitter.com/wldh_aa"><span>Twitter</span></a></li>
                  <li role="none presentation"><a href="https://steamcommunity.com/id/2_shakki"><span>Steam</span></a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </section>
        <footer data-id="author" aria-label="Footer">
          <p role="contentinfo">&copy; wldh</p>
        </footer>
      </article>
      <noscript>
        <style jsx>
          {`
            #background {
              display: none;
            }
            #switch {
              animation: none !important;
              cursor: default;
            }
            #brand #switch {
              transform: none !important;
              margin-bottom: 1vh !important;
            }
            #switch:active svg, #switch:focus svg {
              transform: none;
            }
          `}
        </style>
      </noscript>
      <script src="/scripts/burri.js" />
    </Wrapper>
  );
};

export default FrontStage;
