import styled from "styled-components";

const tagsColor = {
  ui: {
    backgroundColor: "#F3FAF3",
    borderColor: "#99BB9A",
    textColor: "#528E53",
  },
  dashboard: {
    backgroundColor: "#F1F6FB",
    borderColor: "#84B3DD",
    textColor: "#5CA5E3",
  },
  design: {
    backgroundColor: "white",
    borderColor: "black",
    textColor: "black",
  },
};

export const NotificationWrapper = styled.article`
  min-height: 80px;
  border-bottom: 1px solid gainsboro;
  margin: 2px 0;

  .top-info {
    display: flex;
    align-items: center;
  }

  .main-container {
    margin-left: 20px;
  }

  .join {
    .footer {
      display: flex;
      margin-left: 40px;
    }
  }
`;

export const TopContext = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  margin-bottom: 15px;
  img {
    width: 30px;
    height: 30px;
    margin-right: 8px;
  }
  p {
    height: 0;
    margin: 0;
    font-size: 14px;
    display: flex;
    color: #ababab;

    h1 {
      width: 10px;
      height: 15px;
      font-size: 30px;
      margin: 0 5px;
      display: flex;
      align-items: center;
    }
  }
`;

export const File = styled.div`
  display: block;
  margin-left: 40px;
  min-height: 50px;
  max-width: 85%;
  border-radius: 10px;
  background-color: #f9f9f9;
  .context {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 10px;
    .file-context {
      display: flex;
      align-items: center;
      p {
        font-size: 12px;
        max-width: 150px;
        margin-left: 10px;
      }
    }
  }
  .icon {
    margin-right: 5px;
    padding: 0;
    font-size: 30px;
  }
`;

export const Join = styled.div`
  .footer {
    display: flex;
    margin-left: 40px;
    margin-bottom: 10px;
  }

  .btn {
    margin: 10px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 30px;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
      scale: 102%;
    }
  }

  .decline {
    background-color: white;
    color: black;
    border: 2px solid gainsboro;
  }

  .accept {
    background-color: black;
    color: whitesmoke;
  }
`;

export const Mention = styled.div`
  min-height: 50px;
  margin-left: -20px;

  .mention-container {
    background-color: #f9f9f9;

    p {
      max-width: 60%;
      font-size: 15px;
      opacity: 0.9;
      padding: 5px 0;
      margin: 0 0 5px 15px;
    }
  }

  .mention-context {
    margin-left: 60px;
    border-left: 2px solid gainsboro;
    min-height: inherit;
  }
  .btn {
    margin-left: 60px;
    width: 70px;
    height: 30px;
    border: 2px solid gainsboro;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin-bottom: 20px;
    cursor: pointer;

    &:hover {
      scale: 102%;
    }
  }
`;

export const Upload = styled.div`
  display: block;
  margin-left: 40px;
  min-height: 50px;
  max-width: 85%;
  border-radius: 10px;
  background-color: #f9f9f9;
  margin-bottom: 20px;
  .context {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 10px;
    .file-context {
      display: flex;
      align-items: center;
      p {
        font-size: 12px;
        max-width: 150px;
        margin-left: 10px;
      }
    }
  }
  .icon {
    margin-right: 5px;
    padding: 0;
    font-size: 30px;
  }
`;

export const Tags = styled.section`
  display: flex;
  margin-left: 30px;
  margin-bottom: 20px;
`;

export const Tag = styled.div<{ tagName: string }>`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  font-size: 13px;
  font-size: 700;
  border-radius: 5px;
  background-color: ${(prop) =>
    prop.tagName === "Ui Design"
      ? tagsColor.ui.backgroundColor
      : prop.tagName === "Dashboard"
      ? tagsColor.dashboard.backgroundColor
      : prop.tagName === "System design"
      ? tagsColor.design.backgroundColor
      : null};

  border-color: ${(prop) =>
    prop.tagName === "Ui Design"
      ? tagsColor.ui.borderColor
      : prop.tagName === "Dashboard"
      ? tagsColor.dashboard.borderColor
      : prop.tagName === "System design"
      ? tagsColor.design.borderColor
      : null};

  color: ${(prop) =>
    prop.tagName === "Ui Design"
      ? tagsColor.ui.textColor
      : prop.tagName === "Dashboard"
      ? tagsColor.dashboard.textColor
      : prop.tagName === "System design"
      ? tagsColor.design.textColor
      : null};

  p {
    margin: 0 5px;
    padding: 0;
  }
`;
