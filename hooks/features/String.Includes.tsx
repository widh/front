import { Feature } from '.';

const checkMetric: Feature = {
  name: 'String.includes',
  checker: () => !!String.prototype.includes,
};

export default checkMetric;
