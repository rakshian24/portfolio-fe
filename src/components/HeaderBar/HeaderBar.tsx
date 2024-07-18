import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { colors } from "../../constants/colors";
import { screenSize } from "../../utils";
import { Stack, useMediaQuery } from "@mui/material";
import {
  DESKTOP_APP_HEADER_HEIGHT,
  ROUTES,
  TABLET_APP_HEADER_HEIGHT,
} from "../../constants";
import { NavLink, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "./data";

type Props = {
  title: string;
};

const drawerWidth = 240;

export default function HeaderBar({ title }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { pathname } = useLocation();

  const isTablet = useMediaQuery(`(max-width:${screenSize.tablet})`);
  const headerHeight = isTablet
    ? TABLET_APP_HEADER_HEIGHT
    : DESKTOP_APP_HEADER_HEIGHT;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <NavLink to={ROUTES.HOME}>
        <Typography variant="h6" sx={{ my: 2, color: colors.green }}>
          {title}
        </Typography>
      </NavLink>
      <Divider />
      <List>
        {NAV_ITEMS.map((item, index) => {
          const isActive = pathname === item.path;

          return (
            <ListItem key={index} disablePadding>
              <NavLink to={item.path} style={{ width: "100%" }}>
                <ListItemButton>
                  <Stack
                    direction={"row"}
                    gap={1}
                    alignItems={"center"}
                    sx={{
                      bgcolor: isActive ? colors.lightGrey : "none",
                      width: "100%",
                      py: 1,
                      px: 0.75,
                      borderRadius: 2,
                    }}
                  >
                    <span
                      style={{
                        color: isActive ? colors.green : colors.primaryBlack,
                      }}
                    >
                      {item.icon}
                    </span>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: isActive ? "500" : "400",
                      }}
                      sx={{
                        color: isActive ? colors.green : colors.primaryBlack,
                        fontSize: "12px",
                      }}
                    />
                  </Stack>
                </ListItemButton>
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          bgcolor: colors.secondaryBlack,
          boxShadow: `${colors.green} 1.95px 1.95px 2.6px`,
        }}
      >
        <Toolbar
          variant="dense"
          sx={{ minHeight: headerHeight, height: headerHeight }}
        >
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <NavLink to={ROUTES.HOME}>
              <Typography
                variant="h6"
                sx={{
                  cursor: "pointer",
                  color: colors.green,
                  display: { xs: "none", sm: "block" },
                }}
              >
                {title}
              </Typography>
            </NavLink>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {NAV_ITEMS.map((item, index) => {
                const isActivePath = pathname === item.path;

                return (
                  <NavLink to={item.path}>
                    <Button
                      key={index}
                      sx={{
                        color: isActivePath ? colors.green : colors.white,
                        mr: 2,
                        fontSize: isTablet ? 14 : 16,
                        fontWeight: isActivePath ? "500" : "400",
                        borderBottom: isActivePath
                          ? `1px solid ${colors.green}`
                          : "none",
                      }}
                    >
                      {item.label}
                    </Button>
                  </NavLink>
                );
              })}
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
