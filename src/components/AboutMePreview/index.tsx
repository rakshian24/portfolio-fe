import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { screenSize } from "../../utils";
import { colors } from "../../constants/colors";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";

const AboutMePreview = () => {
  const isTablet = useMediaQuery(`(max-width:${screenSize.tablet})`);
  const navigate = useNavigate();

  return (
    <Stack gap={isTablet ? 3 : 4}>
      <Typography sx={{ fontSize: isTablet ? 14 : 16 }}>
        With over 6+ years of experience as a Senior Frontend Engineer, I
        specialize in building responsive and dynamic web applications using
        React.js, Typescript, JavaScript, HTML, and CSS. My passion lies in
        creating seamless user experiences and solving complex UI challenges.
      </Typography>
      <Button
        variant="contained"
        sx={{
          fontSize: {
            md: 16,
            xs: 14,
          },
          color: colors.tertiaryBlack,
          textTransform: "none",
          alignSelf: "flex-end",
          bgcolor: colors.green,
          "&:hover": {
            bgcolor: colors.greenHover,
          },
        }}
        onClick={() => navigate(ROUTES.ABOUT)}
      >
        View more
      </Button>
    </Stack>
  );
};

export default AboutMePreview;
