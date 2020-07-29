module.exports = {
    logger: logger, add: add
};
function logger(log) {
    console.log('log me: ', log);
}

module.exports.logger = logger;

function add(x, y) {
    return x + y;
};
