import { Box, Image, Text } from "@chakra-ui/react";

const CustomerStoryItem = (props) => {

    console.log(props);
    const companyName = props['company-name']
    return <Box>
        <Image src=''/>
        <Text>
            {companyName}
        </Text>
    </Box>
}

export default CustomerStoryItem;