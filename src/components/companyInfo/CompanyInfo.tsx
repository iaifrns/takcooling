import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Spacer } from "../common/spacer";
import { Icon } from "@iconify/react/dist/iconify.js";
import { colors } from "../../styles/theme";

const CompanyInfo = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={8}
      bgcolor={"rgba(0,0,0,0.1)"}
    >
      <Spacer />
      <Typography variant="h3" fontWeight={"bold"}>
        Takcooling
      </Typography>

      <Stack
        direction={smallScreen ? "column" : "row"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"80%"}
        gap={2}
        borderTop={"1px solid rgba(0,0,0,0.2)"}
        borderBottom={"1px solid rgba(0,0,0,0.2)"}
        pt={4}
        pb={4}
      >
        <Box
          display={"flex"}
          flex={1}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h6" fontWeight={"bold"}>
            Our Address
          </Typography>
          <Typography textAlign={"center"}>London, Postcode Se15 6rs Glengall road</Typography>
        </Box>
        <Box
          display={"flex"}
          flex={1}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h6" fontWeight={"bold"}>
            Talk To Expert
          </Typography>
          <Typography>whatsapp & normal calls +447877020977</Typography>
        </Box>
        <Box
          display={"flex"}
          flex={1}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h6" fontWeight={"bold"}>
            Email Us
          </Typography>
          <Typography>takcooling@gmail.com</Typography>
        </Box>
      </Stack>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: smallScreen ? "85%" : "60%",
          borderRadius: 8,
          mb: 8,
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <Icon icon="line-md:email" />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Your Email Address ....."
          inputProps={{ "aria-label": "Your Email Address" }}
        />
        <IconButton
          type="button"
          sx={{
            p: "10px",
            bgcolor: colors.secondary,
            borderRadius: 0,
            borderEndEndRadius: 18,
            borderTopRightRadius: 18,
            height: "100%",
            width: "25%",
          }}
        >
          <Typography fontWeight={"bold"}>Submit</Typography>
        </IconButton>
      </Paper>
    </Stack>
  );
};

export default CompanyInfo;
