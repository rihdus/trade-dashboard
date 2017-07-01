/**
 * Created by t_mehes on 30/6/17.
 */

import _ from 'lodash';

export default ['$q', function ($q) {
  var _this = this;
  this.data = [];

  this.loadData = function () {
    var deferred = $q.defer();
    require.ensure([], function (require) {
      var data = require('../../../../data/GetTrades.json');
      _this.data = data;
      console.log(data);
      var tradeData = _.reduce(data, function (result, item, key) {
        var tradeRec = [];
        tradeRec.push(item.Symbol);
        tradeRec = tradeRec.concat(_.map(item.Trades, function (item) {
          return key === 1 ? item.Price / 21 : item.Price;
        }));
        result.push(tradeRec);
        return result;
      }, [['x']]);
      _.each(data[0].Trades, function (trade) {
        tradeData[0].push(new Date(trade.Timestamp).getTime());
      });
      deferred.resolve(tradeData);
    });
    return deferred.promise;
  };
}];
