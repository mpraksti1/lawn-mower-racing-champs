import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fonts.baseFont};
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.baseSizeUnit}px;
  cursor: pointer;
  display: block;
  outline: none;
  border: none;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  margin: ${({
    spaceAround, theme, spaceAbove, spaceBelow,
  }) => {
    if (spaceAround) return `${theme.baseSizeUnit}px 0`;
    if (spaceAbove) return `${theme.baseSizeUnit}px 0 0 0`;
    if (spaceBelow) return `0 0 ${theme.baseSizeUnit}px 0`;
    return 0;
  }};

  /* For medium variant */
  ${({
    medium, theme,
  }) => medium && css`
    background: ${() => theme.fontSizes.md};
  `}

  /* For large variant */
  ${({
    large, theme,
  }) => large && css`
    font-size: ${() => theme.fontSizes.lg};
  `}

  /* For outline variant */
  ${({
    green, theme,
  }) => green && css`
    color: ${() => theme.colors.white};
    background: ${() => theme.colors.green};
    border: 1px solid ${() => theme.colors.green};
  `}

  /* For outline variant */
  ${({
    outline, theme,
  }) => outline && css`
    color: ${() => theme.colors.green};
    background: ${() => theme.colors.transparentBlack};
    border: 1px solid ${() => theme.colors.green};
  `}

  /* For inline variant */
  ${({ inline }) => inline && css`
    display: inline-block;
  `}

  /* For islink variant */
  ${({ islink }) => islink && css`
    display: inline;
    border: inherit;
    margin: inherit;
    padding: inherit;
    background: inherit;
    color: inherit;
    font: inherit;
    text-align: inherit;
    text-transform: inherit;
    outline: none;
    line-height: normal;
    -webkit-appearance: none;
  `}
`;

StyledButton.displayName = 'ButtonStyled';

export default StyledButton;
