// src/utils/factory.js
import html2React from "./html2React";

export default function factory(blocks = []) {
  if (Array.isArray(blocks) === false) return <></>;

  const mapInnerBlocks = (innerBlock, innerBlockIndex) => {
    const key = `Inner_Block_${innerBlockIndex.name}_${innerBlockIndex}`;
    return html2React(innerBlock)({ key });
  };

  return blocks.map((block, blockIndex) => {
    const key = `Block_${blockIndex}`;
    let children = [];

    if (block.innerBlocks.length > 0)
      children = block.innerBlocks.map(mapInnerBlocks);

    console.log(children, block.name);
    return html2React(block)({ children, key });
  });
}
