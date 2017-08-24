$(document).ready(function(){
	$.ajax({
		type:'GET',
		url: 'http://swapi.co/api/planets/',
	}).done(function(planets){
		planets.results.forEach(function(planet){
			let tr = document.createElement("tr")
			let td = document.createElement("td")

			td.innerHTML = planet.name;
			$(planetTable).append(tr).append(td)

		})
	})

	$.ajax({
		type:'GET',
		url: 'http://swapi.co/api/starships/',
	}).done(function(starships){
		starships.results.forEach(function(starship){
			let tr = document.createElement("tr")
			let td = document.createElement("td")

			td.innerHTML = starship.name;
			$(shipTable).append(tr).append(td)
		})
	})
})