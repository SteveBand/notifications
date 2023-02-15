import React from "react";
import { Notification } from "../../notifications/notification";
import { Container } from "./style";
import { usersData } from "../../../utils/usersData";

export const NotificationsContainer: React.FC = () => {
  return (
    <Container>
      {usersData.map((user) => {
        const { img, name, action, where, tags, theme, date, actionContext } =
          user;
        return (
          <Notification
            img={img}
            name={name}
            action={action}
            where={where}
            tags={tags}
            date={date}
            theme={theme}
            actionContext={actionContext}
          />
        );
      })}
    </Container>
  );
};
