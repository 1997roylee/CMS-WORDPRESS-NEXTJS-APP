export default function decodeImage(string) {
    if (!string) return {};

    try {
        return JSON.parse(decodeURI(string));
    } catch (error) {
        return {};
    }
}
