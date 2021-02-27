import React from 'react';

import ExperienceBar from '../components/ExperienceBar';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ExperienceBar />
    </Container>
  );
}

export default Dashboard;