import { Box, createTheme, styled } from "@mui/material";

export const colors = {
    primary : 'rgb(5, 6, 43)',
    secondary : '#f71735',
    backgroundColor: '#0b0c26',
    white : '#fff'
};

export const RedLine = styled(Box)({
    width : 50,
    height : 5,
    backgroundColor : 'red'
})

const theme = createTheme({
    palette : {
        primary : {
            main : colors.primary
        },
        secondary : {
            main : colors.secondary
        }
    },
    components : {
        MuiButton : {
            defaultProps : {
                disableElevation : true
            }
        }
    }
});

export default theme;