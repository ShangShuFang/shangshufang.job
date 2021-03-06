let log4js = require('log4js');

log4js.configure({
  appenders: {
    ruleConsole: {type: 'console'},
    ruleFile: {
      type: 'dateFile',
      filename: '../shangshufang.job.logs/info',
      pattern: 'yyyy-MM-dd.log',
      maxLogSize: 10 * 1000 * 1000,
      numBackups: 3,
      alwaysIncludePattern: true
    }
  },
  categories: {
    default: {appenders: ['ruleConsole', 'ruleFile'], level: 'info'}
  }
});

exports.getLogger = function (name) {
  let logger = log4js.getLogger(name);
  return logger;
};
