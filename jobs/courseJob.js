let commonService = require('../service/commonService');
let logUtility = require('../common/logger');

exports.startCourse = function () {
  let logger = logUtility.getLogger('startCourse');
  logger.info('start course...');
  let service = new commonService.commonInvoke('startCourse');
  service.change(null, (result) => {
    if(result.err){
      logger.info(`start course failed./n code: ${result.code}./n msg: ${result.msg}`);
    }else{
      logger.info(`start course success. affect count: ${result.content.affectCount}`);
    }
  });
};