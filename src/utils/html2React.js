// src/utils/html2React.js
import parse from 'html-react-parser';
import dynamic from 'next/dynamic';
import toCSSObject from './toCssObject';

const upperFirstCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const convertBlockName2ComponentName = (blockName) => {
    return blockName.split('-').map((word) => {
        return upperFirstCase(word);
    }).join("");
};

export default function html2React(block, payloads = {}) {
    const name = block.name
        .split('/')
        .map((name) => convertBlockName2ComponentName(name))
        .join('/');

    let WrapperComponent = null;

    if (Object.hasOwnProperty.call(payloads, name))
        WrapperComponent = payloads[name];
    else
        WrapperComponent = dynamic(() =>
            import(`../components/Wordpress/${name}`)
        );
    // const WrapperComponent = import(`../components/Wordpress/${name}`)
    // console.log(WrapperComponent);
    // eslint-disable-next-line react/display-name
    return ({ children, key, id }) => {
        if (WrapperComponent) {
            const attributes = {
                ...block.attributes,
                url: block.attributes.url,
                alt: block.attributes.alt,
                title: block.attributes.title,
                align: block.attributes.align,
                contentAlign: block.attributes.contentAlign,
                content:
                    block.attributes.content && parse(block.attributes.content),
                ...toCSSObject(block.attributes),
            };

            return (
                <WrapperComponent
                    {...attributes}
                    {...{ displayname: name, key, id, children }}
                />
            );
        }

        return <></>;
    };
}
