import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 0 ${({ theme: { baseSizeUnit } }) => `${baseSizeUnit * 2}px ${baseSizeUnit * 2}px`}
`;

const Site = () => {
  // Redirect away from all non-auth routes if not logged in

  return (
    <StyledDiv>
      <p>
        Site component
      </p>
    </StyledDiv>
  );
};

export default Site;
