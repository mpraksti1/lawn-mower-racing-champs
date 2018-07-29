import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 0 ${({ theme: { baseSizeUnit } }) => baseSizeUnit * 2}px;
  max-width: 1200px;
  margin: 0 auto;
`;

StyledDiv.displayName = 'SiteStyled';

export default StyledDiv;
