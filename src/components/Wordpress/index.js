import dynamic from 'next/dynamic';

const dynamicLoad = (module, name) => {
    return dynamic(module.then(module => module[name]));
}

export const preloadLazyBlockComponents = () => {
    return {
        "Lazyblock/Sales": dynamicLoad(import("./Lazyblock"), 'Sales'),
        "Lazyblock/Hero": dynamicLoad(import("./Lazyblock"), 'Hero'),
        "Lazyblock/CustomerStoryItem": dynamicLoad(import('./Lazyblock'), 'CustomerStoryItem'),
        "Lazyblock/HeroImage": dynamicLoad(import('./Lazyblock'), 'HeroImage'),
        "Lazyblock/WhatWeSay": dynamicLoad(import('./Lazyblock'), 'WhatWeSay'),
        "Lazyblock/Editor": dynamicLoad(import('./Lazyblock'), 'Editor'),
        "Lazyblock/Features": dynamicLoad(import('./Lazyblock'), 'Features'),
        "Lazyblock/FeatureItem": dynamicLoad(import('./Lazyblock'), 'FeatureItem'),
    }
}