
const getstoragedata = () => {
    const items = localStorage.getItem('key');
    if (items) {
        return JSON.parse(items)
    }
    return []
}

export default getstoragedata


