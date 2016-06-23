      var origin_place_id;
      var destination_place_id;
      var travel_mode;
      var ce;
      var map;
      var origplace;
      var markers = [];
      var healthmarkers = [];
      var hospital = [];
      var bus = [];
      var trafficLayer;
      var ctaLayer;
      var service;
      var ctabluelayer;
      var ctagreenlayer;
      var cams = [];
      var legend;
      var roadlegend;
      var ganvarammarker;
      var ibrivar;
      var kanki;
      var onetown;
      var twotown;
      var governervar;
      var srpet;
      var snpur;
      var kslankavar;
      var machavaramvar;
      var patamarvar;
      var nunnavar;
      var pamidivar;
      var penamuluruvar;
      var thotavallurvar;
      var vuyyurtownvar;
      var vuyyurururalvar;
      var unguturuvar;
      var ajithsinghnagarvar;
      var bhavanivar;

      var ifwingn;
      var ifwinib;
      var ifwinkn;
      var ifwinot;
      var ifwintt;
      var ifwingv;
      var ifwinsr;
      var ifwinsn;
      var ifwinkl;
      var ifwinmc;
      var ifwinpt;
      var ifwinnn;
      var ifwinpm;
      var ifwinpn;
      var ifwintv;
      var ifwinvt;
      var ifwinvr;
      var ifwinug;
      var ifwinasn;
      var ifwinbv;
      var ifhosp;
      var infbus
      var styles;
      var styles1;
      var styles2;
      var iwio;
      var iomark;
      var iomarkers = [];
      var i;
      var iolocs;
      var parkiw;
      var parkmark;
      var parkmarkers = [];
      var parklocs;
      var pushkiw;
      var pushkmark;
      var pushkmarkers = [];
      var pushklocs;
      var rlyiw;
      var rlymark;
      var rlymarkers = [];
      var rlylocs;
      var satbusiw;
      var satbusmark;
      var satbusmarkers = [];
      var satbuslocs;
      var templesiw;
      var templesmark;
      var templesmarkers = [];
      var templeslocs;
      var trafficptsiw;
      var trafficptsmark;
      var trafficptsmarkers = [];
      var trafficptslocs;
      var ghatsiw;
      var ghatsmark;
      var ghatsmarkers = [];
      var ghatslocs;
      var directionsService;
      var directionsDisplay;

      function initMap() {
       // Docs at http://simpleweatherjs.com
       infbus = new google.maps.InfoWindow;
       ifhosp = new google.maps.InfoWindow;
       ifwingn = new google.maps.InfoWindow;
       ifwinib = new google.maps.InfoWindow;
       ifwinkn = new google.maps.InfoWindow;
       ifwinot = new google.maps.InfoWindow;
       ifwintt = new google.maps.InfoWindow;
       ifwingv = new google.maps.InfoWindow;
       ifwinsr = new google.maps.InfoWindow;
       ifwinsn = new google.maps.InfoWindow;
       ifwinkl = new google.maps.InfoWindow;
       ifwinmc = new google.maps.InfoWindow;
       ifwinpt = new google.maps.InfoWindow;
       ifwinnn = new google.maps.InfoWindow;
       ifwinpm = new google.maps.InfoWindow;
       ifwinpn = new google.maps.InfoWindow;
       ifwintv = new google.maps.InfoWindow;
       ifwinvt = new google.maps.InfoWindow;
       ifwinvr = new google.maps.InfoWindow;
       ifwinug = new google.maps.InfoWindow;
       ifwinasn = new google.maps.InfoWindow;
       ifwinbv = new google.maps.InfoWindow;
       iwio = new google.maps.InfoWindow;
       parkiw = new google.maps.InfoWindow;
       pushkiw = new google.maps.InfoWindow;
       rlyiw = new google.maps.InfoWindow;
       satbusiw = new google.maps.InfoWindow;
       templesiw = new google.maps.InfoWindow;
       trafficptsiw = new google.maps.InfoWindow;
       ghatsiw = new google.maps.InfoWindow;
       origin_place_id = null;
       destination_place_id = null;
       travel_mode = google.maps.TravelMode.DRIVING;
       ce = new google.maps.LatLng(16.5062, 80.6480);
       map = new google.maps.Map(document.getElementById('map'), {
        mapTypeControl: false,
        center: ce,
        zoom: 13
       });
       var polylineOptionsActual = {
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 10
       };

       directionsService = new google.maps.DirectionsService;
       directionsDisplay = new google.maps.DirectionsRenderer;
       directionsDisplay.setMap(map);
       directionsDisplay.setPanel(document.getElementById('right-panel'));

       var origin_input = document.getElementById('origin-input');
       var destination_input = document.getElementById('destination-input');

       map.controls[google.maps.ControlPosition.TOP_LEFT].push(origin_input);
       map.controls[google.maps.ControlPosition.TOP_LEFT].push(destination_input);
       map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('legend'));
       map.controls[google.maps.ControlPosition.RIGHT_TOP].push(document.getElementById('roadid'));

       legend = document.getElementById('legend');
       var div = document.createElement('div');
       div.innerHTML = '<img src="acc.png"> ' + ' Accident' + '</br>' + '<img src="closure.png"> ' + ' Road Closed' + '</br>' + '<img src="construc.png"> ' + ' Construction' + '</br>' + '<img src="otheracc.png"> ' + ' Other Accidents' + '</br>';
       div.innerHTML += '<img src="greent.png"> ' + ' No Traffic Delays' + '</br>';
       div.innerHTML += '<img src="oranget.png"> ' + ' Medium Amount Traffic' + '</br>';
       div.innerHTML += '<img src="redt.png"> ' + ' Heavy Traffic' + '</br>';
       legend.appendChild(div);


       roadlegend = document.getElementById('roadid');
       var div1 = document.createElement('div');
       div1.innerHTML = '<img src="greyr.png"> ' + ' Local Roads' + '</br>';
       div1.innerHTML += '<img src="pinkr.png"> ' + ' Main Roads' + '</br>';
       div1.innerHTML += '<img src="oranger.png"> ' + ' Highways' + '</br>';
       roadlegend.appendChild(div1);

       var origin_autocomplete = new google.maps.places.Autocomplete(origin_input);
       origin_autocomplete.bindTo('bounds', map);
       var destination_autocomplete =
        new google.maps.places.Autocomplete(destination_input);
       destination_autocomplete.bindTo('bounds', map);

       function expandViewportToFitPlace(map, place) {
        if (place.geometry.viewport) {
         map.fitBounds(place.geometry.viewport);
        } else {
         map.setCenter(place.geometry.location);
         map.setZoom(17);
        }
       }

       origin_autocomplete.addListener('place_changed', function() {
        var place = origin_autocomplete.getPlace();
        if (!place.geometry) {
         window.alert("Autocomplete's returned place contains no geometry");
         return;
        }
        expandViewportToFitPlace(map, place);


        origin_place_id = place.place_id;
        origplace = place;
        route(origin_place_id, destination_place_id, travel_mode,
         directionsService, directionsDisplay);
       });

       destination_autocomplete.addListener('place_changed', function() {
        var place = destination_autocomplete.getPlace();
        if (!place.geometry) {
         window.alert("Autocomplete's returned place contains no geometry");
         return;
        }
        expandViewportToFitPlace(map, place);


        destination_place_id = place.place_id;
        route(origin_place_id, destination_place_id, travel_mode,
         directionsService, directionsDisplay);
       });

       function route(origin_place_id, destination_place_id, travel_mode,
        directionsService, directionsDisplay) {
        // alert(origin_place_id);
        if (!origin_place_id || !destination_place_id) {

         return;
        }
        // alert('out if');
        openRight();
        directionsDisplay.setMap(map);
        directionsService.route({
         origin: {
          'placeId': origin_place_id
         },
         destination: {
          'placeId': destination_place_id
         },
         travelMode: travel_mode,
         provideRouteAlternatives: true
        }, function(response, status) {
         if (status === google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
          // clearclickbtn();
          // console.log(response.routes.length);
         } else {
          window.alert('Directions request failed due to ' + status);
         }
        });
       }
      }

      function anroute(origin, destination, travel_mode,
        directionsService, directionsDisplay,waypts) {
        // alert(origin_place_id);
        // alert('out if');
        directionsService.route({
         origin: origin,
         destination: destination,
         travelMode: travel_mode,
         provideRouteAlternatives: true,
         waypoints: waypts,
         optimizeWaypoints: true
        }, function(response, status) {
          // alert('123');
         if (status === google.maps.DirectionsStatus.OK) {
          // alert('inside if')
          directionsDisplay.setDirections(response);
          // console.log(response.routes.length);
         } else {
          window.alert('Directions request failed due to ' + status);
         }
        });
       }

      function putpolice() {
       if (!origin_place_id)
        ce = {
         lat: 16.5062,
         lng: 80.6480
        };
       else
        ce = origplace.geometry.location;
       var request = {
        location: ce,
        radius: '50000',
        types: ['police']
       };

       service = new google.maps.places.PlacesService(map);
       service.nearbySearch(request, callback);
      }

      function callback(results, status) {
       if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
         var place = results[i];
         createMarker(results[i]);
        }
       }
      }

      function createMarker(place) {
       var placeLoc = place.geometry.location;
       var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name,
        animation: google.maps.Animation.DROP,
        icon: 'police.png'
       });
       markers.push(marker);
       google.maps.event.addListener(marker, 'click', function() {
        infowindow = new google.maps.InfoWindow();
        infowindow.setContent(this.title);
        infowindow.open(map, this);
       });
      }

      function clearmark() {
       for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
       }
       markers = [];
      }

      function policecheck() {
       if (document.getElementById("policecheckbox").checked == true)
        putpolice();
       else
        clearmark();
      }

      function trafficcheck() {
       if (document.getElementById("trafficcheckbox").checked == true)
        showtraffic();
       else
        cleartraffic();
      }

      function showtraffic() {
       trafficLayer = new google.maps.TrafficLayer();
       trafficLayer.setMap(map);
       $('#legend').css("display", "block");
      }

      function cleartraffic() {
       trafficLayer.setMap(null);
       $('#legend').css("display", "none");
      }

      function healthcheck() {
       if (document.getElementById("healthcheckbox").checked == true) {
        showhealth();
       } else {
        clearhealth();
       }
      }

      function showhealth() {
       healthlayer = new google.maps.KmlLayer({
        url: '',
        map: map
       });
      }

      function clearhealth() {
       healthlayer.setMap(null);
      }

      function cameracheck() {
       if (document.getElementById("cameracheckbox").checked == true)
        showcameras();
       else
        clearcameras();
      }

      function showcameras() {
       ctaLayer = new google.maps.KmlLayer({
        url: 'https://raw.githubusercontent.com/gsvnanoop/geocoordinates/master/node8.kml',
        map: map
       });
      }

      function clearcameras() {
       ctaLayer.setMap(null);
      }

      function camerabluecheck() {
       if (document.getElementById("camerabluecheckbox").checked == true)
        showbluecameras();
       else
        clearbluecameras();
      }

      function showbluecameras() {
       ctabluelayer = new google.maps.KmlLayer({
        url: 'https://raw.githubusercontent.com/gsvnanoop/geocoordinates/master/node3.kml',
        map: map
       });
      }

      function clearbluecameras() {
       ctabluelayer.setMap(null);
      }

      function cameragreencheck() {
       if (document.getElementById("cameragreencheckbox").checked == true)
        showgreencameras();
       else
        cleargreencameras();
      }

      function showgreencameras() {
       ctagreenlayer = new google.maps.KmlLayer({
        url: 'https://raw.githubusercontent.com/gsvnanoop/geocoordinates/master/node4.kml',
        map: map
       });
      }

      function cleargreencameras() {
       ctagreenlayer.setMap(null);
      }

      function hospitalcheck() {
       if (document.getElementById('hospitals').checked == true) {
        puthospitals();
       } else {
        clearhospitals();
       }
      }

      function puthospitals() {
       if (!origin_place_id)
        ce = {
         lat: 16.5062,
         lng: 80.6480
        };
       else
        ce = origplace.geometry.location;
       var request = {
        location: ce,
        radius: '50000',
        types: ['hospital']
       };

       service = new google.maps.places.PlacesService(map);
       service.nearbySearch(request, callbackhosp);
      }

      function callbackhosp(results, status) {
       if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
         var place = results[i];
         createMarkerhosp(results[i]);
        }
       }
      }

      function createMarkerhosp(place) {
       var placeLoc = place.geometry.location;
       var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name,
        animation: google.maps.Animation.DROP,
        icon: 'hosp.png'
       });
       hospital.push(marker);
       google.maps.event.addListener(marker, 'click', function() {
        ifhosp.setContent('<strong>' + this.title + '</strong>');
        ifhosp.open(map, this);
       });
      }

      function clearhospitals() {
       for (var i = 0; i < hospital.length; i++) {
        hospital[i].setMap(null);
       }
       hospital = [];
      }

      function ganvaramclick() {
       // document.write('fljflj');
       if (document.getElementById('ganvaramid').checked == true) {
        // document.write('fljflj');
        putganvarammarker();
       } else {
        clearganvarammarker();
       }
      }

      function putganvarammarker() {
       ganvarammarker = new google.maps.Polygon({
        paths: gannavaramjs(),
        strokeColor: '#FF0000',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.1,
        map: map
       });
       // ganvarammarker.setMap(map);
       ganvarammarker.addListener('click', function(event) {
        ifwingn.setContent('<strong>' + 'Gannavaram ' + '</strong>');
        ifwingn.setPosition(event.latLng);
        ifwingn.open(map);
       });
      }

      function clearganvarammarker() {
       ganvarammarker.setMap(null);
       ifwingn.setMap(null);
      }

      function ibrihimclick() {
       if (document.getElementById('ibrihimid').checked == true) {
        putibrihim();
       } else
        clearibrihim();
      }

      function putibrihim() {
       ibrivar = new google.maps.Polygon({
        paths: ibrahim(),
        strokeColor: '#3399ff',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#3399ff',
        fillOpacity: 0.1,
        map: map
       });
       ibrivar.addListener('click', function(event) {
        ifwinib.setContent('<strong>' + 'Ibrahimpatnam ' + '</strong>');
        ifwinib.setPosition(event.latLng);
        ifwinib.open(map);
       });
      }

      function clearibrihim() {
       ibrivar.setMap(null);
       ifwinib.setMap(null);
      }

      function kankiclick() {
       if (document.getElementById('kankipaduid').checked == true) {
        putkanki();
       } else {
        clearkanki();
       }
      }
      // var kanki;
      function putkanki() {
       kanki = new google.maps.Polygon({
        paths: kankipadu(),
        strokeColor: '#6699ff',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#6699ff',
        fillOpacity: 0.1,
        map: map
       });
       kanki.addListener('click', function(event) {
        ifwinkn.setContent('<strong>' + 'Kankipadu ' + '</strong>');
        ifwinkn.setPosition(event.latLng);
        ifwinkn.open(map);
       });
      }

      function clearkanki() {
       kanki.setMap(null);
       ifwinkn.setMap(null);
      }

      function onetownclick() {
       if (document.getElementById('onetownid').checked == true) {
        putonetown();
       } else {
        clearonetown();
       }
      }
      // var onetown;
      function putonetown() {
       onetown = new google.maps.Polygon({
        paths: onetownjs(),
        strokeColor: '#cc6699',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#cc6699',
        fillOpacity: 0.1,
        map: map
       });
       onetown.addListener('click', function(event) {
        ifwinot.setContent('<strong>' + 'I Town ' + '</strong>');
        ifwinot.setPosition(event.latLng);
        ifwinot.open(map);
       });
      }

      function clearonetown() {
       onetown.setMap(null);
       ifwinot.setMap(null);
      }

      function twotownclick() {
       if (document.getElementById('twotownid').checked == true) {
        puttwotown();
       } else {
        cleartwotown();
       }
      }
      // var twotown;
      function puttwotown() {
       twotown = new google.maps.Polygon({
        paths: twotownjs(),
        strokeColor: '#ff9933',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#ff9933',
        fillOpacity: 0.1,
        map: map
       });
       twotown.addListener('click', function(event) {
        ifwintt.setContent('<strong>' + 'II Town ' + '</strong>');
        ifwintt.setPosition(event.latLng);
        ifwintt.open(map);
       });
      }

      function cleartwotown() {
       twotown.setMap(null);
       ifwintt.setMap(null);
      }

      function governerclick() {
       if (document.getElementById('governerid').checked == true) {
        putgoverner();
       } else {
        cleargoverner();
       }
      }
      // var governervar;
      function putgoverner() {
       governervar = new google.maps.Polygon({
        paths: governorpet(),
        strokeColor: '#994d00',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#994d00',
        fillOpacity: 0.1,
        map: map
       });
       governervar.addListener('click', function(event) {
        ifwingv.setContent('<strong>' + 'Governorpet ' + '</strong>');
        ifwingv.setPosition(event.latLng);
        ifwingv.open(map);
       });
      }

      function cleargoverner() {
       governervar.setMap(null);
       ifwingv.setMap(null);
      }

      function suryaraoclick() {
       if (document.getElementById('suryaraoid').checked == true) {
        putsrpet();
       } else {
        clearsrpet();
       }
      }
      // var srpet;
      function putsrpet() {
       srpet = new google.maps.Polygon({
        paths: suryaraopet(),
        strokeColor: '#3366ff',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#3366ff',
        fillOpacity: 0.1,
        map: map
       });
       srpet.addListener('click', function(event) {
        ifwinsr.setContent('<strong>' + 'Suryaraopet ' + '</strong>');
        ifwinsr.setPosition(event.latLng);
        ifwinsr.open(map);
       });
      }

      function clearsrpet() {
       srpet.setMap(null);
       ifwinsr.setMap(null);
      }

      function snclick() {
       if (document.getElementById('snpuramid').checked == true) {
        putsnpuram();
       } else {
        clearsnpuram();
       }
      }
      // var snpur;
      function putsnpuram() {
       snpur = new google.maps.Polygon({
        paths: sathyanarayanapuram(),
        strokeColor: '#009933',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#009933',
        fillOpacity: 0.1,
        map: map
       });
       snpur.addListener('click', function(event) {
        ifwinsn.setContent('<strong>' + 'Satyanarayanapuram ' + '</strong>');
        ifwinsn.setPosition(event.latLng);
        ifwinsn.open(map);
       });
      }

      function clearsnpuram() {
       snpur.setMap(null);
       ifwinsn.setMap(null);
      }

      function kslankaclick() {
       if (document.getElementById('kslankaid').checked == true) {
        putkslanka();
       } else {
        clearkslanka();
       }
      }
      // var kslankavar;
      function putkslanka() {
       kslankavar = new google.maps.Polygon({
        paths: krishnalanka(),
        strokeColor: '#0099cc',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#0099cc',
        fillOpacity: 0.1,
        map: map
       });
       kslankavar.addListener('click', function(event) {
        ifwinkl.setContent('<strong>' + 'KrishnaLanka ' + '</strong>');
        ifwinkl.setPosition(event.latLng);
        ifwinkl.open(map);
       });
      }

      function clearkslanka() {
       kslankavar.setMap(null);
       ifwinkl.setMap(null);
      }

      function machavaramclick() {
       if (document.getElementById('machavaramid').checked == true) {
        putmachavaram();
       } else {
        clearmachavaram();
       }
      }
      // var machavaramvar;
      function putmachavaram() {
       machavaramvar = new google.maps.Polygon({
        paths: machavaram(),
        strokeColor: '#e69900',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#e69900',
        fillOpacity: 0.1,
        map: map
       });
       machavaramvar.addListener('click', function(event) {
        ifwinmc.setContent('<strong>' + 'Machavaram ' + '</strong>');
        ifwinmc.setPosition(event.latLng);
        ifwinmc.open(map);
       });
      }

      function clearmachavaram() {
       machavaramvar.setMap(null);
       ifwinmc.setMap(null);
      }

      function patamataclick() {
       if (document.getElementById('patamataid').checked == true) {
        putpatamata();
       } else {
        clearpatamata();
       }
      }
      // var patamarvar;
      function putpatamata() {
       patamarvar = new google.maps.Polygon({
        paths: patamata(),
        strokeColor: '#4d79ff',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#4d79ff',
        fillOpacity: 0.1,
        map: map
       });
       patamarvar.addListener('click', function(event) {
        ifwinpt.setContent('<strong>' + 'Patamata ' + '</strong>');
        ifwinpt.setPosition(event.latLng);
        ifwinpt.open(map);
       });
      }

      function clearpatamata() {
       patamarvar.setMap(null);
       ifwinpt.setMap(null);
      }

      function nunnaclick() {
       if (document.getElementById('nunnaid').checked == true) {
        putnunna();
       } else {
        clearnunna();
       }
      }
      // var nunnavar;
      function putnunna() {
       nunnavar = new google.maps.Polygon({
        paths: nunna(),
        strokeColor: '#cc6699',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#cc6699',
        fillOpacity: 0.1,
        map: map
       });
       nunnavar.addListener('click', function(event) {
        ifwinnn.setContent('<strong>' + 'Nunna ' + '</strong>');
        ifwinnn.setPosition(event.latLng);
        ifwinnn.open(map);
       });
      }

      function clearnunna() {
       nunnavar.setMap(null);
       ifwinnn.setMap(null);
      }

      function pamidimukkalaclick() {
       if (document.getElementById('pamidimukkalaid').checked == true) {
        putpamidimukkala();
       } else {
        clearpamidimukkala();
       }
      }
      // var pamidivar;
      function putpamidimukkala() {
       pamidivar = new google.maps.Polygon({
        paths: pamidimukkala(),
        strokeColor: '#4d9900',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#4d9900',
        fillOpacity: 0.1,
        map: map
       });
       pamidivar.addListener('click', function(event) {
        ifwinpm.setContent('<strong>' + 'Pamidimukkala ' + '</strong>');
        ifwinpm.setPosition(event.latLng);
        ifwinpm.open(map);
       });
      }

      function clearpamidimukkala() {
       pamidivar.setMap(null);
       ifwinpm.setMap(null);
      }

      function penamuluruclick() {
       if (document.getElementById('penamuluruid').checked == true) {
        putpenamuluru();
       } else {
        clearpenamuluru();
       }
      }
      // var penamuluruvar;
      function putpenamuluru() {
       penamuluruvar = new google.maps.Polygon({
        paths: penamuluru(),
        strokeColor: '#009999',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#009999',
        fillOpacity: 0.1,
        map: map
       });
       penamuluruvar.addListener('click', function(event) {
        ifwinpn.setContent('<strong>' + 'Penamuluru ' + '</strong>');
        ifwinpn.setPosition(event.latLng);
        ifwinpn.open(map);
       });
      }

      function clearpenamuluru() {
       penamuluruvar.setMap(null);
       ifwinpn.setMap(null);
      }

      function thotlavalluruclick() {
       if (document.getElementById('thotlavalluruid').checked == true) {
        putthotavallur();
       } else {
        clearthotavallur();
       }
      }
      // var thotavallurvar;
      function putthotavallur() {
       thotavallurvar = new google.maps.Polygon({
        paths: thotlavalluru(),
        strokeColor: '#ff5050',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#ff5050',
        fillOpacity: 0.1,
        map: map
       });
       thotavallurvar.addListener('click', function(event) {
        ifwintv.setContent('<strong>' + 'Thotlavalluru ' + '</strong>');
        ifwintv.setPosition(event.latLng);
        ifwintv.open(map);
       });
      }

      function clearthotavallur() {
       thotavallurvar.setMap(null);
       ifwintv.setMap(null);
      }

      function vuyyuruclick() {
       if (document.getElementById('vuyyuruid').checked == true) {
        putvuyyurtown();
       } else {
        clearvuyyurtown();
       }
      }
      // var vuyyurtownvar;
      function putvuyyurtown() {
       vuyyurtownvar = new google.maps.Polygon({
        paths: vuyyuru(),
        strokeColor: '#ffcc00',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#ffcc00',
        fillOpacity: 0.1,
        map: map
       });
       vuyyurtownvar.addListener('click', function(event) {
        ifwinvt.setContent('<strong>' + 'Vuyyuru Town ' + '</strong>');
        ifwinvt.setPosition(event.latLng);
        ifwinvt.open(map);
       });
      }

      function clearvuyyurtown() {
       vuyyurtownvar.setMap(null);
       ifwinvt.setMap(null);
      }

      function vuyyurururalclick() {
       if (document.getElementById('vuyyurururalid').checked == true) {
        putvuyyurrural();
       } else {
        clearvuyyurrural();
       }
      }
      // var vuyyurururalvar;
      function putvuyyurrural() {
       vuyyurururalvar = new google.maps.Polygon({
        paths: vuyyururural(),
        strokeColor: '#cc6699',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#cc6699',
        fillOpacity: 0.1,
        map: map
       });
       vuyyurururalvar.addListener('click', function(event) {
        ifwinvr.setContent('<strong>' + 'Vuyyuru Rural ' + '</strong>');
        ifwinvr.setPosition(event.latLng);
        ifwinvr.open(map);
       });
      }

      function clearvuyyurrural() {
       vuyyurururalvar.setMap(null);
       ifwinvr.setMap(null);
      }

      function unguturuclick() {
       if (document.getElementById('unguturuid').checked == true) {
        putunguturu();
       } else {
        clearunguturu();
       }
      }
      // var unguturuvar;
      function putunguturu() {
       unguturuvar = new google.maps.Polygon({
        paths: unguturujs(),
        strokeColor: '#33cccc',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#33cccc',
        fillOpacity: 0.1,
        map: map
       });
       unguturuvar.addListener('click', function(event) {
        ifwinug.setContent('<strong>' + 'Unguturu ' + '</strong>');
        ifwinug.setPosition(event.latLng);
        ifwinug.open(map);
       });
      }

      function clearunguturu() {
       unguturuvar.setMap(null);
       ifwinug.setMap(null);
      }

      function ajithsinghnagarclick() {
       if (document.getElementById('ajithsinghnagarid').checked == true) {
        putajithsinghnagar();
       } else {
        clearajithsinghnagar();
       }
      }
      // var ajithsinghnagarvar;
      function putajithsinghnagar() {
       ajithsinghnagarvar = new google.maps.Polygon({
        paths: ajithsingh(),
        strokeColor: '#ff6666',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#ff6666',
        fillOpacity: 0.1,
        map: map
       });
       ajithsinghnagarvar.addListener('click', function(event) {
        ifwinasn.setContent('<strong>' + 'AjithSinghnagar ' + '</strong>');
        ifwinasn.setPosition(event.latLng);
        ifwinasn.open(map);
       });
      }

      function clearajithsinghnagar() {
       ajithsinghnagarvar.setMap(null);
       ifwinasn.setMap(null);
      }

      function bhavanipuramclick() {
       if (document.getElementById('bhavanipuramid').checked == true) {
        putbhavanipuram();
       } else {
        clearbhavanipuram();
       }
      }
      // var bhavanivar;
      function putbhavanipuram() {
       bhavanivar = new google.maps.Polygon({
        paths: bhavanipuram(),
        strokeColor: '#994d00',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#994d00',
        fillOpacity: 0.1,
        map: map
       });
       bhavanivar.addListener('click', function(event) {
        ifwinbv.setContent('<strong>' + 'Bhavanipuram ' + '</strong>');
        ifwinbv.setPosition(event.latLng);
        ifwinbv.open(map);
       });
      }

      function clearbhavanipuram() {
       bhavanivar.setMap(null);
       ifwinbv.setMap(null);
      }

      function permparkclick() {
       if (document.getElementById('permparkid').checked == true) {
        putpermparkplace();
       } else {
        clearpermparkplace();
       }
      }
      var permparkvar;

      function putpermparkplace() {
       permparkvar = new google.maps.Polygon({
        paths: bhavanipuram(),
        strokeColor: '#994d00',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#994d00',
        fillOpacity: 0.1,
        map: map
       });
       permparkvar.addListener('click', function(event) {
        ifwin.setContent('<strong>' + 'permanent parking' + '</strong>');
        ifwin.setPosition(event.latLng);
        ifwin.open(map);
       });
      }

      function clearpermparkplace() {
       permparkvar.setMap(null);
       ifwin.setMap(null);
      }

      function roadcheck() {
       if (document.getElementById('roadwaysid').checked == true) {
        putroadways();
       } else {
        clearroadways();
       }
      }

      function putroadways() {
       styles = [{
        stylers: [{
         hue: "#00d4ff"
        }, {
         saturation: 26
        }]
       }, {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{
          lightness: 0
         }, {
          visibility: "simplified"
         }, {
          color: "#F39C12"
         }

        ]
       }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
          lightness: 0
         }, {
          visibility: "simplified"
         }, {
          color: "#FF69B4"
         }

        ]
       }, {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{
          lightness: 0
         }, {
          visibility: "simplified"
         }, {
          color: "#C1C1C1"
         }

        ]
       }];
       map.setOptions({
        styles: styles
       });
       $('#roadid').css("display", "block");
       // $('#legend').css("display","none");

      }

      function clearroadways() {
       map.setOptions({
        styles: null
       });
       $('#roadid').css("display", "none");
      }

      ///////////////////////////////////////////
      var busarr = [];

      function putbus() {
       // alert('putbus');
       if (!origin_place_id)
        ce = {
         lat: 16.498121,
         lng: 80.653919
        };
       else
        ce = origplace.geometry.location;
       var request = {
        location: ce,
        radius: '50000',
        types: ['bus_station']
       };

       service = new google.maps.places.PlacesService(map);
       service.nearbySearch(request, callbackbus);
      }

      function callbackbus(results, status) {
       if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
         var place = results[i];
         createMarkerbus(results[i]);
        }
       }
      }

      function createMarkerbus(place) {
       var placeLoc = place.geometry.location;
       var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name,
        animation: google.maps.Animation.DROP,
        icon: 'busstop.png'
       });
       busarr.push(marker);
       google.maps.event.addListener(marker, 'click', function() {
        infbus = new google.maps.InfoWindow();
        infbus.setContent(this.title);
        infbus.open(map, this);
       });
      }

      function clearbus() {
       for (var i = 0; i < busarr.length; i++) {
        busarr[i].setMap(null);
       }
       busarr = [];
      }

      function buscheck() {
       if (document.getElementById("busid").checked == true) {
        // alert('1234');
        putbus();
       } else
        clearbus();
       // alert(123);
      }

      function loadimpoffices() {
        if(document.getElementById("impoffid").checked == true)
          putimpoff();
        else
          clearimpoff();
      }

      iolocs = [
        ['  CP Office ', 16.50811389 , 80.63421944 ] ,
        ['  State Guest House ', 16.50850556 , 80.633575 ] ,
        ['  CM Camp Office  ', 16.50836667 , 80.62995833 ] ,
        ['  Police Control Room Vijayawada City   ', 16.51109167 , 80.618025 ] ,
        ['  Collector Camp Office ', 16.50673889 , 80.63354444 ]
      ];

      function putimpoff() {

        for (i = 0; i < iolocs.length; i++) {  
          iomark = new google.maps.Marker({
            position: new google.maps.LatLng(iolocs[i][1], iolocs[i][2]),
            map: map,
            icon:'office.png',
        animation: google.maps.Animation.DROP
          });
          iomarkers.push(iomark);
          google.maps.event.addListener(iomark, 'click', (function(iomark, i) {
            return function() {
              iwio.setContent(iolocs[i][0]);
              iwio.open(map, iomark);
            }
          })(iomark, i));
        }
      }

      function clearimpoff() {
        for (i = 0; i < iomarkers.length; i++) {  
            iomarkers[i].setMap(null);
        }
        iwio.setMap(null);
      }

      function loadparking() {
        if(document.getElementById("permparkid").checked == true)
          putpark();
        else
          clearpark();
      }

      parklocs = [
        ['  Thotlavalluru Parking Place   ',  16.34844219 , 80.78467095 ] ,
['  Shadi Khana Parking Place   ',  16.52273254 , 80.60033895 ] ,
['  TTD Vacant Land  Kummaripalem Centre  ',  16.52061095 , 80.60210755 ] ,
['  Chagantipadu parking palce  ',  16.31510905 , 80.79404064 ] ,
['  Lorry Stand   ',  16.52319479 , 80.59803337 ] ,
['  Royyuru parking place   ',  16.38302103 , 80.73539979 ] ,
['  Devarapalli parking place   ',  16.29382442 , 80.80982465 ] ,
['  Valluru Palem parking place   ',  16.36932295 , 80.76395124 ] ,
['  Iluru parking place   ',  16.26327124 , 80.83049087 ] ,
['  Swarna Bharathi Trust Parking Place   ',  16.56703397 , 80.85642404 ] ,
['  Raofin and Adithya Layout Parking Place   ',  16.54550158 , 80.82005079 ] ,
['  Pinnamaneni Siddhartha Medical College Parking Place  ',  16.55362056 , 80.8303859  ] ,
['  Veternary College Parking Place   ',  16.52738181 , 80.78357565 ] ,
['  Kesarapalli Vacant Land near Medha Towers   ',  16.52327298 , 80.7788679  ] ,
['  Opp: Eenadu Office Open Place   ',  16.51458723 , 80.7586371  ] ,
['  KKR Gowtham School  Gudavalli   ',  16.51243614 , 80.74344424 ] ,
['  School of Planning & Architecture College   ',  16.51091339 , 80.74157609 ] ,
['  Opp: Model Dairy Open Place Nidamanuru  ',  16.51065461 , 80.73544489 ] ,
['  Janachaithanya Layout   ',  16.50998055 , 80.71081864 ] ,
['  SRK Engg. College   ',  16.51755318 , 80.69898688 ] ,
['  24K Function Hall   ',  16.51830186 , 80.69775254 ] ,
['  SLRT Open Place Enikepadu ',  16.51744421 , 80.69729054 ] ,
['  SER CENTRE OPEN PLACE PRASADAMPADU  ',  16.52021947 , 80.69279981 ] ,
['  Shubham Kalyanamandapam   ',  16.52455418 , 80.68128491 ] ,
['  Opp: Gunadala Rly. Stn. Ground  ',  16.53747025 , 80.67320924 ] ,
['  Vijayasai Housing Pvt. Ltd. Surampalli  ',  16.60058294 , 80.72159006 ] ,
['  Cipet Grounds Surampalli  ',  16.60237692 , 80.71758672 ] ,
['  Beside Paragon Cheppula  Surampalli ',  16.59292732 , 80.70763747 ] ,
['  Opp: G S ALLOY Surampalli ',  16.58962395 , 80.70311624 ] ,
['  Z P H School Nunna  ',  16.57607815 , 80.68087102 ] ,
['  St.Joseph EM School Kandrika  ',  16.55455199 , 80.66458544 ] ,
['  Govt. Jr. College  Radha Nagar  ',  16.55039459 , 80.65157032 ] ,
['  Pandringi s VUDA Layout   ',  16.54508994 , 80.66453743 ] ,
['  Mango Market  Nunna ',  16.56118062 , 80.66992865 ] ,
['  MBS Stadium  Singh Nagar  ',  16.53939557 , 80.64126509 ] ,
['  Vambay Colony  Rly. Land  ',  16.53891128 , 80.64784863 ] ,
['  Opp: Rohith Bar ',  16.54562681 , 80.64290716 ] ,
['  Govt. Hospital Hanumanpet ',  16.51340454 , 80.61884845 ] ,
['  Rly. Jr. College  Near Rly. Stn.  ',  16.5230345  , 80.62289749 ] ,
['  Andhra Pathrika Open Place  Eluru Lakulu  ',  16.51642264 , 80.62290028 ] ,
['  Zymkhana Grounds  Gandhi Nagar  ',  16.5191162  , 80.62712477 ] ,
['  SKPVV Hindu High School Ganghinagar ',  16.51815275 , 80.62682844 ] ,
['  SN Puram Rly Colony road  ',  16.52157462 , 80.63883215 ] ,
['  S N PURAM Rly. Institute  ',  16.52499613 , 80.64359845 ] ,
['  Opp: Madhuranagar Rly. Stn. Ground (Kendreeya Vidyalayam)   ',  16.52462677 , 80.64825695 ] ,
['  Gunadala Church   ',  16.52180511 , 80.66043948 ] ,
['  Opp: Rainbow Hospital  Nagarjuna Nagar  ',  16.51802919 , 80.67423958 ] ,
['  ESI Hospital Gunadala ',  16.51798319 , 80.66675748 ] ,
['  Venue Kalyanamandapam   ',  16.51402028 , 80.6681625  ] ,
['  Andhra Layola College Ground  ',  16.50652504 , 80.66066074 ] ,
['  ITI College   ',  16.50514441 , 80.65615925 ] ,
['  Polytechnic College   ',  16.50457821 , 80.6599625  ] ,
['  Stella College  ',  16.50154375 , 80.66035135 ] ,
['  Nirmala High School Parking Place   ',  16.49875887 , 80.65765784 ] ,
['  Meenakshi Layout Davuluru ',  16.41410307 , 80.79203896 ] ,
['  Gayithri Vihar Layout Parking Place   ',  16.41730145 , 80.7704844  ] ,
['  Chaithanya College Gosala ',  16.44458191 , 80.75925848 ] ,
['  Seetharama Gardens  Eedupugallu Parking Place ',  16.45626305 , 80.74083585 ] ,
['  Sri Lakshmi Narasimha Garden Parking Place  ',  16.4732504  , 80.71370324 ] ,
['  Veda patasala Poranki ',  16.4728752  , 80.71521532 ] ,
['  Anne Kalyanamadapam Parking Place   ',  16.49497626 , 80.7017529  ] ,
['  Siddhartha Engg. College Parking Place  ',  16.48286894 , 80.69093074 ] ,
['  Kennady School Ground  Kanuru Parking Place   ',  16.48712991 , 80.68762059 ] ,
['  Dhanekula Kalyanamandapam  Ashok Nagar Parking Place  ',  16.4860858  , 80.68133222 ] ,
['  Velagapudi Cold Storage  Ashok Nagar Parking Place  ',  16.48763817 , 80.67655716 ] ,
['  Ayyappanagar Vacant Land Parking Place  ',  16.48784194 , 80.66977614 ] ,
['  Andhra Jyothi Press Donkaroad  Patamata Parking Place   ',  16.4887575  , 80.66431439 ] ,
['  Raghurama Vedika Kalyana Mandapam  Patamata Parking Place ',  16.49471365 , 80.66126427 ] ,
['  NSM School  Patamata Parking Place  ',  16.49143807 , 80.65990237 ] ,
['  Krishnaveni School Ground  Patamata Parking Place ',  16.49541858 , 80.65674049 ] ,
['  Kaleswwari Travels  Near Benz Circle  Parking Place   ',  16.49711598 , 80.65525812 ] ,
['  VBS School  Ramalingeswara katta Parking Place  ',  16.49309142 , 80.64735298 ] ,
['  Sidhratha Hotel Management College Parking Place  ',  16.50278282 , 80.65045362 ] ,
['  Sidhardha Public School Parking Place   ',  16.5044628  , 80.64506306 ] ,
['  Siddhartha Acadamy College Ground Parking Place   ',  16.50519843 , 80.64896608 ] ,
['  Amma Kalyanamandapam Parking Place  ',  16.50776307 , 80.65058954 ] ,
['  Siddhartha Mahila Kalasala Parking Place  ',  16.49930021 , 80.6451037  ] ,
['  A Convension Private Vacant Land Parking Place  ',  16.49604672 , 80.64740188 ] ,
['  V Girilla Opp: Private Vacant Land Parking Place  ',  16.49639052 , 80.64905665 ] ,
['  Dooradarsan Open site Parking Place   ',  16.5000967  , 80.63583945 ] ,
['  Potti Sreeramulu School & College Parking Place   ',  16.50327519 , 80.63003645 ] ,
['  I G M Stadium Hand Ball Court Parking Place   ',  16.50592982 , 80.63727181 ] ,
['  Bhishap Azaraiah School Parking Place   ',  16.50807645 , 80.63656251 ] ,
['  C S I  Church Parking Place   ',  16.5095405  , 80.63365153 ] ,
['  C S I  Compound Parking Place   ',  16.50985855 , 80.63209138 ] ,
['  C V R School Parking Place  ',  16.51026762 , 80.62969758 ] ,
['  Sathavahana College Parking Place   ',  16.51498529 , 80.64060544 ] ,
['  R T A Vacant Place Parking Place  ',  16.50339148 , 80.63484855 ] ,
['  Montisorie College Ground Prking Place  ',  16.50415563 , 80.63262901 ] ,
['  CSI Church  Vacant Land Parking Place   ',  16.66285146 , 80.56573821 ] ,
['  Jana Chaitanya Vacant Site Parking Place  ',  16.65535207 , 80.56816517 ] ,
['  Vacant Land Beside Lanka Cold Storage Parking Place   ',  16.64413402 , 80.55982233 ] ,
['  Vacant Site Opp Lanco Power Parking Place   ',  16.64074047 , 80.55886664 ] ,
['  Vacant Place Opp Charminar Asbestos Compeny Parking Place   ',  16.63657766 , 80.55621191 ] ,
['  Gopala Krishna Gardens Parking Place  ',  16.63529797 , 80.55569553 ] ,
['  Teachers Colony vacant site parking place   ',  16.6337886  , 80.55050925 ] ,
['  Vacant land near Kondapalli Raiway Station Parking Place  ',  16.62590328 , 80.5456079  ] ,
['  APHMEL Vacant Land Parking Place  ',  16.63014667 , 80.54515199 ] ,
['  Dr Y V Rao Vacant Site  Parking Place   ',  16.62370455 , 80.53963828 ] ,
['  DAV High School  Parking Place  ',  16.60978029 , 80.53467187 ] ,
['  ZP Girls High School  Parking Place   ',  16.6095913  , 80.53598176 ] ,
['  VTPS A Colony Ground  Parking Place   ',  16.59674819 , 80.52772729 ] ,
['  Vacant Site Kerala Hotel Center  Parking Place  ',  16.58325317 , 80.52597817 ] ,
['  Vacant Site Between Tripuramba & Vijaya Krishna Cold Storage Parking Place  ',  16.57124621 , 80.53423965 ] ,
['  Private Site Beside Golden Road Lines  Parking Place  ',  16.57196532 , 80.53481386 ] ,
['  Socity Private Site Opp Tummala Palem  Parking Place  ',  16.57250625 , 80.53378348 ] ,
['  Near Tummala Palem Ghat  Parking Place  ',  16.5712823  , 80.52901958 ] ,
['  Donbosco School Ground  Parking Place   ',  16.56923144 , 80.54087753 ] ,
['  Guntupalli Ghat Side Area  Parking Place  ',  16.55675801 , 80.54575774 ] ,
['  Surayepalem Ghat Area  Parking Place  ',  16.54593616 , 80.55906846 ] ,
['  Triveni Real Estate Site Parking Place  ',  16.55139926 , 80.56324501 ] ,
['  Railway Vacant Site   WWS Colony  Parking Place ',  16.58275556 , 80.55640533 ] ,
['  Railway Land Near Rayanapadu Railway Station  Parking Place   ',  16.57872278 , 80.5506457  ] ,
['  CWC Godowns  Parking Place  ',  16.57457903 , 80.56361899 ] ,
['  Lanco Colony Parking Place  ',  16.55275596 , 80.5739837  ] ,
['  Gollapudi Market Yard  Parking Place  ',  16.5328497  , 80.58844679 ] ,
['  Vacant Site Between Gollapudi Market yard & Commercial Complex  Parking Place   ',  16.53529401 , 80.58959006 ] ,
['  ATKINSON School Ground  Parking Place   ',  16.54153625 , 80.59234296 ] ,
['  Private Site Near Marble Yard  Parking Place  ',  16.54554195 , 80.59769877 ] ,
['  Lorry Stand  Parking Place  ',  16.52288104 , 80.59794077 ] ,
['  Jakeer Hussan College Ground  Parking Place   ',  16.59264552 , 80.51573345 ] ,
['  Truck Terminal  Parking Place   ',  16.60488862 , 80.51248277 ] ,
['  Nimra College Ground  Parking Place   ',  16.60508968 , 80.50512093 ] ,
['  Nova College Ground  Parking Place  ',  16.6086971  , 80.50792557 ] ,
['  K R Market Cellar  Parking Place  ',  16.51244636 , 80.61345699 ] ,
['  Wakf Board Vacant Site  Parking Place   ',  16.5123595  , 80.61277181 ] ,
['  Opp I Traffic Police Station   Parking Place  ',  16.51572886 , 80.61404771 ] ,
['  Krishnaveni Cloth Market  Parking Place   ',  16.52173199 , 80.61557027 ] ,
['  Jack and Jill School   Parking Place  ',  16.52027489 , 80.62062944 ] ,
['  Vuma Holiday Inn (beside) Parking Place   ',  16.63728094 , 80.43377232 ] ,
['  Opp: Vuma Holiday Inn  Parking Place  ',  16.63780735 , 80.43506527 ] ,
['  Meenakshi Real Estate  Parking Place  ',  16.633647 , 80.4353834  ] ,
['  Adilakshmi Real Estates  Parking Place  ',  16.62710866 , 80.43180231 ] ,
['  Veerabadhra Stone Crushers  Parking Place   ',  16.62891937 , 80.44501285 ] ,
['  Amma Naanna Old age Home Road  Parking Place  ',  16.63030093 , 80.44878063 ] ,
['  C B R Real Estates  Parking Place   ',  16.63090534 , 80.4528629  ] ,
['  Kaarthikeya Township Real Estate  Parking Place   ',  16.61998237 , 80.45981098 ] ,
['  Sainadh Enclave  Parking Place  ',  16.61447937 , 80.46369061 ] ,
['  Kowshi Real Estate  Parking Place   ',  16.60528422 , 80.4983906  ] ,
['  Y.V.Rao Estate Parking Place  ',  16.5521534  , 80.61838086 ] ,
['  Jakkampudi Layout Parking Place   ',  16.57068463 , 80.61629549 ] ,
['  Vedika Kalyana Mandapam   ',  16.49720155 , 80.6539876  ] ,
['  SVS Kalyana Mandapam  ',  16.49585929 , 80.65219007 ]

      ];

      function putpark() {

        for (i = 0; i < parklocs.length; i++) {  
          parkmark = new google.maps.Marker({
            position: new google.maps.LatLng(parklocs[i][1], parklocs[i][2]),
            map: map,
            icon:'parking.png',
            animation: google.maps.Animation.DROP
          });
          parkmarkers.push(parkmark);
          google.maps.event.addListener(parkmark, 'click', (function(parkmark, i) {
            return function() {
              parkiw.setContent(parklocs[i][0]);
              parkiw.open(map, parkmark);
            }
          })(parkmark, i));
        }
      }

      function clearpark() {
        for (i = 0; i < parkmarkers.length; i++) {  
            parkmarkers[i].setMap(null);
        }
        parkiw.setMap(null);
      }

      function loadpushkar() {
        if(document.getElementById("pushkid").checked == true)
          putpushkar();
        else
          clearpushkar();
      }

      pushklocs = [
      ['  Rayanapadu CWC Grounds Pushkar Nagar  ',  16.57427896 , 80.56378085 ] ,
['  Truck Terminal  Ibrahimpatnam  Pushkar Nagars   ',  16.60579605 , 80.51199761 ] ,
['  VTP Grounds  Ibrahimpatnam Pushkarnagar ',  16.58968515 , 80.52160383 ] ,
['  Siddhartha Engg. College  Kanuru  ',  16.48305899 , 80.69084252 ] ,
['  Iluru Village Pushkar Nagar   ',  16.26386419 , 80.82957793 ] ,
['  Yenamalakuduru Pushkar Nagar  ',  16.48194109 , 80.65972238 ] ,
['  Thotlavallu Village  Pushkar Nagar  ',  16.34768303 , 80.7839445  ] ,
['  Lorry Stand Pushkar Nagar   ',  16.52349322 , 80.59831323 ] ,
['  Y.V.Rao Estate Pushkara Nagar   ',  16.55361628 , 80.61843286 ] ,
['  Souther Side of Whole Sale Market Pushkar Nagar   ',  16.5351198  , 80.58876445 ] ,
['  Railway Stadium Pushkar Nagar   ',  16.51735029 , 80.62009993 ] ,
['  Gunadala Rly. Stn. Pushkara Nagar   ',  16.53813229 , 80.67412976 ] ,
['  Vambay colony Pushkar Nagar   ',  16.54033168 , 80.65097327 ] ,
['  Singh Nagar Stadium Pushkar Nagar   ',  16.53971408 , 80.6411025  ] ,
['  PNBS Pshkar Nagar   ',  16.50740392 , 80.61548583 ] ,
['  Cement Godown Pushkara Nagar  ',  16.50043043 , 80.633661 ] ,
['  Siddhartha Medical College  ',  16.51873377 , 80.67274305 ] ,
['  VBN College Ground  ',  16.49311751 , 80.64720857 ] ,
['  ZP High School Patamata   ',  16.49561053 , 80.66800945 ] ,
['  Labour Colony   ',  16.53389924 , 80.60375627 ] ,
['  Madhura Nagar   ',  16.52445308 , 80.64817493 ] ,
['  Dooradarsan Site  ',  16.49507686 , 80.64383124 ] ,
['  TTD Site  ',  16.52035624 , 80.60215513 ] ,
['  PVT site  ',  16.55490894 , 80.61939155 ] ,
['  Atkinson High School  ',  16.54104238 , 80.59208735 ] ,
['  West side Rly. Stn.   ',  16.51697636 , 80.61615514 ] ,
['  ZP Boys School  Kondapalli  ',  17.1887498  , 78.64743377 ] ,
['  Chagantipadu pushkar nagar  ',  16.31499232 , 80.79478845 ] ,
['  Devarapalli pushkar nagar   ',  16.29350615 , 80.8100902  ]

      ];

      function putpushkar() {

        for (i = 0; i < pushklocs.length; i++) {  
          pushkmark = new google.maps.Marker({
            position: new google.maps.LatLng(pushklocs[i][1], pushklocs[i][2]),
            map: map,
            animation: google.maps.Animation.DROP,
            icon: 'pushnagars.png'
          });
          pushkmarkers.push(pushkmark);
          google.maps.event.addListener(pushkmark, 'click', (function(pushkmark, i) {
            return function() {
              pushkiw.setContent(pushklocs[i][0]);
              pushkiw.open(map, pushkmark);
            }
          })(pushkmark, i));
        }
      }

      function clearpushkar() {
        for (i = 0; i < pushkmarkers.length; i++) {  
            pushkmarkers[i].setMap(null);
        }
        pushkiw.setMap(null);
      }

      function loadrlys() {
        if(document.getElementById("rlyid").checked == true)
          putrlys();
        else
          clearrlys();
      }

      rlylocs = [
      
      ['  Kondapalli  ', 16.62337576 , 80.5473123  ],
['  Gunadala-Rly.Stn.   ', 16.53761651 , 80.66916918 ],
['  Vijayawada  ', 16.51784878 , 80.61874098 ],
['  Madhura Nagar   ', 16.52504929 , 80.64816679 ],
['  Rayanapadu  ', 16.57142381 , 80.5688701  ],
['  Tadepalli   ', 16.47690102 , 80.60531745 ]

      ];

      function putrlys() {

        for (i = 0; i < rlylocs.length; i++) {  
          rlymark = new google.maps.Marker({
            position: new google.maps.LatLng(rlylocs[i][1], rlylocs[i][2]),
            map: map,
            icon: 'train.png',
            animation: google.maps.Animation.DROP
          });
          rlymarkers.push(rlymark);
          google.maps.event.addListener(rlymark, 'click', (function(rlymark, i) {
            return function() {
              rlyiw.setContent(rlylocs[i][0]);
              rlyiw.open(map, rlymark);
            }
          })(rlymark, i));
        }
      }

      function clearrlys() {
        for (i = 0; i < rlymarkers.length; i++) {  
            rlymarkers[i].setMap(null);
        }
        rlyiw.setMap(null);
      }

      function loadsatbus() {
        if(document.getElementById("satbusid").checked == true)
          putsatbus();
        else
          clearsatbus();
      }

      satbuslocs = [
      ['  Y.V Rao Estate  ', 16.55247957 , 80.61971783 ],
['  Siddhardha Eng. College   ', 16.48174834 , 80.69140593 ],
['  PNBS  ', 16.5093251  , 80.61760025 ],
['  NTR Health University   ', 16.51668335 , 80.67169115 ],
['  Zakir Hussain College   ', 16.59628195 , 80.51399792 ],
['  VTPS  ', 16.59034401 , 80.52273721 ]


      ];

      function putsatbus() {

        for (i = 0; i < satbuslocs.length; i++) {  
          satbusmark = new google.maps.Marker({
            position: new google.maps.LatLng(satbuslocs[i][1], satbuslocs[i][2]),
            map: map,
            icon: 'bus.png',
            animation: google.maps.Animation.DROP
          }); 
          satbusmarkers.push(satbusmark);
          google.maps.event.addListener(satbusmark, 'click', (function(satbusmark, i) {
            return function() {
              satbusiw.setContent(satbuslocs[i][0]);
              satbusiw.open(map, satbusmark);
            }
          })(satbusmark, i));
        }
      }

      function clearsatbus() {
        for (i = 0; i < satbusmarkers.length; i++) {  
            satbusmarkers[i].setMap(null);
        }
        satbusiw.setMap(null);
      }

      function loadtemples() {
        if(document.getElementById("templesid").checked == true)
          puttemples();
        else
          cleartemples();
      }

      templeslocs = [
['  Kanaka Durga Temple   ', 16.51534779 , 80.60589016 ] ,
['  Malleswara Swamivari Temple   ', 16.51617881 , 80.60673127 ] ,
['  Ayyappa Swamy Temple  Gollapudi   ', 16.54576426 , 80.5778805  ] ,
['  Old Sivalayam  1 Town   ', 16.51304681 , 80.60839699 ] ,
['  Sivalayam Temple  Yenamalakuduru  ', 16.48589188 , 80.66016066 ]

      ];

      function puttemples() {

        for (i = 0; i < templeslocs.length; i++) {  
          templesmark = new google.maps.Marker({
            position: new google.maps.LatLng(templeslocs[i][1], templeslocs[i][2]),
            map: map,
            icon: 'temple.png',
        animation: google.maps.Animation.DROP
          });
          templesmarkers.push(templesmark);
          google.maps.event.addListener(templesmark, 'click', (function(templesmark, i) {
            return function() {
              templesiw.setContent(templeslocs[i][0]);
              templesiw.open(map, templesmark);
            }
          })(templesmark, i));
        }
      }

      function cleartemples() {
        for (i = 0; i < templesmarkers.length; i++) {  
            templesmarkers[i].setMap(null);
        }
        templesiw.setMap(null);
      }

      function loadtrafficpts() {
        if(document.getElementById("trafficptsid").checked == true)
          puttrafficpts();
        else
          cleartrafficpts();
      }

      trafficptslocs = [
      ['  Chaprala  ', 16.76385898 , 80.70485019 ],
['  Ramavaravarappadu Ring  ', 16.52384112 , 80.67746467 ],
['  Gannavaram  ', 16.53759017 , 80.79939835 ],
['  Miryalaguda   ', 16.87079225 , 79.57162107 ],
['  Piduguralla   ', 16.47700266 , 79.89297941 ],
['  Addanki   ', 15.81004588 , 79.97316023 ],
['  Medarametla   ', 15.72445859 , 80.0165673  ],
['  Narketpalli   ', 17.20064817 , 79.19750894 ],
['  Gudivada  ', 16.42670682 , 80.99428372 ],
['  Pamarru   ', 16.32067548 , 80.96300776 ],
['  Machilipatnam   ', 16.1721065  , 81.13160028 ],
['  Nalgonda  ', 17.03972773 , 79.27379559 ],
['  Sattenapalli  ', 16.39343644 , 80.15446996 ],
['  Guntur  ', 16.30296784 , 80.43824764 ],
['  Rayanapadu  ', 16.57372901 , 80.56681393 ],
['  Guntupalli  ', 16.56647632 , 80.54886428 ],
['  Kothuru Tadepalli   ', 16.60865228 , 80.61878365 ],
['  Pamulakaluva  ', 16.56248773 , 80.62142753 ],
['  Velagaleru  ', 16.64894763 , 80.61396319 ],
['  G. Konduru  ', 16.68368381 , 80.57752927 ],
['  Kondapalli  ', 16.62047649 , 80.54053304 ],
['  Atkuru  ', 16.67505057 , 80.59617524 ],
['  Ibrahimpatnam Ring  ', 16.58901205 , 80.52092857 ],
['  Surampalli Cross Road   ', 16.58742363 , 80.7005263  ],
['  Gunadala  ', 16.52270383 , 80.66644239 ],
['  N T P S  Nunna  ', 16.56381647 , 80.67643369 ],
['  Nunna   ', 16.57763738 , 80.68503141 ],
['  Y.V.Rao estate  ', 16.55494295 , 80.61990073 ],
['  Pipula road   ', 16.54453281 , 80.64362168 ],
['  Payakapuram   ', 16.54873219 , 80.6553386  ],
['  Agiripalli  ', 16.6816072  , 80.78444793 ],
['  Kesarapalli   ', 16.5211872  , 80.77573619 ],
['  Kankipadu Centre  ', 16.43427858 , 80.76777543 ],
['  Enikepadu   ', 16.51352839 , 80.70709085 ],
['  Tadigadapa 100 feet Road  ', 16.4790666  , 80.69694593 ],
['  Nidamanuru  ', 16.50941951 , 80.71646599 ],
['  Poranki   ', 16.47690355 , 80.70335258 ],
['  Vuyyuru   ', 16.36489593 , 80.84361404 ],
['  Manikonda   ', 16.44095769 , 80.86489576 ],
['  Telaprolu   ', 16.58679649 , 80.88557467 ],
['  Suryapet  ', 17.14321461 , 79.63087719 ],
['  Kallur  ', 17.20057204 , 80.55934696 ],
['  Eluru   ', 16.71380253 , 81.094506 ],
['  Jangareddigudem   ', 17.12834686 , 81.29364653 ],
['  Aswaraopeta   ', 17.24384154 , 81.13203823 ],
['  Mopidevi  ', 16.06525744 , 80.92746088 ],
['  Ongole  ', 15.50672482 , 80.05209593 ],
['  Chirala   ', 15.81400925 , 80.35511225 ],
['  Chillakallu   ', 16.89377016 , 80.13896815 ],
['  Kodada  ', 17.00060506 , 79.98227261 ],
['  Rajahmundry   ', 16.99805218 , 81.80625769 ],
['  Khammam   ', 17.23256152 , 80.14762776 ],
['  Vijayawada  ', 16.51302366 , 80.63973533 ],
['  Chandrala   ', 16.76385898 , 80.70485019 ],
['  Nuziveedu   ', 16.78673827 , 80.8492391  ],
['  Mylavaram   ', 16.75360353 , 80.6443035  ],
['  Wagon Work Shop   ', 16.58447781 , 80.55458179 ],
['  Elaprolu  ', 16.6023377  , 80.55849797 ],
['  CVR Fly Over  ', 16.54491081 , 80.61292544 ],
['  Hanuman Jn.   ', 16.63545419 , 80.97159291 ],
['  Nallakunta  ', 16.55837789 , 80.56784039 ],
['  Jakkampudi  ', 16.58211091 , 80.62007119 ],
['  Shabad  ', 16.58388909 , 80.61546909 ],
['  Surayapalem   ', 16.54842385 , 80.56239544 ],
['  Gollapudi Y Jn.   ', 16.54002807 , 80.58300651 ]

      ];

      function puttrafficpts() {

        for (i = 0; i < trafficptslocs.length; i++) {  
          trafficptsmark = new google.maps.Marker({
            position: new google.maps.LatLng(trafficptslocs[i][1], trafficptslocs[i][2]),
            map: map,
            icon: 'traffic.png',
        animation: google.maps.Animation.DROP
          });
          trafficptsmarkers.push(trafficptsmark);
          google.maps.event.addListener(trafficptsmark, 'click', (function(trafficptsmark, i) {
            return function() {
              trafficptsiw.setContent(trafficptslocs[i][0]);
              trafficptsiw.open(map, trafficptsmark);
            }
          })(trafficptsmark, i));
        }
      }

      function cleartrafficpts() {
        for (i = 0; i < trafficptsmarkers.length; i++) {  
            trafficptsmarkers[i].setMap(null);
        }
        trafficptsiw.setMap(null);
      }

      function loadghats() {
        if(document.getElementById("ghatsid").checked == true)
          putghats();
        else
          clearghats();
      }

      ghatslocs = [

      ['  Damuluru Ghat   ', 16.60323056 , 80.41208056 ] ,
['  Jupudi Ghat   ', 16.58258611 , 80.51051111 ] ,
['  pavitra sangamam ghat   ', 16.57677774 , 80.52013928 ] ,
['  Thummalapalem Ghat-1  ', 16.56968611 , 80.52993889 ] ,
['  Thummalapalem Ghat-2  ', 16.57059167 , 80.52918056 ] ,
['  Guntupalli Village Ghat   ', 16.55555556 , 80.54574444 ] ,
['  surayapalem ghat  ', 16.54521932 , 80.55882722 ] ,
['  Gollapudi Ghat  ', 16.53581667 , 80.57596944 ] ,
['  Durga Ghat  ', 16.51235082 , 80.60415706 ] ,
['  Krishnaveni Pushkara Ghat -1  ', 16.51056111 , 80.6097 ] ,
['  Krishnaveni Pushkara Ghat - 2   ', 16.51035556 , 80.609825 ] ,
['  Krishnaveni Pushkara Ghat - 3   ', 16.51023249 , 80.60991706 ] ,
['  Krishnaveni Pushkara Ghat - 4   ', 16.51003056 , 80.60999167 ] ,
['  Krishnaveni Pushkara Ghat - 5   ', 16.50991667 , 80.6101 ] ,
['  Krishnaveni Pushkara Ghat - 6   ', 16.5098 , 80.61024444 ] ,
['  Krishnaveni Pushkara Ghat - 7   ', 16.50966667 , 80.61038611 ] ,
['  Krishnaveni Pushkara Ghat - 8   ', 16.5094213  , 80.61060414 ] ,
['  Krishnaveni Pushkara Ghat - 9   ', 16.50920658 , 80.61073424 ] ,
['  Krishnaveni Pushkara Ghat - 10  ', 16.50782093 , 80.61173762 ] ,
['  Padmavathi Ghat   ', 16.50628708 , 80.61478047 ] ,
['  Marwadi Temple Ghat - 1   ', 16.50459444 , 80.61991389 ] ,
['  Marvadi Temple Ghat - 2   ', 16.50422778 , 80.62044444 ] ,
['  Visweswara Temple Ghat - 1  ', 16.50360086 , 80.62135153 ] ,
['  Visweswara Temple Ghat - 2  ', 16.50351442 , 80.62146906 ] ,
['  Krishna Ghat - 1  ', 16.50342919 , 80.62155888 ] ,
['  Krishna Ghat - 2  ', 16.50328992 , 80.62171507 ] ,
['  Kodandarama Ghat  ', 16.50323958 , 80.62181054 ] ,
['  Vijaya Krishna Pushkara Ghat  ', 16.49779625 , 80.63189764 ] ,
['  Ramalingeswawr Nagar Ghat   ', 16.48717764 , 80.65174388 ] ,
['  Yenamalakuduru Ghat   ', 16.48213079 , 80.65923902 ] ,
['  Pedapulipaka Ghat   ', 16.45767222 , 80.67847222 ] ,
['  Chodavaram Ghat   ', 16.42661498 , 80.69189181 ] ,
['  Madduru Ghat  ', 16.39930278 , 80.72345  ] ,
['  Royyuru Ghat  ', 16.38232221 , 80.73515293 ] ,
['  Vallurupalem Ghat   ', 16.36798056 , 80.76369722 ] ,
['  Thotlavallur Ghat - 1   ', 16.34736111 , 80.77887778 ] ,
['  Thotlavallur Ghat - 2   ', 16.34719722 , 80.77892778 ] ,
['  Chagantipadu Ghat   ', 16.31448542 , 80.79391921 ] ,
['  Devarapalli Ghat1   ', 16.29326686 , 80.80990229 ] ,
['  Iluru Ghat 1  ', 16.26611944 , 80.82513611 ] ,
['  Iluru Ghat -2   ', 16.26107778 , 80.826  ] ,
['  Inapuru Ghat  ', 16.24752778 , 80.82883611 ] ,
['  Lankapalli Ghat   ', 16.22641303 , 80.83099774 ]

      ];

      function putghats() {

        for (i = 0; i < ghatslocs.length; i++) {  
          ghatsmark = new google.maps.Marker({
            position: new google.maps.LatLng(ghatslocs[i][1], ghatslocs[i][2]),
            map: map,
            icon: 'ghats.png',
            animation: google.maps.Animation.DROP
          });
          ghatsmarkers.push(ghatsmark);
          google.maps.event.addListener(ghatsmark, 'click', (function(ghatsmark, i) {
            return function() {
              ghatsiw.setContent(ghatslocs[i][0]);
              ghatsiw.open(map, ghatsmark);
            }
          })(ghatsmark, i));
        }
      }

      function clearghats() {
        for (i = 0; i < ghatsmarkers.length; i++) {  
            ghatsmarkers[i].setMap(null);
        }
        ghatsiw.setMap(null);
      }

      function clearclickbtn()
      {
        origin_place_id = null;
        destination_place_id = null;
        // origin = null;
        // destination = null;
      }
       function closeRight() {
          document.getElementById("right-panel").style.width = "0";
          origin_place_id = null;
          destination_place_id = null;
          directionsDisplay.setMap(null);
          $('#origin-input').val('');
          $('#destination-input').val('');
      }