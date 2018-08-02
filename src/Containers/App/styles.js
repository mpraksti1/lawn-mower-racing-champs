import styled from 'styled-components';

export const StyledDiv = styled.div`
  font-size: 100%;
  font-family: 'Montserrat';
  background: #333;
`;

StyledDiv.displayName = 'AppStyled';

export const StyledAlert = styled.div`
  font-family: 'Montserrat';
  background: #333;
  padding: ${({ theme }) => theme.baseSizeUnit * 2}px;
  display: grid;
  grid-template-columns: 50px 1fr 50px;

  > * {
    align-self: center;
  }
`;

StyledAlert.displayName = 'AlertStyled';
