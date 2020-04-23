class User {
    constructor(nome, gym_id) {
        this.nome = nome;
        this.gym_id = gym_id
    }
	getLocation() {
		let data = null
		if (navigator.geolocation) {
	    	navigator.geolocation.getCurrentPosition(function(position) {
	    		data = {lat:position.coords.latitude,lng:position.coords.longitude}
	    		//console.log(data)
	    	});
	  	} else { 
	    	console.log("Geolocation is not supported by this browser.")
	  	}
	  	return data
	}
}
