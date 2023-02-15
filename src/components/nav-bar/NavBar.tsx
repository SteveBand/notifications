import React, { HtmlHTMLAttributes, useEffect, useState } from "react";
import { Inbox, NavContainer, Team } from "./styles";
import { AiOutlineSetting } from "react-icons/ai";
export const NavBar: React.FC = () => {
  const [inboxNum, setInboxNum] = useState<number>(8);
  const [teamNum, setTeamNum] = useState<number>(2);
  const [active, setActive] = useState<any>({
    inbox: false,
    team: true,
  });

  const handleActive = (e: any) => {
    if (e.target.classList.contains("inbox")) {
      setActive({ inbox: true, team: false });
    } else if (e.target.classList.contains("team")) {
      setActive({ inbox: false, team: true });
    }
  };

  return (
    <NavContainer>
      <Inbox active={active.inbox} onClick={handleActive} className="inbox">
        <h1 className="inbox">Inbox</h1>
        <div className="inbox-num inbox">{inboxNum}</div>
      </Inbox>
      <Team active={active.team} onClick={handleActive} className="team">
        <h1 className="team">Team</h1>
        <div className="team-num team">{teamNum}</div>
      </Team>
      <AiOutlineSetting className="icon" />
    </NavContainer>
  );
};
