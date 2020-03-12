let serviceInvoke = require('../common/serviceInvokeUtils');
let sysConfig = require('../config/sysConfig');
let apiConfig = require('../config/apiConfig');

exports.commonInvoke = function(apiName) {
  this.pageSize = sysConfig.pageSize;
  this.host = apiConfig.StoreService.host;
  this.port = apiConfig.StoreService.port;
  this.path = apiConfig.StoreService.path[apiName];

  this.queryPageData = function (pageNumber, callback) {
    let resourcePath = `${this.path}/${pageNumber}/${this.pageSize}`;
    serviceInvoke.query(this.host, this.port, resourcePath, callback)
  };

  this.queryAll = function (callback) {
    let resourcePath = `${this.path}/1/9999`;
    serviceInvoke.query(this.host, this.port, resourcePath, callback)
  };

  this.queryWithParameter = function (param, callback) {
    serviceInvoke.query(this.host, this.port, this.path + '/' + param, callback)
  };

  this.create = function (data, callback) {
    serviceInvoke.create(data, this.host, this.port, this.path, callback);
  };

  this.change = function (data, callback) {
    serviceInvoke.change(data, this.host, this.port, this.path, callback);
  };

  this.delete = function (param, callback) {
    serviceInvoke.delete(this.host, this.port, this.path + '/' + param, callback);
  }
};