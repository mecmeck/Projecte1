
function CarregaMapes(){

    var options = {
        zoom: 2
        , center: new google.maps.LatLng(45.39265, 8.17083)
        , mapTypeId: google.maps.MapTypeId.HYBRID  
    };
    
	var map = new google.maps.Map(document.getElementById('Div_maps'), options);
	
	/*new google.maps.event.addListener(map, 'dblclick', function(event) {

		var position = event.latLng;
		
		alert(position);
		
		document.getElementById('TB_buscador').value = position;
		
		
		new google.maps.Marker({
			position: position
			, map: map
			, title: 'Pulsa aquí'
			, icon: 'http://gmaps-samples.googlecode.com/svn/trunk/markers/green/blank.png'
			, cursor: 'default'
			, draggable: false
		});

		
		// Vas a crear marcadores en la posicion donde hicieron click?
		/*var marker = new google.maps.Marker({
		map: map,
		position: position
	});*/
	
	//if (logat == true){
		/*var marker = new google.maps.Marker({
	    position: map.getCenter()
        , map: map
        , title: 'Pulsa aquí'
        , icon: 'http://gmaps-samples.googlecode.com/svn/trunk/markers/red/blank.png'
        , cursor: 'default'
        , draggable: true
    });
	
	google.maps.event.addListener(marker, 'mouseup', function(event){
        var position = event.latLng;



	
	alert(position);
		
    });*/
	//}
	
	/*var popup = new google.maps.InfoWindow({
        content: 'Aquí comença l´aventura!!' + "<BR>" + "<BR>" +' UN PETIT CANVI MARCA LA DIFERÈNCIA'
        , position: map.getCenter()
    });
	
 
    popup.open(map);*/
	
	

	
};
