import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Stack, Typography } from "@mui/material";
import { colors } from "../../styles/theme";
import { OtherBannerContainer } from "../../styles/banner";

export const OtherBanner = ({ pageName }: { pageName: string }) => {
  return (
    <OtherBannerContainer>
      <Box width={'100%'} height={'100%'} color={colors.white} display={'flex'} sx={{backgroundImage : `linear-gradient(to right, ${colors.primary}, rgb(5, 6, 43,0.6))`}} justifyContent={'center'} alignItems={'center'}>
        <Stack direction={"column"} gap={1} width={"70%"}>
          <Typography variant="h4" fontWeight={"bold"}>
            {pageName}
          </Typography>
          <Stack direction={"row"} gap={1} alignItems={"center"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              sx={{ "&:hover": { color: colors.secondary } }}
            >
              <Icon
                icon="ant-design:home-outlined"
                style={{ margin: 4 }}
                width={18}
              />
              <Typography fontWeight={"bold"}>Home</Typography>
            </Box>
            <Box height={20} width={2} bgcolor={colors.white}></Box>
            <Typography color={colors.secondary} fontWeight={"bold"}>
              {pageName}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </OtherBannerContainer>
  );
};
