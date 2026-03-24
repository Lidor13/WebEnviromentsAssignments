function getDogIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function formatBoolean(value) {
    if (value === true) return "Yes";
    if (value === false) return "No";
    if (value === null || value === undefined) return "Unknown";
    return value;
}
