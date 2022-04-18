import { Button } from "@chakra-ui/react";

const Btn = (props) => {
    const { text, className, isFullwidth, size = 'lg' } = props;

    const variant = className === "is-style-outline" ? "outline" : "solid";

    return <Button colorScheme='blue' variant={variant} size={size}>{text}</Button>;
};

export default Btn;
