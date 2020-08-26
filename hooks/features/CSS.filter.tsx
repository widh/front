import { Feature } from '.';

const checkMetric: Feature = {
  name: 'CSS.variable',
  checker: () => !!(CSS && CSS.supports('filter', 'blur(0px)')),
};

export default checkMetric;
