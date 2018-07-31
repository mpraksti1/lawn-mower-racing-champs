import styled from 'styled-components';

const StyledForm = styled.div`
  input {
    font-size: 12px;
    height: 35px;
    padding: 16px;
    width: 100%;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  select {
    width: 100%;
    background: #fefffe;
    border-radius: 5px;
    border: none;
    height: 36px;
    text-align: center;
    padding: 0px 16px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
  }

  form {
    display: grid;
    grid-row-gap: 16px;
  }

  .icon-input {
    position: relative;

    svg {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }
  }
`;

StyledForm.displayName = 'BaseFormStyled';

export default StyledForm;
