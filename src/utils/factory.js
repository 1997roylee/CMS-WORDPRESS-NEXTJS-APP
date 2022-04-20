// src/utils/factory.js
import html2React from './html2React';

function createFactory(blocks, options) {
    const { parentIndex, payloads } = options;

    return blocks.map((block, blockIndex) => {
        const key = `Block_${parentIndex || 0}_${blockIndex}_${block.name}`;
        let children = [];

        if (block.innerBlocks.length > 0)
            children = createFactory(block.innerBlocks, {
                payloads,
                parentIndex: blockIndex,
            });

        return html2React(block, payloads)({ children, key });
    });
}

export default function factory(blocks = [], payloads = {}) {
    if (Array.isArray(blocks) === false) return [];

    return createFactory(blocks, { parentIndex: 0, payloads });
}
