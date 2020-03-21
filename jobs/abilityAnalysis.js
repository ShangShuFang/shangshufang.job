let commonService = require('../service/commonService');
let logUtility = require('../common/logger');

exports.run = function () {
  let logger = logUtility.getLogger('abilityAnalysis');
  logger.info('start analysis...');
  let service = new commonService.commonInvoke('abilityAnalysis');
  service.create(null, (result) => {
    if(result.err){
      logger.error(`analysis failed./n code: ${result.code}./n msg: ${result.msg}`);
    }else{
      logger.info(`analysis success. affect count: ${result.content.affectCount}`);
    }
  });
};