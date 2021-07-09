export const checkNull = (value) => {
    if (value === null) {
        return '-'
    } else {
        return value
    }
}

export const checkMaxLengthValue = (value, parent, key, columns) => {
    let addPoint = false
    let newValue = value
    if (+value > 0) {
        let maxLength = null
        columns.forEach((column) => {
            if (column.key === parent) {
                column.subColumns.forEach((item) => {
                    if (item.key === key) {
                        maxLength = item.maxlength
                    }
                })
            }

        })
        newValue = Math.round(+newValue)
        if (maxLength && newValue.toString().length > maxLength) {
            newValue = +newValue.toString().slice(0, maxLength)
            addPoint = true
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
                addPoint ? newMassive + '...' : newMassive :
                newMassive + '.' + Math.round(decimal)
        }
        return addPoint ? value + '...' : value
    } else {
        return addPoint ? value + '...' : value
    }
}