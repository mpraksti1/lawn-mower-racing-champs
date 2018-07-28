
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  grid-column-gap: 1px;
  grid-row-gap: 1px;
  margin-top: ${({ theme }) => theme.baseSizeUnit * 2}px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.green},
    ${({ theme }) => theme.colors.yellow}
  );
  padding: 2px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  div {
    background: ${({ theme }) => theme.colors.darkGray};
    padding: ${({ theme }) => theme.baseSizeUnit * 2}px;
    border-radius: 2px;
  }
`;

export default StyledDiv;
