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
  gIsland: { path: '/images/cryingIsland.gif', alt: 'Crying Long Island from Azur Lane' },
  gShiratsuyu: { path: '/images/sleepingShiratsuyu.gif', alt: 'Sleeping Shiratsuyu from Azur Lane' },
  gEnterprise: { path: '/images/thinkingEnterprise.gif', alt: 'Thinking Enterprise sitting on a box from Azur Lane' },
};

export default ImageDescriptors;
