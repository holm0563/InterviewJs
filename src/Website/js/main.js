(function() {

    //Documentation at: http://navitaireinterviewapp.azurewebsites.net/swagger/ui/index.html

    var flightsUrl = 'http://navitaireinterviewapp.azurewebsites.net/api/Flights';

    $.get(flightsUrl, function (data) {

        $('#data').html(data);

    });

})();