import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 500px;
  position: relative;
  margin: 0 -${({ theme }) => theme.baseSizeUnit * 2}px;
  background-size: cover;
  background-image: url('/assets/images/homebg.jpg');
`;

export default StyledDiv;
