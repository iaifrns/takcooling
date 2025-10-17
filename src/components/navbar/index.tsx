import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/Subject.png';
import { colors } from "../../styles/theme";
import { Link } from "../common/link";

const Navbar = ({
  aboutScroll,
  serviceScroll,
  testimonyScroll,
}: {
  aboutScroll: () => void;
  serviceScroll: () => void;
  testimonyScroll: () => void;
}) => {
  const style = {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: colors.text,
      color: colors.white,
    },
  };

  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ backgroundColor: "white", p: 2 }}>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          width={"100%"}
          alignItems={"center"}
          color={"black"}
        >
          <Box display={"flex"} flex={2} justifyContent={"center"}>
            <img src={logo} alt={logo} width={'150px'} />
          </Box>
          <Box
            sx={{ display: { sm: "none", md: "flex", xs: "none" } }}
            flex={4}
            justifyContent={"space-evenly"}
          >
            <Link onClick={() => navigateTo("/")}>HOME</Link>
            <Link onClick={aboutScroll}>ABOUT</Link>
            <Link onClick={serviceScroll}>SERVICES</Link>
            <Link onClick={testimonyScroll}>Testimonies</Link>
            <Link onClick={() => navigateTo("/contact_us")}>CONTACT US</Link>
          </Box>
          <Box
            sx={{ display: { sm: "none", md: "flex", xs: "none" } }}
            flex={2}
            justifyContent={"center"}
            onClick={() => navigateTo("/contact_us")}
          >
            <Typography variant="body2" p={1} border={1} sx={style}>
              CONTACT US NOW!
            </Typography>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
