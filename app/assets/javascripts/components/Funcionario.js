class Funcionario {
	constructor(gym_id) {
		this.gym_id = gym_id;
	}

    // Item 1 ______________________________________________________
	componentLoaded(){
        $(".sidebar").addClass("animated fadeInDownBig")
        $(".content").addClass("animated fadeInUpBig")
        // .  .  .  .  .  .  .  .  .  .  .  .        
        $(".box").not("#wrapperTodos").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#loader-more-funcionarios").hide();
        $("#search-loader").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#funcionario-editar-nome-loader").hide()
        $("#funcionario-editar-nome-check").hide()
        $("#funcionario-editar-nome-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#funcionario-editar-email-loader").hide()
        $("#funcionario-editar-email-check").hide()
        $("#funcionario-editar-email-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#funcionario-editar-email-loader").hide()
        $("#funcionario-editar-email-check").hide()
        $("#funcionario-editar-email-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#funcionario-editar-sexo-loader").hide()
        $("#funcionario-editar-sexo-check").hide()
        $("#funcionario-editar-sexo-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#funcionario-editar-nascimento-loader").hide()
        $("#funcionario-editar-nascimento-check").hide()
        $("#funcionario-editar-nascimento-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#funcionario-editar-cpf-loader").hide()
        $("#funcionario-editar-cpf-check").hide()
        $("#funcionario-editar-cpf-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#funcionario-editar-remuneracao-loader").hide()
        $("#funcionario-editar-remuneracao-check").hide()
        $("#funcionario-editar-remuneracao-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#funcionario-editar-funcao-loader").hide()
        $("#funcionario-editar-funcao-check").hide()
        $("#funcionario-editar-funcao-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
        Inputmask({"mask": "999.999.999-99"}).mask($("#funcionario-editar-cpf"));
        Inputmask({"mask": "99/99/9999"}).mask($("#funcionario-editar-nascimento"));
	}
    // Item 2 ______________________________________________________
    loadFuncionarios(page){
        let request = new Request()
        let url = apiBaseUrl + "/todos_funcionarios/"+this.gym_id+"/"+page
        console.log(page)
        let successCallback = data => {
            $("#funcionarios-table-body").html("");
            for (var i = 0; i < data.length; i++) {
	            let row = 	"<tr class='data-row' id='row-funcionarios-"+data[i].id+"'>" + 
	                        	"<td class='text-center' id='funcionarios-nome-" + data[i].id + "'> " + data[i].nome + " </td>" +
	                        	"<td class='text-center'>"+data[i].email+"</td>" +
	                        	"<td class='text-center'>"+helper.capitalize(data[i].funcao)+"</td>" +
	                        	"<td class='text-center'> R$ "+parseFloat(data[i].remuneracao).toFixed(2)+"</td>" +
	                        	"<td class='text-center text-primary button-open-editor-box' id='" + data[i].id + "' > Editar </td>" +
	                    	"</tr>"
                $("#funcionarios-table-body").append(row)
            }
        }
        let errorCallback = (jqXHR, textStatus, msg) => { 
            console.log(msg)
        }
        let response = request.get(url,successCallback,errorCallback)
        return response
    }
    // Item 3 ______________________________________________________
    searchFuncionarios(params,page){
        let request = new Request()
        let url = apiBaseUrl + "/search_funcionarios/"
        let data = {"funcionario": {"search": params, "gym_id": this.gym_id, "page": page}}
        let successCallback = data => {
            console.log(data)
            $("#funcionarios-table-body").html("");
            for (var i = 0; i < data.length; i++) {
                let row =   "<tr class='data-row' id='row-funcionarios-"+data[i].id+"'>" + 
                                "<td class='text-center' id='funcionarios-nome-" + data[i].id + "'> " + data[i].nome + " </td>" +
                                "<td class='text-center'>"+data[i].email+"</td>" +
                                "<td class='text-center'>"+helper.capitalize(data[i].funcao)+"</td>" +
                                "<td class='text-center'> R$ "+parseFloat(data[i].remuneracao).toFixed(2)+"</td>" +
                                "<td class='text-center text-primary button-open-editor-box' id='" + data[i].id + "' > Editar </td>" +
                            "</tr>"
                $("#funcionarios-table-body").append(row)
            }
            if ($('#funcionario-table tr').length - 1 < 20) { 
                $("#button-load-more-funcionarios").hide() 
            } else{
                $("#button-load-more-funcionarios").show();
            }            
        }
        let errorCallback = (jqXHR, textStatus, msg) => { 
            console.log(msg)
        }
        let response = request.post(data,url,successCallback,errorCallback)
        return response
    }
    // Item 4 ______________________________________________________
    showEditorBox(id){
        let request = new Request()
        let url = apiBaseUrl + "/funcionarios/" + id
        let successCallback = data => {
            $("#funcionario-editar-id").val(data.id)
            $("#funcionario-editar-nome").val(data.nome)
            $("#funcionario-editar-email").val(data.email)
            $("#funcionario-editar-cpf").val(data.cpf)
            $("#funcionario-editar-nascimento").val(helper.formatDate(data.nascimento, true))
            $("#funcionario-editar-remuneracao").val(parseFloat(data.remuneracao).toFixed(2))
            $('[name=funcionario-editar-sexo] option').filter(function() {
                return ($(this).text() == helper.capitalize(data.sexo))
            }).prop('selected', true)
            $('[name=funcionario-editar-funcao] option').filter(function() {
                return ($(this).text() == helper.capitalize(data.funcao))
            }).prop('selected', true)
        }
        let errorCallback = (jqXHR, textStatus, msg) => {
            console.log(x)
            console.log(y)
            console.log(z)
        }
        request.get(url,successCallback,errorCallback)
        $("#wrapperEditFuncionario").addClass("animated slideInRight")
        $("#wrapperEditFuncionario").css("animation-duration", "0.7s")
        $("#wrapperEditFuncionario").show()
        setTimeout(function(){
            $("#wrapperEditFuncionario").removeClass("animated slideInRight")
        }, 750)
    }
    hideEditorBox(){
        $("#wrapperEditFuncionario").addClass("animated slideOutRight")
        $("#wrapperEditFuncionario").css("animation-duration", "0.7s")
        setTimeout(function(){
            $("#wrapperEditFuncionario").hide()
            $("#wrapperEditFuncionario").removeClass("animated slideOutRight")
        }, 750)
    }
    mudarNome(novo_nome){
        $("#funcionario-editar-nome-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let funcionario_id =$ ("#funcionario-editar-id").val()
        let request = new Request();
        let data = { "funcionario": {"nome": novo_nome} }
        let url = apiBaseUrl + "/funcionarios/" + funcionario_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#funcionario-editar-nome-check").show(200);
            $("#funcionario-editar-nome-loader").hide();
            setTimeout(function(){ $("#funcionario-editar-nome-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#funcionario-editar-nome-error").show(200);
            $("#funcionario-editar-nome-loader").hide();
            setTimeout(function(){ $("#funcionario-editar-nome-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarEmail(novo_email){
        $("#funcionario-editar-email-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let funcionario_id =$ ("#funcionario-editar-id").val()
        let request = new Request();
        let data = { "funcionario": {"email": novo_email} }
        let url = apiBaseUrl + "/funcionarios/" + funcionario_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#funcionario-editar-email-check").show(200);
            $("#funcionario-editar-email-loader").hide();
            setTimeout(function(){ $("#funcionario-editar-email-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#funcionario-editar-email-error").show(200);
            $("#funcionario-editar-email-loader").hide();
            setTimeout(function(){ $("#funcionario-editar-email-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarCpf(novo_cpf){
        $("#funcionario-editar-cpf-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let funcionario_id =$ ("#funcionario-editar-id").val()
        let request = new Request();
        let data = { "funcionario": {"cpf": novo_cpf} }
        let url = apiBaseUrl + "/funcionarios/" + funcionario_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#funcionario-editar-cpf-check").show(200);
            $("#funcionario-editar-cpf-loader").hide();
            setTimeout(function(){ $("#funcionario-editar-cpf-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#funcionario-editar-cpf-error").show(200);
            $("#funcionario-editar-cpf-loader").hide();
            setTimeout(function(){ $("#funcionario-editar-cpf-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarNascimento(novo_nascimento){
        $("#funcionario-editar-nascimento-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let funcionario_id =$ ("#funcionario-editar-id").val()
        let request = new Request();
        let data = { "funcionario": {"nascimento": novo_nascimento} }
        let url = apiBaseUrl + "/funcionarios/" + funcionario_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#funcionario-editar-nascimento-check").show(200);
            $("#funcionario-editar-nascimento-loader").hide();
            setTimeout(function(){ $("#funcionario-editar-nascimento-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#funcionario-editar-nascimento-error").show(200);
            $("#funcionario-editar-nascimento-loader").hide();
            setTimeout(function(){ $("#funcionario-editar-nascimento-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarRemuneracao(nova_remuneracao){
        $("#funcionario-editar-remuneracao-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let funcionario_id =$ ("#funcionario-editar-id").val()
        let request = new Request();
        let data = { "funcionario": {"remuneracao": nova_remuneracao} }
        let url = apiBaseUrl + "/funcionarios/" + funcionario_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#funcionario-editar-remuneracao-check").show(200);
            $("#funcionario-editar-remuneracao-loader").hide();
            setTimeout(function(){ $("#funcionario-editar-remuneracao-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#funcionario-editar-remuneracao-error").show(200);
            $("#funcionario-editar-remuneracao-loader").hide();
            setTimeout(function(){ $("#funcionario-editar-remuneracao-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarSexo(novo_sexo){
        $("#funcionario-editar-sexo-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let funcionario_id =$ ("#funcionario-editar-id").val()
        let request = new Request();
        let data = { "funcionario": {"sexo": novo_sexo} }
        let url = apiBaseUrl + "/funcionarios/" + funcionario_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#funcionario-editar-sexo-check").show(200);
            $("#funcionario-editar-sexo-loader").hide();
            setTimeout(function(){ $("#funcionario-editar-sexo-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#funcionario-editar-sexo-error").show(200);
            $("#funcionario-editar-sexo-loader").hide();
            setTimeout(function(){ $("#funcionario-editar-sexo-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarFuncao(nova_funcao){
        $("#funcionario-editar-funcao-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let funcionario_id =$ ("#funcionario-editar-id").val()
        let request = new Request();
        let data = { "funcionario": {"funcao": nova_funcao} }
        let url = apiBaseUrl + "/funcionarios/" + funcionario_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#funcionario-editar-funcao-check").show(200);
            $("#funcionario-editar-funcao-loader").hide();
            setTimeout(function(){ $("#funcionario-editar-funcao-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#funcionario-editar-funcao-error").show(200);
            $("#funcionario-editar-funcao-loader").hide();
            setTimeout(function(){ $("#funcionario-editar-funcao-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    deleteFuncionario(id){
        let request = new Request();
        let url = apiBaseUrl + "/funcionarios/" + id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            $("#wrapperEditFuncionario").addClass("animated rollOut")
            $("#wrapperEditFuncionario").css("animation-duration", "0.8s")
            setTimeout(function(){ 
                $("#wrapperEditFuncionario").hide()
                $("#wrapperEditFuncionario").removeClass("animated rollOut")
                helper.notificacao("Funcionário Removido","Funcionário excluido com sucesso");
                $("#row-funcionario-"+data.id).addClass("animated slideOutRight")
                // Espera terminar a animacao de saida da row com user deletado
                setTimeout(function(){$("#row-funcionario-"+data.id).remove()}, 750)
            }, 800);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            helper.notificacao("Erro ao Excluir","Não foi possivel excluir o funcionário");
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.delete(url, successCallback, errorCallback, headers)
        return response
    }
}

