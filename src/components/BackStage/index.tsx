import React, { useState, useEffect, useRef } from 'react';
import Wrapper from '../_Wrapper';
import { WImageDescriptor } from '../../assets/imageDescriptors';
import { WFeature } from '../../assets/features';

import $ from './style.scss';

/* React Component */
interface Props {
  title: string
  detailedTitle: string
  message: string
  image: WImageDescriptor
  metaImage?: string
  favicoff?: boolean
  requiredFeatures?: WFeature[]
  children?: React.ReactElement | React.ReactElement[]
};

const BackStage: React.FC<Props> = (props: Props) => {
  const {
    title, detailedTitle, message, image, children, metaImage, favicoff, requiredFeatures,
  } = props;
  const [imageVisible, setVisibility] = useState('translucent');
  const visibleData = useRef(false);

  // Event listener to avoid overlap of text and image
  useEffect(() => {
    const dtElement: HTMLHeadingElement = document.querySelector('header h2');
    const azElement: HTMLImageElement = document.querySelector('footer img');
    const azCheck = () => {
      if (
        (dtElement.offsetTop > azElement.offsetTop)
        && ((dtElement.offsetLeft + dtElement.offsetWidth - 50) > azElement.offsetLeft)
      ) {
        if (visibleData.current) {
          setVisibility('translucent');
          visibleData.current = false;
        }
      } else if (!visibleData.current) {
        setVisibility('opaque'); visibleData.current = true;
      }
    };
    window.addEventListener('resize', azCheck);
    azCheck();
  }, [visibleData]);

  // Render
  return (
    <Wrapper
      title={title}
      description={detailedTitle}
      image={metaImage}
      favicoff={favicoff}
      className={$.wrapper}
      requiredFeatures={requiredFeatures}
    >
      <header className={$.header}>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <h2 dangerouslySetInnerHTML={{ __html: detailedTitle }} />
        <span dangerouslySetInnerHTML={{ __html: message }} />
      </header>
      <main className={$.main}>{children}</main>
      <footer className={$.footer}>
        <img className={$.blhx} src={image.path} alt={image.alt} data-visible={imageVisible} />
      </footer>
    </Wrapper>
  );
};

export default BackStage;
