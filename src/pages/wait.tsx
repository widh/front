import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import querystring from 'query-string';
import BackStage from '../components/BackStage';
import ImageDescriptors from '../assets/ImageDescriptors';

const Wait: React.FC = () => {
  const [now, setNow] = useState((new Date()).getTime());
  const msg = useRef('');

  useEffect(() => {
    const parsedQuery = querystring.parse(window.location.search);
    if (window.location.hash.length > 0) {
      const line = Number.parseInt(window.location.hash.substring(1), 10);
      if (line > now) {
        const time = moment(line);
        msg.current = `Open time:<br />&#9;${time.toString()} (${time.fromNow()})`;
      } else if (parsedQuery.link && parsedQuery.link.length > 0) {
        const link = `go.wldh.org/${parsedQuery.link}`;
        msg.current = `The link is now opened: <a href="https://${link}">${link}</a>`;
      } else return;
      setTimeout(() => {
        setNow(new Date().getTime());
      }, 1000);
    } else if (parsedQuery.link && parsedQuery.link.length > 0) {
      const link = `go.wldh.org/${parsedQuery.link}`;
      msg.current = `The open time is unknown.<br>Retry? <br />&#9;⇒ <a href="https://${link}">${link}</a>`;
    }
  }, [now]);

  return (
    <BackStage
      title="Hum... Not Yet."
      detailedTitle="The page is not published yet."
      message="Would you wait a while for the publish time coming?"
      image={ImageDescriptors.gEnterprise}
    >
      <span data-white-space="preserved" dangerouslySetInnerHTML={{ __html: msg.current }} />
    </BackStage>
  );
};

export default Wait;
