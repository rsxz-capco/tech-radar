import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import images from './images';
import styled from 'styled-components/macro';

const ButtonWrapper = styled.div`
  width: 300px;
  height: 70px;
  font-size: 30px;
  border: 1px solid white;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 12px 0 12px;
  margin-bottom: 10px;
  span {
    margin: 0 auto 0 10px;
  }
  svg.MuiSvgIcon-root {
    font-size: 20px;
  }
`;

type StyledButtonProps = {
  name: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

export const StyledButton: FC<StyledButtonProps> = ({ name, onClick }) => (
  <Link to={`/tecnology/${name.toLowerCase()}`}>
    <ButtonWrapper onClick={onClick}>
      <img
        src={(images as any)[name.toLowerCase()]}
        alt={name}
        width={54}
        height={54}
      />
      <span>{name}</span>
      <ArrowForwardIosIcon />
    </ButtonWrapper>
  </Link>
);

export default StyledButton;
