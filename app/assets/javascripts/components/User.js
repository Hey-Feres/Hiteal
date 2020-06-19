class User {
    constructor(id, nome, email, gym_id) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.gym_id = gym_id;
    }
    // Item 1 ______________________________________________________
    componentLoaded(){
        $(".sidebar").addClass("animated fadeInDownBig")
        $(".content").addClass("animated fadeInUpBig")
        $("#wrapperEditarUser").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $(".box").not("#wrapperDados").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#user-edit-nome-loader").hide()
        $("#user-edit-nome-check").hide()
        $("#user-edit-nome-error").hide()    
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#user-edit-email-loader").hide()
        $("#user-edit-email-check").hide()
        $("#user-edit-email-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#user-edit-senha-loader").hide()
        $("#user-edit-senha-check").hide()
        $("#user-edit-senha-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#user-edit-other-nome-loader").hide()
        $("#user-edit-other-nome-check").hide()
        $("#user-edit-other-nome-error").hide()    
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#user-edit-other-email-loader").hide()
        $("#user-edit-other-email-check").hide()
        $("#user-edit-other-email-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#user-edit-other-senha-loader").hide()
        $("#user-edit-other-senha-check").hide()
        $("#user-edit-other-senha-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#user-edit-other-admin-loader").hide()
        $("#user-edit-other-admin-check").hide()
        $("#user-edit-other-admin-error").hide()
    }
    // Item 2 ______________________________________________________
    mudarNome(novo_nome){
        $("#user-edit-nome-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "user": {"nome": novo_nome} }
        let url = apiBaseUrl + "/users/" + this.id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#user-edit-nome-check").show(200);
            $("#user-edit-nome-loader").hide();
            setTimeout(function(){ $("#user-edit-nome-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#user-edit-nome-error").show(200);
            $("#user-edit-nome-loader").hide();
            setTimeout(function(){ $("#user-edit-nome-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data,url,successCallback,errorCallback,headers)
        return response
    }    
    // Item 2 ______________________________________________________
    mudarEmail(novo_email){
        $("#user-edit-email-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "user": {"email": novo_email} }
        let url = apiBaseUrl + "/users/" + this.id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#user-edit-email-check").show(200);
            $("#user-edit-email-loader").hide();
            setTimeout(function(){ $("#user-edit-email-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#user-edit-email-error").show(200);
            $("#user-edit-email-loader").hide();
            setTimeout(function(){ $("#user-edit-email-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data,url,successCallback,errorCallback,headers)
        return response
    }
    // Item 2 ______________________________________________________
    mudarEmailOther(novo_email, id){
        $("#user-edit-other-email-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "user": {"email": novo_email} }
        let url = apiBaseUrl + "/users/" + id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#user-edit-other-email-check").show(200);
            $("#user-edit-other-email-loader").hide();
            setTimeout(function(){ $("#user-edit-other-email-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#user-edit-other-email-error").show(200);
            $("#user-edit-other-email-loader").hide();
            setTimeout(function(){ $("#user-edit-other-email-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data,url,successCallback,errorCallback,headers)
        return response
    }
    // Item 2 ______________________________________________________
    mudarNomeOther(novo_nome, id){
        $("#user-edit-other-nome-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "user": {"nome": novo_nome} }
        let url = apiBaseUrl + "/users/" + id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#user-edit-other-nome-check").show(200);
            $("#user-edit-other-nome-loader").hide();
            setTimeout(function(){ $("#user-edit-other-nome-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#user-edit-other-nome-error").show(200);
            $("#user-edit-other-nome-loader").hide();
            setTimeout(function(){ $("#user-edit-other-nome-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data,url,successCallback,errorCallback,headers)
        return response
    }
    mudarAdminStatusOther(novo_status, id){
        $("#user-edit-other-admin-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "user": {"admin": novo_status} }
        let url = apiBaseUrl + "/users/" + id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#user-edit-other-admin-check").show(200);
            $("#user-edit-other-admin-loader").hide();
            setTimeout(function(){ $("#user-edit-other-admin-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#user-edit-other-admin-error").show(200);
            $("#user-edit-other-admin-loader").hide();
            setTimeout(function(){ $("#user-edit-other-admin-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data,url,successCallback,errorCallback,headers)
        return response
    }
    // Item 4 ______________________________________________________
    showEditorForm(id){
        let request = new Request()
        let url = apiBaseUrl + "/users/" + id
        let successCallback = data => {
            console.log(data)
            $("#user-edit-other-nome").val(data.nome)
            $("#user-edit-other-email").val(data.email)
            $("#user-edit-other-id").val(data.id)
            $("#user-edit-other-since").val(helper.formatDate(data.created_at, true))
            if (data.admin) { $('#user-edit-other-admin').prop('checked', true) }
            if (id == this.id) { $('#user-edit-other-admin').prop('disabled', true) }
        }
        let errorCallback = (jqXHR, textStatus, msg) => {
            console.log(x)
            console.log(y)
            console.log(z)
        }
        request.get(url,successCallback,errorCallback)
        $("#wrapperEditUser").addClass("animated slideInRight")
        $("#wrapperEditUser").css("animation-duration", "0.7s")
        $("#wrapperEditUser").show()
        setTimeout(function(){
            $("#wrapperEditUser").removeClass("animated slideInRight")
        }, 750)
    }
    // Item 5 ______________________________________________________
    hideEditorForm(){
        $("#wrapperEditUser").addClass("animated slideOutRight")
        $("#wrapperEditUser").css("animation-duration", "0.7s")
        setTimeout(function(){
            $("#wrapperEditUser").hide()
            $("#wrapperEditUser").removeClass("animated slideOutRight")
            $('#user-edit-other-admin').prop('checked', false)
            if (id == this.id) { $('#user-edit-other-admin').prop('disabled', false) }
        }, 750)   
    }
    // Item 6 ______________________________________________________
    removeUser(id){
        let request = new Request()
        let url = apiBaseUrl + "/users/" + id
        let successCallback = data => {
            $("#wrapperEditUser").addClass("animated rollOut")
            setTimeout(function(){
                $("#wrapperEditUser").hide()
                $("#wrapperEditUser").removeClass("animated rollOut")
                helper.notificacao("Usuário Excluido","Usuário removido da base de dados");
                $("#row-user-"+data.id).addClass("animated slideOutRight")
                setTimeout(function(){$("#row-user-"+data.id).remove();},750)
            }, 750)
        }
        let errorCallback = (jqXHR, textStatus, msg) => {
            helper.notificacao("Erro ao Apagar","Tente excluir mais tarde")
        }
        let response = request.delete(url,successCallback,errorCallback)
        return response
    }
    // Item 7 ______________________________________________________
    createUser(dados){
        let request = new Request()
        let data = {"user": {
                "nome": dados.nome,
                "email": dados.email, 
                "admin": dados.admin, 
                "password": dados.senha,
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
            $("#novo-user-nome").val("")
            $("#novo-user-email").val("")
            $("#novo-user-senha").val("")
            $("#novo-user-admin-status").prop("checked", false);
            // Exibe a notificacao
            helper.notificacao("Usuário Adicionado","Usuário adicionado à base de dados");
        }
        let errorCallback = (jqXHR, textStatus, msg) => {
            console.log(msg)
        }
        let response = request.post(data,url,successCallback,errorCallback,{})
        return response
    }
    // Item 8 ______________________________________________________
    loadUsers(page){
        let request = new Request()
        let url = apiBaseUrl + "/all/users/" + this.gym_id + "/" + page
        let successCallback = data => {  
            for (var i = data.length - 1; i >= 0; i--) {
                let row = "<tr class='data-row' id='row-user-"+data[i].id+"'>" + 
                            "<td class='text-center' id='user-nome-" + data[i].id + "'> " + data[i].nome + " </td>" +
                            "<td class='text-center'> " + helper.formatDate(data[i].created_at, true) + " </td>" +
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
    // Item 9 ______________________________________________________
    toggleWrappers(event, whatToShow){
        event.preventDefault();
        $(whatToShow).show(300);
        $(".box").not(whatToShow).hide(300);
    }
    // Item 10 ______________________________________________________
	getLocation() {
		let data = null
		if (navigator.geolocation) {
	    	navigator.geolocation.getCurrentPosition(function(position) {
	    		data = {lat:position.coords.latitude,lng:position.coords.longitude}
	    	});
	  	} else { 
	    	console.log("Geolocation is not supported by this browser.")
	  	}
	  	return data
	}
}

// Documentacao
// Item 1 ________________________________________________________________________________
//     - Metodo componentLoaded() é chamado quando a pagina é carregada. 
//     - Ele inicializa os componentes
// Item 2 ________________________________________________________________________________
//     - Metodo mudarNome() é chamado no onchange do input nome da view e recebe o valor
//     digitado como parametro
//     - Basicamente faz uma requisicao put com o novo nome
//     - Metodo mudarEmail() funciona da mesma forma, no entanto, com o input de email
// Item 3 ________________________________________________________________________________
//     - Metodo editUser() recebe id,nome,email.senha e admin como parametro
//     - Realiza uma requisicao put com os dados passados como parametro
//     - Item 3.1 : se password for uma string vazia, ele e removido. Isso e fundamental 
//     pq o campo password nao pode chegar vazio ao back end.
// Item 4 ________________________________________________________________________________
//     - Metodo showEditorForm() exibe o formulario modal
//     - Executa request get para preencher os inputs do formulario
// Item 5 ________________________________________________________________________________
//     - Metodo hideEditorForm() fecha o formulario modal, executando a animacao de saida
// Item 6 ________________________________________________________________________________
//     - Metodo removeUser() executa request delete
//     - Executa animacao de saida do form modal e remove a row com o usuario deletado
// Item 7 ________________________________________________________________________________
//     - Metodo createUser() executa request post com os dados inseridos pelo usuario
//     - Adiciona a nova row a table de usuarios
// Item 8 ________________________________________________________________________________
//     - Metodo loadUsers() executa request get e popula a table
//     - Os dados so sao carregados quando a aba de lista de usuarios e clicado
//     - Dentro do callback de sucesso executamos um loop for, para popular a table
// Item 9 ________________________________________________________________________________
//    - Metodo toggleWrappers() recebe o click event e o id da div que deve ser exibido, de 
//    acordo com o que foi clicado na sidebar
//    - Todo os outros dividers sao ocultados
//    - Metodo preventDefault evita bugs relacionados ao evento de click do usuario
// Item 10 _______________________________________________________________________________
//    - Metodo getLocation() usa o recurso navigator do browser para obter a localizacao
//    do usuario
//    - Retorna um hash com latitude e longitude
