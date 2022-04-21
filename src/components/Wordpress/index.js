import dynamic from 'next/dynamic';
import { Hero, HeroImage, Sales, WhatWeSay, Features } from './Lazyblock';

const dynamicLoad = (module, name) => {
    return dynamic(module.then((module) => module[name]), { ssr: true });
};


export const preloadLazyBlockComponents = () => {
    return {
        'Lazyblock/Sales': Sales,
        'Lazyblock/Hero': Hero,
        'Lazyblock/HeroImage': HeroImage,
        'Lazyblock/WhatWeSay': WhatWeSay,
        'Lazyblock/Editor': dynamicLoad(import('./Lazyblock'), 'Editor'),
        'Lazyblock/CustomerStoryItem': dynamicLoad(
            import('./Lazyblock'),
            'CustomerStoryItem'
        ),
        'Lazyblock/Features': Features,
        'Lazyblock/FeatureItem': dynamicLoad(import('./Lazyblock'), 'FeatureItem')
    };
};
