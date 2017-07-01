/**
 * Created by t_mehes on 30/6/17.
 */

var store = {
  trades: [],
  ticket: {
    builder: {}
  }
};

export default store;

export var tradeStoreService = [function () {
  this.store = store;

  this.addNewTrade = function (tradeTicket) {
    this.store.trades.push(tradeTicket);
  };
}];
