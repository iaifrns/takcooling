import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { RedLine } from "../../styles/theme";
import { Service } from "./service";
import img1 from "../../assets/imgM3.jpg";
import img2 from "../../assets/imageBg1.png";
import img3 from "../../assets/salesconditioners.jpg";
import React from "react";

const Services = ({
  serviceRef,
}: {
  serviceRef: React.RefObject<HTMLDivElement>;
}) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      ref={serviceRef}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
    >
      <Typography color={"secondary"}> OUR SERVICES </Typography>
      <Typography
        variant={smallScreen ? "h5" : "h4"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        What We Are Offering To <br /> Customers
      </Typography>
      <RedLine></RedLine>
      <Stack
        direction={smallScreen ? "column" : "row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        {data.map((item) => (
          <Service
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </Stack>
    </Stack>
  );
};

interface ServiceType {
  img: string;
  title: string;
  description: string;
}

const data: ServiceType[] = [
  {
    img: img2,
    title: "Installation of cold room and air conditioner",
    description:
      "it refers to the process of assembling and arranging a room designed to keep things cold, like food or medicine, and installing the necessary equipment to cool the air within that room",
  },
  {
    img: img1,
    title: "Troubleshooting of refrigerator, air conditioner, and cold room",
    description:
      "refers to the process of identifying and fixing problems or issues that may arise with refrigerators, air conditioners, and cold storage rooms",
  },
  {
    img: img3,
    title: "Sale of refrigerator, air conditioner, and cold room.",
    description:
      "it refers to the business of selling things like refrigerators, freezers, air conditioners, or any other equipment designed to keep things cold",
  },
];

export default Services;
