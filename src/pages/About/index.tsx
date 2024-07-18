import {
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { screenSize } from "../../utils";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import { colors } from "../../constants/colors";

const About = () => {
  const isTablet = useMediaQuery(`(max-width:${screenSize.tablet})`);

  return (
    <Stack>
      <Typography
        variant={isTablet ? "h5" : "h4"}
        sx={{ mt: 0, mb: isTablet ? 3 : 4 }}
      >
        About Me
      </Typography>
      <Typography paragraph>
        Hello! I'm{" "}
        <span style={{ fontSize: 17, fontWeight: 600, color: colors.green }}>
          Rakshith Sindhiya R 😎
        </span>{" "}
        a dedicated and passionate Senior Frontend Engineer with over 6+ years
        of experience in crafting responsive, dynamic, and user-centric web
        applications. My expertise lies in utilizing modern frontend
        technologies such as React.js, JavaScript, HTML, and CSS to bring
        engaging and efficient user interfaces to life.
      </Typography>
      <Typography paragraph>
        Throughout my career, I have worked on a variety of projects, ranging
        from small business websites to large-scale enterprise applications. My
        role has often involved collaborating closely with designers, backend
        developers, and stakeholders to ensure that the final product not only
        meets but exceeds user expectations.
      </Typography>
      <Typography paragraph>
        I thrive in environments that challenge me to continuously learn and
        adapt to new technologies and methodologies. My approach to frontend
        development is driven by a deep understanding of the importance of
        usability, performance, and accessibility. I am always eager to
        implement best practices and leverage the latest advancements in web
        development to enhance the user experience.
      </Typography>
      <Typography paragraph sx={{ mb: 0 }}>
        Some of my key accomplishments include:
      </Typography>
      <List sx={{ listStyle: "outside", pl: isTablet ? 3 : 4 }}>
        <ListItem sx={{ display: "list-item", pl: 0.5 }}>
          <ListItemText>
            Leading the development of a highly interactive and scalable fintech
            platform that significantly increased user engagement and sales.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: "list-item", pl: 0.5 }}>
          <ListItemText>
            Optimizing and refactoring legacy codebases to improve performance
            and maintainability, resulting in faster load times and a better
            overall user experience.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: "list-item", pl: 0.5 }}>
          <ListItemText>
            Mentoring junior developers and conducting code reviews to maintain
            high coding standards and promote a culture of continuous
            improvement.
          </ListItemText>
        </ListItem>
      </List>
      <Typography paragraph>
        When I'm not coding, I enjoy exploring new technologies and contributing
        to personal projects. I also love spending time outdoors, growing
        plants, and spending time with my family.
      </Typography>
      <Typography paragraph>
        I am always open to new opportunities and collaborations. Feel free to{" "}
        <NavLink
          to={ROUTES.CONTACT}
          style={{ fontWeight: "500", color: colors.green }}
        >
          reach out
        </NavLink>{" "}
        if you'd like to connect or discuss potential projects!
      </Typography>
      <Typography paragraph>
        Thank you for taking the time to learn more about me.
      </Typography>
    </Stack>
  );
};

export default About;
