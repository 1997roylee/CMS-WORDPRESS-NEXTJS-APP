import { HStack } from "@chakra-ui/react"

const Row = (props) => {
    console.log("rows", props);
    const { backgroundColor, children } = props;
    return <HStack backgroundColor={backgroundColor}>
        {children}
    </HStack>
}

export default Row;