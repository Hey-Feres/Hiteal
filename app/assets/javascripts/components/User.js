class User {
    constructor(id, nome, email, gym_id) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.gym_id = gym_id;
    }
    componentLoaded(){
        $("#wrapperEditarUser").hide(); ///////      
        // .  .  .  .  .  .  .  .  .  .  .  .
        $(".divider").not("#wrapperDados").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#user-nome-loader").hide();
        $("#user-nome-check").hide();
        $("#user-nome-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#user-email-loader").hide();
        $("#user-email-check").hide();
        $("#user-email-error").hide();        
    }
    // Item 3 ______________________________________________________
    mudarNome(novo_nome){
        $("#user-nome-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "user": {"nome": novo_nome} }
        let url = apiBaseUrl + "/users/" + this.id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#user-nome-check").show(200);
            $("#user-nome-loader").hide();
            setTimeout(function(){ $("#user-nome-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#user-nome-error").show(200);
            $("#user-nome-loader").hide();
            setTimeout(function(){ $("#user-nome-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data,url,successCallback,errorCallback,headers)
        return response
    }    
    // Item 3 ______________________________________________________
    mudarEmail(novo_email){
        $("#user-email-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "user": {"email": novo_email} }
        let url = apiBaseUrl + "/users/" + this.id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#user-email-check").show(200);
            $("#user-email-loader").hide();
            setTimeout(function(){ $("#user-email-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#user-email-error").show(200);
            $("#user-email-loader").hide();
            setTimeout(function(){ $("#user-email-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data,url,successCallback,errorCallback,headers)
        return response
    }        
    toggleWrappers(event, whatToShow){
        event.preventDefault();
        $(whatToShow).show(500);
        $(".divider").not(whatToShow).hide(500);
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
