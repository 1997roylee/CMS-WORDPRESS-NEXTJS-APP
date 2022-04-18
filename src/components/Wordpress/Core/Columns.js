import { Flex } from "@chakra-ui/react";

const Columns = (props) => {
    // console.log("columns", props);
    const {children} = props;
        return <Flex>
            {children}
        </Flex>
}

export default Columns;