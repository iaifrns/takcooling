import { Avatar, Box, Card, CardContent, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import { RedLine, colors } from "../../styles/theme"
import { Icon } from "@iconify/react/dist/iconify.js"

const Testimony = ({ message, name, title, img, smallScreen }: {
    message: string,
    name: string,
    title: string,
    img: string,
    smallScreen : boolean
}) => {

    const style = {
        width: smallScreen ? '100%' : '30%',
        border: '1px solid lightgray',
        boxShadow: 16,
        '&:hover': {
            padding: 1
        },
        borderBottom: '2px solid red'
    }

    return (
        <>
            <Card sx={style}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 3 }}>
                    <Typography variant="body2" mt={4}>
                        {message}
                    </Typography>
                    <Stack direction={'row'} alignItems={'center'} gap={2} mt={4} mb={2}>
                        <Avatar alt="Remy Sharp" src={img} sx={{ width: 68, height: 68 }} />
                        <Box display={'flex'} flexDirection={'column'}>
                            <Typography fontWeight={'bold'}>{name}</Typography>
                            <Typography>{title}</Typography>
                            <Box display={'flex'}>
                                <Icon icon="openmoji:star" />
                                <Icon icon="openmoji:star" />
                                <Icon icon="openmoji:star" />
                                <Icon icon="openmoji:star" />
                                <Icon icon="openmoji:star" />
                            </Box>
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </>
    )
}

const Testimonies = () => {

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Stack direction={'column'} p={2} justifyContent={'center'} alignItems={'center'} gap={4}>

            <Typography fontWeight={'bold'} color={colors.secondary}>TESTIMONIALS</Typography>
            <Typography variant="h4" fontWeight={'bold'} textAlign={'center'}>Happy With <br /> Customers & Clients</Typography>
            <RedLine />

            <Stack direction={smallScreen ? 'column' : 'row'} width={'80%'} justifyContent={'center'} alignItems={'center'} gap={2}>
                <Testimony
                    message="Takcooling provided fast and professional service when our air conditioner broke down. Within hours, they had it up and running again. Highly recommended"
                    title="Business man"
                    img="https://images.pexels.com/photos/20157089/pexels-photo-20157089/free-photo-of-man-sitting-on-ground.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    name="John Smith"
                    smallScreen ={smallScreen}
                />
                <Testimony
                    message="Takcooling consistently delivers quality repairs for our refrigeration units. Their team is knowledgeable, and their service is reliable and good."
                    title="Business woman"
                    img="https://images.pexels.com/photos/20186047/pexels-photo-20186047/free-photo-of-woman-in-sweater-and-boots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    name="Tony Ornella"
                    smallScreen ={smallScreen}
                />
                <Testimony
                    message="Takcooling's customer support is excellent. They're always available to answer questions and provide solutions. Great company to work with!"
                    title="House keeper"
                    img="https://images.pexels.com/photos/14692154/pexels-photo-14692154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    name="Alena Due"
                    smallScreen ={smallScreen}
                />
            </Stack>
        </Stack>
    )

}

export default Testimonies