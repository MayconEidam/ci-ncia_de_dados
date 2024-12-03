const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(docuent.body)
    return bodyStyles.getPropertyValue(variavel)
};

const tickConfig = {
    color: getCSS('--primary-color'),
    size: 15,
    family: getCSS('--font')
}
export{ getCSS, tickConfig}