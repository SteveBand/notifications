import styled from "styled-components";

export const NavContainer = styled.article`
  width: 100%;
  height: 4.5vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gainsboro;
  position: relative;
  .icon {
    position: absolute;
    right: 20px;
    font-size: 20px;
    color: gray;
  }
`;

export const Inbox = styled.div<{ active: boolean }>`
  width: 100px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  border-bottom: ${(prop) => (prop.active ? "2px solid black" : "none")};
  cursor: pointer;
  &:hover {
    scale: 102%;
    transition: all 0.2s ease-in-out;
  }

  h1 {
    font-size: 17px;
    margin-right: 10px;
  }

  .inbox-num {
    background-color: ${(prop) => (prop.active ? "#E26657" : "gray")};
    border-radius: 10px;
    padding: 2px 8px;
    color: whitesmoke;
  }
`;

export const Team = styled.div<{ active: boolean }>`
  margin-left: 10px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${(prop) => (prop.active ? "2px solid black" : "none")};
  height: inherit;
  cursor: pointer;

  &:hover {
    scale: 102%;
    transition: all 0.2s ease-in-out;
  }

  h1 {
    font-size: 17px;
  }

  .team-num {
    background-color: ${(prop) => (prop.active ? "#E26657" : "gray")};
    margin-left: 10px;
    padding: 2px 8px;
    color: white;
    border-radius: 10px;
  }
`;
