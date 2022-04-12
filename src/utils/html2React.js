// src/utils/html2React.js
import parse from "html-react-parser";
import dynamic from "next/dynamic";

export default function html2React(block) {
//   console.log(123, block.name);
  const name = block.name
    .split("/")
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
    .join("/");

  const WrapperComponent = dynamic(() =>
    import(`../components/Wordpress/${name}`)
  );

  return ({ children, key, id }) => {
    if (WrapperComponent) {
      const attributes = {
        content: block.attributes.content && parse(block.attributes.content),
      };
      return (
        <WrapperComponent
          {...attributes}
          {...{ displayName: name, key, id, children }}
        />
      );
    }

    return <></>;
  };
}
