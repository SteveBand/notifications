export interface Props {
  img: string;
  name: string;
  action: string;
  where: string;
  tags?: string[];
  date: string;
  theme: string;
  actionContext?: {
    upload: boolean;
    mention: boolean;
    join: boolean;
  };
}
