import { Box, createTheme, styled } from "@mui/material";

export const colors = {
    primary : 'rgb(6, 8, 97)',
    secondary : 'rgb(77, 77, 253)',
    backgroundColor: '#0b0c26',
    backgroundColorBluer: 'rgb(0, 0, 43,0.2)',
    white : '#fff',
    text: '#ff751f'
};

export const RedLine = styled(Box)({
    width : 50,
    height : 5,
    backgroundColor : colors.text
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