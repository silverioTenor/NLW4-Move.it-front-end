import React from 'react';

import { Container, Progress, CurrentExperience } from './styles';

const ExperienceBar: React.FC = () => {
  return (
    <Container>
      <span>0 xp</span>
      <div>
        <Progress percent="60%" />
        <CurrentExperience side={{ left: '60%' }}>300 xp</CurrentExperience>
      </div>
      <span>600 xp</span>
    </Container>
  );
}

export default ExperienceBar;