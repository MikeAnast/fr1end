function parseJwt (token) {
    return JSON.parse(Buffer.from(token.split('.')[0], 'base64').toString());
}

function parseJwtname (token) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

module.exports = {parseJwt, parseJwtname};