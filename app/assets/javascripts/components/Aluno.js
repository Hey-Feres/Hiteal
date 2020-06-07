class Aluno {
	constructor(gym_id,total_alunos) {
		this.gym_id = gym_id;
		this.total_alunos = total_alunos;
	}
	componentLoaded(){
        $(".sidebar").addClass("animated fadeInDownBig")
        $(".content").addClass("animated fadeInUpBig")
        // .  .  .  .  .  .  .  .  .  .  .  .        
        $(".box").not("#wrapperGerenciar").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#loader-more-alunos").hide();
        $("#search-loader").hide();        
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#aluno-editar-nome-loader").hide();
        $("#aluno-editar-nome-check").hide();
        $("#aluno-editar-nome-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#aluno-editar-email-loader").hide();
        $("#aluno-editar-email-check").hide();
        $("#aluno-editar-email-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#aluno-editar-nascimento-loader").hide();
        $("#aluno-editar-nascimento-check").hide();
        $("#aluno-editar-nascimento-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#aluno-editar-sexo-loader").hide();
        $("#aluno-editar-sexo-check").hide();
        $("#aluno-editar-sexo-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#aluno-editar-plano-loader").hide();
        $("#aluno-editar-plano-check").hide();
        $("#aluno-editar-plano-error").hide();
		// Se todos os alunos ja estiverem sendo exibidos, o button de carregar mais é escondido
		if ($('#alunos-table tr').length - 1 >= this.total_alunos) { $("#button-load-more-alunos").hide() }
        // .  .  .  .  .  .  .  .  .  .  .  .
        Inputmask({"mask": "99/99/9999"}).mask($("#aluno-editar-nascimento"));
	}
    loadAlunos(page){
        $("#loader-more-alunos").show();
        $("#button-load-more-alunos").hide();
        let request = new Request()
        let url = apiBaseUrl + "/todos_alunos/"+this.gym_id+"/"+page
        console.log(page)
        let successCallback = data => {
            for (var i = 0; i < data.length; i++) {
                let row = "<tr class='data-row' id='row-aluno-"+data[i].id+"'>" + 
                            "<td class='text-center' id='aluno-nome-" + data[i].id + "'> " + data[i].nome + " </td>" +
                            "<td class='text-center'>"+data[i].plano_nome+"</td>" +
                            "<td class='text-center text-primary button-open-editor-box' id='" + data[i].id + "' > Editar </td>" +
                          "</tr>"
                $("#alunos-table-body").append(row)
            }
        	$("#loader-more-alunos").hide();
        	if ($('#alunos-table tr').length - 1 >= this.total_alunos) { 
        		$("#button-load-more-alunos").hide() 
        	} else{
        		$("#button-load-more-alunos").show();
        	}
        }
        let errorCallback = (jqXHR, textStatus, msg) => { 
            console.log(msg)
        }
        let response = request.get(url,successCallback,errorCallback)
        return response
    }
    searchAlunos(params,page){
        let request = new Request()
        let url = apiBaseUrl + "/search_alunos"
        let data = {"aluno": {"search": params, "gym_id": this.gym_id, "page": page}}
        let successCallback = data => {
        	console.log(data)
        	$("#alunos-table-body").html("");
            for (var i = 0; i < data.length; i++) {
                let row = "<tr class='data-row' id='row-aluno-"+data[i].id+"'>" + 
                            "<td class='text-center' id='aluno-nome-" + data[i].id + "'> " + data[i].nome + " </td>" +
                            "<td class='text-center'>"+data[i].plano_nome+"</td>" +
                            "<td class='text-center text-primary button-open-editor-box' id='" + data[i].id + "' > Editar </td>" +
                          "</tr>"
                $("#alunos-table-body").append(row)
            }
        	if ($('#alunos-table tr').length - 1 < 20) { 
        		$("#button-load-more-alunos").hide() 
        	} else{
        		$("#button-load-more-alunos").show();
        	}            
        }
        let errorCallback = (jqXHR, textStatus, msg) => { 
        	console.log(msg)
        }
        let response = request.post(data,url,successCallback,errorCallback)
        return response
    }
    showEditorBox(id){
        let request = new Request()
        let url = apiBaseUrl + "/alunos/" + id
        let successCallback = data => {
            $("#aluno-editar-nome").val(data.nome)
            $("#aluno-editar-email").val(data.email)
            $("#aluno-editar-id").val(data.id)
            $('[name=aluno-editar-sexo] option').filter(function() {
                return ($(this).text() == helper.capitalize(data.sexo))
            }).prop('selected', true);
            $('[name=aluno-editar-plano] option').filter(function() {
                return ($(this).text() == data.plano.nome)
            }).prop('selected', true);            
            // Formatando Data Nascimento
            let MyDate = new Date(data.nascimento.split("T")[0]);
            MyDate.setDate(MyDate.getDate() + 20);
            let nascimento = ('0' + MyDate.getDate()).slice(-2) + '/' + ('0' + (MyDate.getMonth()+1)).slice(-2) + '/' + MyDate.getFullYear();
            $("#aluno-editar-nascimento").val(nascimento)
        }
        let errorCallback = (jqXHR, textStatus, msg) => {
            console.log(x)
            console.log(y)
            console.log(z)
        }
        request.get(url,successCallback,errorCallback)
        $("#wrapperEditAluno").addClass("animated slideInRight")
        $("#wrapperEditAluno").css("animation-duration", "0.7s")
        $("#wrapperEditAluno").show()
        setTimeout(function(){
            $("#wrapperEditAluno").removeClass("animated slideInRight")
        },750)
    }
    hideEditorBox(){
        $("#wrapperEditAluno").addClass("animated slideOutRight")
        $("#wrapperEditAluno").css("animation-duration", "0.7s")
        setTimeout(function(){
            $("#wrapperEditAluno").hide()
            $("#wrapperEditAluno").removeClass("animated slideOutRight")
        },750)
    }
    mudarNome(novo_nome){
        $("#aluno-editar-nome-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let aluno_id =$ ("#aluno-editar-id").val()
        let request = new Request();
        let data = { "aluno": {"nome": novo_nome} }
        let url = apiBaseUrl + "/alunos/" + aluno_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#aluno-editar-nome-check").show(200);
            $("#aluno-editar-nome-loader").hide();
            setTimeout(function(){ $("#aluno-editar-nome-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#aluno-editar-nome-error").show(200);
            $("#aluno-editar-nome-loader").hide();
            setTimeout(function(){ $("#aluno-editar-nome-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarEmail(novo_email){
        $("#aluno-editar-email-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let aluno_id =$ ("#aluno-editar-id").val()
        let request = new Request();
        let data = { "aluno": {"email": novo_email} }
        let url = apiBaseUrl + "/alunos/" + aluno_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#aluno-editar-email-check").show(200);
            $("#aluno-editar-email-loader").hide();
            setTimeout(function(){ $("#aluno-editar-email-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#aluno-editar-email-error").show(200);
            $("#aluno-editar-email-loader").hide();
            setTimeout(function(){ $("#aluno-editar-email-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarNascimento(novo_nascimento){
        $("#aluno-editar-nascimento-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let aluno_id = $("#aluno-editar-id").val()
        let request = new Request();
        let data = { "aluno": {"nascimento": novo_nascimento} }
        let url = apiBaseUrl + "/alunos/" + aluno_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#aluno-editar-nascimento-check").show(200);
            $("#aluno-editar-nascimento-loader").hide();
            setTimeout(function(){ $("#aluno-editar-nascimento-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#aluno-editar-nascimento-error").show(200);
            $("#aluno-editar-nascimento-loader").hide();
            setTimeout(function(){ $("#aluno-editar-nascimento-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarSexo(novo_sexo){
        $("#aluno-editar-sexo-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let aluno_id =$ ("#aluno-editar-id").val()
        let request = new Request();
        let data = { "aluno": {"sexo": novo_sexo} }
        let url = apiBaseUrl + "/alunos/" + aluno_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#aluno-editar-sexo-check").show(200);
            $("#aluno-editar-sexo-loader").hide();
            setTimeout(function(){ $("#aluno-editar-sexo-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#aluno-editar-sexo-error").show(200);
            $("#aluno-editar-sexo-loader").hide();
            setTimeout(function(){ $("#aluno-editar-sexo-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarPlano(novo_plano){
        $("#aluno-editar-plano-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let aluno_id =$ ("#aluno-editar-id").val()
        let request = new Request();
        let data = { "aluno": {"plano_id": novo_plano} }
        let url = apiBaseUrl + "/alunos/" + aluno_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#aluno-editar-plano-check").show(200);
            $("#aluno-editar-plano-loader").hide();
            setTimeout(function(){ $("#aluno-editar-plano-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#aluno-editar-plano-error").show(200);
            $("#aluno-editar-plano-loader").hide();
            setTimeout(function(){ $("#aluno-editar-plano-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    toggleWrappers(event, whatToShow){
        event.preventDefault();
        $(whatToShow).show(300);
        $(".box").not(whatToShow).hide(300);
    }
}

