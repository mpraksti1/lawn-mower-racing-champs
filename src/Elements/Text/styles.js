import styled from 'styled-components';

// This file borrowed in part from
// https://www.codecamps.com/a-quick-guide-to-styled-components-with-interactive-examples/

const StyledText = styled.span`
  color: ${({
    gray, green, red, theme,
  }) => {
    if (gray) return theme.colors.darkGray;
    if (green) return theme.colors.green;
    if (red) return theme.colors.red;
    return theme.colors.white;
  }};

  font-size: ${({
    xxlg, xlg, lg, sm, xsm, theme,
  }) => {
    if (xxlg) return theme.fontSizes.xxlg;
    if (xlg) return theme.fontSizes.xlg;
    if (lg) return theme.fontSizes.lg;
    if (sm) return theme.fontSizes.sm;
    if (xsm) return theme.fontSizes.xsm;
    return theme.fontSizes.md;
  }};

  font-family: ${({
    sans, theme,
  }) => {
    if (sans) return theme.fonts.sansFont;
    return theme.fonts.baseFont;
  }};

  font-weight: ${({
    thin, bold,
  }) => {
    if (thin) return 100;
    if (bold) return 700;
    return 'normal';
  }};

  text-transform: ${({
    capitalize, uppercase,
  }) => {
    if (capitalize) return 'capitalize';
    if (uppercase) return 'uppercase';
    return 'none';
  }};

  line-height: ${({
    lhmore, lhless,
  }) => {
    if (lhmore) return '1.6';
    if (lhless) return '1.2';
    return '1.4';
  }};

  padding: ${({
    spaceAround, spaceAbove, spaceBelow, theme,
  }) => {
    if (spaceAround) return `${theme.baseSizeUnit * 1.5}px 0`;
    if (spaceAbove) return `${theme.baseSizeUnit * 1.5}px 0 0 0`;
    if (spaceBelow) return `0 0 ${theme.baseSizeUnit * 1.5}px 0`;
    return 0;
  }};

  text-align: ${({
    alignCenter, alignRight,
  }) => {
    if (alignCenter) return 'center';
    if (alignRight) return 'right';
    return 'left';
  }};

  display: ${({
    block, inlineBlock,
  }) => {
    if (block) return 'block';
    if (inlineBlock) return 'inline-block';
    return 'inline';
  }};

`;

StyledText.displayName = 'TextStyled';

export default StyledText;
