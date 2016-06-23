$(document).ready(function() {  
  getWeather(); //Get the initial weather.
  setInterval(getWeather, 600000); //Update the weather every 10 minutes.
});

function getWeather(){
  $.simpleWeather({
     location: 'Vijayawada',
        unit: 'c',
        success: function (weather) {
            if(weather.temp > 30) {
              $('.weathermenu').animate({backgroundColor: '#F7AC57'}, 1500);
            } else {
              $('.weathermenu').animate({backgroundColor: '#0091c2'}, 1500);
            }

            html = '<p  style="width:200px;vertical-align: middle;margin-left:25px;font-size:50px;margin-top: 30px"><i class="icon-' + weather.code + '"></i>' + weather.temp + '&deg;' + weather.units.temp + '</p>';
            // html += '<ul style="float:left"><li><i style="color:#000" class="icon-' + weather.code + '"></i>' + weather.city + ', ' + weather.region + '</li></ul>';
            html += '<p style="width:200px;vertical-align: middle;padding-top:-50px;margin-left:25px;float:left;font-size: 20px" class="currently">' + weather.currently + '</p>';
            // html += '<ul style="float:left"><li>' + weather.alt.temp + '&deg;F</li></ul>';

            for (var i = 0; i < 7; i++) {
                img = '<img style = "width: 70px" src="' + weather.forecast[i].image + '">';
                html += '<div style = "width:200px;margin-left:25px;">' + img + '<i style="color:#000" class="icon-' + weather.code + '"></i>' + weather.forecast[i].day + ': ' + weather.forecast[i].low +  '&deg;' +'/'+ weather.forecast[i].high + '&deg;' + weather.units.temp +'</div>';
            }

            $("#weather").html(html);
        },
        error: function (error) {
            $("#weather").html('<p>' + error + '</p>');
        }
  });
}
