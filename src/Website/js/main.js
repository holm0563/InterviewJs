(function() {

    //Documentation at: http://navitaireinterviewapp.azurewebsites.net/swagger/ui/index.html

    var flightsUrl = 'http://navitaireinterviewapp.azurewebsites.net/api/Flights';

    $.get(flightsUrl, function (data) {

        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);

        var html = template(data);
        $('#data').html(html);

    });

})();