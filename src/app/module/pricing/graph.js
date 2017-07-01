/**
 * Created by t_mehes on 30/6/17.
 */

import graphTemplate from './graph.html';
import c3 from 'c3';
import 'c3/c3.css';

export default ['pricingData', function (pricingData) {
  return {
    template: graphTemplate,
    replace: true,
    restrict: 'E',
    scope: {
      data: '='
    },
    link: function (scope, elem) {
      var $elGraphContainer = elem.children();
      var chart = c3.generate({
        bindto: $elGraphContainer[0],
        data: {
          x: 'x',
          columns: []
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: '%H-%M'
            }
          }
        }
      });

      scope.$watch('data', function (newVal) {
        chart.load({
          columns: newVal || []
        });
      });
    }
  };
}];
