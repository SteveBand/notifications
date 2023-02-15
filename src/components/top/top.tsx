import React from "react";
import { TopWrapper } from "./style";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { MdClose } from "react-icons/md";
export const Top: React.FC = () => {
  return (
    <TopWrapper>
      <h1 className="name">Notifications</h1>
      <div className="icon-box">
        <BsArrowsAngleExpand className="icon" />
        <MdClose className="icon" />
      </div>
    </TopWrapper>
  );
};
