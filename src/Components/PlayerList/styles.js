import styled from 'styled-components';

// TODO: refactor these styles

export const StyledTable = styled.table`
  width: 100%;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;

  thead {
    display: none;
    color: ${({ theme }) => theme.colors.darkGray};
    background: ${({ theme }) => theme.colors.green};
    border-bottom: 2px solid ${({ theme }) => theme.colors.darkGray};
    padding: ${({ theme }) => theme.baseSizeUnit}px 0;
    
    @media screen and (min-width: 768px) {
      display: table-header-group;
    }
  }

  tr {
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.green};
    margin-bottom: 1${({ theme }) => theme.baseSizeUnit}px;
    display: block;
    position: relative;

    @media screen and (min-width: 768px) {
      display: table-row;
      border-bottom-width: 1px;
      margin-bottom: 0;
      padding: ${({ theme }) => theme.baseSizeUnit / 2}px;

      &:nth-child(odd) {
        background: ${({ theme }) => theme.colors.gray};
      }
    }
  }

  th,
  td {
    padding: ${({ theme }) => theme.baseSizeUnit}px;
    text-align: left;
  }

  th {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes.xsm};
  }

  td {
    display: block;
    text-align: right;
    font-size: 13px;
    border-bottom: 1px dotted ${({ theme }) => theme.colors.white};
    
    &:nth-child(odd) {
      background: ${({ theme }) => theme.colors.darkGreen};
    }

    &:last-child {
      border-bottom: none;
    }

    &:before {
      content: attr(data-label);
      float: left;
      text-transform: uppercase;
      font-weight: bold;

      @media screen and (min-width: 768px) {
        content: "";
        display: none;
      }
    }

    @media screen and (min-width: 768px) {
      display: table-cell;
      text-align: left;
      font-size: ${({ theme }) => theme.fontSizes.sm};;
      border-bottom: none;
      background: none!important;
    }
  }

  .profile-pic {
    img {
      height: 20px;
      border-radius: 50%;
    }

    @media screen and (max-width: 767px) {
      text-align: center;

      img {
        height: 60px;
      }
    }
  }

  .delete-player {
    cursor: pointer;
    
    svg {
      height: 25px;
      width: 25px;
    }

    @media screen and (max-width: 767px) {
      position: absolute;
      top: ${({ theme }) => theme.baseSizeUnit}px;
      right: ${({ theme }) => theme.baseSizeUnit}px;
    }
  }
`;

StyledTable.displayName = 'PlayerListTableStyled';

export const StyledDiv = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.green};
  padding: ${({ theme }) => theme.baseSizeUnit * 2}px;
  text-align: center;
  border-radius: 2px;
  
  button {
    margin-right: ${({ theme }) => theme.baseSizeUnit}px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

StyledDiv.displayName = 'PlayerListPopUpStyled';
