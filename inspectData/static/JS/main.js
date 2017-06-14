// background stuff
var index = Math.floor(Math.random()*12);
document.body.style.background =
"#56d879 url('/static/img/b"+index+".jpg') no-repeat fixed center";
document.body.style.backgroundSize = "cover";

// globals
var layer, pass, fail, map;

// declarations
pass = document.getElementById('pass');
fail = document.getElementById('fail');


// map stuff
function initialize() {
  google.maps.visualRefresh = true;
  var isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) ||
    (navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));
  if (isMobile) {
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute('content', 'initial-scale=1.0, user-scalable=no');
  }
  var mapDiv = document.getElementById('googft-mapCanvas');
  mapDiv.style.width = isMobile ? '100%' : '70%';
  mapDiv.style.height = isMobile ? '80vh' : '60vh';
  map = new google.maps.Map(mapDiv, {
    center: new google.maps.LatLng(29.8, -95.3),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  // create legend
  var legend = document.createElement('div');
  legend.setAttribute("id", "legend");
  legend.innerHTML = "<h3>Map Key</h3> \
      passed <div class='keys' id='passkey'></div><br> \
      failed <div class='keys' id='failkey'></div><br> \
      questionable <div class='keys' id='warnkey'></div>";

  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);


  layer = new google.maps.FusionTablesLayer({
    map: map,
    heatmap: { enabled: false },
    query: {
      select: "col10",
      from: "1u9j3NqGkNprU0b9qNRmMiXBjdszHtjSimgymC49F",
      // old table: 1u9j3NqGkNprU0b9qNRmMiXBjdszHtjSimgymC49F
      // new table: 1MefYGA3xmSv-_C3pNgRGoyWWTtHGioJ5KAA1Y-d3
      where: ''
    },
    options: {
      styleId: 2,
      templateId: 3
    }
  });

  if (isMobile) {
    document.getElementById('legend').style.display = 'none';
  }
}
function filterMap() {
  var whereClause;
  var insert = ["'dummy'"];

  // set up what to filter via pass/fail
  if (pass.checked) {
    insert.push("'small_green'");
    insert.push("'small_yellow'");
  }
  if (fail.checked) {
    insert.push("'small_red'");
  }
  insert = insert.join(', ');
  console.log(insert);
  whereClause = "Pass_Fail IN (" + insert + ")"
  console.log(whereClause);

  var searchString = document.getElementById('search-string_0').value.replace(/'/g, "\\'");
  if (searchString != '--Select--') {
    whereClause += " AND FacilityName CONTAINS IGNORING CASE '" + searchString + "'";
  }

  layer.setOptions({
    query: {
      select: "'Concatenated Address'",
      from: "1u9j3NqGkNprU0b9qNRmMiXBjdszHtjSimgymC49F",
      where: whereClause
    },
    options: {
      styleId: 2,
      templateId: 3
    }
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
