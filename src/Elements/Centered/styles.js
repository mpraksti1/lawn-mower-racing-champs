import styled from 'styled-components';

const StyledDiv = styled.div`
  position: ${({ fixed }) => {
    if (fixed) return 'fixed';
    return 'absolute';
  }};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

StyledDiv.displayName = 'CenteredStyled';

export default StyledDiv;
