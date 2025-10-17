import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import img from "../../assets/pexels-fauxels-3183150.jpg";
import img1 from "../../assets/imgM8.jpg";
import { colors } from "../../styles/theme";
import { Spacer } from "../common/spacer";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef } from "react";

const WhyUs = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const parentRef = useRef<HTMLDivElement>(null);
  const child1Ref = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parentRef.current && childRef.current && child1Ref.current) {
      const childHeight = childRef.current.clientHeight;
      const childHeight2 = child1Ref.current.clientHeight;
      parentRef.current.style.height = smallScreen
        ? `${childHeight + childHeight2 + 370}px`
        : `${childHeight}px`;
    }
  }, []);

  return (
    <Box position={"relative"} ref={parentRef} pb={20}>
      <Box
        ref={childRef}
        position={smallScreen ? "relative" : "absolute"}
        top={40}
        sx={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        width={smallScreen ? "100%" : "70%"}
      >
        <Stack
          direction={"column"}
          bgcolor={"rgb(5, 6, 43,0.6)"}
          p={2}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          gap={3}
        >
          <Spacer />
          <Typography fontWeight={"bold"} width={"70%"} color={colors.white}>
            WHO WE ARE
          </Typography>
          <Typography
            variant="h5"
            width={"70%"}
            fontWeight={"bold"}
            color={colors.white}
          >
            WHY OPT FOR TAKCOOLING TO ADDRESS YOUR COOLING DEVICE ISSUES?
          </Typography>

          <Grid
            container
            width={"80%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid xs={11} sm={8} md={5} m={2} color={colors.white}>
              <Icon
                icon="mdi:performance"
                width={40}
                color={colors.text}
              />
              <Typography variant="h6" fontWeight={"bold"} mt={1} mb={1}>
                Expertise Across the Board:
              </Typography>
              <Typography variant="body2">
                TakCooling boasts a team of highly skilled technicians with
                extensive experience in installing, repairing, and selling a
                wide range of cooling devices.
              </Typography>
            </Grid>
            <Grid xs={11} sm={8} md={5} m={2} color={colors.white}>
              <Icon
                icon="fluent-mdl2:product-variant"
                width={40}
                color={colors.text}
              />
              <Typography variant="h6" fontWeight={"bold"} mt={1} mb={1}>
                Quality Products:
              </Typography>
              <Typography variant="body2">
                We offer top-quality cooling devices sourced from reputable
                manufacturers. Whether you're in the market for a new air
                conditioner, refrigerator, or cold room, you can trust that
                TakCooling provides only the best products that are built to
                last.{" "}
              </Typography>
            </Grid>
            <Grid xs={11} sm={8} md={5} m={2} color={colors.white}>
              <Icon
                icon="carbon:service-id"
                width={40}
                color={colors.text}
              />
              <Typography variant="h6" fontWeight={"bold"} mt={1} mb={1}>
                Prompt and Reliable Service:
              </Typography>
              <Typography variant="body2">
                At TakCooling, we understand the inconvenience that comes with a
                malfunctioning cooling device. That's why we prioritize prompt
                and reliable service to ensure minimal disruption to your home
                or business{" "}
              </Typography>
            </Grid>
            <Grid xs={11} sm={8} md={5} m={2} color={colors.white}>
              <Icon
                icon="streamline:information-desk-customer"
                width={40}
                color={colors.text}
              />
              <Typography variant="h6" fontWeight={"bold"} mt={1} mb={1}>
                Customer Satisfaction Guaranteed:
              </Typography>
              <Typography variant="body2">
                Customer satisfaction is our top priority at TakCooling. We take
                pride in providing exceptional service and support to every
                client, going above and beyond to meet their needs and exceed
                their expectations.{" "}
              </Typography>
            </Grid>
          </Grid>

          <Spacer />
        </Stack>
      </Box>

      <Box
        ref={child1Ref}
        position={smallScreen ? "relative" : "absolute"}
        width={"100%"}
        display={"flex"}
        justifyContent={"right"}
      >
        <img
          src={img1}
          width={smallScreen ? "100%" : "37%"}
          height={smallScreen ? 350 : "auto"}
          style={{ position: "absolute", zIndex: smallScreen ? 0 : 1 }}
        />
      </Box>
    </Box>
  );
};

export default WhyUs;
