import styled, { keyframes } from 'styled-components';

const topToBottom = keyframes`
  0% {transform: translateY(50%);}
  50% {transform: translateY(0%);}
  100% {transform: translateY(-100%);}
`

const bottomToTop = keyframes`
  0% {transform: translateY(-50%);}
  50% {transform: translateY(0%);}
  100% {transform: translateY(100%);}
`

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.darkGreen};
  overflow: hidden;

  .loader {
    .slide-section-container {
      width: 750px;
      transform-origin: 750px 200px;
      transform: rotate(30deg);
    }
    .slide-section {
      width: 12.5%;
      background: ${({ theme }) => theme.colors.green};
      height: 750px;
      float: left;
      &:nth-child(even) {
        transform: translateY(50%);
        animation: ${topToBottom} linear infinite alternate;
        border-radius: 10px;
      }
      &:nth-child(odd) {
        transform: translateY(-50%);
        animation: ${bottomToTop} linear infinite alternate;
        border-radius: 10px;
      }
      &:nth-child(1) {
        animation-duration: 3s;
      }
      &:nth-child(2) {
        animation-duration: 5s;
      }
      &:nth-child(3) {
        animation-duration: 7s;
      }
      &:nth-child(4) {
        animation-duration: 4s;
      }
      &:nth-child(5) {
        animation-duration: 5s;
      }
      &:nth-child(6) {
        animation-duration: 6s;
      }
      &:nth-child(7) {
        animation-duration: 10s;
      }
      &:nth-child(8) {
        animation-duration: 3s;
      }
    }
  }
`

StyledDiv.displayName = 'LoaderStyled';

export default StyledDiv;