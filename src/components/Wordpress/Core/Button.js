import { Button } from "@chakra-ui/react";

const Btn = (props) => {
    const { text, className, isFullwidth, size = 'lg' } = props;
    // console.log(props, 'btn')
    // const outline = className === "is-style-outline" ? true : false;

    const variant = className === "is-style-outline" ? "outline" : "solid";

    return <Button colorScheme='blue' variant={variant} size={size} isFullwidth={isFullwidth}>{text}</Button>;
};

export default Btn;
