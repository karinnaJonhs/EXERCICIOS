const defaultCompare = (e1, e2) => e1 === e2
const defaultExtractKey = e => e

function keepFirstRepeatedOnly(arr, compare = defaultCompare, extractKey = defaultExtractKey){
    const countMap = countOccurrences(arr, extractKey)
    return [...countMap.entries()]
    .reduce((acc, [key, count]) => count > 1
    ? acc.concat(arr.find(e => extractKey(e) === key))
    : acc, [])
}

function countOccurrences(arr, extractKey){
    return arr
    .reduce((acc, elem) => {
        const key = extractKey(elem);
        return new Map([
            ...acc,
            [key, (acc.get(key) ?? 0) + 1]
        ])
    }, new Map())
}