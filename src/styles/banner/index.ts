import { Box, styled } from "@mui/material";
import img from '../../assets/man-with-ac.jpg'

export const BannerContainer = styled(Box)(({match} : {match:boolean})=>({
    backgroundImage : `url("${img}")`,
    backgroundSize: 'cover',
    display : 'flex',
    height : match ? '45vh' : '85vh',
    width : '100%',
    justifyContent : 'right',
    alignItems : 'center',
}));

export const BannerContent = styled(Box)(({match} : {match:boolean})=>({
    padding :  '16px',
    width : match ? '100%' : '50%'
}));