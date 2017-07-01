import template from './Header.html';
import $ from 'jquery';
window.$ = window.jQuery = $;

import {TicketBuilder} from '../module/trades/action';

function Header(TicketBuilder, tradeStoreService, $location) {
  return {
    scope: {
      items: '='
    },
    replace: true,
    restrict: 'E',
    template: template,
    link: function (scope, elem, attrs) {
      $(elem[0]).find('.ui.dropdown').dropdown({
        on: 'hover'
      });

      var tickerBuilder = new TicketBuilder(scope);

      scope.actions = {
        createTicket: function () {
          tickerBuilder.buildTicket()
            .then(function (newTicket) {
              tradeStoreService.addNewTrade(newTicket);
              $location.path('/app/trade');
            });
        }
      };
    }
  };
}

Header.$inject = ['TicketBuilder', 'tradeStoreService', '$location'];

export default Header;
