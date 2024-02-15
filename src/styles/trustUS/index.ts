import { Stack, styled } from "@mui/material";
import { colors } from "../theme";

export const TrustContainer = styled(Stack)({
    backgroundColor : 'rgba(0,0,0,0.1)',
    justifyContent : 'center',
    alignItems : 'center',
    gap : 24,
})

export const InfoContainer = styled(Stack)({
    justifyContent : 'center',
    alignItems : 'center',
    gap : 16,
    padding : 8,
    border : '1px solid lightgray',
    backgroundColor : colors.white,
    flex : 1,
    paddingTop : 40,
    paddingBottom : 40
})