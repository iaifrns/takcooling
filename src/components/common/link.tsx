import { Button, styled } from "@mui/material";
import { colors } from "../../styles/theme";

export const Link = styled(Button)({
    fontWeight : 'bold',
    '&:hover' : {
        color : colors.text,
    }
})