import styled from 'styled-components';

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.baseSizeUnit * 2}px;
  position: relative;
  display: grid;
  grid-template-columns: 100px auto auto;

  .logo {
    font-size: 20px;
    transform: scale(1, 0.8);
    letter-spacing: 0.10em;
    font-weight: 700;
    grid-column-start: 1;
    grid-column-end: 2;

    .logo-img {
      height: 20px;
      margin-right: 5px;
    }
  }

  .nav {
    text-align: right;
    grid-column-start: 3;
    grid-column-end: 4;
    align-self: center;

    .nav-link {
      color: ${({ theme }) => theme.colors.black};
      align-self: center;
      margin-left: ${({ theme }) => theme.baseSizeUnit}px;
      text-decoration: none;
    }

    .nav-link.active {
      color: ${({ theme }) => theme.colors.green};;
    }
  }
`;

StyledHeader.displayName = 'AppHeaderStyled';

export default StyledHeader;
