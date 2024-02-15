import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { BannerContainer, BannerContent } from "../../styles/banner";
import { colors } from "../../styles/theme";

const Banner = () => {

    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer match={match}>
            <BannerContent match={match}>
                <Box
                    sx={{
                        width: match ? '100%' : '80%'
                    }}
                >

                    <Typography variant="body2" color={colors.white} sx={{ display: { xs: 'none', sm: 'block' } }} fontWeight={'bold'} textAlign={!match ? 'left' : 'center'}>
                        GREAT EXPERIENCE
                    </Typography>
                    <Typography variant={match ? "h4" : "h2"} color={'secondary'} fontWeight={'bold'} textAlign={match ? 'center' : 'left'}>
                        We Provide Financial Planning
                    </Typography>
                    <Typography textAlign={'center'} variant="body1" sx={{ display: { xs: 'none', sm: 'block' } }} color={'primary'} >
                        Create a refreshing customer experience that's free of convexity and confusion
                    </Typography>
                    <Stack
                        direction={'row'}
                        justifyContent={match ? 'center' : 'left'}
                    >
                        <Button variant="outlined" sx={{
                            margin: '24px 8px',
                            '&:hover': {
                                backgroundColor: colors.primary,
                                color: colors.white
                            }
                        }}>OUR SERVICES</Button>
                        <Button variant="contained" color="secondary" sx={{
                            margin: '24px 8px',
                            '&:hover': {
                                backgroundColor: colors.primary,
                                color: colors.white
                            }
                        }}>CONTACT US</Button>


                    </Stack>
                </Box>

            </BannerContent>
        </BannerContainer>
    )
};

export default Banner;