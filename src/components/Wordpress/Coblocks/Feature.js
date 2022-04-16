import { VStack } from "@chakra-ui/react";
import { getChildByType } from '../../../utils/children';
import {cloneElement} from '../../../utils/children';

const Feature = (props) => {
    const { children } = props;

    const FeaturedImage = getChildByType("Core/Image", children);
    const Title = getChildByType("Core/Heading", children);
    const Text = cloneElement(getChildByType("Core/Paragraph", children), {
        textAlign: 'center'
    })

    return <VStack>
        {FeaturedImage}
        {Title}
        {Text}
    </VStack>
}

export default Feature;