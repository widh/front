// Managing informations of public/images

/* Type Definition */
export interface WImageDescriptor {
  path: string
  alt: string
};

export interface WImageDescriptors {
  [key: string]: WImageDescriptor
};

/* Image Descriptors */
const ImageDescriptors: WImageDescriptors = {
  gIsland: {
    path: '/static/images/cryingIsland.gif',
    alt: 'Crying Long Island from Azur Lane',
  },
  gShiratsuyu: {
    path: '/static/images/sleepingShiratsuyu.gif',
    alt: 'Sleeping Shiratsuyu from Azur Lane',
  },
  gEnterprise: {
    path: '/static/images/thinkingEnterprise.gif',
    alt: 'Thinking Enterprise sitting on a box from Azur Lane',
  },
};

export default ImageDescriptors;
