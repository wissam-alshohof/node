let count = 1;
function log(...params) {
    if(!params.length) return console.log('');
    params.forEach((param,ind) => ind == 0 ? console.log(count,': ',param): console.log('     '+param))
    count++;
}

module.exports = log;