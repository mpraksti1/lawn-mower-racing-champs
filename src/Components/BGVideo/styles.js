import styled, { css } from 'styled-components';

const StyledVideo = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;

  @media (max-width: 767px) {
    background: url("/assets/images/mobile-bg.jpg") center center/cover no-repeat;
  }

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);

    ${({ dark }) => dark && css`
      filter: brightness(0.4);
    `}

    ${({ blur }) => blur && css`
      filter: blur(7px);
    `}

    @media (max-width: 767px) {
      display: none;
    }
  }
`;

StyledVideo.displayName = 'VideoStyled';

export default StyledVideo;
