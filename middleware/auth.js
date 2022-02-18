const logger = (req, res, next) => {
    console.log(`❖ Visiting this endPoint: ${req.path} with the method: ${req.method} ⌘`);
    next();
}

module.exports = logger;
