import { VStack } from "@chakra-ui/react";
import { getChildByType } from '../../../utils/children';

const Feature = (props) => {
    const { children } = props;

    const FeaturedImage = getChildByType("Core/Image", children);
    const Title = getChildByType("Core/Heading", children);
    const Text = getChildByType("Core/Paragraph", children);

    return <VStack>
        {FeaturedImage}
        {Title}
        {Text}
    </VStack>
}

export default Feature;