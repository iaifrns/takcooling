import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { InfoContainer, TrustContainer } from "../../styles/trustUS";
import { RedLine, colors } from "../../styles/theme";
import { Spacer } from "../common/spacer";
import { Icon } from "@iconify/react/dist/iconify.js";

const TrustUs = () => {

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <TrustContainer direction={'column'}>
            <Spacer />

            <Typography color={colors.secondary} fontWeight={'bold'}>WHY PEOPLE CHOOSE US</Typography>
            <Typography variant="h4" fontWeight={'bold'} textAlign={'center'}>Teamwork And Intelligence <br /> Win Championships.</Typography>
            <RedLine />

            <Stack direction={ smallScreen ? 'column' : 'row'} width={'80%'}>
                <InfoContainer>
                    <Icon icon="akar-icons:light-bulb" width={60} color={colors.text} />
                    <Typography variant="h2" fontWeight={'bold'}>98%</Typography>
                    <Typography fontWeight={'bold'}>Casses solved</Typography>
                </InfoContainer>
                <InfoContainer>
                    <Icon icon="ph:projector-screen-chart-light" width={60} color={colors.text} />
                    <Typography variant="h2"  fontWeight={'bold'}>252</Typography>
                    <Typography fontWeight={'bold'}>Projects</Typography>
                </InfoContainer>
                <InfoContainer>
                    <Icon icon="streamline:happy-face" width={60} color={colors.text} />
                    <Typography variant="h2" fontWeight={'bold'}>99%</Typography>
                    <Typography fontWeight={'bold'}>Happy Clients</Typography>
                </InfoContainer>
                <InfoContainer>
                    <Icon icon="game-icons:profit" width={60} color={colors.text} />
                    <Typography variant="h2" fontWeight={'bold'}>94%</Typography>
                    <Typography fontWeight={'bold'}>Yearly Profit</Typography>
                </InfoContainer>
            </Stack>

            <Spacer />
        </TrustContainer>
    )
}

export default TrustUs;