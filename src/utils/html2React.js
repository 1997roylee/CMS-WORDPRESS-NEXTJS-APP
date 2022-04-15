// src/utils/html2React.js
import parse from "html-react-parser";
import dynamic from "next/dynamic";
import toCSSObject from "./toCssObject";

export default function html2React(block) {
  //   console.log(123, block.name);
  const name = block.name
    .split("/")
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
    .join("/");

  const WrapperComponent = dynamic(() =>
    import(`../components/Wordpress/${name}`)
  );

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
        content: block.attributes.content && parse(block.attributes.content),
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
