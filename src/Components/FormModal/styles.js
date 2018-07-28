import styled, { keyframes } from 'styled-components';

const animateIn = keyframes`
  0% {
    opacity: 0;
    margin-top: -60px;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
`;

const StyledDiv = styled.div`
  animation: ${animateIn} 2s ease-out forwards;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 250px;
  width: 350px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  background: ${({ theme }) => theme.colors.darkGray};
  margin: 0 auto;
  border-radius: 3px;

  @media (max-width: 767px) {
    background: rgba(51, 51, 51, 0.5);
    max-width: 350px;
    width: 90%;
  }  
  
  .tab-wrapper {
    height: 51px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .tab-link {
    text-align: center;
    color: #333;
    padding: 16px;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.green};
    font-family: ${({ theme }) => theme.fonts.baseFont};
  
    &.active { 
      background-color: transparent;
      color: ${({ theme }) => theme.colors.green};

      span {
        color: ${({ theme }) => theme.colors.green};
      }
    }

    svg {
      margin-right: ${({ theme }) => theme.baseSizeUnit}px;
    }
  }
    
  .forms-area {
    grid-area: main;
    padding: 0 ${({ theme: { baseSizeUnit } }) => (`
      ${baseSizeUnit * 2}px
      ${baseSizeUnit * 2}px 
      ${baseSizeUnit * 2}px
    `)};
    display: grid;
    grid-row-gap: ${({ theme: { baseSizeUnit } }) => baseSizeUnit * 2};
  } 
`;

StyledDiv.displayName = 'FormModalStyled';

export default StyledDiv;
