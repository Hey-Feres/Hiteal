class User {
    constructor(id, nome, email, gym_id) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.gym_id = gym_id;
    }
    componentLoaded(){
        //if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        //    alert("Light Mode")
        //}
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
    editUser(id,nome,email,senha,admin){
        let request = new Request()
        let data = {"user":
            {
                "nome": nome, 
                "email": email, 
                "admin": admin, 
                "password": senha
            }
        }
        if (helper.empty(data["user"]["password"])) {delete data["user"]["password"]}
        let url = apiBaseUrl + "/users/" + id
        let successCallback = data => {
            $("#wrapperEditarUser").addClass("animated zoomOutRight")
            // Espera terminar a animacao de saida do $("#wrapperEditarUser")
            setTimeout(function(){
                $("#wrapperEditarUser").removeClass("animated zoomOutRight")
                $("#wrapperEditarUser").hide();
                helper.notificacao("Alterações Salvas","Usuário editado com sucesso");
            }, 750)
        }
        let errorCallback = (x,y,z) => {
            helper.notificacao("Erro ao Salvar","Não foi possível salvar as alterações")
        }
        let response = request.put(data,url,successCallback,errorCallback,{})
        return response
    }
    removeUser(id){
        let request = new Request()
        let url = apiBaseUrl + "/users/" + id
        let successCallback = data => {
            $("#wrapperEditarUser").addClass("animated rollOut")
            // Espera terminar a animacao de saida do $("#wrapperEditarUser")
            setTimeout(function(){
                $("#wrapperEditarUser").removeClass("animated rollOut")
                helper.notificacao("Usuário Excluido","Usuário removido da base de dados");
            }, 750)
        }
        let errorCallback = (x,y,z) => {
            helper.notificacao("Erro ao Apagar","Tente excluir mais tarde")
        }
        let response = request.delete(url,successCallback,errorCallback)
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
