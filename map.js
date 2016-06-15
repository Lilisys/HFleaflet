var mymap = L.map('mapid').setView([42.506768, -83.364424], 14);

		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'mapbox.streets'
		}).addTo(mymap);


		L.marker([42.514387, -83.375321]).addTo(mymap)
			.bindPopup("<b>North Farmington</b><br />High School").openPopup();

		L.marker([42.499508, -83.371956]).addTo(mymap)
			.bindPopup("<b>O.E. Dunckel</b><br />Middle School").openPopup();

		L.marker([42.508480, -83.349874]).addTo(mymap)
			.bindPopup("<b>Highmeadow Common Campus</b><br />Elementary School").openPopup();
	


		var popup = L.popup();

		function onMapClick(e) {
			popup
				.setLatLng(e.latlng)
				.setContent("Why are you clicking here?")
				.openOn(mymap);
		}

		mymap.on('click', onMapClick);

