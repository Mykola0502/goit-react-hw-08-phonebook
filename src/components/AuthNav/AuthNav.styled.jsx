import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  transition: transform $duration ease, box-shadow $duration ease;

  &:hover,
  &:focus {
    transform: scale(1.15);
    box-shadow: inset 0px 0px 30px 0px #69b9ff;
  }

  &.active {
    color: #e84a5f;
  }
`;
