import styled from 'styled-components';

const StyledDiv = styled.div`
  background: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  .icon {
    text-align: center;
    
    svg {
      fill: ${({ theme }) => theme.colors.green};
      height: 72px;
      width: 72px;
    }
  }
`;

export default StyledDiv;
