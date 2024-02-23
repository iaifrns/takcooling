import { Box, styled } from "@mui/material";
import img from '../../assets/man-with-ac.jpg'

const image = 'https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

export const BannerContainer = styled(Box)(({match} : {match:boolean})=>({
    backgroundImage : `url("${img}")`,
    backgroundSize: 'cover',
    display : 'flex',
    height : match ? '45vh' : '85vh',
    width : '100%',
    justifyContent : 'right',
    alignItems : 'center',
}));

export const OtherBannerContainer = styled(Box)(()=>({
    backgroundImage : `url("${image}")`,
    backgroundSize: 'cover',
    backgroundRepeat : 'no-repeat',
    backgroundPosition : 'center',
    display : 'flex',
    height : '35vh',
    width : '100%',
    justifyContent : 'right',
    alignItems : 'center',
}));

export const BannerContent = styled(Box)(({match} : {match:boolean})=>({
    padding :  '16px',
    width : match ? '100%' : '50%'
}));