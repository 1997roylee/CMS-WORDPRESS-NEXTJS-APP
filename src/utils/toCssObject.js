export default function toCSSObject(attributes = {}) {
    const {
        customBackgroundColor,
        backgroundOverlay,
        backgroundPosition,
        backgroundRepeat,
        backgroundType,
        align,
        fontWeight,
    } = attributes;

    return {
        backgroundColor: customBackgroundColor,
    };
}
