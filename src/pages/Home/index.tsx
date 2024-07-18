import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { screenSize } from "../../utils";
import { colors } from "../../constants/colors";
import displayPicture from "../../assets/rakshith-dp.png";
import { FeaturesList } from "./data";

const Home = () => {
  const isTablet = useMediaQuery(`(max-width:${screenSize.tablet})`);

  const avatarWidth = isTablet ? "250px" : "350px";

  return (
    <Stack gap={isTablet ? 3 : 15}>
      <Stack
        my={isTablet ? 3 : 4}
        direction={isTablet ? "column" : "row"}
        gap={isTablet ? 3 : 10}
        alignItems={"center"}
      >
        <Box
          sx={{
            width: avatarWidth,
            height: avatarWidth,
            borderRadius: "50%",
            p: isTablet ? 1 : 1.25,
            background: `linear-gradient(180deg, ${colors.darkGreen}, ${colors.secondaryBlack})`,
          }}
        >
          <Box
            width={"100%"}
            height={"100%"}
            borderRadius={"50%"}
            bgcolor={colors.lightGrey}
          >
            <Avatar
              alt="Display picture"
              src={displayPicture}
              sx={{
                width: avatarWidth,
                height: avatarWidth,
              }}
            />
          </Box>
        </Box>
        <Stack gap={2} textAlign={isTablet ? "center" : "left"}>
          <Stack gap={1}>
            <Typography variant={isTablet ? "h5" : "h4"}>Hi. I'm</Typography>
            <Typography variant={isTablet ? "h4" : "h2"} fontWeight={"600"}>
              Rakshith Sindhiya R,
            </Typography>
          </Stack>
          <Typography fontSize={isTablet ? 16 : 18} fontWeight={"500"}>
            A{" "}
            <span style={{ color: colors.green }}>
              {"<Senior Frontend Engineer />"}
            </span>{" "}
            with over 6+ years of experience in building successful websites.
          </Typography>
        </Stack>
      </Stack>
      <Stack gap={isTablet ? 3 : 5}>
        <Grid container spacing={isTablet ? 3 : 4}>
          {FeaturesList.map(({ icon, title, caption }) => (
            <Grid item md={3} sm={3} xs={12}>
              <Stack gap={1.25} alignItems={"center"} textAlign={"center"}>
                <Stack gap={1} alignItems={"center"}>
                  <Box
                    sx={{
                      borderRadius: 3,
                      bgcolor: colors.green,
                      p: 1.5,
                      width: isTablet ? "50px" : "70px",
                    }}
                  >
                    {icon}
                  </Box>
                  <Typography variant={isTablet ? "h5" : "h4"}>
                    {title}
                  </Typography>
                </Stack>
                <Typography variant="caption">{caption}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Button
          sx={{
            fontSize: {
              md: 20,
              xs: 18,
            },
            color: colors.green,
            textTransform: "none",
          }}
        >
          Download my resume (pdf)
        </Button>
      </Stack>
    </Stack>
  );
};

export default Home;
