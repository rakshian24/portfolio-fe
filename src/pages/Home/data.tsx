import {
  CodeOutlined,
  DevicesOutlined,
  SpeedOutlined,
  TungstenOutlined,
} from "@mui/icons-material";

const commonStyles = {
  fontSize: {
    md: 60,
    xs: 35,
  },
};

export const FeaturesList = [
  {
    icon: (
      <SpeedOutlined
        sx={{
          ...commonStyles,
        }}
      />
    ),
    title: "Fast",
    caption: "Fast load times and lag free interaction is my highest priority.",
  },
  {
    icon: (
      <DevicesOutlined
        sx={{
          ...commonStyles,
        }}
      />
    ),
    title: "Responsive",
    caption: "My layouts will work on any device, big or small.",
  },
  {
    icon: (
      <TungstenOutlined
        sx={{
          ...commonStyles,
          transform: "rotate(180deg)",
        }}
      />
    ),
    title: "Intuitive",
    caption:
      "Simplicity at its best with intuitive UI. Guiding users without a second thought.",
  },
  {
    icon: (
      <CodeOutlined
        sx={{
          ...commonStyles,
        }}
      />
    ),
    title: "Dynamic",
    caption:
      "Websites don't have to be static. I love making pages come to life.",
  },
];
