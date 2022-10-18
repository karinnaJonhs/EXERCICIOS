let sopa = ["arroz", "suamae", "oi"]


function capitalismo(str) {
    let n = []
    for (let i = 0; i < str.length; i++) {
        n.push(str[i][0].toUpperCase() + str[i].substr(1))
    }
    return n.join("")
}

console.log(capitalismo(sopa))