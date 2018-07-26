import styled from 'styled-components';

// This file borrowed in part from 
// https://www.codecamps.com/a-quick-guide-to-styled-components-with-interactive-examples/

const StyledText = styled.span`
  color: ${ props => {
    if (props.gray) return props.theme.colors.darkGray;
    if (props.green) return props.theme.colors.green;
    if (props.red) return props.theme.colors.red;
    return props.theme.colors.white;
  }};
  font-size: ${props => {
    if (props.xxlg) return props.theme.fontSizes.xxlg;
    if (props.xlg) return props.theme.fontSizes.xlg;
    if (props.lg) return props.theme.fontSizes.lg;
    if (props.sm) return props.theme.fontSizes.sm;
    if (props.xsm) return props.theme.fontSizes.xsm;
    return props.theme.fontSizes.md;
  }};
  font-family: ${props => {
    if (props.fancy) return props.theme.fonts.displayFont;
    if (props.sans) return props.theme.fonts.sansFont;
    return props.theme.fonts.baseFont;
  }};
  font-weight: ${props => {
    if (props.thin) return 100;
    if (props.bold) return 700;
    return 'normal';
  }};
  text-transform: ${props => {
    if (props.capitalize) return "capitalize";
    if (props.uppercase) return "uppercase";
    return "none";
  }};
  line-height: ${props => {
    if (props.lhmore) return "1.6";
    if (props.lhless) return "1.2";
    return "1.4";
  }};
  padding: ${props => {
    if (props.spaceAround) return `${props.theme.baseSizeUnit * 1.5}px 0`;
    if (props.spaceAbove) return `${props.theme.baseSizeUnit * 1.5}px 0 0 0`;
    if (props.spaceBelow) return `0 0 ${props.theme.baseSizeUnit * 1.5}px 0`;
    return 0;
  }};
  text-align: ${props => {
    if (props.alignCenter) return 'center';
    if (props.alignRight) return 'right';
    return 'left';
  }};
  display: ${props => {
    if (props.block) return 'block';
    if (props.inlineBlock) return 'inline-block';
    return 'inline';
  }};
`;

StyledText.displayName = 'TextStyled';

export default StyledText;