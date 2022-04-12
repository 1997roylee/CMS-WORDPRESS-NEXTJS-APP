import { Box } from "@chakra-ui/react"

const Column = (props) => {
    const {children} = props;
    return <Box w='full'>
        {children}
    </Box>
}

export default Column;