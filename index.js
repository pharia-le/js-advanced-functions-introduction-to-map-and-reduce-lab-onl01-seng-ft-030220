const mapToNegativize = (arr) => {
    return arr.map(x => x*(-1))
}

const mapToNoChange = (arr) => {
    return arr
}

const mapToDouble = (arr) => {
    return arr.map(x => x*2)
}

const mapToSquare = (arr) => {
    return arr.map(x => x*x)
}

const reduceToTotal = (arr,memo=0) => {
    return arr.reduce((x,y) => x+y,memo)
}

const reduceToAllTrue = (arr) => {
    for (const ele of arr) {
        if (!!ele === false) {
            return false
        }
    }
    return true
}
// arr.reduce(callback( accumulator, currentValue[, index[, array]] ))
const reduceToAnyTrue = (arr) => {
    for (const ele of arr) {
        if (!!ele) {
            return true
        }
    }
    return false
}