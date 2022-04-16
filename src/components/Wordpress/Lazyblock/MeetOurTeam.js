import { Box, HStack } from "@chakra-ui/react"

const MeetOurTeam = (props) => {
    console.log(props)
    const {children} = props;
    return <Box bg='#f1f1f1'>
        <HStack>
        {children}
    </HStack>
    </Box>
}

export default MeetOurTeam;