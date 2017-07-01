/**
 * Created by t_mehes on 30/6/17.
 */
import ticketFormModalTemplate from './ticketFormModal.html';
import $ from 'jquery';


export function TicketBuilder($q, $document, $compile) {
  return function (scope) {
    var modalContainer = $document[0].body;
    var $modalElement = $(ticketFormModalTemplate);
    var ticketScope = scope.$new();

    Object.assign(ticketScope, {
      title: 'Create Trade Ticket',
      ticketFormData: {},
      action: {
        create: function () {
          $modalElement.modal('hide');
        }
      }
    });

    var $scopelement = setupModalTemplate($modalElement, ticketScope);
    $(modalContainer).append($scopelement);

    scope.$on('$destroy', function () {
      $modalElement.remove();
    });

    this.buildTicket = function (ticketData) {
      var deferred = $q.defer();
      ticketScope.ticketFormData = {};
      $modalElement.modal({
        onHide: function (elem) {
          /** Validate and submit */
          console.log(ticketScope.ticketFormData);
          deferred.resolve(ticketScope.ticketFormData);
        }
      });

      $modalElement.modal('show');

      return deferred.promise;
    };
  };

  function setupModalTemplate(template, scope) {
    var $scopeElem = $compile(template)(scope);

    $($scopeElem)
      .find('.ui.dropdown').dropdown({});

    return $scopeElem;
  }
}
