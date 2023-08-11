const path = require('path');

function setPath(filePath) {
    return path.join(path.dirname(require.main.filename), filePath)
}

module.exports = setPath;