import { Box } from "@chakra-ui/react"

const Column = (props) => {
    // console.log(props);
    const { children } = props;
    return <Box>
        {children}
    </Box>
}

export default Column