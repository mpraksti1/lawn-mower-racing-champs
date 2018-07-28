import styled from 'styled-components';

const StyledDiv = styled.div`
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
