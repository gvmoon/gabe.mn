function initMap() {
var map = new google.maps.Map(document.getElementById('tiles-map'), {
  center: {lat: 0, lng: 0},
  zoom: 1,
  streetViewControl: false,
  mapTypeControl: false
});

var moonMapType = new google.maps.ImageMapType({
  getTileUrl: function(coord, zoom) {
      var normalizedCoord = getNormalizedCoord(coord, zoom);
      if (!normalizedCoord) {
        return null;
      }

      var tileRange = 1 << zoom;
      var ycoord;

      /*
      if(normalizedCoord.y >= 0){
		ycoord = normalizedCoord.y % tileRange;
      }
      else if(normalizedCoord.y + tileRange > 0){
      	ycoord = tileRange + normalizedCoord.y % tileRange;
      }
      else if (normalizedCoord.y + tileRange === 0){
      	ycoord = tileRange - 1;
      }
      else{
      	ycoord = Math.abs(tileRange + (normalizedCoord.y + tileRange) - 1) % tileRange;
      	ycoord = tileRange - 1;
      	console.group();
      	console.log(ycoord);
      	console.groupEnd();
      }

            	console.log('ycoord: ' + ycoord);
            	*/
      if(normalizedCoord.y > 0){
      	ycoord = normalizedCoord.y % tileRange;
      }
      else if(normalizedCoord.y < 0){
      	ycoord = (normalizedCoord.y % tileRange) + tileRange - 1;
      }
      else{
      	console.group();
      	console.log(normalizedCoord.y);
      	console.groupEnd();
      	ycoord = tileRange - 1;
      }

      console.log(ycoord);


      return '../img/tiles' +
          '/tile_' + zoom + '_' + normalizedCoord.x + '-' +
          ycoord + '.png';
  },
  tileSize: new google.maps.Size(256, 256),
  maxZoom: 9,
  minZoom: 0,
  radius: 1738000,
  name: 'Moon'
});

map.mapTypes.set('moon', moonMapType);
map.setMapTypeId('moon');
}

// Normalizes the coords that tiles repeat across the x axis (horizontally)
// like the standard Google map tiles.
function getNormalizedCoord(coord, zoom) {
var y = coord.y;
var x = coord.x;

// tile range in one direction range is dependent on zoom level
// 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
var tileRange = 1 << zoom;


// don't repeat across y-axis (vertically)
// if (y < 0 || y >= tileRange) {
 // return null;
//}

// repeat across x-axis
if (x < 0 || x >= tileRange) {
  x = (x % tileRange + tileRange) % tileRange;
}

return {x: x, y: y};
}