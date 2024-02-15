import { Card, CardActionArea, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from "@mui/material"
import { colors } from "../../styles/theme"

export const Service = ({ img, title, description }:
    {
        img: string,
        title: string,
        description: string
    }) => {

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const style = {
        maxWidth: smallScreen ? '85%' : '25%',
        '&:hover': {
            backgroundColor: colors.secondary,
            color: colors.white
        }
    }

    return (
        <Card sx={style}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" fontWeight={'bold'} component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}