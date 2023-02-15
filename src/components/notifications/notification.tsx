import React from "react";
import {
  Join,
  File,
  NotificationWrapper,
  TopContext,
  Mention,
  Upload,
  Tags,
  Tag,
} from "./style";
import { Props } from "./types";
import { AiOutlineFileAdd } from "react-icons/ai";
export const Notification: React.FC<Props> = ({
  img,
  name,
  action,
  where,
  tags,
  theme,
  date,
  actionContext,
}) => {
  return (
    <NotificationWrapper>
      <div className="main-container">
        <TopContext>
          <img src={img} />
          <div>
            <b>{name}</b> {action} <b>{where}</b>
            <p>
              {date} <h1>·</h1> {theme}
            </p>
          </div>
        </TopContext>
        {actionContext?.join ? (
          <Join>
            <File>
              <div className="context">
                <AiOutlineFileAdd className="icon" />
                <div className="file-context">
                  <b>{where}.fig</b> <p>Edited 12 minutes ago</p>
                </div>
              </div>
            </File>
            <div className="footer">
              <div className="btn decline">Decline</div>
              <div className="btn accept">Accept</div>
            </div>
          </Join>
        ) : actionContext?.mention ? (
          <Mention>
            <div className="mention-container">
              <div className="mention-context">
                <p>
                  <b>@tranmautritam</b> Hey, I just brought in some missing
                  states from our old design file, Can you help set up the
                  components?
                </p>
              </div>
            </div>
            <div className="btn">Reply</div>
          </Mention>
        ) : actionContext?.upload ? (
          <Upload>
            <div className="context">
              <AiOutlineFileAdd className="icon" />
              <div className="file-context">
                <b>Travel 3D Characters.fig</b> <p>1 hour. ago</p>
              </div>
            </div>
          </Upload>
        ) : tags ? (
          <Tags>
            {tags.map((tag) => {
              return (
                <Tag tagName={tag}>
                  <p>{tag}</p>
                </Tag>
              );
            })}
          </Tags>
        ) : null}
      </div>
    </NotificationWrapper>
  );
};
