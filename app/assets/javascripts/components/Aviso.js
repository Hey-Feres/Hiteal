class Aviso {
	constructor(gym_id) {
		this.gym_id = gym_id;
	}
	componentLoaded(){
        $(".sidebar").addClass("animated fadeInDownBig")
        $(".content").addClass("animated fadeInUpBig")
        // .  .  .  .  .  .  .  .  .  .  .  .        
        $(".box").not("#wrapperTodos").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#loader-more-avisos").hide();
        $("#search-loader").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#aviso-editar-nome-loader").hide();
        $("#aviso-editar-nome-check").hide();
        $("#aviso-editar-nome-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#aviso-editar-conteudo-loader").hide();
        $("#aviso-editar-conteudo-check").hide();
        $("#aviso-editar-conteudo-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#aviso-editar-exibicao-loader").hide();
        $("#aviso-editar-exibicao-check").hide();
        $("#aviso-editar-exibicao-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#aviso-editar-fixado-loader").hide();
        $("#aviso-editar-fixado-check").hide();
        $("#aviso-editar-fixado-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        Inputmask({"mask": "99/99/9999"}).mask($("#aviso-editar-exibicao"));
	}
    loadAvisos(page){
        let request = new Request()
        let url = apiBaseUrl + "/todos_avisos/"+this.gym_id+"/"+page
        console.log(page)
        let successCallback = data => {
            for (var i = 0; i < data.length; i++) {
            	let row = ''
            	if (data[i].fixado) {
	                row = "<tr class='data-row' id='row-aviso-"+data[i].id+"'>" + 
	                            "<td class='text-center' id='aviso-nome-" + data[i].id + "'> " + data[i].nome + " </td>" +
	                            "<td class='text-center'>"+data[i].views+"</td>" +
	                            "<td class='text-center'> </td>" +
	                            "<td class='text-center'> <img src='https://img.icons8.com/ios/30/000000/pin-2.png'/> </td>" +
	                            "<td class='text-center text-primary button-open-editor-box' id='" + data[i].id + "' > Editar </td>" +
	                          "</tr>"            		
	            }else{
                	row = "<tr class='data-row' id='row-aviso-"+data[i].id+"'>" + 
                            "<td class='text-center' id='aviso-nome-" + data[i].id + "'> " + data[i].nome + " </td>" +
                            "<td class='text-center'>"+data[i].views+"</td>" +
                            "<td class='text-center'>Até "+helper.formatDate(data[i].intervalo_exibicao)+"</td>" +
                            "<td class='text-center'> </td>" +
                            "<td class='text-center text-primary button-open-editor-box' id='" + data[i].id + "' > Editar </td>" +
                          "</tr>"	            	
	            }

                $("#avisos-table-body").append(row)
            }
        }
        let errorCallback = (jqXHR, textStatus, msg) => { 
            console.log(msg)
        }
        let response = request.get(url,successCallback,errorCallback)
        return response
    }
    searchAvisos(params,page){
        let request = new Request()
        let url = apiBaseUrl + "/search_avisos"
        let data = {"aviso": {"search": params, "gym_id": this.gym_id, "page": page}}
        let successCallback = data => {
            console.log(data)
            $("#avisos-table-body").html("");
            for (var i = 0; i < data.length; i++) {
                let row = ''
                if (data[i].fixado) {
                    row = "<tr class='data-row' id='row-aviso-"+data[i].id+"'>" + 
                                "<td class='text-center' id='aviso-nome-" + data[i].id + "'> " + data[i].nome + " </td>" +
                                "<td class='text-center'>"+data[i].views+"</td>" +
                                "<td class='text-center'> </td>" +
                                "<td class='text-center'> <img src='https://img.icons8.com/ios/30/000000/pin-2.png'/> </td>" +
                                "<td class='text-center text-primary button-open-editor-box' id='" + data[i].id + "' > Editar </td>" +
                              "</tr>"                    
                }else{
                    row = "<tr class='data-row' id='row-aviso-"+data[i].id+"'>" + 
                            "<td class='text-center' id='aviso-nome-" + data[i].id + "'> " + data[i].nome + " </td>" +
                            "<td class='text-center'>"+data[i].views+"</td>" +
                            "<td class='text-center'>Até "+helper.formatDate(data[i].intervalo_exibicao)+"</td>" +
                            "<td class='text-center'> </td>" +
                            "<td class='text-center text-primary button-open-editor-box' id='" + data[i].id + "' > Editar </td>" +
                          "</tr>"                    
                }
                $("#avisos-table-body").append(row)
            }
            if ($('#avisos-table tr').length - 1 < 20) { 
                $("#button-load-more-avisos").hide() 
            } else{
                $("#button-load-more-avisos").show();
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
        let url = apiBaseUrl + "/avisos/" + id
        let successCallback = data => {
            $("#aviso-editar-nome").val(data.nome)
            $("#aviso-editar-conteudo").val(data.conteudo)
            $("#aviso-editar-id").val(data.id)
            if (data.intervalo_exibicao) { $("#aviso-editar-exibicao").val(helper.formatDate(data.intervalo_exibicao, true)) }
            if (data.fixado) { 
                $("#aviso-editar-exibicao").prop('disabled', true);
                $("#aviso-editar-fixado").prop("checked", true);
                $("#aviso-editar-exibicao").attr("placeholder", "Aviso fixado");
            }
        }
        let errorCallback = (jqXHR, textStatus, msg) => {
            console.log(x)
            console.log(y)
            console.log(z)
        }
        request.get(url,successCallback,errorCallback)
        $("#wrapperEditAviso").addClass("animated slideInRight")
        $("#wrapperEditAviso").css("animation-duration", "0.7s")
        $("#wrapperEditAviso").show()
        setTimeout(function(){
            $("#wrapperEditAviso").removeClass("animated slideInRight")
        }, 750)
    }
    hideEditorBox(){
        $("#wrapperEditAviso").addClass("animated slideOutRight")
        $("#wrapperEditAviso").css("animation-duration", "0.7s")
        setTimeout(function(){
            $("#wrapperEditAviso").hide()
            $("#wrapperEditAviso").removeClass("animated slideOutRight")
            $('#aviso-editar-fixado').prop("checked", false);
            $("#aviso-editar-exibicao").prop('disabled', false);
            $("#aviso-editar-exibicao").attr("placeholder", "Exibir até");
        }, 750)
    }
    mudarFixado(novo_estado_fixado){
        if (novo_estado_fixado == true) {
            $("#aviso-editar-exibicao").val('');
            $("#aviso-editar-exibicao").prop('disabled', true);
            $("#aviso-editar-exibicao").attr("placeholder", "Aviso fixado");
        }else{
            $("#aviso-editar-exibicao").prop('disabled', false);
            $("#aviso-editar-exibicao").attr("placeholder", "Exibir até");
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#aviso-editar-fixado-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let aviso_id = $("#aviso-editar-id").val()
        let request = new Request();
        let data = { "aviso": {"fixado": novo_estado_fixado} }
        let url = apiBaseUrl + "/avisos/" + aviso_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#aviso-editar-fixado-check").show(200);
            $("#aviso-editar-fixado-loader").hide();
            setTimeout(function(){ $("#aviso-editar-fixado-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#aviso-editar-fixado-error").show(200);
            $("#aviso-editar-fixado-loader").hide();
            setTimeout(function(){ $("#aviso-editar-fixado-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarNome(novo_nome){
        $("#aviso-editar-nome-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let aviso_id =$ ("#aviso-editar-id").val()
        let request = new Request();
        let data = { "aviso": {"nome": novo_nome} }
        let url = apiBaseUrl + "/avisos/" + aviso_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#aviso-editar-nome-check").show(200);
            $("#aviso-editar-nome-loader").hide();
            setTimeout(function(){ $("#aviso-editar-nome-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#aviso-editar-nome-error").show(200);
            $("#aviso-editar-nome-loader").hide();
            setTimeout(function(){ $("#aviso-editar-nome-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarConteudo(novo_conteudo){
        $("#aviso-editar-conteudo-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let aviso_id =$ ("#aviso-editar-id").val()
        let request = new Request();
        let data = { "aviso": {"conteudo": novo_conteudo} }
        let url = apiBaseUrl + "/avisos/" + aviso_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#aviso-editar-conteudo-check").show(200);
            $("#aviso-editar-conteudo-loader").hide();
            setTimeout(function(){ $("#aviso-editar-conteudo-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#aviso-editar-conteudo-error").show(200);
            $("#aviso-editar-conteudo-loader").hide();
            setTimeout(function(){ $("#aviso-editar-conteudo-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.put(data, url, successCallback, errorCallback, headers)
        return response
    }
    mudarIntervaloExibicao(novo_intervalo){
        $("#aviso-editar-exibicao-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let aviso_id =$ ("#aviso-editar-id").val()
        let request = new Request();
        let data = { "aviso": {"intervalo_exibicao": novo_intervalo} }
        let url = apiBaseUrl + "/avisos/" + aviso_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#aviso-editar-exibicao-check").show(200);
            $("#aviso-editar-exibicao-loader").hide();
            setTimeout(function(){ $("#aviso-editar-exibicao-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#aviso-editar-exibicao-error").show(200);
            $("#aviso-editar-exibicao-loader").hide();
            setTimeout(function(){ $("#aviso-editar-exibicao-error").hide(200); }, 2000);
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
