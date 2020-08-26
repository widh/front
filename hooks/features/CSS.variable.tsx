import { Feature } from '.';

const checkMetric: Feature = {
  name: 'CSS.variable',
  checker: () => !!(CSS && CSS.supports('color', 'var(--a)')),
};

export default checkMetric;
