import { Image } from "@chakra-ui/react";


const getMaxWidthByAlign = (align) => {
    switch (align) {
        case "wide":
            return "auto";
        case "full":
            return "100vw";
        default: 
            return "auto";
    }
}

const Img = ({ url, alt, align, ...rest }) => {

    const maxWidth = getMaxWidthByAlign(align);
    return <Image w='100%' src={url} alt={alt} maxWidth={maxWidth} />
}

export default Img;