const winston = require('winston');

const logger = winston.createLogger({
    levels: winston.config.syslog.levels,
    transports: [
        new winston.transports.File({
            filename: 'combined.log'
        })
    ]
});

module.exports = logger