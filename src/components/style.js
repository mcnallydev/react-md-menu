import styled, { keyframes } from 'styled-components';

export const MenuTag = styled.div`
  display: ${props => props.open ? 'inline-block' : 'none'};
  position: relative;
  overflow: hidden;
  background-color: #FFFFFF;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 -1px 1px -1px rgba(0,0,0,.12);
  border-radius: 2px;
`;

export const Options = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Option = styled.div`
  color: #212121;
  padding: 10px 15px;
  position: relative;
  overflow: hidden;
  &:hover {
    background-color: #dadada;
    cursor: pointer;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10,10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }
  &:active:after {
    transform: scale(0,0);
    opacity: .2;
    transition: 0s;
  }
`;
