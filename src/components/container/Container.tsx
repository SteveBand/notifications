import React from "react";
import { Footer } from "../footer/Footer";
import { NavBar } from "../nav-bar/NavBar";
import { Top } from "../top/top";
import { NotificationsContainer } from "./notif-container/NotificationsContainer";
import { ContainerBody } from "./style";

export const Container: React.FC = () => {
  return (
    <ContainerBody>
      <Top />
      <NavBar />
      <NotificationsContainer />
      <Footer />
    </ContainerBody>
  );
};
