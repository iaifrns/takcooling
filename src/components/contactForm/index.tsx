import {
  Avatar,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { colors } from "../../styles/theme";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Spacer } from "../common/spacer";

export const ContactForm = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
      <CompanyInfo match={match} />
      <Spacer />
      <Form match={match} />
    </Stack>
  );
};

const CompanyInfo = ({ match }: { match: boolean }) => {
  return (
    <Stack
      direction={match ? "column" : "row"}
      width={"80%"}
      justifyContent={"space-between"}
      alignItems={match ? "center" : "start"}
      gap={2}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
      >
        <Avatar sx={{ bgcolor: colors.secondary }}>
          <Icon icon="subway:location" />
        </Avatar>
        <Typography textAlign={"center"}>
          London Postcode Se15 6rs <br /> Rue 149 glengall road
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
      >
        <Avatar sx={{ bgcolor: colors.secondary }}>
          <Icon icon="majesticons:phone" />
        </Avatar>
        <Typography> Phone: 00447877020977</Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
      >
        <Avatar sx={{ bgcolor: colors.secondary }}>
          <Icon icon="clarity:email-solid" />
        </Avatar>
        <Typography>Email : takcooling@gmail.com</Typography>
      </Box>
    </Stack>
  );
};

const Form = ({ match }: { match: boolean }) => {
  return (
    <Stack
      direction={match ? "column" : "row"}
      width={"80%"}
      boxShadow={match ? 0 : 1}
      border={match ? 0 : "1px solid lightgray"}
    >
      <Stack
        direction={"column"}
        width={match ? "100%" : "60%"}
        bgcolor={colors.white}
        p={match ? 0 : 4}
        gap={5}
      >
        <Typography variant="h4" display={match ? "none" : "block"}>
          Contact Us
        </Typography>
        <Stack
          direction={match ? "column" : "row"}
          gap={match ? 4 : 1}
          width={"100%"}
        >
          <Box width={match ? "100%" : "50%"}>
            <Typography variant="body2" fontWeight={"bold"}>
              FULL NAME
            </Typography>
            <TextField placeholder="Name" fullWidth variant="standard" />
          </Box>
          <Box width={match ? "100%" : "50%"}>
            <Typography variant="body2" fontWeight={"bold"}>
              EMAIL ADDRESS
            </Typography>
            <TextField placeholder="Email" variant="standard" fullWidth />
          </Box>
        </Stack>
        <Box width={"100%"}>
          <Typography variant="body2" fontWeight={"bold"}>
            SUBJECT
          </Typography>
          <TextField placeholder="Subject" variant="standard" fullWidth />
        </Box>
        <Box width={"100%"}>
          <Typography variant="body2" fontWeight={"bold"}>
            MESSAGE
          </Typography>
          <TextField
            placeholder="Message"
            variant="standard"
            fullWidth
            multiline
            rows={4}
          />
        </Box>
        <Box width={"100%"}>
          <Button variant="contained">Send Message</Button>
        </Box>
      </Stack>
      <Stack
        display={match ? "none" : "flex"}
        direction={"column"}
        width={"40%"}
      >
        <img
          src="https://images.pexels.com/photos/7658355/pexels-photo-7658355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height={"100%"}
          style={{
            objectFit: "cover",
          }}
        />
      </Stack>
    </Stack>
  );
};
