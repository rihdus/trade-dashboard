/**
 * Created by t_mehes on 30/6/17.
 */

export default ['$scope', 'pricingData', function ($scope, pricingData) {
  $scope.name = 'Loading...';
  pricingData.loadData()
    .then(function (data) {
      $scope.name = 'Sample Trade Prices for NDAQ and GOOG';
      $scope.sourceName = 'NASDAQTrades: GetTrades';
      $scope.source = 'http://www.nasdaqdod.com/Samples.aspx?SampleId=5';
      $scope.data = data;
    });
}];
