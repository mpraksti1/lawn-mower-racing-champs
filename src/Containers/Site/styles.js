import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 0 ${ ({ theme: { baseSizeUnit } }) => `${baseSizeUnit * 2}px ${baseSizeUnit * 2}px`};
`;

StyledDiv.displayName = 'SiteStyled';

export default StyledDiv;