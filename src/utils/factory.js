// src/utils/factory.js
import html2React from "./html2React";



function createFactory(blocks, options) {
  const { parentIndex } = options;

  return blocks.map((block, blockIndex) => {
    const key = `Block_${parentIndex || 0}_${blockIndex}_${block.name}`;
    let children = [];

    if (block.innerBlocks.length > 0)
      children = createFactory(block.innerBlocks, { parentIndex: blockIndex });

    // console.log(children, block.name);
    return html2React(block)({ children, key });
  });
}


export default function factory(blocks = []) {
  if (Array.isArray(blocks) === false) return [];

  return createFactory(blocks, { parentIndex: 0 });
}
