import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { colors } from "../../styles/theme";
import img1 from "../../assets/imgM1.jpg";
import img3 from "../../assets/favicon.jpg";
import img2 from "../../assets/imgM10.jpg";

const AboutUs = ({
  aboutRef,
}: {
  aboutRef: React.RefObject<HTMLDivElement>;
}) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      ref={aboutRef}
      direction={smallScreen ? "column" : "row"}
      justifyContent={"center"}
      alignItems={"center"}
      p={2}
    >
      <Typography
        color={colors.primary}
        mb={2}
        sx={{ display: { sm: "flex", md: "none" } }}
        width={"90%"}
      >
        About Us
      </Typography>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        width={smallScreen ? "95%" : "40%"}
        gap={2}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          gap={2}
          width={"90%"}
        >
          <img src={img3} width={"50%"} height={280} />
          <img src={img2} width={"50%"} height={280} />
        </Stack>
        <img src={img1} width={"93%"} height={280} />
      </Stack>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        width={smallScreen ? "95%" : "40%"}
        p={2}
      >
        <Typography
          color={"secondary"}
          width={"90%"}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          About Us
        </Typography>
        <Typography width={"90%"} variant="h4" fontWeight={"bold"}>
          We collaborate with you to ensure your maximum satisfaction
        </Typography>
        <Typography width={"90%"}>
          At our company, we are dedicated to working closely with our customers
          to ensure their complete satisfaction. Whether it's repairing a
          malfunctioning cooling device, assisting with the selection and
          purchase of new equipment, or expertly installing cooling systems, we
          prioritize your needs and strive to exceed your expectations at every
          step of the process.
        </Typography>
        <Grid container justifyContent={"center"} width={"90%"}>
          <Grid xs={12} md={6} display={"flex"} alignItems={"center"}>
            <Icon icon="gg:arrow-right-o" color={colors.text} />
            <Typography ml={2}>Open From 8Am To 6Pm</Typography>
          </Grid>
          <Grid xs={12} md={6} display={"flex"} alignItems={"center"}>
            <Icon icon="gg:arrow-right-o" color={colors.text} />
            <Typography ml={2}>Open Whatsapp Contact</Typography>
          </Grid>
          <Grid xs={12} md={6} display={"flex"} alignItems={"center"}>
            <Icon icon="gg:arrow-right-o" color={colors.text} />
            <Typography ml={2}>An Email For Contact</Typography>
          </Grid>
          <Grid xs={12} md={6} display={"flex"} alignItems={"center"}>
            <Icon icon="gg:arrow-right-o" color={colors.text} />
            <Typography ml={2}>Avelable In London</Typography>
          </Grid>
        </Grid>

        <Box
          display={"flex"}
          justifyContent={"center"}
          width={"90%"}
          borderTop={"1px solid lightgray"}
        >
          <Box p={2} borderRight={"1px solid lightgray"}>
            <Typography variant="h6" fontWeight={"bold"}>
              Herve Takue
            </Typography>
            <Typography>pdg takcooling</Typography>
          </Box>
          <Box p={2}>
            <Typography variant="h6" fontWeight={"bold"}>
              00447877020977
            </Typography>
            <Typography>Call to ask any question</Typography>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default AboutUs;
