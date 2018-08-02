import styled from 'styled-components';

export const StyledDiv = styled.div`
  font-size: 100%;
  font-family: 'Montserrat';
  background: #333;
`;

StyledDiv.displayName = 'AppStyled';

export const StyledAlert = styled.div`
  margin-top: 70px;
  border-radius: 3px;
  font-family: 'Montserrat';
  background: #444;
  padding: ${({ theme }) => theme.baseSizeUnit}px 0;
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  grid-column-gap: ${({ theme }) => theme.baseSizeUnit * 2}px;
  position: relative;

  > * {
    align-self: center;
    justify-self: center;
  }

  &::before {
    content: "";
    background: ${({ bg }) => bg};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50px;
    z-index: 1;
    border-radius: 3px 0 0 3px;
  }

  .status-icon {
    z-index: 10;
    
    svg {
      height: 30px;
      width: 30px;
      fill: ${({ theme }) => theme.colors.white};
    }
  } 

  .close {
    margin-top: 0;

    svg {
      height: 25px;
      width: 25px;
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

StyledAlert.displayName = 'AlertStyled';
