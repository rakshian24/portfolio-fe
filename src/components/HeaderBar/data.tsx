import {
  BadgeOutlined,
  CallOutlined,
  Home,
  InfoOutlined,
} from "@mui/icons-material";
import { ROUTES } from "../../constants";

const { HOME, ABOUT, PROJECTS, CONTACT } = ROUTES;

export const NAV_ITEMS = [
  {
    label: "Home",
    path: HOME,
    icon: <Home sx={{ fontSize: "22px" }} />,
  },
  {
    label: "About",
    path: ABOUT,
    icon: <InfoOutlined sx={{ fontSize: "22px" }} />,
  },
  {
    label: "Projects",
    path: PROJECTS,
    icon: <BadgeOutlined sx={{ fontSize: "22px" }} />,
  },
  {
    label: "Contact",
    path: CONTACT,
    icon: <CallOutlined sx={{ fontSize: "22px" }} />,
  },
];
