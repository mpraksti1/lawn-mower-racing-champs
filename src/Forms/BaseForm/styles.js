import styled from 'styled-components';

const StyledForm = styled.div`
  input {
    font-size: 12px;
    height: 35px;
    padding: 16px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 5px;
  }

  select {
    width: 100%;
    background: #fefffe;
    border-radius: 5px;
    border: none;
    height: 36px;
    text-align: center;
    padding: 0px 16px;
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
