class User {
    constructor(id, nome, email, gym_id) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.gym_id = gym_id;
    }
    componentLoaded(){
        $(".sidebar").addClass("animated fadeInDownBig")
        //$(".sidebar").addClass("animated zoomInLeft")
        $(".content").addClass("animated fadeInUpBig")
        //$(".content").addClass("animated zoomInRight")
        $("#wrapperEditarUser").hide();
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
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#new-user-nome-loader").hide();
        $("#new-user-nome-check").hide();
        $("#new-user-nome-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#new-user-email-loader").hide();
        $("#new-user-email-check").hide();
        $("#new-user-email-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#new-user-senha-loader").hide();
        $("#new-user-senha-check").hide();
        $("#new-user-senha-error").hide();
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
            $("#user-nome-"+data.id).html(data.nome)
            $("#wrapperEditarUser").addClass("animated zoomOutUp")
            $("#wrapperEditarUser").css("animation-duration", "0.7s")
            // Espera terminar a animacao de saida do $("#wrapperEditarUser")
            setTimeout(function(){
                $("#wrapperEditarUser").removeClass("animated zoomOutUp")
                $("#wrapperEditarUser").hide();
                helper.notificacao("Alterações Salvas","Usuário editado com sucesso");
            }, 750)
        }
        let errorCallback = (jqXHR, textStatus, msg) => {
            helper.notificacao("Erro ao Salvar","Não foi possível salvar as alterações")
        }
        let response = request.put(data,url,successCallback,errorCallback,{})
        return response
    }
    hideEditorForm(){
        $("#wrapperEditarUser").addClass("animated zoomOutUp")
        $("#wrapperEditarUser").css("animation-duration", "0.7s")
        // Importante pois ao abrir o form relativo ao usuario atual, todos os checkboxes ficam disabled
        $('#switch-admin-status').attr("disabled", false)
        setTimeout(function(){
            $("#wrapperEditarUser").hide()
            $("#wrapperEditarUser").removeClass("animated zoomOutUp")
        },750)        
    }
    showEditorForm(id){
        let request = new Request()
        let url = apiBaseUrl + "/users/" + id
        let successCallback = data => {
            $("#edit-nome-field").val(data.nome)
            $("#edit-email-field").val(data.email)
            $("#edit-id-field").val(data.id)
            if (data.admin == true) { $('#switch-admin-status').prop("checked", true) }
            // O Current User nao pode abrir mao do status de admin 
            if (data.id == this.id) { $('#switch-admin-status').attr("disabled", true); }
        }
        let errorCallback = (jqXHR, textStatus, msg) => {
            console.log(x)
            console.log(y)
            console.log(z)
        }
        request.get(url,successCallback,errorCallback)
        $("#wrapperEditarUser").addClass("animated zoomInDown")
        $("#wrapperEditarUser").css("animation-duration", "0.7s")
        $("#wrapperEditarUser").show()
        setTimeout(function(){
            $("#wrapperEditarUser").removeClass("animated zoomInDown")
        },750)
    }
    removeUser(id){
        let request = new Request()
        let url = apiBaseUrl + "/users/" + id
        let successCallback = data => {
            $("#wrapperEditarUser").addClass("animated rollOut")
            // Espera terminar a animacao de saida do $("#wrapperEditarUser")
            setTimeout(function(){
                $("#wrapperEditarUser").hide()
                $("#wrapperEditarUser").removeClass("animated rollOut")
                helper.notificacao("Usuário Excluido","Usuário removido da base de dados");
                
                $("#row-user-"+data.id).addClass("animated slideOutRight")
                // Espera terminar a animacao de saida da row com user deletado
                setTimeout(function(){$("#row-user-"+data.id).remove();},750)
            }, 750)
        }
        let errorCallback = (jqXHR, textStatus, msg) => {
            helper.notificacao("Erro ao Apagar","Tente excluir mais tarde")
        }
        let response = request.delete(url,successCallback,errorCallback)
        return response
    }
    createUser(nome,email,senha,admin){
        let request = new Request()
        let data = {"user":
            {
                "nome": nome, 
                "email": email, 
                "admin": admin, 
                "password": senha,
                "gym_id": this.gym_id
            }
        }
        if (helper.empty(data["user"]["password"])) {delete data["user"]["password"]}
        let url = apiBaseUrl + "/users"
        let successCallback = data => {
            console.log(data)
            // Adiciona a linha com novo usuario a tabela de usuarios
            let row = "<tr class='data-row' id='row-user-"+data.id+"'>" + 
                        "<td class='text-center' id='user-nome-" + data.id + "'> " + data.nome + " </td>" +
                        "<td class='text-center'> </td>" +
                        "<td class='text-center text-primary button-open-editor-box' id='" + data.id + "' > Editar </td>" +
                      "</tr>"
            $("#users-table").append(row)
            // Limpa os campos
            $("#new-user-nome").val("")
            $("#new-user-email").val("")
            $("#new-user-senha").val("")
            $("#new-user-switch-admin-status").prop("checked", false);
            // Exibe a notificacao
            helper.notificacao("Usuário Adicionado","Usuário adicionado à base de dados");
        }
        let errorCallback = (jqXHR, textStatus, msg) => {
            console.log(msg)
        }
        let response = request.post(data,url,successCallback,errorCallback,{})
        return response
    }    
    loadUsers(page){
        let request = new Request()
        let url = apiBaseUrl + "/users/" + this.id + "/" + page
        let successCallback = data => {  
            let time = 0
            for (var i = data.length - 1; i >= 0; i--) {
                let row = "<tr class='data-row' id='row-user-"+data[i].id+"'>" + 
                            "<td class='text-center' id='user-nome-" + data[i].id + "'> " + data[i].nome + " </td>" +
                            "<td class='text-center'> " + data[i].last_sign_in_at + " </td>" +
                            "<td class='text-center text-primary button-open-editor-box' id='" + data[i].id + "' > Editar </td>" +
                          "</tr>"
                $("#users-table").append(row)
            }
        }
        let errorCallback = (jqXHR, textStatus, msg) => { 
            console.log(msg)
        }
        let response = request.get(url,successCallback,errorCallback)
        return response
    }
    toggleWrappers(event, whatToShow){
        event.preventDefault();
        $(whatToShow).show(300);
        $(".divider").not(whatToShow).hide(300);
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
