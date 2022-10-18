const igual = (ele1, ele2) => ele1 === ele2
const a = e => e

function removeRepeatedKeepNone(array, compare = igual, extractKey = a) {
    const extraxtKey = new Map()


    array.forEach(number => {

        if (!extraxtKey.has(extractKey(number))) {
            extraxtKey.set(extractKey(number), 1)
        } else {
            extraxtKey.set(extractKey(number), extraxtKey.get(extractKey(number)) + 1)
        }
    })

    console.log(extraxtKey)

    let arraySemRepeticoes = []

    for (let chave of extraxtKey.keys()) {
        if (Number(extraxtKey.get(chave)) === 1) {
            arraySemRepeticoes.push(array.find(e => extractKey(e) === chave))
        }
    }

    return arraySemRepeticoes

}

//Noa funciona com string

console.log(
    removeRepeatedKeepNone(
        [
            { name: "a" },
            { name: "ab" },
            { name: "a" },
        ]
    ),
)
console.log(
    removeRepeatedKeepNone(
        [
            { name: "a" },
            { name: "ab" },
            { name: "a" },
        ],
        (e1, e2) => e1.name === e2.name,
        e => e.name
    ),
)