var script = document.createElement('script');

script.src = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp';
document.getElementsByTagName('head')[0].appendChild(script);


// EARTHQUAKE VISUALISATION

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: {
            lat: 9.740696,
            lng: 118.730072
        },
        mapTypeId: 'terrain',

        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]


    });

     // function initMap() {
     //    var hochiminh = {lat: 10.762622,
     //        lng: 106.660172};
     //    var map = new google.maps.Map(document.getElementById('map'), {
     //      zoom: 4,
     //      center: hochiminh
     //    });

     //    var contentString = '<div id="content">'+
     //        '<div id="siteNotice">'+
     //        '</div>'+
     //        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
     //        '<div id="bodyContent">'+
     //        '<p><b>Ho Chi Minh City</b>, previously known as Saigon and before that as <b>Prey Nokor</b>, is the largest city in Vietnam ' +
     //        'The full Vietnamese name of the city is Thanh pho Ho Chi Minh.'+
     //        'It lies on the western bank of the Sài Gòn and falls in the Dông Nam Bô region. '+
     //        'Within the city limits, about 7 kilometers northwest of the city center is the International Airport Tân Sơn Nhất.'+'</p>'+
     //        '</div>'+
     //        '</div>';



     //    var infowindow = new google.maps.InfoWindow({
     //      content: contentString
     //    });

     //    var marker = new google.maps.Marker({
     //      position: uluru,
     //      map: map,
     //      title: 'Uluru (Ayers Rock)'
     //    });
     //    marker.addListener('click', function() {
     //      infowindow.open(map, marker);
     //    });

     

 function initMap() {
        var uluru = {lat: 10.762622,lng: 106.660172}; 
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }
    //aanrader om hier te landen met het schip ivm weinig kans op een aardbeving
    marker = new google.maps.Marker({
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: {lat: 10.762622,
            lng: 106.660172}
        });
        marker.addListener('click', toggleBounce);

         function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }


    // Maken van een script-HTML tag 
    var script = document.createElement('script');

    //Link van de aardbevingen-locator
 	//Invoeren waar de source vandaan komt en stoppen van scripttag in head
    script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
    document.getElementsByTagName('head')[0].appendChild(script);

    //De CSS van de inforamatie weergeven
    //Krijgt een cirkel, op basis van de kans -> grote of kleine cirkel (magnitude)
    map.data.setStyle(function(feature) {
        var magnitude = feature.getProperty('mag');
        return {
            icon: getCircle(magnitude)
        };
    });
}

//Hoe de resultaten gezien worden (cirkel met de style)
function getCircle(magnitude) {
    return {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: '#ff5719',
        fillOpacity: .5,
        scale: Math.pow(2, magnitude) / 1.8,
        strokeColor: 'black',
        strokeWeight: .5
    };

    
}



function eqfeed_callback(results) {
    map.data.addGeoJson(results);
}

