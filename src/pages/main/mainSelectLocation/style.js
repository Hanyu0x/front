import styled from "styled-components";

const S = {};

S.SelectLocationContainer = styled.div`
  width: 100%;
  background: #F5F7F9;
  padding: 100px 0;
`;

S.SelectLocationInner = styled.div`
  width: 100%;
  max-width: 1520px;
  margin: 0 auto;
  padding: 0 20px;
`;

S.SelectLocationTitle = styled.div`
  margin-bottom: 40px;
`;

S.SelectLocationWrap = styled.div`
  display: flex;
  gap: 40px;

`;

S.SelectLocationMap = styled.div`
  width: 100%;
  flex: 1;
  height: 400px;
  background: ${({theme}) => theme.PALLETE.gray.greyscale01};
  border-radius: 25px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.SelectLocationContent = styled.div`
  width: 100%;
  max-width: 600px;
  flex: 1;
`;

S.FormTitle = styled.div`
  font-size: ${({theme}) => theme.FONT_SIZE.h3};
  font-weight: ${({theme}) => theme.FONT_WEIGHT.regular};
  line-height: ${({theme}) => theme.FONT_LINE.h3};
  margin-bottom: 20px;
  & img {width: 0.9em;}
  & span {
    font-weight: ${({theme}) => theme.FONT_WEIGHT.extraBold};
    /* color: ${({theme}) => theme.PALLETE.primary}; */
  }
`;

S.FormSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

S.Select = styled.select`
  width: 100%;
  height: 50px;
  border: 1px solid ${({theme}) => theme.PALLETE.gray.greyscale02};
  border-radius: 30px;
  padding: 0 20px;
  padding-right: 45px;
  font-size: ${({theme}) => theme.FONT_SIZE.h6};
  font-weight: ${({theme}) => theme.FONT_WEIGHT.regular};
  color: ${({theme}) => theme.PALLETE.gray.greyscale05};
  background-color: ${({theme}) => theme.PALLETE.white};
  cursor: pointer;
  transition: all 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23999' d='M6 8L0 0h12z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 12px 8px;

  &:focus {
    outline: none;
    border-color: ${({theme}) => theme.PALLETE.primary};
  }

  &:disabled {
    background-color: ${({theme}) => theme.PALLETE.gray.greyscale01};
    color: ${({theme}) => theme.PALLETE.gray.greyscale04};
    cursor: not-allowed;
    opacity: 0.6;
  }

  option {
    padding: 10px;
    color: ${({theme}) => theme.PALLETE.black};
  }

  option[value=""] {
    color: ${({theme}) => theme.PALLETE.gray.greyscale04};
  }
`;

S.CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

S.Checkbox = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid ${({theme}) => theme.PALLETE.gray.greyscale02};
  border-radius: 4px;
  cursor: pointer;
  appearance: none;
  position: relative;
  flex-shrink: 0;

  &:checked {
    background-color: ${({theme}) => theme.PALLETE.primary};
    border-color: ${({theme}) => theme.PALLETE.primary};
  }

  &:checked::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;

S.CheckboxLabel = styled.label`
  font-size: ${({theme}) => theme.FONT_SIZE.h6};
  font-weight: ${({theme}) => theme.FONT_WEIGHT.regular};
  color: ${({theme}) => theme.PALLETE.gray.greyscale05};
  cursor: pointer;
  user-select: none;
`;

S.ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;


export default S;