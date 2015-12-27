$('document').ready(function() {
  $('#calendar').fullCalendar({
    events: '/events.json', 
    eventRender: function(event, element) {
      console.log(element)
      element.find('.fc-title').append("<br/>" + event.nome + " " + event.pilar);
      element.find('.fc-title').append("<br/>" + event.descricao);
      switch (event.pilar) {
        case 'Redes':
          element.addClass("redes");
          break
        case 'Mercado':
          element.addClass("mercado");
          break
        case 'Propósito':
          element.addClass("proposito");
          break    
        default:
          break
      }
    },
    theme: true,
    lang: 'pt-br',
    header: {
      left:   'today prev,next',
      center: 'title',
      right:  'month agendaWeek agendaDay'
    }
  });
});