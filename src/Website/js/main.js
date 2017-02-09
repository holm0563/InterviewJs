(function() {

    //Documentation at: http://navitaireinterviewapp.azurewebsites.net/swagger/ui/index.html

    var flightsUrl = 'http://navitaireinterviewapp.azurewebsites.net/api/Flights';

    $.get(flightsUrl, function (data) {

        data.forEach(function(item) {

            var date = new Date(item.departure);

            item.departure = (date.getMonth() + 1) +
                '-' +
                date.getDate() +
                '-' +
                date.getFullYear() +
                ' ' +
                ("0" + date.getHours()).slice(-2) +
                ":" +
                ("0" + date.getMinutes()).slice(-2);
        });

        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        var html = template(data);

        $('#data').html(html);

    });

})();