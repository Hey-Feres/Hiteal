class Aula {
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
        $("#loader-more-aulas").hide()
        $("#search-loader").hide()        
        // .  .  .  .  .  .  .  .  .  .  .  .
		$("#aula-editar-nome-loader").hide()
		$("#aula-editar-nome-check").hide()
		$("#aula-editar-nome-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
		$("#aula-editar-descricao-loader").hide()
		$("#aula-editar-descricao-check").hide()
		$("#aula-editar-descricao-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
		$("#aula-editar-inicio-loader").hide()
		$("#aula-editar-inicio-check").hide()
		$("#aula-editar-inicio-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
		$("#aula-editar-duracao-loader").hide()
		$("#aula-editar-duracao-check").hide()
		$("#aula-editar-duracao-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
		$("#aula-editar-repete-loader").hide()
		$("#aula-editar-repete-check").hide()
		$("#aula-editar-repete-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
		$("#aula-editar-intervalo-repeticao-loader").hide()
		$("#aula-editar-intervalo-repeticao-check").hide()
		$("#aula-editar-intervalo-repeticao-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
		$("#aula-editar-horario-loader").hide()
		$("#aula-editar-horario-check").hide()
		$("#aula-editar-horario-error").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
		$("#aula-editar-professor-loader").hide()
		$("#aula-editar-professor-check").hide()
		$("#aula-editar-professor-error").hide()		
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#aula-editar-descricao").autogrow();
        // .  .  .  .  .  .  .  .  .  .  .  .
        Inputmask({"mask": "99/99/9999"}).mask($("#aula-editar-inicio"));
        Inputmask({"mask": "99:99"}).mask($("#aula-editar-horario"));
        Inputmask({"mask": "99/99/9999"}).mask($("#aula-nova-inicio"));
        Inputmask({"mask": "99:99"}).mask($("#aula-nova-horario"));
        //aula-nova-horario
    }
    // Item 2 ______________________________________________________
    loadAulas(page){
        let request = new Request()
        let url = apiBaseUrl + "/all/aulas/"+this.gym_id+"/"+page
        let successCallback = data => {
            $("#aulas-table-body").html("");
            console.log(data)
            for (var i = 0; i < data.length; i++) {
	            let row = '';
	            if (data[i].repete) {
		            row = 	"<tr class='data-row' id='row-aulas-"+data[i].id+"'>" + 
		                        	"<td class='text-center' id='aulas-nome-" + data[i].id + "'> " + data[i].nome + " </td>" +
		                        	"<td class='text-center'>"+data[i].professor_nome+"</td>" +
		                        	"<td class='text-center'>"+data[i].duracao+"h</td>" +
		                        	"<td class='text-center'>"+helper.formatDate(data[i].data_inicio)+"</td>" +
		                        	"<td class='text-center'>"+helper.formatTime(data[i].horario)+"</td>" +
		                        	"<td class='text-center'><img src='https://img.icons8.com/ios/30/34C759/checkmark.png'/></td>" +
		                        	"<td class='text-center text-primary button-open-editor-box' id='" + data[i].id + "' > Editar </td>" +
		                    	"</tr>"
	            }else{
	            	row = 	"<tr class='data-row' id='row-aulas-"+data[i].id+"'>" + 
	                        	"<td class='text-center' id='aulas-nome-" + data[i].id + "'> " + data[i].nome + " </td>" +
	                        	"<td class='text-center'>"+data[i].professor_nome+"</td>" +
	                        	"<td class='text-center'>"+data[i].duracao+"h</td>" +
	                        	"<td class='text-center'>"+helper.formatDate(data[i].data_inicio)+"</td>" +
	                        	"<td class='text-center'>"+helper.formatTime(data[i].horario)+"</td>" +
	                        	"<td class='text-center'><img src='https://img.icons8.com/ios/30/CCCCCC/checkmark.png'/></td>" +
	                        	"<td class='text-center text-primary button-open-editor-box' id='" + data[i].id + "' > Editar </td>" +
	                    	"</tr>"
	            }
                $("#aulas-table-body").append(row)
            }
        }
        let errorCallback = (jqXHR, textStatus, msg) => { 
            console.log(msg)
        }
        let response = request.get(url,successCallback,errorCallback)
        return response
    }
    // Item 3 ______________________________________________________
    searchAulas(params,page){
        let request = new Request()
        let url = apiBaseUrl + "/search/aulas"
        let data = {"aula": {"search": params, "gym_id": this.gym_id, "page": page}}
        let successCallback = data => {
            console.log(data)
            $("#aulas-table-body").html("");
            for (var i = 0; i < data.length; i++) {
	            let row = '';
	            if (data[i].repete) {
		            row = 	"<tr class='data-row' id='row-aulas-"+data[i].id+"'>" + 
		                        	"<td class='text-center' id='aulas-nome-" + data[i].id + "'> " + data[i].nome + " </td>" +
		                        	"<td class='text-center'>"+data[i].professor_nome+"</td>" +
		                        	"<td class='text-center'>"+data[i].duracao+"h</td>" +
		                        	"<td class='text-center'>"+helper.formatDate(data[i].data_inicio)+"</td>" +
		                        	"<td class='text-center'>"+helper.formatTime(data[i].horario)+"</td>" +
		                        	"<td class='text-center'><img src='https://img.icons8.com/ios/30/34C759/checkmark.png'/></td>" +
		                        	"<td class='text-center text-primary button-open-editor-box' id='" + data[i].id + "' > Editar </td>" +
		                    	"</tr>"
	            }else{
	            	row = 	"<tr class='data-row' id='row-aulas-"+data[i].id+"'>" + 
	                        	"<td class='text-center' id='aulas-nome-" + data[i].id + "'> " + data[i].nome + " </td>" +
	                        	"<td class='text-center'>"+data[i].professor_nome+"</td>" +
	                        	"<td class='text-center'>"+data[i].duracao+"h</td>" +
	                        	"<td class='text-center'>"+helper.formatDate(data[i].data_inicio)+"</td>" +
	                        	"<td class='text-center'>"+helper.formatTime(data[i].horario)+"</td>" +
	                        	"<td class='text-center'><img src='https://img.icons8.com/ios/30/CCCCCC/checkmark.png'/></td>" +
	                        	"<td class='text-center text-primary button-open-editor-box' id='" + data[i].id + "' > Editar </td>" +
	                    	"</tr>"
	            }
                $("#aulas-table-body").append(row)
            }
            if ($('#aulas-table tr').length - 1 < 20) { 
                $("#button-load-more-aulas").hide() 
            } else{
                $("#button-load-more-aulas").show();
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
        let url = apiBaseUrl + "/aulas/" + id
        let successCallback = data => {
        	console.log(data)
            $("#aula-editar-nome").val(data.nome)
            $("#aula-editar-id").val(data.id)
			$("#aula-editar-descricao").val(data.descricao)
			$("#aula-editar-inicio").val(helper.formatDate(data.data_inicio,true))
			$("#aula-editar-duracao").val(data.duracao)
            if (data.intervalo_repeticao != null) {$("#aula-editar-intervalo-repeticao").val(data.intervalo_repeticao)}
            if (data.repete) {
            	$("#aula-editar-repete").prop("checked", true);
                $("#aula-editar-intervalo-repeticao").prop('disabled', false);
                $("#aula-editar-intervalo-repeticao").attr("placeholder", "Intervalo Repetição (Dias)");
            }else{
            	$("#aula-editar-repete").prop("checked", false);
                $("#aula-editar-intervalo-repeticao").prop('disabled', true);
                $("#aula-editar-intervalo-repeticao").attr("placeholder", "Aula não repete");
            }
            $('[name=aula-editar-professor] option').filter(function() {
                return ($(this).text() == data.funcionario.nome)
            }).prop('selected', true);
            $("#aula-editar-horario").val(helper.formatTime(data.horario))
        }
        let errorCallback = (jqXHR, textStatus, msg) => {
            console.log(x)
            console.log(y)
            console.log(z)
        }
        request.get(url,successCallback,errorCallback)
        $("#wrapperEditAula").addClass("animated slideInRight")
        $("#wrapperEditAula").css("animation-duration", "0.7s")
        $("#wrapperEditAula").show()
        setTimeout(function(){
            $("#wrapperEditAula").removeClass("animated slideInRight")
        }, 750)
    }
    // Item 5 ______________________________________________________
    hideEditorBox(){
        $("#wrapperEditAula").addClass("animated slideOutRight")
        $("#wrapperEditAula").css("animation-duration", "0.7s")
        setTimeout(function(){
            $("#wrapperEditAula").hide()
            $("#wrapperEditAula").removeClass("animated slideOutRight")
        }, 750)
    }
    mudarNome(novo_nome){
        $("#aula-editar-nome-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let aula_id = $("#aula-editar-id").val()
        let request = new Request();
        let data = { "aula": {"nome": novo_nome} }
        let url = apiBaseUrl + "/aulas/" + aula_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#aula-editar-nome-check").show(200);
            $("#aula-editar-nome-loader").hide();
            setTimeout(function(){ $("#aula-editar-nome-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#aula-editar-nome-error").show(200);
            $("#aula-editar-nome-loader").hide();
            setTimeout(function(){ $("#aula-editar-nome-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarDescricao(nova_descricao){
        $("#aula-editar-descricao-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let aula_id = $("#aula-editar-id").val()
        let request = new Request();
        let data = { "aula": {"descricao": nova_descricao} }
        let url = apiBaseUrl + "/aulas/" + aula_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#aula-editar-descricao-check").show(200);
            $("#aula-editar-descricao-loader").hide();
            setTimeout(function(){ $("#aula-editar-descricao-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#aula-editar-descricao-error").show(200);
            $("#aula-editar-descricao-loader").hide();
            setTimeout(function(){ $("#aula-editar-descricao-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarDataInicio(nova_data_inicio){
        $("#aula-editar-inicio-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let aula_id = $("#aula-editar-id").val()
        let request = new Request();
        let data = { "aula": {"data_inicio": nova_data_inicio} }
        let url = apiBaseUrl + "/aulas/" + aula_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#aula-editar-inicio-check").show(200);
            $("#aula-editar-inicio-loader").hide();
            setTimeout(function(){ $("#aula-editar-inicio-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#aula-editar-inicio-error").show(200);
            $("#aula-editar-inicio-loader").hide();
            setTimeout(function(){ $("#aula-editar-inicio-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarProfessor(novo_professor){
        $("#aula-editar-professor-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let aula_id = $("#aula-editar-id").val()
        let request = new Request();
        let data = { "aula": {"professor_id": novo_professor} }
        let url = apiBaseUrl + "/aulas/" + aula_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#aula-editar-professor-check").show(200);
            $("#aula-editar-professor-loader").hide();
            setTimeout(function(){ $("#aula-editar-professor-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#aula-editar-professor-error").show(200);
            $("#aula-editar-professor-loader").hide();
            setTimeout(function(){ $("#aula-editar-professor-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarHorario(novo_horario){
        $("#aula-editar-horario-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let aula_id = $("#aula-editar-id").val()
        let request = new Request();
        let data = { "aula": {"horario": novo_horario} }
        let url = apiBaseUrl + "/aulas/" + aula_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#aula-editar-horario-check").show(200);
            $("#aula-editar-horario-loader").hide();
            setTimeout(function(){ $("#aula-editar-horario-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#aula-editar-horario-error").show(200);
            $("#aula-editar-horario-loader").hide();
            setTimeout(function(){ $("#aula-editar-horario-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarDuracao(nova_duracao){
        $("#aula-editar-duracao-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let aula_id = $("#aula-editar-id").val()
        let request = new Request();
        let data = { "aula": {"duracao": nova_duracao} }
        let url = apiBaseUrl + "/aulas/" + aula_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#aula-editar-duracao-check").show(200);
            $("#aula-editar-duracao-loader").hide();
            setTimeout(function(){ $("#aula-editar-duracao-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#aula-editar-duracao-error").show(200);
            $("#aula-editar-duracao-loader").hide();
            setTimeout(function(){ $("#aula-editar-duracao-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarRepete(novo_estado_repete){
        if (novo_estado_repete == true) {
            $("#aula-editar-intervalo-repeticao").prop('disabled', false);
            $("#aula-editar-intervalo-repeticao").attr("placeholder", "Intervalo de Repetição (Dias)");
        }else{
        	$("#aula-editar-intervalo-repeticao").val('');
            $("#aula-editar-intervalo-repeticao").prop('disabled', true);
            $("#aula-editar-intervalo-repeticao").attr("placeholder", "Aula não repete");
        }
        $("#aula-editar-repete-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let aula_id = $("#aula-editar-id").val()
        let request = new Request();
        let data = { "aula": {"repete": novo_estado_repete} }
        let url = apiBaseUrl + "/aulas/" + aula_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#aula-editar-repete-check").show(200);
            $("#aula-editar-repete-loader").hide();
            setTimeout(function(){ $("#aula-editar-repete-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#aula-editar-repete-error").show(200);
            $("#aula-editar-repete-loader").hide();
            setTimeout(function(){ $("#aula-editar-repete-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response        
    }
    mudarIntervaloRepeticao(novo_intervalo_repeticao){
        $("#aula-editar-intervalo-repeticao-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let aula_id = $("#aula-editar-id").val()
        let request = new Request();
        let data = { "aula": {"intervalo_repeticao": novo_intervalo_repeticao} }
        let url = apiBaseUrl + "/aulas/" + aula_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#aula-editar-intervalo-repeticao-check").show(200);
            $("#aula-editar-intervalo-repeticao-loader").hide();
            setTimeout(function(){ $("#aula-editar-intervalo-repeticao-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#aula-editar-intervalo-repeticao-error").show(200);
            $("#aula-editar-intervalo-repeticao-loader").hide();
            setTimeout(function(){ $("#aula-editar-intervalo-repeticao-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    // Item 7 ______________________________________________________
    deleteAula(id){
        let request = new Request();
        let url = apiBaseUrl + "/aulas/" + id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            $("#wrapperEditAula").addClass("animated rollOut")
            $("#wrapperEditAula").css("animation-duration", "0.8s")
            setTimeout(function(){ 
                $("#wrapperEditAula").hide()
                $("#wrapperEditAula").removeClass("animated rollOut")
                helper.notificacao("Aula Removida","Aula excluido com sucesso");
                $("#row-aula-"+data.id).addClass("animated slideOutRight")
                // Espera terminar a animacao de saida da row com aula deletada
                setTimeout(function(){$("#row-aula-"+data.id).remove()}, 750)
            }, 800);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            helper.notificacao("Erro ao Excluir","Não foi possivel excluir o aula");
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.delete(url, successCallback, errorCallback, headers)
        return response
    }
    salvarNovaAula(dados){
        let request = new Request();
        let url = apiBaseUrl + "/aulas"
        let data = {"aula": {
			"nome": dados.nome,
			"descricao": dados.descricao,
			"repete": dados.repete,
			"intervalo_repeticao": dados.intervalo_repeticao,
			"data_inicio": dados.inicio,
			"duracao": dados.duracao,
			"horario": dados.horario,
            "professor_id": dados.professor_id,
            "gym_id": this.gym_id
        }}
        let headers = {}
        //let callClearFields = () => {this.clearFields()}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            //callClearFields()
            helper.notificacao("Aula Adicionada",data.nome+" foi adicionada ao mural");
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            helper.notificacao("Erro ao Adicionar","Não foi possivel adicionar a aula");
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.post(data, url, successCallback, errorCallback, headers)
        return response
    }
    toggleWrappers(event, whatToShow){
        event.preventDefault();
        $(whatToShow).show(300);
        $(".box").not(whatToShow).hide(300);
    }
}

