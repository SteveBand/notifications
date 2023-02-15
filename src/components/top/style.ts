import styled from "styled-components";

export const TopWrapper = styled.article`
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: 1px solid gainsboro;

  .name {
    position: absolute;
    left: 15px;
    letter-spacing: 1px;
  }

  .icon-box {
    position: absolute;
    right: 5px;
  }

  .icon {
    padding: 10px;
    color: gray;
  }
`;
