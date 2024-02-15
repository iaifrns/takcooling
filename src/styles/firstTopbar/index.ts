import { Box, IconButton, styled } from "@mui/material";
import { colors } from "../theme";

export const TopBarContainer = styled(Box)(()=> ({
    display : 'flex'
}))

export const LeftBox = styled(Box)(() => ({
    backgroundColor : colors.secondary,
    color : colors.white,
    flex : 2,
    alignItems : "center",
    justifyContent: 'right',
    padding : 8
}));

export const RightBox = styled(Box)(()=> ({
    display : 'flex',
    flex : 4,
    backgroundColor : colors.backgroundColor,
    justifyContent: 'center',
    alignItems : 'center',
}));

export const RightBoxContent = styled(Box)(()=>({
    display : 'flex',
    alignItems: 'center',
    flex : 1,
    justifyContent : 'center',
    cursor : 'pointer',
    padding : '0px 16px',
    '&:hover' : {
        color : colors.secondary
    }
}));

export const TopBarIconButton = styled(IconButton)(()=>({
    margin : '8px',
    color : colors.white,
    '&:hover' : {
        color : colors.secondary
    }
}))