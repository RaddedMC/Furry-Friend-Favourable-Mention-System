
const vectorDistance = (x,y) =>{
    return Math.sqrt(x.reduce((acc, val, i) => acc + Math.pow(val - y[i], 2), 0));

}

module.exports = vectorDistance