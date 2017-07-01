import template from './Header.html';
import $ from 'jquery';
window.$ = window.jQuery = $;

import {TicketBuilder} from '../module/trades/action';

function Header(TicketBuilder, tradeStoreService) {
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
            });
        }
      };
    }
  };
}

Header.$inject = ['TicketBuilder', 'tradeStoreService'];

export default Header;
