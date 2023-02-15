const image =
  "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png";
export const usersData: {
  name: string;
  img: string;
  action: string;
  where: string;
  tags?: string[];
  theme: string;
  date: string;
  actionContext?: {
    upload: boolean;
    mention: boolean;
    join: boolean;
  };
}[] = [
  {
    name: "James Morgan",
    img: image,
    action: "added new tags to",
    where: "Ease Design System",
    tags: ["Ui Design", "Dashboard", "System Design"],
    theme: "Easy 2023 Project",
    date: "1 mins. ago",
  },
  {
    name: "Venus Graham",
    img: image,
    action: "asked to join",
    where: "Ease Design System",
    theme: "Easy 2023 Project",
    date: "1 hour. ago",
    actionContext: { upload: false, mention: false, join: true },
  },
  {
    name: "Hayden Cox",
    img: image,
    action: "mentioned you in",
    where: "Kohaku Landing Page",
    theme: "Landing Page 2023",
    date: "Feb 8",
    actionContext: { upload: false, mention: true, join: false },
  },
  {
    name: "Akeem Mueller",
    img: image,
    action: "uploaded 2 new files to",
    where: "Moyo 3D",
    theme: "3D Characters",
    date: "Feb 7",
    actionContext: { upload: true, mention: false, join: false },
  },
];
