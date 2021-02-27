import styled, { css } from 'styled-components';
import { root } from '../../styles/rootColors.json';

interface CurrentExperienceProps {
  side: {
    left: string;
  };
}

interface ProgressProps {
  percent: string;
}

export const Container = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    margin: 0 1.5rem;
    position: relative;
    border-radius: 4px;
    background: ${root['gray-line']}
  }
`;

export const Progress = styled.div<ProgressProps>`
  height: 4px;
  border-radius: 4px;
  background: ${root.green};

  ${props => props.percent && css`
    width: ${props.percent}
  `}
`;

export const CurrentExperience = styled.span<CurrentExperienceProps>`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);

  ${props => props.side && css`
    left: ${props.side.left};
  `}
`;