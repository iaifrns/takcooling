import { AppBar, Typography } from "@mui/material";
import { LeftBox, RightBox, RightBoxContent, TopBarContainer, TopBarIconButton } from "../../styles/firstTopbar";
import { email, opening, phoneNumber } from "../../constants";
import { Icon } from '@iconify/react';
import { handleWhatsapp } from "../../pages/homePage";

const FirstTopBar = () => {
    return (
        <AppBar position="static" sx={{
            display: { xs: 'none', sm: 'block' }
        }}>
            <TopBarContainer>
                <LeftBox sx={{ display: { sm: 'none', md: 'flex' } }}>
                    <Icon icon="mdi:clock-outline" />
                    <Typography textAlign={'right'} variant="subtitle2" fontSize={'14px'}>{opening}</Typography>
                </LeftBox>
                <RightBox>
                    <RightBoxContent>
                        <Icon icon="gg:mail" fontSize={'medium'} />
                        <Typography fontSize={'small'} ml={1}>{email}</Typography>
                    </RightBoxContent>
                    <RightBoxContent>
                        <Icon icon="mingcute:phone-fill" fontSize={'medium'} />
                        <Typography fontSize={'small'} ml={1} onClick={handleWhatsapp}>{phoneNumber}</Typography>
                    </RightBoxContent>
                    <RightBoxContent>
                        <TopBarIconButton>
                            <Icon icon="jam:facebook" fontSize={'medium'} />
                        </TopBarIconButton>
                        <TopBarIconButton onClick={handleWhatsapp}>
                            <Icon icon="logos:whatsapp-icon" fontSize={'medium'} />
                        </TopBarIconButton>
                        <TopBarIconButton>
                            <Icon icon="streamline:gmail-solid" fontSize={'medium'} />
                        </TopBarIconButton>
                    </RightBoxContent>
                </RightBox>
                
            </TopBarContainer>
        </AppBar>
    )
}

export default FirstTopBar;