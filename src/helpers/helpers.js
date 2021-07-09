export const checkNull = (value) => {
    if (value === null) {
        return '-'
    } else {
        return value
    }
}
export const checkMaxLengthValue = (value, parent, key, fields) => {
    let addPoint = false
    let newValue = value
    if (+value > 0) {
        let maxLength = null
        fields[parent].forEach((item) => {
            if (item.key === key) {
                maxLength = item.maxlength
            }
        })
        newValue = Math.round(+newValue)
        if (maxLength && newValue.toString().length > maxLength) {
            newValue = +newValue.toString().slice(0, maxLength)
            addPoint = true
            console.log(parent, key, maxLength, 'Value - ', value, 'NewValue -', newValue)
        }
    }
    return {
        newValue,
        addPoint
    }
}
export const partitioningValue = (value, addPoint) => {
    if (+value) {
        if (value >= 1000) {
            let newValue = Math.round(value)
            let decimal = Math.abs(value - newValue) * 100
            let massive = newValue.toString().split('').reverse()
            let newMassive = [], numberDigits = 2
            for (let i = 0; i < massive.length; i++) {
                newMassive.push(massive[i])
                if (i === numberDigits) {
                    numberDigits += 3
                    newMassive.push(' ')
                }
            }
            newMassive = newMassive.reverse().join('').trim()

            return !decimal ?
                addPoint ? newMassive +'...': newMassive:
                newMassive + '.' + Math.round(decimal)
        }
        return addPoint ? value +'...': value
    } else {
        return addPoint ? value +'...': value
    }
}