import styled from "styled-components";

export const FooterWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  bottom: 10px;

  .btn {
    width: 40%;
    border: 1px solid gainsboro;
    height: 40px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      scale: 102%;
    }
  }
`;
