import React from "react";
import { FooterWrapper } from "./style";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <div className="btn archive">Archive all</div>
      <div className="btn mark">Mark all as read</div>
    </FooterWrapper>
  );
};
