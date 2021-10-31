export const formatValue = (value) => {
    let resultVal;
    if(value === -0) {
        resultVal = 0
    } else {
        resultVal = value
    }

    return resultVal
}