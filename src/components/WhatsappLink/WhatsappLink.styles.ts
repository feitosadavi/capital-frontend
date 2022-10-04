import styled from 'styled-components';
import { NavLink } from '../styles';

export const WhatsappLink = styled(NavLink)`
  color: #dadada;
  transition: .4s;

  display: flex;
  flex-direction: column;
  row-gap: .3rem;
  font-size: 13pt;
  font-weight: 700;

  :hover {
    .label {
      color: #33e91b;
      font-size: 13pt;
      transition: .4s;
    }
  }

  .label {
    display: flex;
    align-items: center;
    gap: .4rem;
    font-size: 12pt;
    transition: .3s;
  }
`