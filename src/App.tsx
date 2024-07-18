import { Box, Stack, useMediaQuery } from "@mui/material";
import { colors } from "./constants/colors";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import { screenSize } from "./utils";
import { Route, Routes } from "react-router-dom";
import {
  DESKTOP_APP_HEADER_HEIGHT,
  ROUTES,
  TABLET_APP_HEADER_HEIGHT,
} from "./constants";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  const isTablet = useMediaQuery(`(max-width:${screenSize.tablet})`);

  const { HOME, ABOUT, PROJECTS, CONTACT } = ROUTES;

  return (
    <Box bgcolor={colors.primaryBlack} sx={{ minHeight: "100vh", margin: 0 }}>
      <Stack
        sx={{
          overflowY: "scroll",
          maxWidth: "1220px",
          margin: "0 auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <HeaderBar title={"<Rakshith />"} />
        <Stack
          p={isTablet ? 3 : 4}
          mt={isTablet ? TABLET_APP_HEADER_HEIGHT : DESKTOP_APP_HEADER_HEIGHT}
        >
          <Routes>
            <Route path={HOME} element={<Home />}></Route>
            <Route path={ABOUT} element={<About />}></Route>
            <Route path={PROJECTS} element={<Projects />}></Route>
            <Route path={CONTACT} element={<Contact />}></Route>
          </Routes>
        </Stack>
      </Stack>
    </Box>
  );
};

export default App;
