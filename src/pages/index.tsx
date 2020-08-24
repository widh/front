import React from 'react';
import Wrapper from '../components/wrap';
import StageFront from '../components/StageFront';

const Index: React.SFC = () => (
  <Wrapper
    isMain
    requiredFeatures={[]}
  >
    <StageFront />
  </Wrapper>
);

export default Index;
