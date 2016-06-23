var visakhydpath1;
var visakhydpath2;
var visakhydpath3;
function visakhydclick1()
{
  if(document.getElementById('visakhydid1').checked == true)
  {
    putvisakhydpath1();

  }
  else
  {
    clearvisakhyd1();
  } 
}
function putvisakhydpath1()
{
  var dirvisakhyd1 = visakhyd1js();
  visakhydpath1 = new google.maps.Polyline(
  {
    path: dirvisakhyd1,
    geodesic: true,
    strokeColor: '#333333',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  visakhydpath1.setMap(map); 
}
function clearvisakhyd1()
{
  visakhydpath1.setMap(null);
}

function visakhydclick2()
{
  if(document.getElementById('visakhydid2').checked == true)
  {
    putvisakhydpath2();

  }
  else
  {
    clearvisakhyd2();
  } 
}
function putvisakhydpath2()
{
  var dirvisakhyd2 = visakhyd2js();
  visakhydpath2 = new google.maps.Polyline(
  {
    path: dirvisakhyd2,
    geodesic: true,
    strokeColor: '#cc6699',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  visakhydpath2.setMap(map); 
}
function clearvisakhyd2()
{
  visakhydpath2.setMap(null);
}

function visakhydclick3()
{
  if(document.getElementById('visakhydid3').checked == true)
  {
    putvisakhydpath3();

  }
  else
  {
    clearvisakhyd3();
  } 
}
function putvisakhydpath3()
{
  var dirvisakhyd3 = visakhyd3js();
  visakhydpath3 = new google.maps.Polyline(
  {
    path: dirvisakhyd3,
    geodesic: true,
    strokeColor: '#cc5200',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  visakhydpath3.setMap(map); 
}
function clearvisakhyd3()
{
  visakhydpath3.setMap(null);
}
var visakchen1path;
var visakchen2path;
var visakchen3path;
function visakchen1click()
{
  if(document.getElementById('visakchen1id').checked == true)
  {
    putvisakchen1();
  }
  else
  {
    clearvisakchen1();
  } 
}
function putvisakchen1()
{
  var dirvisakchen1 = visakchen1js();
  visakchen1path = new google.maps.Polyline(
  {
    path: dirvisakchen1,
    geodesic: true,
    strokeColor: '#000000',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  visakchen1path.setMap(map); 
}
function clearvisakchen1()
{
  visakchen1path.setMap(null);
}

function visakchen2click()
{
  if(document.getElementById('visakchen2id').checked == true)
  {
    putvisakchen2();
  }
  else
  {
    clearvisakchen2();
  } 
}
function putvisakchen2()
{
  var dirvisakchen2 = visakchen2js();
  visakchen2path = new google.maps.Polyline(
  {
    path: dirvisakchen2,
    geodesic: true,
    strokeColor: '#ff751a',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  visakchen2path.setMap(map); 
}
function clearvisakchen2()
{
  visakchen2path.setMap(null);
}

function visakchen3click()
{
  if(document.getElementById('visakchen3id').checked == true)
  {
    putvisakchen3();
  }
  else
  {
    clearvisakchen3();
  } 
}
function putvisakchen3()
{
  var dirvisakchen3 = visakchen3js();
  visakchen3path = new google.maps.Polyline(
  {
    path: dirvisakchen3,
    geodesic: true,
    strokeColor: '#802b00',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  visakchen3path.setMap(map); 
}
function clearvisakchen3()
{
  visakchen3path.setMap(null);
}

function visakchen4click()
{
  if(document.getElementById('visakchen4id').checked == true)
  {
    putvisakchen4();
  }
  else
  {
    clearvisakchen4();
  } 
}
function putvisakchen4()
{
  var dirvisakchen4 = visakchen4js();
  visakchen4path = new google.maps.Polyline(
  {
    path: dirvisakchen4,
    geodesic: true,
    strokeColor: '#bf4080',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  visakchen4path.setMap(map); 
}
function clearvisakchen4()
{
  visakchen4path.setMap(null);
}
var hydchen1path;
var hydchen2path;
var hydchen3path;
function hydchen1click()
{
  if(document.getElementById('hydchen1id').checked == true)
  {
    puthydchen1();
  }
  else
  {
    clearhydchen1();
  }
}
function puthydchen1()
{
  var dirhydchen1 = hydchen1js();
  hydchen1path = new google.maps.Polyline(
  {
    path: dirhydchen1,
    geodesic: true,
    strokeColor: '#000000',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  hydchen1path.setMap(map); 
}
function clearhydchen1()
{
  hydchen1path.setMap(null);
}
function hydchen2click()
{
  if(document.getElementById('hydchen2id').checked == true)
  {
    puthydchen2();
  }
  else
  {
    clearhydchen2();
  }
}
function puthydchen2()
{
  var dirhydchen2 = hydchen2js();
  hydchen2path = new google.maps.Polyline(
  {
    path: dirhydchen2,
    geodesic: true,
    strokeColor: '#b800e6',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  hydchen2path.setMap(map); 
}
function clearhydchen2()
{
  hydchen2path.setMap(null);
}

function hydchen3click()
{
  if(document.getElementById('hydchen3id').checked == true)
  {
    puthydchen3();
  }
  else
  {
    clearhydchen3();
  }
}
function puthydchen3()
{
  var dirhydchen3 = hydchen3js();
  hydchen3path = new google.maps.Polyline(
  {
    path: dirhydchen3,
    geodesic: true,
    strokeColor: '#00b359',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  hydchen3path.setMap(map); 
}
function clearhydchen3()
{
  hydchen3path.setMap(null);
}

var elurugun1path;
var elurugun2path;
var elurugun3path;
function elurugun1click()
{
  if(document.getElementById('elurugun1id').checked == true)
  {
    putelurugun1();
  }
  else{
    clearelurugun1();
  }
}
function putelurugun1()
{
  var direlurugun1 = elurugunturu1js();
  elurugun1path = new google.maps.Polyline(
    {
      path:direlurugun1,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1,
      strokeWeight: 4
    });
  elurugun1path.setMap(map);
}
function clearelurugun1()
{
  elurugun1path.setMap(null);
}
function elurugun2click()
{
  if(document.getElementById('elurugun2id').checked == true)
  {
    putelurugun2();
  }
  else
  {
    clearelurugun2();
  }
}
function putelurugun2()
{
  var direlurugun2 = elurugunturu2js();
  elurugun2path = new google.maps.Polyline(
    {
      path:direlurugun2,
      geodesic: true,
      strokeColor: '#003333',
      strokeOpacity: 1,
      strokeWeight: 4
    });
  elurugun2path.setMap(map);
}
function clearelurugun2()
{
  elurugun2path.setMap(null);
}
function elurugun3click()
{
  if(document.getElementById('elurugun3id').checked == true)
  {
    putelurugun3();
  }
  else
  {
    clearelurugun3();
  }
}
function putelurugun3()
{
  var direlurugun3 = elurugunturu3js();
  elurugun3path = new google.maps.Polyline(
    {
      path:direlurugun3,
      geodesic: true,
      strokeColor: '#55552b',
      strokeOpacity: 1,
      strokeWeight: 4
    });
  elurugun3path.setMap(map);
}
function clearelurugun3()
{
  elurugun3path.setMap(null);
}
var eluruhyd1path;
var eluruhyd2path;
var eluruhyd3path;
var eluruhyd4path;
function eluruhyd1click()
{
  if(document.getElementById('eluruhyd1id').checked == true)
  {
    puteluruhyd1();
  }
  else
  {
    cleareluruhyd1();
  }
}
function puteluruhyd1()
{
  var direluruhyd1 = eluruhyd1js();
  eluruhyd1path = new google.maps.Polyline(
    {
      path:direluruhyd1,
      geodesic: true,
      strokeColor: '#cc00ff',
      strokeOpacity: 1,
      strokeWeight: 4
    });
  eluruhyd1path.setMap(map);
}
function cleareluruhyd1()
{
  eluruhyd1path.setMap(null);
}
function eluruhyd2click()
{
  if(document.getElementById('eluruhyd2id').checked == true)
  {
    puteluruhyd2();
  }
  else
  {
    cleareluruhyd2();
  }
}
function puteluruhyd2()
{
  var direluruhyd2 = eluruhyd2js();
  eluruhyd2path = new google.maps.Polyline(
    {
      path:direluruhyd2,
      geodesic: true,
      strokeColor: '#b30059',
      strokeOpacity: 1,
      strokeWeight: 4
    });
  eluruhyd2path.setMap(map);
}
function cleareluruhyd2()
{
  eluruhyd2path.setMap(null);
}

function eluruhyd3click()
{
  if(document.getElementById('eluruhyd3id').checked == true)
  {
    // alert('123');
    puteluruhyd3();
  } 
  else
  {
    cleareluruhyd3();
  }
}

function puteluruhyd3()
{
  var direluruhyd3 = eluruhyd3js();
  eluruhyd3path = new google.maps.Polyline(
    {
      path:direluruhyd3,
      geodesic: true,
      strokeColor: '#669900',
      strokeOpacity: 1,
      strokeWeight: 4
    });
  eluruhyd3path.setMap(map);
}
function cleareluruhyd3()
{
  eluruhyd3path.setMap(null);
}

function eluruhyd4click()
{
  if(document.getElementById('eluruhyd4id').checked == true)
  {
    // alert('124');
    puteluruhyd4();
  } 
  else
  {
    cleareluruhyd4();
  }
}

function puteluruhyd4()
{
  var direluruhyd4 = eluruhyd4js();
  eluruhyd4path = new google.maps.Polyline(
    {
      path:direluruhyd4,
      geodesic: true,
      strokeColor: '#444422',
      strokeOpacity: 1,
      strokeWeight: 4
    });
  eluruhyd4path.setMap(map);
}
function cleareluruhyd4()
{
  eluruhyd4path.setMap(null);
}

var hydmachilipath1;
var hydmachilipath2;
var hydmachilipath3;
var hydmachilipath4;
function hydmachili1click()
{
  if(document.getElementById('hydmachili1id').checked == true)
  {
    puthydmachili1();
  }
  else
  {
    clearhydmachili1();
  }
}

function puthydmachili1()
{
var dirhydmachili1 = hydmachili1js();
  hydmachilipath1 = new google.maps.Polyline(
    {
      path:dirhydmachili1,
      geodesic: true,
      strokeColor: '#ff4000',
      strokeOpacity: 1,
      strokeWeight: 4
    });
  hydmachilipath1.setMap(map); 
}
function clearhydmachili1()
{
  hydmachilipath1.setMap(null);
}
function hydmachili2click()
{
  if(document.getElementById('hydmachili2id').checked == true)
  {
    puthydmachili2();
  }
  else
  {
    clearhydmachili2();
  }
}

function puthydmachili2()
{
var dirhydmachili2 = hydmachili2js();
  hydmachilipath2 = new google.maps.Polyline(
    {
      path:dirhydmachili2,
      geodesic: true,
      strokeColor: '#ff66ff',
      strokeOpacity: 1,
      strokeWeight: 4
    });
  hydmachilipath2.setMap(map); 
}
function clearhydmachili2()
{
  hydmachilipath2.setMap(null);
}

function hydmachili3click()
{
  if(document.getElementById('hydmachili3id').checked == true)
  {
    puthydmachili3();
  }
  else
  {
    clearhydmachili3();
  }
}

function puthydmachili3()
{
var dirhydmachili3 = hydmachili3js();
  hydmachilipath3 = new google.maps.Polyline(
    {
      path:dirhydmachili3,
      geodesic: true,
      strokeColor: '#b3b300',
      strokeOpacity: 1,
      strokeWeight: 4
    });
  hydmachilipath3.setMap(map); 
}
function clearhydmachili3()
{
  hydmachilipath3.setMap(null);
}

function hydmachili4click()
{
  if(document.getElementById('hydmachili4id').checked == true)
  {
    puthydmachili4();
  }
  else
  {
    clearhydmachili4();
  }
}

function puthydmachili4()
{
var dirhydmachili4 = hydmachili4js();
  hydmachilipath4 = new google.maps.Polyline(
    {
      path:dirhydmachili4,
      geodesic: true,
      strokeColor: '#004080',
      strokeOpacity: 1,
      strokeWeight: 4
    });
  hydmachilipath4.setMap(map); 
}
function clearhydmachili4()
{
  hydmachilipath4.setMap(null);
}
function hydmachili5click()
{
  if(document.getElementById('hydmachili5id').checked == true)
  {
    puthydmachili5();
  }
  else
  {
    clearhydmachili5();
  }
}

function puthydmachili5()
{
var dirhydmachili5 = hydmachili5js();
  hydmachilipath5 = new google.maps.Polyline(
    {
      path:dirhydmachili5,
      geodesic: true,
      strokeColor: '#ff6666',
      strokeOpacity: 1,
      strokeWeight: 3
    });
  hydmachilipath5.setMap(map); 
}
function clearhydmachili5()
{
  hydmachilipath5.setMap(null);
}

var hydgunpath1;
var hydgunpath2;
var hydgunpath3;
var hydgunpath4;

function hydgun1click()
{
  if(document.getElementById('hydgun1id').checked == true)
  {
    puthydgun1();
  }
  else
  {
    clearhydgun1();
  }
}
function puthydgun1()
{
  var dirhydgun1 = hydgun1js();
  hydgunpath1 = new google.maps.Polyline(
  {
    path:dirhydgun1,
    geodesic: true,
    strokeColor: '#ff6666',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  hydgunpath1.setMap(map);
}
function clearhydgun1()
{
  hydgunpath1.setMap(null);
}
function hydgun2click()
{
  if(document.getElementById('hydgun2id').checked == true)
  {
    puthydgun2();
  }
  else
  {
    clearhydgun2();
  }
}
function puthydgun2()
{
  var dirhydgun2 = hydgun2js();
  hydgunpath2 = new google.maps.Polyline(
  {
    path:dirhydgun2,
    geodesic: true,
    strokeColor: '#993333',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  hydgunpath2.setMap(map);
  var dirhydgun3 = hydgun3js();
  hydgunpath3 = new google.maps.Polyline(
  {
    path:dirhydgun3,
    geodesic: true,
    strokeColor: '#cc3399',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  hydgunpath3.setMap(map);
  var dirhydgun4 = hydgun4js();
  hydgunpath4 = new google.maps.Polyline(
  {
    path:dirhydgun4,
    geodesic: true,
    strokeColor: '#ff6600',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  hydgunpath4.setMap(map);
}
function clearhydgun2()
{
  hydgunpath2.setMap(null);
  hydgunpath3.setMap(null);
  hydgunpath4.setMap(null);
}

var gunturibripath1;
var gunturibripath2;
var gunturibripath3;
var gunturibripath4;
var gunturibripath5;
var gunturibripath6;
var gunturibripath7;
var gunturibripath8;

function gunibri1click()
{
  if(document.getElementById('gunibri1id').checked == true)
  {
    putgunibri1();
  }
  else
  {
    cleargunibri1();
  }
}
function putgunibri1()
{
  var dirgunibri1 = gunibri1js();
  gunturibripath1 = new google.maps.Polyline(
  {
    path: dirgunibri1,
    geodesic: true,
    strokeColor: '#993333',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  gunturibripath1.setMap(map);
}
function cleargunibri1()
{
  gunturibripath1.setMap(null);
}
function gunibri2click()
{
  if(document.getElementById('gunibri2id').checked == true)
  {
    putgunibri2();
  }
  else
  {
    cleargunibri2();
  }
}
function putgunibri2()
{
  var dirgunibri2 = gunibri2js();
  gunturibripath2 = new google.maps.Polyline(
  {
    path: dirgunibri2,
    geodesic: true,
    strokeColor: '#993366',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  gunturibripath2.setMap(map);
}
function cleargunibri2()
{
  // cleargunibri1();
  gunturibripath2.setMap(null);
}

function gunibri3click()
{
  if(document.getElementById('gunibri3id').checked == true)
  {
    putgunibri3();
  }
  else
  {
    cleargunibri3();
  }
}
function putgunibri3()
{
  var dirgunibri3 = gunibri3js();
  gunturibripath3 = new google.maps.Polyline(
  {
    path: dirgunibri3,
    geodesic: true,
    strokeColor: '#cc99ff',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  gunturibripath3.setMap(map);
}
function cleargunibri3()
{
  // cleargunibri1();
  gunturibripath3.setMap(null);
}
function gunibri4click()
{
  if(document.getElementById('gunibri4id').checked == true)
  {
    putgunibri4();
  }
  else
  {
    cleargunibri4();
  }
}
function putgunibri4()
{
  var dirgunibri4 = gunibri4js();
  gunturibripath4 = new google.maps.Polyline(
  {
    path: dirgunibri4,
    geodesic: true,
    strokeColor: '#00ccff',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  gunturibripath4.setMap(map);
  var dirgunibri5 = gunibri5js();
  gunturibripath5 = new google.maps.Polyline(
  {
    path: dirgunibri5,
    geodesic: true,
    strokeColor: '#00ccff',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  gunturibripath5.setMap(map);
}
function cleargunibri4()
{
  // cleargunibri1();
  gunturibripath4.setMap(null);
  // gunturibripath5.setMap(null);
}
function gunibri5click()
{
  if(document.getElementById('gunibri5id').checked == true)
  {
    putgunibri5();
  }
  else
  {
    cleargunibri5();
  }
}
function putgunibri5()
{
  var myCoordinates = [
new google.maps.LatLng(16.462427,80.648403),
new google.maps.LatLng(16.468682,80.659046),
new google.maps.LatLng(16.471481,80.669174),
new google.maps.LatLng(16.473292,80.684280),
new google.maps.LatLng(16.480041,80.696812)
];
var polyOptions = {
  path: myCoordinates,
  geodesic: true,
  strokeColor: "#333300",
  strokeOpacity: 1,
  strokeWeight: 3
  }
gunturibripath5 = new google.maps.Polyline(polyOptions);
gunturibripath5.setMap(map);

var dirgunibri6 = gunibri6js();
  gunturibripath6 = new google.maps.Polyline(
  {
    path: dirgunibri6,
    geodesic: true,
    strokeColor: '#333300',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  gunturibripath6.setMap(map);

  var dirgunibri7 = gunibri7js();
  gunturibripath7 = new google.maps.Polyline(
  {
    path: dirgunibri7,
    geodesic: true,
    strokeColor: '#333300',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  gunturibripath7.setMap(map);

}
function cleargunibri5()
{
  // cleargunibri1();
  // alert('123');
  gunturibripath5.setMap(null);
  gunturibripath6.setMap(null);
  gunturibripath7.setMap(null);

}
function gunibri8click()
{
  if(document.getElementById('gunibri8id').checked == true)
  {
    putgunibri8();
  }
  else
  {
    cleargunibri8();
  }
}
var gunturibripath55,gunturibripath66;
function putgunibri8()
{
  var myCoordinates = [
new google.maps.LatLng(16.462427,80.648403),
new google.maps.LatLng(16.468682,80.659046),
new google.maps.LatLng(16.471481,80.669174),
new google.maps.LatLng(16.473292,80.684280),
new google.maps.LatLng(16.480041,80.696812)
];
var polyOptions = {
  path: myCoordinates,
  geodesic: true,
  strokeColor: "#e600ac",
  strokeOpacity: 1,
  strokeWeight: 3
  }
gunturibripath55 = new google.maps.Polyline(polyOptions);
gunturibripath55.setMap(map);

var dirgunibri6 = gunibri6js();
  gunturibripath66 = new google.maps.Polyline(
  {
    path: dirgunibri6,
    geodesic: true,
    strokeColor: '#e600ac',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  gunturibripath66.setMap(map);
  var dirgunibri8 = gunibri8js();
  gunturibripath8 = new google.maps.Polyline(
  {
    path: dirgunibri8,
    geodesic: true,
    strokeColor: '#e600ac',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  gunturibripath8.setMap(map);
}
function cleargunibri8()
{
  // cleargunibri1();
  gunturibripath55.setMap(null);
  gunturibripath66.setMap(null);
  gunturibripath8.setMap(null);
  // gunturibripath5.setMap(null);
}
var eluruibri1path;
var eluruibri2path;
var eluruibri3path;

function eluruibri1click()
{
  if(document.getElementById('eluruibri1id').checked == true)
  {
    puteluruibri1();
  }
  else
  {
    cleareluruibri1();
  }
}

function puteluruibri1()
{
  var direluruibri1 = eluruibri1js();
  eluruibri1path = new google.maps.Polyline(
  {
    path: direluruibri1,
    geodesic: true,
    strokeColor: '#000000',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  eluruibri1path.setMap(map); 
}
function cleareluruibri1()
{
  eluruibri1path.setMap(null);
}

function eluruibri2click()
{
  if(document.getElementById('eluruibri2id').checked == true)
  {
    puteluruibri2();
  }
  else
  {
    cleareluruibri2();
  }
}

function puteluruibri2()
{
  var direluruibri2 = eluruibri2js();
  eluruibri2path = new google.maps.Polyline(
  {
    path: direluruibri2,
    geodesic: true,
    strokeColor: '#ff6600',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  eluruibri2path.setMap(map); 
}
function cleareluruibri2()
{
  eluruibri2path.setMap(null);
}
var nktpamul1path;
var it;
var it1;
function nktpamul1click()
{
  if(document.getElementById('nktpamul1id').checked == true)
    putnkt1pamul();
  else
    clearnkt1pamul();
}
function putnkt1pamul()
{
  var dirnkpamul = nktpml1();
  nktpamul1path = new google.maps.Polyline(
  {
    path: dirnkpamul,
    geodesic: true,
    strokeColor: '#ff6600',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  nktpamul1path.setMap(map); 
  var myCoordinates = [
new google.maps.LatLng(16.540608,80.582142),
new google.maps.LatLng(16.539456,80.585575),
new google.maps.LatLng(16.539456,80.586777),
new google.maps.LatLng(16.539456,80.588322),
new google.maps.LatLng(16.539291,80.589695),
new google.maps.LatLng(16.538797,80.591755),
new google.maps.LatLng(16.539127,80.592785),
new google.maps.LatLng(16.538962,80.593987),
new google.maps.LatLng(16.538304,80.595531),
new google.maps.LatLng(16.538139,80.596561),
new google.maps.LatLng(16.537975,80.597591),
new google.maps.LatLng(16.537481,80.598621),
new google.maps.LatLng(16.536823,80.600681),
new google.maps.LatLng(16.536329,80.601368),
new google.maps.LatLng(16.535342,80.602741),
new google.maps.LatLng(16.534519,80.603943),
new google.maps.LatLng(16.534190,80.604630),
new google.maps.LatLng(16.533696,80.605145),
new google.maps.LatLng(16.533367,80.605659),
new google.maps.LatLng(16.533202,80.606003),
new google.maps.LatLng(16.535506,80.606346),
new google.maps.LatLng(16.537810,80.607033),
new google.maps.LatLng(16.540114,80.608063),
new google.maps.LatLng(16.542089,80.609093),
new google.maps.LatLng(16.542911,80.610123),
new google.maps.LatLng(16.543899,80.610981),
new google.maps.LatLng(16.544721,80.613041),
new google.maps.LatLng(16.546038,80.614586),
new google.maps.LatLng(16.547354,80.615444),
new google.maps.LatLng(16.549164,80.616302),
new google.maps.LatLng(16.551304,80.616817),
new google.maps.LatLng(16.552620,80.617332),
new google.maps.LatLng(16.553772,80.617847),
new google.maps.LatLng(16.554594,80.618191)
];
var polyOptions = {
path: myCoordinates,
geodesic: true,
    strokeColor: '#660000',
    strokeOpacity: 1,
    strokeWeight: 3
}
it = new google.maps.Polyline(polyOptions);
it.setMap(map);

var myCoordinates1 = [
new google.maps.LatLng(16.558214,80.567808),
new google.maps.LatLng(16.557392,80.568838),
new google.maps.LatLng(16.556569,80.569868),
new google.maps.LatLng(16.555335,80.571070),
new google.maps.LatLng(16.554101,80.571671),
new google.maps.LatLng(16.553360,80.572529),
new google.maps.LatLng(16.552126,80.573559),
new google.maps.LatLng(16.549987,80.575275),
new google.maps.LatLng(16.547683,80.577078),
new google.maps.LatLng(16.540854,80.581970),
new google.maps.LatLng(16.540525,80.582228)
];
var polyOptions1 = {
path: myCoordinates1,
geodesic: true,
    strokeColor: '#660000',
    strokeOpacity: 1,
    strokeWeight: 3
}
it1 = new google.maps.Polyline(polyOptions1);
it1.setMap(map);


}
function clearnkt1pamul()
{
  nktpamul1path.setMap(null);
  it.setMap(null);
  it1.setMap(null);
}

function gollapamul1click()
{
  if(document.getElementById('gollapamul1id').checked == true)
  {
    putgollapamul1();
  } 
  else
  {
    cleargollapamul1();
  }
}
var itgolla;
var itgolla2;
function putgollapamul1()
{
  var myCoordinates = [
new google.maps.LatLng(16.540196,80.582829),
new google.maps.LatLng(16.541677,80.583773),
new google.maps.LatLng(16.542212,80.583773),
new google.maps.LatLng(16.542829,80.583773),
new google.maps.LatLng(16.543528,80.583944),
new google.maps.LatLng(16.544063,80.583987),
new google.maps.LatLng(16.544557,80.584245),
new google.maps.LatLng(16.545133,80.584373),
new google.maps.LatLng(16.550275,80.587120),
new google.maps.LatLng(16.556610,80.591068),
new google.maps.LatLng(16.557762,80.593514),
new google.maps.LatLng(16.558420,80.594931),
new google.maps.LatLng(16.563315,80.601454),
new google.maps.LatLng(16.565907,80.604415),
new google.maps.LatLng(16.567264,80.605617),
new google.maps.LatLng(16.567675,80.606217),
new google.maps.LatLng(16.570596,80.608492),
new google.maps.LatLng(16.571377,80.609179),
new google.maps.LatLng(16.571830,80.609608),
new google.maps.LatLng(16.573270,80.610809),
new google.maps.LatLng(16.575573,80.612526),
new google.maps.LatLng(16.575614,80.612741),
new google.maps.LatLng(16.574997,80.613642),
new google.maps.LatLng(16.574627,80.614157),
new google.maps.LatLng(16.574421,80.614543),
new google.maps.LatLng(16.574216,80.615616),
new google.maps.LatLng(16.574051,80.616388),
new google.maps.LatLng(16.574010,80.616946),
new google.maps.LatLng(16.573804,80.617633),
new google.maps.LatLng(16.573763,80.618320),
new google.maps.LatLng(16.573763,80.618448),
new google.maps.LatLng(16.571706,80.618019),
new google.maps.LatLng(16.570802,80.617719),
new google.maps.LatLng(16.570020,80.617547),
new google.maps.LatLng(16.568539,80.617590),
new google.maps.LatLng(16.567758,80.617719),
new google.maps.LatLng(16.566976,80.617805),
new google.maps.LatLng(16.566153,80.618019),
new google.maps.LatLng(16.565578,80.618277),
new google.maps.LatLng(16.565043,80.618620),
new google.maps.LatLng(16.564549,80.619092),
new google.maps.LatLng(16.564220,80.619521),
new google.maps.LatLng(16.563973,80.620079),
new google.maps.LatLng(16.563809,80.620208),
new google.maps.LatLng(16.563151,80.621152),
new google.maps.LatLng(16.554841,80.618405),
new google.maps.LatLng(16.553155,80.617805),
new google.maps.LatLng(16.548506,80.616217),
new google.maps.LatLng(16.545832,80.614929),
new google.maps.LatLng(16.545009,80.613298),
new google.maps.LatLng(16.544927,80.613041)
];
var polyOptions = {
path: myCoordinates,
geodesic: true,
    strokeColor: '#ff5500',
    strokeOpacity: 1,
    strokeWeight: 3

}
itgolla = new google.maps.Polyline(polyOptions);
itgolla.setMap(map);

///////////////////////////////////
var myCoordinates1 = [
new google.maps.LatLng(16.540608,80.582142),
new google.maps.LatLng(16.539456,80.585575),
new google.maps.LatLng(16.539456,80.586777),
new google.maps.LatLng(16.539456,80.588322),
new google.maps.LatLng(16.539291,80.589695),
new google.maps.LatLng(16.538797,80.591755),
new google.maps.LatLng(16.539127,80.592785),
new google.maps.LatLng(16.538962,80.593987),
new google.maps.LatLng(16.538304,80.595531),
new google.maps.LatLng(16.538139,80.596561),
new google.maps.LatLng(16.537975,80.597591),
new google.maps.LatLng(16.537481,80.598621),
new google.maps.LatLng(16.536823,80.600681),
new google.maps.LatLng(16.536329,80.601368),
new google.maps.LatLng(16.535342,80.602741),
new google.maps.LatLng(16.534519,80.603943),
new google.maps.LatLng(16.534190,80.604630),
new google.maps.LatLng(16.533696,80.605145),
new google.maps.LatLng(16.533367,80.605659),
new google.maps.LatLng(16.533202,80.606003),
new google.maps.LatLng(16.535506,80.606346),
new google.maps.LatLng(16.537810,80.607033),
new google.maps.LatLng(16.540114,80.608063),
new google.maps.LatLng(16.542089,80.609093),
new google.maps.LatLng(16.542911,80.610123),
new google.maps.LatLng(16.543899,80.610981),
new google.maps.LatLng(16.544721,80.613041),
new google.maps.LatLng(16.546038,80.614586),
new google.maps.LatLng(16.547354,80.615444),
new google.maps.LatLng(16.549164,80.616302),
new google.maps.LatLng(16.551304,80.616817),
new google.maps.LatLng(16.552620,80.617332),
new google.maps.LatLng(16.553772,80.617847),
new google.maps.LatLng(16.554594,80.618191)
];
var polyOptions1 = {
path: myCoordinates1,
geodesic: true,
strokeColor: '#660000',
strokeOpacity: 1,
strokeWeight: 3
}
itgolla2 = new google.maps.Polyline(polyOptions1);
itgolla2.setMap(map);

}
function cleargollapamul1()
{
  itgolla.setMap(null);
  itgolla2.setMap(null); 
}

function guntuprayanapaduclick()
{
  if(document.getElementById('guntprayana1id').checked ==  true)
  {
    putrailwaygete();
  }
  else
  {
    clearrailwaygate();
  }
}
var itray1;
var itray2;
function putrailwaygete()
{
  var myCoordinates = [
new google.maps.LatLng(16.566400,80.548797),
new google.maps.LatLng(16.573393,80.551372),
new google.maps.LatLng(16.576478,80.552874),
new google.maps.LatLng(16.579439,80.553861),
new google.maps.LatLng(16.582853,80.555363),
new google.maps.LatLng(16.584334,80.555964),
new google.maps.LatLng(16.584498,80.555964),
new google.maps.LatLng(16.584252,80.556350),
new google.maps.LatLng(16.583552,80.556865),
new google.maps.LatLng(16.583141,80.557208),
new google.maps.LatLng(16.578699,80.560813),
new google.maps.LatLng(16.577959,80.561543),
new google.maps.LatLng(16.574339,80.564890),
new google.maps.LatLng(16.572982,80.566649)
];
var polyOptions = {
path: myCoordinates,
geodesic: true,
strokeColor: '#ff6600',
strokeOpacity: 1,
strokeWeight: 3
}
itray1 = new google.maps.Polyline(polyOptions);
itray1.setMap(map);
/////////////////////////////
var myCoordinates2 = [
new google.maps.LatLng(16.566606,80.548496),
new google.maps.LatLng(16.566112,80.549955),
new google.maps.LatLng(16.564796,80.552702),
new google.maps.LatLng(16.562822,80.556479),
new google.maps.LatLng(16.561588,80.558796),
new google.maps.LatLng(16.560518,80.559912),
new google.maps.LatLng(16.559119,80.563774),
new google.maps.LatLng(16.557721,80.568495),
new google.maps.LatLng(16.554677,80.571756),
new google.maps.LatLng(16.548095,80.576563),
new google.maps.LatLng(16.544228,80.579395),
new google.maps.LatLng(16.540937,80.581970),
new google.maps.LatLng(16.540237,80.582442),
new google.maps.LatLng(16.540155,80.582829),
new google.maps.LatLng(16.541307,80.583558),
new google.maps.LatLng(16.542089,80.583773),
new google.maps.LatLng(16.542994,80.583858),
new google.maps.LatLng(16.544557,80.584245),
new google.maps.LatLng(16.545873,80.584717),
new google.maps.LatLng(16.547272,80.585489),
new google.maps.LatLng(16.549823,80.586863),
new google.maps.LatLng(16.553977,80.589480),
new google.maps.LatLng(16.554965,80.589995),
new google.maps.LatLng(16.556075,80.590940),
new google.maps.LatLng(16.556651,80.591326),
new google.maps.LatLng(16.556980,80.591798),
new google.maps.LatLng(16.557268,80.592356),
new google.maps.LatLng(16.557556,80.593128),
new google.maps.LatLng(16.557885,80.593643),
new google.maps.LatLng(16.557885,80.593772),
new google.maps.LatLng(16.556404,80.595789),
new google.maps.LatLng(16.553731,80.599308),
new google.maps.LatLng(16.549000,80.605316),
new google.maps.LatLng(16.547930,80.606861),
new google.maps.LatLng(16.546655,80.608578),
new google.maps.LatLng(16.545585,80.610809),
new google.maps.LatLng(16.544804,80.612912)
];
var polyOptions2 = {
path: myCoordinates2,
strokeColor: '#0055ff',
geodesic: true,
strokeOpacity: 1,
strokeWeight: 3
}
itray2 = new google.maps.Polyline(polyOptions2);
itray2.setMap(map);
}
function clearrailwaygate()
{
  itray1.setMap(null);
  itray2.setMap(null);
}
var itnunna;
var itnunna2;
var itnunna3;
var itnunna4;
function nunnabypassclick()
{
  if(document.getElementById('nunnabypass1id').checked == true)
  {
    putnunnabypass();
  }
  else
  {
    clearnunnabypass();
  }
}

function putnunnabypass()
{
  var myCoordinates = [
new google.maps.LatLng(16.582072,80.620251),
new google.maps.LatLng(16.578534,80.620937),
new google.maps.LatLng(16.576396,80.620165),
new google.maps.LatLng(16.575408,80.619478),
new google.maps.LatLng(16.574257,80.618706),
new google.maps.LatLng(16.573516,80.618534),
new google.maps.LatLng(16.570390,80.617676),
new google.maps.LatLng(16.566195,80.618105),
new google.maps.LatLng(16.565207,80.618620),
new google.maps.LatLng(16.564385,80.619307),
new google.maps.LatLng(16.563562,80.621109),
new google.maps.LatLng(16.562986,80.621109),
new google.maps.LatLng(16.562246,80.621023),
new google.maps.LatLng(16.561094,80.620594),
new google.maps.LatLng(16.559695,80.619993),
new google.maps.LatLng(16.558790,80.619650),
new google.maps.LatLng(16.557227,80.619221),
new google.maps.LatLng(16.555993,80.618706),
new google.maps.LatLng(16.554759,80.618448),
new google.maps.LatLng(16.553772,80.621109),
new google.maps.LatLng(16.552455,80.626001),
new google.maps.LatLng(16.550810,80.630035),
new google.maps.LatLng(16.549164,80.635014),
new google.maps.LatLng(16.548506,80.637074),
new google.maps.LatLng(16.547354,80.639477),
new google.maps.LatLng(16.546449,80.640593),
new google.maps.LatLng(16.545627,80.641880),
new google.maps.LatLng(16.545051,80.642996),
new google.maps.LatLng(16.544557,80.643339),
new google.maps.LatLng(16.544804,80.644712),
new google.maps.LatLng(16.545462,80.646257),
new google.maps.LatLng(16.546614,80.649261),
new google.maps.LatLng(16.547683,80.652180),
new google.maps.LatLng(16.548753,80.654411),
new google.maps.LatLng(16.548753,80.655355),
new google.maps.LatLng(16.549740,80.656815),
new google.maps.LatLng(16.550974,80.658789),
new google.maps.LatLng(16.552373,80.660849),
new google.maps.LatLng(16.554430,80.663338),
new google.maps.LatLng(16.556487,80.666599),
new google.maps.LatLng(16.558297,80.668230),
new google.maps.LatLng(16.561094,80.671577),
new google.maps.LatLng(16.562739,80.673637),
new google.maps.LatLng(16.563644,80.674582),
new google.maps.LatLng(16.564467,80.676470),
new google.maps.LatLng(16.564961,80.677414),
new google.maps.LatLng(16.566606,80.679045),
new google.maps.LatLng(16.567840,80.679731),
new google.maps.LatLng(16.569485,80.680676),
new google.maps.LatLng(16.571131,80.681791),
new google.maps.LatLng(16.573023,80.682478),
new google.maps.LatLng(16.575326,80.683594),
new google.maps.LatLng(16.577712,80.684280),
new google.maps.LatLng(16.578781,80.684452),
new google.maps.LatLng(16.579110,80.685053),
new google.maps.LatLng(16.579439,80.685654),
new google.maps.LatLng(16.579851,80.686255),
new google.maps.LatLng(16.580097,80.686855),
new google.maps.LatLng(16.580097,80.687370),
new google.maps.LatLng(16.579933,80.687628),
new google.maps.LatLng(16.579686,80.688057),
new google.maps.LatLng(16.579686,80.688486),
new google.maps.LatLng(16.579686,80.688658),
new google.maps.LatLng(16.580344,80.688915),
new google.maps.LatLng(16.580920,80.689087),
new google.maps.LatLng(16.581249,80.689344),
new google.maps.LatLng(16.581414,80.689859),
new google.maps.LatLng(16.581907,80.690289),
new google.maps.LatLng(16.582401,80.690804),
new google.maps.LatLng(16.582894,80.691833),
new google.maps.LatLng(16.583306,80.692005),
new google.maps.LatLng(16.583388,80.692606),
new google.maps.LatLng(16.583799,80.693636),
new google.maps.LatLng(16.584128,80.694151),
new google.maps.LatLng(16.584375,80.695181),
new google.maps.LatLng(16.585074,80.697241),
new google.maps.LatLng(16.585527,80.697627),
new google.maps.LatLng(16.588488,80.700760),
new google.maps.LatLng(16.589845,80.702262)
];
var polyOptions = {
path: myCoordinates,
strokeColor: '#ff9900',
geodesic: true,
strokeOpacity: 1,
strokeWeight: 3
}
itnunna = new google.maps.Polyline(polyOptions);
itnunna.setMap(map);

var myCoordinates1 = [
new google.maps.LatLng(16.554759,80.618277),
new google.maps.LatLng(16.546573,80.615487),
new google.maps.LatLng(16.545997,80.615015),
new google.maps.LatLng(16.545627,80.614457),
new google.maps.LatLng(16.545462,80.614071),
new google.maps.LatLng(16.545256,80.613685),
new google.maps.LatLng(16.544886,80.612869)
];
var polyOptions1 = {
path: myCoordinates1,
strokeColor: '#39ac73',
geodesic: true,
strokeOpacity: 1,
strokeWeight: 3
}
itnunna2 = new google.maps.Polyline(polyOptions1);
itnunna2.setMap(map);
var myCoordinates3 = [
new google.maps.LatLng(16.548013,80.655441),
new google.maps.LatLng(16.547437,80.658360),
new google.maps.LatLng(16.545709,80.667887),
new google.maps.LatLng(16.543981,80.676727),
new google.maps.LatLng(16.543364,80.679731)
];
var polyOptions3 = {
path: myCoordinates3,
strokeColor: '#39ac73',
geodesic: true,
strokeOpacity: 1,
strokeWeight: 3
}
itnunna3 = new google.maps.Polyline(polyOptions3);
itnunna3.setMap(map);
/////////////////////////////////////
var myCoordinates5 = [
new google.maps.LatLng(16.558461,80.668488),
new google.maps.LatLng(16.558502,80.674410),
new google.maps.LatLng(16.558626,80.680461),
new google.maps.LatLng(16.558749,80.682049),
new google.maps.LatLng(16.558955,80.682735),
new google.maps.LatLng(16.558914,80.683422),
new google.maps.LatLng(16.558996,80.684667),
new google.maps.LatLng(16.559202,80.685439),
new google.maps.LatLng(16.559284,80.685654),
new google.maps.LatLng(16.559284,80.686040),
new google.maps.LatLng(16.559449,80.686727),
new google.maps.LatLng(16.559654,80.687971),
new google.maps.LatLng(16.559983,80.688572),
new google.maps.LatLng(16.560271,80.689044),
new google.maps.LatLng(16.560600,80.689430),
new google.maps.LatLng(16.561176,80.689559),
new google.maps.LatLng(16.561711,80.689688),
new google.maps.LatLng(16.562061,80.689774),
new google.maps.LatLng(16.562575,80.690074),
new google.maps.LatLng(16.563212,80.690396),
new google.maps.LatLng(16.564035,80.690889),
new google.maps.LatLng(16.566935,80.692434),
new google.maps.LatLng(16.567377,80.692627),
new google.maps.LatLng(16.567675,80.692724),
new google.maps.LatLng(16.567830,80.692788),
new google.maps.LatLng(16.567902,80.692917),
new google.maps.LatLng(16.567979,80.692992),
new google.maps.LatLng(16.568272,80.693142),
new google.maps.LatLng(16.568714,80.693368),
new google.maps.LatLng(16.570365,80.694264),
new google.maps.LatLng(16.571943,80.695122),
new google.maps.LatLng(16.575573,80.697241),
new google.maps.LatLng(16.578576,80.699000),
new google.maps.LatLng(16.580426,80.700030),
new google.maps.LatLng(16.580714,80.700030),
new google.maps.LatLng(16.580920,80.700159),
new google.maps.LatLng(16.581002,80.700417),
new google.maps.LatLng(16.581537,80.700674),
new google.maps.LatLng(16.581948,80.700803),
new google.maps.LatLng(16.582483,80.700932),
new google.maps.LatLng(16.583059,80.700974),
new google.maps.LatLng(16.583470,80.701017),
new google.maps.LatLng(16.584622,80.701318),
new google.maps.LatLng(16.585156,80.701404),
new google.maps.LatLng(16.585403,80.701447),
new google.maps.LatLng(16.585773,80.701447),
new google.maps.LatLng(16.586226,80.701275),
new google.maps.LatLng(16.587172,80.701103),
new google.maps.LatLng(16.587994,80.701060),
new google.maps.LatLng(16.588447,80.701060),
new google.maps.LatLng(16.588899,80.701060)
];
var polyOptions5 = {
path: myCoordinates5,
strokeColor: '#ff4da6',
geodesic: true,
strokeOpacity: 1,
strokeWeight: 3
}
itnunna4 = new google.maps.Polyline(polyOptions5);
itnunna4.setMap(map);
}

function clearnunnabypass()
{
  itnunna.setMap(null);
  itnunna2.setMap(null);
  itnunna3.setMap(null);
  itnunna4.setMap(null);
}

var itnunnaganv1;
var itnunnaganv2;
var itnunnaganv3;
var itnunnaganv4;
var itnunnaganv5;
var itnunnaganv6;
var itnunnaganv7;
var itnunnaganv8;
function nunnaganvclick()
{
  if(document.getElementById('nunnagan1id').checked == true)
  {
    putnunnaganv();
  }
  else
  {
    clearnunnaganv();
  }
}
function putnunnaganv()
{
  var myCoordinates = [
new google.maps.LatLng(16.582154,80.620079),
new google.maps.LatLng(16.581825,80.620251),
new google.maps.LatLng(16.581681,80.620315),
new google.maps.LatLng(16.581414,80.620315),
new google.maps.LatLng(16.581105,80.620508),
new google.maps.LatLng(16.580529,80.620573),
new google.maps.LatLng(16.579480,80.620766),
new google.maps.LatLng(16.578719,80.620937),
new google.maps.LatLng(16.578329,80.620959),
new google.maps.LatLng(16.577959,80.620894),
new google.maps.LatLng(16.577506,80.620787),
new google.maps.LatLng(16.576910,80.620551),
new google.maps.LatLng(16.576540,80.620379),
new google.maps.LatLng(16.575964,80.620100),
new google.maps.LatLng(16.575593,80.619736),
new google.maps.LatLng(16.575059,80.619349),
new google.maps.LatLng(16.574606,80.619028),
new google.maps.LatLng(16.573743,80.618534),
new google.maps.LatLng(16.572323,80.618191),
new google.maps.LatLng(16.570472,80.617547),
new google.maps.LatLng(16.568251,80.617719),
new google.maps.LatLng(16.567552,80.617805),
new google.maps.LatLng(16.566812,80.617890),
new google.maps.LatLng(16.565536,80.618320),
new google.maps.LatLng(16.564714,80.618920),
new google.maps.LatLng(16.564302,80.619392),
new google.maps.LatLng(16.563850,80.620165),
new google.maps.LatLng(16.563439,80.620937),
new google.maps.LatLng(16.562945,80.621152),
new google.maps.LatLng(16.561053,80.620508),
new google.maps.LatLng(16.559202,80.619864),
new google.maps.LatLng(16.554841,80.618362),
new google.maps.LatLng(16.554594,80.618792),
new google.maps.LatLng(16.554224,80.619822),
new google.maps.LatLng(16.552661,80.625100),
new google.maps.LatLng(16.551057,80.630121),
new google.maps.LatLng(16.549082,80.635357),
new google.maps.LatLng(16.546532,80.640850),
new google.maps.LatLng(16.544557,80.643511),
new google.maps.LatLng(16.545956,80.646858),
new google.maps.LatLng(16.548095,80.653210),
new google.maps.LatLng(16.549082,80.656385),
new google.maps.LatLng(16.553278,80.661964),
new google.maps.LatLng(16.560271,80.670376),
new google.maps.LatLng(16.562246,80.673122),
new google.maps.LatLng(16.563439,80.674496),
new google.maps.LatLng(16.564179,80.675611),
new google.maps.LatLng(16.564508,80.676513),
new google.maps.LatLng(16.565166,80.678144),
new google.maps.LatLng(16.567346,80.679560),
new google.maps.LatLng(16.571377,80.681877),
new google.maps.LatLng(16.574092,80.682864),
new google.maps.LatLng(16.578781,80.684581),
new google.maps.LatLng(16.579192,80.685310),
new google.maps.LatLng(16.579974,80.686083),
new google.maps.LatLng(16.580097,80.687370),
new google.maps.LatLng(16.579604,80.688529),
new google.maps.LatLng(16.579234,80.689430),
new google.maps.LatLng(16.578493,80.689301),
new google.maps.LatLng(16.577794,80.689945),
new google.maps.LatLng(16.577506,80.690589),
new google.maps.LatLng(16.577383,80.690932),
new google.maps.LatLng(16.576807,80.690846),
new google.maps.LatLng(16.576560,80.690718),
new google.maps.LatLng(16.576231,80.690374),
new google.maps.LatLng(16.575984,80.690031),
new google.maps.LatLng(16.575532,80.689859),
new google.maps.LatLng(16.574997,80.690503),
new google.maps.LatLng(16.574216,80.692177),
new google.maps.LatLng(16.571789,80.695395),
new google.maps.LatLng(16.570226,80.697799),
new google.maps.LatLng(16.569074,80.699859),
new google.maps.LatLng(16.568251,80.702133),
new google.maps.LatLng(16.567058,80.705352),
new google.maps.LatLng(16.565866,80.709987),
new google.maps.LatLng(16.565454,80.713205),
new google.maps.LatLng(16.565249,80.715866),
new google.maps.LatLng(16.564467,80.719900),
new google.maps.LatLng(16.564138,80.722690),
new google.maps.LatLng(16.563027,80.726552),
new google.maps.LatLng(16.562780,80.727196),
new google.maps.LatLng(16.562328,80.727324),
new google.maps.LatLng(16.562122,80.728955),
new google.maps.LatLng(16.562328,80.730672),
new google.maps.LatLng(16.562287,80.731702),
new google.maps.LatLng(16.561875,80.732217),
new google.maps.LatLng(16.561711,80.732474),
new google.maps.LatLng(16.561793,80.734191),
new google.maps.LatLng(16.561958,80.735908),
new google.maps.LatLng(16.561958,80.738182),
new google.maps.LatLng(16.562163,80.741701),
new google.maps.LatLng(16.561917,80.742860),
new google.maps.LatLng(16.560888,80.743461),
new google.maps.LatLng(16.560559,80.743632),
new google.maps.LatLng(16.560066,80.745177),
new google.maps.LatLng(16.560189,80.747838),
new google.maps.LatLng(16.560189,80.749125),
new google.maps.LatLng(16.561094,80.749855),
new google.maps.LatLng(16.561793,80.750842),
new google.maps.LatLng(16.561999,80.752516),
new google.maps.LatLng(16.561711,80.754533),
new google.maps.LatLng(16.561094,80.756464),
new google.maps.LatLng(16.560559,80.757451),
new google.maps.LatLng(16.560395,80.758739),
new google.maps.LatLng(16.560107,80.759382),
new google.maps.LatLng(16.559490,80.759683),
new google.maps.LatLng(16.559202,80.760412),
new google.maps.LatLng(16.559202,80.761442),
new google.maps.LatLng(16.558996,80.762258),
new google.maps.LatLng(16.558708,80.763416),
new google.maps.LatLng(16.558132,80.766635),
new google.maps.LatLng(16.557803,80.769081),
new google.maps.LatLng(16.557351,80.771656),
new google.maps.LatLng(16.557309,80.772171),
new google.maps.LatLng(16.556363,80.773845),
new google.maps.LatLng(16.555047,80.775862),
new google.maps.LatLng(16.554389,80.777450),
new google.maps.LatLng(16.553402,80.778522),
new google.maps.LatLng(16.551879,80.780883),
new google.maps.LatLng(16.551468,80.782042),
new google.maps.LatLng(16.549082,80.784531),
new google.maps.LatLng(16.546943,80.787277),
new google.maps.LatLng(16.545133,80.790539),
new google.maps.LatLng(16.543940,80.793071),
new google.maps.LatLng(16.543570,80.794230),
new google.maps.LatLng(16.543487,80.795002),
new google.maps.LatLng(16.543035,80.795989),
new google.maps.LatLng(16.542171,80.796804),
new google.maps.LatLng(16.540813,80.796332),
new google.maps.LatLng(16.540566,80.796890),
new google.maps.LatLng(16.540361,80.798478),
new google.maps.LatLng(16.540731,80.799680),
new google.maps.LatLng(16.540731,80.800366),
new google.maps.LatLng(16.540114,80.801225)
];
var polyOptions = {
path: myCoordinates,
strokeColor: '#ff9900',
geodesic: true,
strokeOpacity: 1,
strokeWeight: 3
}
itnunnaganv1 = new google.maps.Polyline(polyOptions);
itnunnaganv1.setMap(map);

var myCoordinates1 = [
new google.maps.LatLng(16.554759,80.618277),
new google.maps.LatLng(16.546573,80.615487),
new google.maps.LatLng(16.545997,80.615015),
new google.maps.LatLng(16.545627,80.614457),
new google.maps.LatLng(16.545462,80.614071),
new google.maps.LatLng(16.545256,80.613685),
new google.maps.LatLng(16.544886,80.612869)
];
var polyOptions1 = {
path: myCoordinates1,
strokeColor: '#39ac73',
geodesic: true,
strokeOpacity: 1,
strokeWeight: 3
}
itnunnaganv2 = new google.maps.Polyline(polyOptions1);
itnunnaganv2.setMap(map);
var myCoordinates3 = [
new google.maps.LatLng(16.548013,80.655441),
new google.maps.LatLng(16.547437,80.658360),
new google.maps.LatLng(16.545709,80.667887),
new google.maps.LatLng(16.543981,80.676727),
new google.maps.LatLng(16.543364,80.679731)
];
var polyOptions3 = {
path: myCoordinates3,
strokeColor: '#39ac73',
geodesic: true,
strokeOpacity: 1,
strokeWeight: 3
}
itnunnaganv3 = new google.maps.Polyline(polyOptions3);
itnunnaganv3.setMap(map);
//////////////////////////////////////
var myCoordinates4 = [
new google.maps.LatLng(16.543405,80.679646),
new google.maps.LatLng(16.542459,80.686555),
new google.maps.LatLng(16.545462,80.687799),
new google.maps.LatLng(16.547930,80.688357),
new google.maps.LatLng(16.550440,80.689173),
new google.maps.LatLng(16.552620,80.690031),
new google.maps.LatLng(16.553731,80.690804),
new google.maps.LatLng(16.554965,80.691576),
new google.maps.LatLng(16.556446,80.692391),
new google.maps.LatLng(16.557515,80.692949),
new google.maps.LatLng(16.558831,80.693336),
new google.maps.LatLng(16.559778,80.693808),
new google.maps.LatLng(16.561094,80.694237),
new google.maps.LatLng(16.562822,80.694880),
new google.maps.LatLng(16.563727,80.695224),
new google.maps.LatLng(16.565043,80.695696),
new google.maps.LatLng(16.566071,80.696383),
new google.maps.LatLng(16.567017,80.696898),
new google.maps.LatLng(16.567675,80.697112),
new google.maps.LatLng(16.568416,80.697327),
new google.maps.LatLng(16.569526,80.697713),
new google.maps.LatLng(16.570185,80.697842)
];
var polyOptions4 = {
path: myCoordinates4,
strokeColor: '#39ac73',
geodesic: true,
strokeOpacity: 1,
strokeWeight: 3
}
itnunnaganv4 = new google.maps.Polyline(polyOptions4);
itnunnaganv4.setMap(map);
/////////////////////////////////
var myCoordinates6 = [
new google.maps.LatLng(16.558297,80.668316),
new google.maps.LatLng(16.558544,80.672736),
new google.maps.LatLng(16.558585,80.674882),
new google.maps.LatLng(16.558585,80.679259),
new google.maps.LatLng(16.558790,80.682650),
new google.maps.LatLng(16.559161,80.685353),
new google.maps.LatLng(16.559243,80.686255),
new google.maps.LatLng(16.559654,80.687971),
new google.maps.LatLng(16.559901,80.688529),
new google.maps.LatLng(16.560148,80.689001),
new google.maps.LatLng(16.560724,80.689430),
new google.maps.LatLng(16.561300,80.689645),
new google.maps.LatLng(16.561711,80.689688),
new google.maps.LatLng(16.561999,80.689731),
new google.maps.LatLng(16.562904,80.690289),
new google.maps.LatLng(16.565084,80.691447),
new google.maps.LatLng(16.567511,80.692649),
new google.maps.LatLng(16.567799,80.692735),
new google.maps.LatLng(16.567963,80.692863),
new google.maps.LatLng(16.567963,80.692949),
new google.maps.LatLng(16.569855,80.694022),
new google.maps.LatLng(16.571994,80.695052),
new google.maps.LatLng(16.574339,80.696468),
new google.maps.LatLng(16.576313,80.697670),
new google.maps.LatLng(16.578370,80.699000),
new google.maps.LatLng(16.580344,80.699987),
new google.maps.LatLng(16.580797,80.699987),
new google.maps.LatLng(16.581537,80.700717),
new google.maps.LatLng(16.582565,80.700889),
new google.maps.LatLng(16.584622,80.701404),
new google.maps.LatLng(16.585444,80.701447),
new google.maps.LatLng(16.586267,80.701275),
new google.maps.LatLng(16.588200,80.701103)
];
var polyOptions6 = {
path: myCoordinates6,
geodesic:true,
strokeColor: "#FF0000",
strokeOpacity: 1,
strokeWeight: 3
}
itnunnaganv5 = new google.maps.Polyline(polyOptions6);
itnunnaganv5.setMap(map);
//////////////////////////////////////////////////////////
var myCoordinates7 = [
new google.maps.LatLng(16.582154,80.620079),
new google.maps.LatLng(16.581825,80.620251),
new google.maps.LatLng(16.581681,80.620315),
new google.maps.LatLng(16.581414,80.620315),
new google.maps.LatLng(16.581105,80.620508),
new google.maps.LatLng(16.580529,80.620573),
new google.maps.LatLng(16.579480,80.620766),
new google.maps.LatLng(16.578719,80.620937),
new google.maps.LatLng(16.578329,80.620959),
new google.maps.LatLng(16.577959,80.620894),
new google.maps.LatLng(16.577506,80.620787),
new google.maps.LatLng(16.576910,80.620551),
new google.maps.LatLng(16.576540,80.620379),
new google.maps.LatLng(16.575964,80.620100),
new google.maps.LatLng(16.575593,80.619736),
new google.maps.LatLng(16.575059,80.619349),
new google.maps.LatLng(16.574606,80.619028),
new google.maps.LatLng(16.573743,80.618534),
new google.maps.LatLng(16.572323,80.618191),
new google.maps.LatLng(16.570472,80.617547),
new google.maps.LatLng(16.568251,80.617719),
new google.maps.LatLng(16.567552,80.617805),
new google.maps.LatLng(16.566812,80.617890),
new google.maps.LatLng(16.565536,80.618320),
new google.maps.LatLng(16.564714,80.618920),
new google.maps.LatLng(16.564302,80.619392),
new google.maps.LatLng(16.563850,80.620165),
new google.maps.LatLng(16.563439,80.620937),
new google.maps.LatLng(16.562945,80.621152),
new google.maps.LatLng(16.561053,80.620508),
new google.maps.LatLng(16.559202,80.619864),
new google.maps.LatLng(16.554841,80.618362),
new google.maps.LatLng(16.554594,80.618792),
new google.maps.LatLng(16.554224,80.619822),
new google.maps.LatLng(16.552661,80.625100),
new google.maps.LatLng(16.551057,80.630121),
new google.maps.LatLng(16.549082,80.635357),
new google.maps.LatLng(16.546532,80.640850),
new google.maps.LatLng(16.544557,80.643511),
new google.maps.LatLng(16.545956,80.646858),
new google.maps.LatLng(16.548095,80.653210),
new google.maps.LatLng(16.549082,80.656385),
new google.maps.LatLng(16.553278,80.661964),
new google.maps.LatLng(16.560271,80.670376),
new google.maps.LatLng(16.562246,80.673122),
new google.maps.LatLng(16.563439,80.674496),
new google.maps.LatLng(16.564179,80.675611),
new google.maps.LatLng(16.564508,80.676513),
new google.maps.LatLng(16.565166,80.678144),
new google.maps.LatLng(16.567346,80.679560),
new google.maps.LatLng(16.571377,80.681877),
new google.maps.LatLng(16.574092,80.682864),
new google.maps.LatLng(16.578781,80.684581),
new google.maps.LatLng(16.579192,80.685310),
new google.maps.LatLng(16.579974,80.686083),
new google.maps.LatLng(16.580097,80.687370),
new google.maps.LatLng(16.579604,80.688529),
new google.maps.LatLng(16.579234,80.689430),
new google.maps.LatLng(16.578493,80.689301),
new google.maps.LatLng(16.577794,80.689945),
new google.maps.LatLng(16.577506,80.690589),
new google.maps.LatLng(16.577383,80.690932),
new google.maps.LatLng(16.576807,80.690846),
new google.maps.LatLng(16.576560,80.690718),
new google.maps.LatLng(16.576231,80.690374),
new google.maps.LatLng(16.575984,80.690031),
new google.maps.LatLng(16.575532,80.689859),
new google.maps.LatLng(16.574997,80.690503),
new google.maps.LatLng(16.574216,80.692177),
new google.maps.LatLng(16.571789,80.695395),
new google.maps.LatLng(16.570226,80.697799),
new google.maps.LatLng(16.569074,80.699859),
new google.maps.LatLng(16.568251,80.702133),
new google.maps.LatLng(16.567058,80.705352),
new google.maps.LatLng(16.565866,80.709987),
new google.maps.LatLng(16.565454,80.713205),
new google.maps.LatLng(16.565249,80.715866),
new google.maps.LatLng(16.564467,80.719900),
new google.maps.LatLng(16.564138,80.722690),
new google.maps.LatLng(16.563027,80.726552),
new google.maps.LatLng(16.562780,80.727196),
new google.maps.LatLng(16.562328,80.727324),
new google.maps.LatLng(16.562122,80.728955),
new google.maps.LatLng(16.562328,80.730672),
new google.maps.LatLng(16.562287,80.731702),
new google.maps.LatLng(16.561875,80.732217),
new google.maps.LatLng(16.561711,80.732474),
new google.maps.LatLng(16.561793,80.734191),
new google.maps.LatLng(16.561958,80.735908),
new google.maps.LatLng(16.561958,80.738182),
new google.maps.LatLng(16.562163,80.741701),
new google.maps.LatLng(16.561917,80.742860),
new google.maps.LatLng(16.560888,80.743461),
new google.maps.LatLng(16.560559,80.743632),
new google.maps.LatLng(16.560066,80.745177),
new google.maps.LatLng(16.560189,80.747838),
new google.maps.LatLng(16.560189,80.749125),
new google.maps.LatLng(16.561094,80.749855),
new google.maps.LatLng(16.561793,80.750842),
new google.maps.LatLng(16.561999,80.752516),
new google.maps.LatLng(16.561711,80.754533),
new google.maps.LatLng(16.561094,80.756464),
new google.maps.LatLng(16.560559,80.757451),
new google.maps.LatLng(16.560395,80.758739),
new google.maps.LatLng(16.560353,80.759168),
new google.maps.LatLng(16.561012,80.759554),
new google.maps.LatLng(16.562287,80.759811),
new google.maps.LatLng(16.564878,80.760927),
new google.maps.LatLng(16.565660,80.761356),
new google.maps.LatLng(16.566565,80.761528),
new google.maps.LatLng(16.567346,80.761442),
new google.maps.LatLng(16.567141,80.763030),
new google.maps.LatLng(16.567100,80.763717),
new google.maps.LatLng(16.566688,80.765090),
new google.maps.LatLng(16.566565,80.765734),
new google.maps.LatLng(16.567141,80.766463),
new google.maps.LatLng(16.567634,80.766764),
new google.maps.LatLng(16.569403,80.768180),
new google.maps.LatLng(16.570884,80.769210),
new google.maps.LatLng(16.571871,80.770154),
new google.maps.LatLng(16.572735,80.771184),
new google.maps.LatLng(16.572899,80.771785),
new google.maps.LatLng(16.573352,80.772471),
new google.maps.LatLng(16.572982,80.773330),
new google.maps.LatLng(16.572365,80.773931),
new google.maps.LatLng(16.572570,80.774360),
new google.maps.LatLng(16.572982,80.774660),
new google.maps.LatLng(16.573475,80.774875),
new google.maps.LatLng(16.573393,80.776634),
new google.maps.LatLng(16.573640,80.778136),
new google.maps.LatLng(16.573434,80.779767),
new google.maps.LatLng(16.573393,80.781441),
new google.maps.LatLng(16.573270,80.782385),
new google.maps.LatLng(16.573126,80.783072),
new google.maps.LatLng(16.575984,80.784788),
new google.maps.LatLng(16.575244,80.786505),
new google.maps.LatLng(16.574874,80.788221),
new google.maps.LatLng(16.574462,80.788608),
new google.maps.LatLng(16.573393,80.791011),
new google.maps.LatLng(16.571871,80.790582),
new google.maps.LatLng(16.571295,80.791569),
new google.maps.LatLng(16.571172,80.792642),
new google.maps.LatLng(16.570966,80.793242),
new google.maps.LatLng(16.570349,80.793672),
new google.maps.LatLng(16.569321,80.793629),
new google.maps.LatLng(16.565619,80.791612),
new google.maps.LatLng(16.560107,80.791569),
new google.maps.LatLng(16.554677,80.792255),
new google.maps.LatLng(16.548630,80.793586),
new google.maps.LatLng(16.543775,80.794315),
new google.maps.LatLng(16.543652,80.794916),
new google.maps.LatLng(16.543076,80.795860),
new google.maps.LatLng(16.542130,80.796804),
new google.maps.LatLng(16.540772,80.796375),
new google.maps.LatLng(16.540237,80.798006),
new google.maps.LatLng(16.540649,80.799551),
new google.maps.LatLng(16.540690,80.800495),
new google.maps.LatLng(16.540196,80.800967)
];
var polyOptions7 = {
path: myCoordinates7,
strokeColor: "#ff1ab3",
strokeOpacity: 1,
strokeWeight: 3
}
itnunnaganv6 = new google.maps.Polyline(polyOptions7);
itnunnaganv6.setMap(map);

}
function clearnunnaganv()
{
  itnunnaganv1.setMap(null);
  itnunnaganv2.setMap(null);
  itnunnaganv3.setMap(null);
  itnunnaganv4.setMap(null);
  itnunnaganv5.setMap(null);
  itnunnaganv6.setMap(null);
}

var ibripamul1;
var ibripamul2;
var ibripamul3;
var ibripamul4;
function ibripamulclick()
{
  if(document.getElementById('ibripamu1id').checked == true)
  {
    putibripamul();
  }
  else
  {
    clearibripamul();
  }
}
function putibripamul()
{
var myCoordinates = [
  new google.maps.LatLng(16.589475,80.521202),
new google.maps.LatLng(16.589763,80.521803),
new google.maps.LatLng(16.590462,80.521910),
new google.maps.LatLng(16.590997,80.522017),
new google.maps.LatLng(16.592292,80.521932),
new google.maps.LatLng(16.594287,80.522082),
new google.maps.LatLng(16.594493,80.522296),
new google.maps.LatLng(16.595377,80.522768),
new google.maps.LatLng(16.596261,80.523734),
new google.maps.LatLng(16.597865,80.525537),
new google.maps.LatLng(16.599058,80.526824),
new google.maps.LatLng(16.599675,80.527511),
new google.maps.LatLng(16.601114,80.530343),
new google.maps.LatLng(16.601813,80.531545),
new google.maps.LatLng(16.607242,80.534163),
new google.maps.LatLng(16.613493,80.536995),
new google.maps.LatLng(16.615899,80.538347),
new google.maps.LatLng(16.620504,80.540514),
new google.maps.LatLng(16.622869,80.541523),
new google.maps.LatLng(16.625418,80.542746),
new google.maps.LatLng(16.626364,80.543346),
new google.maps.LatLng(16.627310,80.544376),
new google.maps.LatLng(16.627803,80.545578),
new google.maps.LatLng(16.627845,80.546908),
new google.maps.LatLng(16.628050,80.548282),
new google.maps.LatLng(16.628132,80.549269),
new google.maps.LatLng(16.628256,80.549955),
new google.maps.LatLng(16.628626,80.550599),
new google.maps.LatLng(16.629243,80.551114),
new google.maps.LatLng(16.630230,80.552144),
new google.maps.LatLng(16.631052,80.552874),
new google.maps.LatLng(16.632121,80.553689),
new google.maps.LatLng(16.632943,80.554204),
new google.maps.LatLng(16.634712,80.554934),
new google.maps.LatLng(16.637960,80.556436),
new google.maps.LatLng(16.642360,80.558324),
new google.maps.LatLng(16.649308,80.561628),
new google.maps.LatLng(16.650501,80.561886),
new google.maps.LatLng(16.652269,80.562315),
new google.maps.LatLng(16.654941,80.563045),
new google.maps.LatLng(16.658025,80.564289),
new google.maps.LatLng(16.664850,80.567079),
new google.maps.LatLng(16.677142,80.572529),
new google.maps.LatLng(16.677389,80.573387),
new google.maps.LatLng(16.677882,80.573816),
new google.maps.LatLng(16.678663,80.574288),
new google.maps.LatLng(16.679937,80.575404),
new google.maps.LatLng(16.680451,80.575833),
new google.maps.LatLng(16.680554,80.575941),
new google.maps.LatLng(16.680349,80.576563),
new google.maps.LatLng(16.679691,80.578430),
new google.maps.LatLng(16.678170,80.581520),
new google.maps.LatLng(16.677327,80.583193),
new google.maps.LatLng(16.676916,80.586476),
new google.maps.LatLng(16.676772,80.587485),
new google.maps.LatLng(16.676772,80.588043),
new google.maps.LatLng(16.676875,80.589416),
new google.maps.LatLng(16.677019,80.591133),
new google.maps.LatLng(16.676978,80.591841),
new google.maps.LatLng(16.674593,80.593514),
new google.maps.LatLng(16.674018,80.594931),
new google.maps.LatLng(16.673360,80.596604),
new google.maps.LatLng(16.673237,80.598321),
new google.maps.LatLng(16.673278,80.598793),
new google.maps.LatLng(16.672620,80.600767),
new google.maps.LatLng(16.671839,80.602484),
new google.maps.LatLng(16.671222,80.604157),
new google.maps.LatLng(16.670811,80.606046),
new google.maps.LatLng(16.669536,80.609415),
new google.maps.LatLng(16.669228,80.609822),
new google.maps.LatLng(16.668920,80.610015),
new google.maps.LatLng(16.666083,80.611174),
new google.maps.LatLng(16.665466,80.611775),
new google.maps.LatLng(16.664788,80.613577),
new google.maps.LatLng(16.663986,80.615916),
new google.maps.LatLng(16.662958,80.618749),
new google.maps.LatLng(16.662013,80.618277),
new google.maps.LatLng(16.661643,80.617762),
new google.maps.LatLng(16.659258,80.616946),
new google.maps.LatLng(16.656771,80.616345),
new google.maps.LatLng(16.654386,80.615423),
new google.maps.LatLng(16.653070,80.614843),
new google.maps.LatLng(16.652659,80.614564),
new google.maps.LatLng(16.652372,80.614264),
new google.maps.LatLng(16.651241,80.613921),
new google.maps.LatLng(16.650172,80.613685),
new google.maps.LatLng(16.648527,80.612698),
new google.maps.LatLng(16.646595,80.612526),
new google.maps.LatLng(16.645114,80.612311),
new google.maps.LatLng(16.644703,80.612869),
new google.maps.LatLng(16.643963,80.613256),
new google.maps.LatLng(16.642154,80.613470),
new google.maps.LatLng(16.634999,80.615830),
new google.maps.LatLng(16.632573,80.616603),
new google.maps.LatLng(16.630929,80.616860),
new google.maps.LatLng(16.628585,80.617311),
new google.maps.LatLng(16.625727,80.617676),
new google.maps.LatLng(16.622972,80.617998),
new google.maps.LatLng(16.618633,80.619392),
new google.maps.LatLng(16.617605,80.618920),
new google.maps.LatLng(16.616536,80.618491),
new google.maps.LatLng(16.615302,80.619178),
new google.maps.LatLng(16.613986,80.619607),
new google.maps.LatLng(16.612177,80.619607),
new google.maps.LatLng(16.611437,80.619307),
new google.maps.LatLng(16.611067,80.619693),
new google.maps.LatLng(16.610614,80.619650),
new google.maps.LatLng(16.610244,80.619092),
new google.maps.LatLng(16.609997,80.618877),
new google.maps.LatLng(16.609545,80.618320),
new google.maps.LatLng(16.608640,80.618234),
new google.maps.LatLng(16.607201,80.618062),
new google.maps.LatLng(16.603952,80.617204),
new google.maps.LatLng(16.600662,80.620165),
new google.maps.LatLng(16.598934,80.620165),
new google.maps.LatLng(16.595356,80.620208),
new google.maps.LatLng(16.594256,80.620304),
new google.maps.LatLng(16.591285,80.619993),
new google.maps.LatLng(16.589311,80.619779),
new google.maps.LatLng(16.586719,80.619521),
new google.maps.LatLng(16.584622,80.619907),
new google.maps.LatLng(16.581866,80.620165),
new google.maps.LatLng(16.580714,80.620508),
new google.maps.LatLng(16.578740,80.620980),
new google.maps.LatLng(16.577342,80.620723),
new google.maps.LatLng(16.576272,80.620251),
new google.maps.LatLng(16.575203,80.619392),
new google.maps.LatLng(16.573722,80.618620),
new google.maps.LatLng(16.572241,80.618191),
new google.maps.LatLng(16.570390,80.617590),
new google.maps.LatLng(16.568251,80.617676),
new google.maps.LatLng(16.567387,80.617762),
new google.maps.LatLng(16.565907,80.618191),
new google.maps.LatLng(16.564344,80.619264),
new google.maps.LatLng(16.563603,80.620465),
new google.maps.LatLng(16.563110,80.621195),
new google.maps.LatLng(16.554841,80.618362),
new google.maps.LatLng(16.554594,80.619092),
new google.maps.LatLng(16.554430,80.619607),
new google.maps.LatLng(16.553689,80.621538),
new google.maps.LatLng(16.553196,80.623341)
];
var polyOptions = {
path: myCoordinates,
strokeColor: "#009900",
strokeOpacity: 1,
strokeWeight: 3
}
ibripamul1 = new google.maps.Polyline(polyOptions);
ibripamul1.setMap(map);
////////////////////////////////////////////////////////
var myCoordinates2 = [
new google.maps.LatLng(16.589311,80.520859),
new google.maps.LatLng(16.584869,80.524120),
new google.maps.LatLng(16.579933,80.527897),
new google.maps.LatLng(16.573681,80.531502),
new google.maps.LatLng(16.570719,80.537167),
new google.maps.LatLng(16.568663,80.541115),
new google.maps.LatLng(16.568169,80.543947),
new google.maps.LatLng(16.566935,80.546865),
new google.maps.LatLng(16.565866,80.550814),
new google.maps.LatLng(16.562081,80.557680),
new google.maps.LatLng(16.560024,80.561371),
new google.maps.LatLng(16.558626,80.566263),
new google.maps.LatLng(16.557885,80.568237),
new google.maps.LatLng(16.554430,80.571842),
new google.maps.LatLng(16.546696,80.577679),
new google.maps.LatLng(16.540278,80.582399),
new google.maps.LatLng(16.539538,80.585403),
new google.maps.LatLng(16.539209,80.587978),
new google.maps.LatLng(16.539044,80.590467),
new google.maps.LatLng(16.538880,80.593214),
new google.maps.LatLng(16.538880,80.595274),
new google.maps.LatLng(16.538880,80.596819),
new google.maps.LatLng(16.538468,80.598106),
new google.maps.LatLng(16.537646,80.599823),
new google.maps.LatLng(16.533778,80.604887),
new google.maps.LatLng(16.532709,80.606861),
new google.maps.LatLng(16.531228,80.610895),
new google.maps.LatLng(16.530569,80.612268),
new google.maps.LatLng(16.531680,80.613213),
new google.maps.LatLng(16.532585,80.613513),
new google.maps.LatLng(16.533449,80.613770),
new google.maps.LatLng(16.534560,80.613942),
new google.maps.LatLng(16.535465,80.613942),
new google.maps.LatLng(16.537358,80.613813),
new google.maps.LatLng(16.538304,80.613813),
new google.maps.LatLng(16.538921,80.613642),
new google.maps.LatLng(16.539456,80.613427),
new google.maps.LatLng(16.540237,80.613256),
new google.maps.LatLng(16.540731,80.613256),
new google.maps.LatLng(16.541636,80.613127),
new google.maps.LatLng(16.542788,80.613685),
new google.maps.LatLng(16.543405,80.613813),
new google.maps.LatLng(16.543693,80.613770),
new google.maps.LatLng(16.544310,80.613513),
new google.maps.LatLng(16.545009,80.613427),
new google.maps.LatLng(16.545174,80.613642),
new google.maps.LatLng(16.545339,80.614114),
new google.maps.LatLng(16.545832,80.614843),
new google.maps.LatLng(16.546367,80.615401),
new google.maps.LatLng(16.546984,80.615616),
new google.maps.LatLng(16.547766,80.615959),
new google.maps.LatLng(16.548424,80.616045),
new google.maps.LatLng(16.549288,80.616388),
new google.maps.LatLng(16.550234,80.616775),
new google.maps.LatLng(16.551304,80.617118),
new google.maps.LatLng(16.552497,80.617676),
new google.maps.LatLng(16.553607,80.617933),
new google.maps.LatLng(16.554224,80.618105),
new google.maps.LatLng(16.554594,80.618234)
];
var polyOptions2 = {
path: myCoordinates2,
strokeColor: "#FF0000",
strokeOpacity: 1,
strokeWeight: 3
}
ibripamul2 = new google.maps.Polyline(polyOptions2);
ibripamul2.setMap(map);

}
function clearibripamul()
{
  ibripamul1.setMap(null);
  ibripamul2.setMap(null);
}

var ibrihanuman1path;
var ibrihanuman2path

function ibrihanuman1click()
{
  if(document.getElementById('ibrihanuman1id').checked == true)
  {
    putibrihanum1();
  }
  else
    clearibrihanum1();
}
function putibrihanum1()
{
  var diribrihanuman1 = ibrihanum1js();
  ibrihanuman1path = new google.maps.Polyline(
  {
    path: diribrihanuman1,
    geodesic: true,
    strokeColor: '#ff1aff',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  ibrihanuman1path.setMap(map);
  var myCoordinates = [
new google.maps.LatLng(16.589475,80.521202),
new google.maps.LatLng(16.585856,80.523777),
new google.maps.LatLng(16.581907,80.526352),
new google.maps.LatLng(16.579275,80.528755),
new google.maps.LatLng(16.574339,80.530643),
new google.maps.LatLng(16.572200,80.533390),
new google.maps.LatLng(16.570719,80.537167),
new google.maps.LatLng(16.569732,80.539055),
new google.maps.LatLng(16.567758,80.545750),
new google.maps.LatLng(16.565948,80.549698),
new google.maps.LatLng(16.564796,80.553045),
new google.maps.LatLng(16.562163,80.557165),
new google.maps.LatLng(16.560271,80.560341),
new google.maps.LatLng(16.559119,80.563345),
new google.maps.LatLng(16.558790,80.565577),
new google.maps.LatLng(16.558050,80.567379),
new google.maps.LatLng(16.557968,80.568237),
new google.maps.LatLng(16.555911,80.570383),
new google.maps.LatLng(16.543487,80.579910),
new google.maps.LatLng(16.540525,80.582485),
new google.maps.LatLng(16.539785,80.583429),
new google.maps.LatLng(16.539291,80.585489),
new google.maps.LatLng(16.538962,80.588493),
new google.maps.LatLng(16.538880,80.591154),
new google.maps.LatLng(16.538880,80.594501),
new google.maps.LatLng(16.538468,80.597591),
new google.maps.LatLng(16.537892,80.599222),
new google.maps.LatLng(16.535177,80.602999),
new google.maps.LatLng(16.534107,80.604715),
new google.maps.LatLng(16.533038,80.606003),
new google.maps.LatLng(16.533367,80.606003),
new google.maps.LatLng(16.533943,80.606003),
new google.maps.LatLng(16.535013,80.606260),
new google.maps.LatLng(16.536494,80.606775),
new google.maps.LatLng(16.538139,80.607462),
new google.maps.LatLng(16.540690,80.608406),
new google.maps.LatLng(16.542335,80.609093),
new google.maps.LatLng(16.543158,80.610466),
new google.maps.LatLng(16.543981,80.611496),
new google.maps.LatLng(16.544639,80.612612)
];
var polyOptions = {
path: myCoordinates,
strokeColor: "#c65353",
strokeOpacity: 1,
strokeWeight: 3
}
ibrihanuman2path = new google.maps.Polyline(polyOptions);
ibrihanuman2path.setMap(map);

}
function clearibrihanum1()
{
  ibrihanuman1path.setMap(null);
  ibrihanuman2path.setMap(null);
}
var ibrigann1path;
var ibrigann2path;
function ibriganna1click()
{
  if(document.getElementById('ibriganna1id').checked == true)
  {
    putibriganna();
  }
  else
  {
    clearibriganna();
  }
}
function putibriganna()
{
  var diribrigann1 = ibriganvaram1js();
  ibrigann1path = new google.maps.Polyline(
  {
    path: diribrigann1,
    geodesic: true,
    strokeColor: '#ff1aff',
    strokeOpacity: 1,
    strokeWeight: 3
  });
  ibrigann1path.setMap(map);
  var myCoordinates4 = [
new google.maps.LatLng(16.548136,80.655484),
new google.maps.LatLng(16.547313,80.659561),
new google.maps.LatLng(16.546285,80.664968),
new google.maps.LatLng(16.544845,80.671535),
new google.maps.LatLng(16.543446,80.679860)
];
var polyOptions4 = {
path: myCoordinates4,
strokeColor: '#39ac73',
geodesic: true,
strokeOpacity: 1,
strokeWeight: 3
}
ibrigann2path = new google.maps.Polyline(polyOptions4);
ibrigann2path.setMap(map);
}
function clearibriganna()
{
  ibrigann1path.setMap(null);
  ibrigann2path.setMap(null);
}