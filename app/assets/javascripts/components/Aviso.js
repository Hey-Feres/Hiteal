class Aviso {
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
        $("#aviso-conteudo").autogrow();
        $("#aviso-editar-conteudo").autogrow();
        // .  .  .  .  .  .  .  .  .  .  .  .
        Inputmask({"mask": "99/99/9999"}).mask($("#aviso-editar-exibicao"));
        Inputmask({"mask": "99/99/9999"}).mask($("#aviso-exibicao"));
	}
    // Item 2 ______________________________________________________
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
	                            "<td class='text-center'> <img src='https://img.icons8.com/ios/30/34C759/pin-2.png'/> </td>" +
	                            "<td class='text-center text-primary button-open-editor-box' id='" + data[i].id + "' > Editar </td>" +
	                          "</tr>"            		
	            }else{
                	row = "<tr class='data-row' id='row-aviso-"+data[i].id+"'>" + 
                            "<td class='text-center' id='aviso-nome-" + data[i].id + "'> " + data[i].nome + " </td>" +
                            "<td class='text-center'>"+data[i].views+"</td>" +
                            "<td class='text-center'>Até "+helper.formatDate(data[i].intervalo_exibicao)+"</td>" +
                            "<td class='text-center'> <img src='https://img.icons8.com/ios/30/CCCCCC/pin-2.png'/> </td>" +
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
    // Item 3 ______________________________________________________
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
                                "<td class='text-center pin-icon'> <img src='https://img.icons8.com/ios/30/34C759/pin-2.png'/> </td>" +
                                "<td class='text-center text-primary button-open-editor-box' id='" + data[i].id + "' > Editar </td>" +
                              "</tr>"                    
                }else{
                    row = "<tr class='data-row' id='row-aviso-"+data[i].id+"'>" + 
                            "<td class='text-center' id='aviso-nome-" + data[i].id + "'> " + data[i].nome + " </td>" +
                            "<td class='text-center'>"+data[i].views+"</td>" +
                            "<td class='text-center'>Até "+helper.formatDate(data[i].intervalo_exibicao)+"</td>" +
                            "<td class='text-center'> <img src='https://img.icons8.com/ios/30/CCCCCC/pin-2.png'/> </td>" +
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
    // Item 4 ______________________________________________________
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
    // Item 5 ______________________________________________________
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
    // Item 6 ______________________________________________________
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
    // Item 6 ______________________________________________________
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
    // Item 6 ______________________________________________________
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
    // Item 6 ______________________________________________________
    mudarIntervaloExibicao(novo_intervalo){
        $("#aviso-editar-exibicao-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let aviso_id = $("#aviso-editar-id").val()
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
    // Item 7 ______________________________________________________
    deleteAviso(id){
        let request = new Request();
        let url = apiBaseUrl + "/avisos/" + id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            $("#wrapperEditAviso").addClass("animated rollOut")
            $("#wrapperEditAviso").css("animation-duration", "0.8s")
            setTimeout(function(){ 
                $("#wrapperEditAviso").hide()
                $("#wrapperEditAviso").removeClass("animated rollOut")
                helper.notificacao("Aviso Removido","Aviso excluido com sucesso");
                $("#row-aviso-"+data.id).addClass("animated slideOutRight")
                // Espera terminar a animacao de saida da row com user deletado
                setTimeout(function(){$("#row-aviso-"+data.id).remove()}, 750)
            }, 800);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            helper.notificacao("Erro ao Excluir","Não foi possivel excluir o aviso");
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.delete(url, successCallback, errorCallback, headers)
        return response
    }
    // Item 8 ______________________________________________________
    salvarNovoAviso(dados){
        let request = new Request();
        let url = apiBaseUrl + "/avisos"
        let data = {"aviso": {
            "nome": dados.nome,
            "conteudo": dados.conteudo,
            "intervalo_exibicao": dados.intervalo_exibicao,
            "fixado": dados.fixado,
            "gym_id": this.gym_id
        }}
        let headers = {}
        let callClearFields = () => {this.clearFields()}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            callClearFields()
            helper.notificacao("Aviso Adicionado",data.nome+" foi adicionado ao mural");
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            helper.notificacao("Erro ao Adicionar","Não foi possivel adicionar o aviso");
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.post(data, url, successCallback, errorCallback, headers)
        return response
    }
    // Item 9 ______________________________________________________
    switchNovoAvisoFixado(novo_aviso_fixado){
        if (novo_aviso_fixado == true) {
            $("#aviso-exibicao").val('');
            $("#aviso-exibicao").prop('disabled', true);
            $("#aviso-exibicao").attr("placeholder", "Aviso fixado");
        }else{
            $("#aviso-exibicao").prop('disabled', false);
            $("#aviso-exibicao").attr("placeholder", "Exibir até");
        }        
    }
    // Item 10 _____________________________________________________
    clearFields(){
        $("#aviso-nome").val("")
        $("#aviso-conteudo").val("")
        $("#aviso-exibicao").val("")
        $("#aviso-fixado").prop("checked", false)
    }
    // Item 11 _____________________________________________________
    toggleWrappers(event, whatToShow){
        event.preventDefault();
        $(whatToShow).show(300);
        $(".box").not(whatToShow).hide(300);
    }    
}

// Documentacao
// Item 1 ________________________________________________________________________________
//     - Metodo componentLoaded() é chamado quando a pagina é carregada.
//     - Ele inicializa os estados dos componentes e atribui propriedades e masks.
//     - Propriedade autogrow faz com que o campo aumente conforme o user digita.
// Item 2 ________________________________________________________________________________
//     - Metodo loadAvisos() é chamado quando a pagina é carregada.
//     - Carrega os avisos de forma dinamica, sendo 20 avisos por page.
//     - Page é declarada como 0 quando a pagina carrega e é incrementada +1 quando o 
//     - botao carregar mais avisos é clicado.
//     - No callback de sucesso rodamos um loop q é executado com relacao ao numero de 
//     - registros retornados. Dentro do loop renderizamos as rows da table
// Item 3 ________________________________________________________________________________
//    - Metodo searchAvisos() é chamado quando o usuario digita algo no input search.
//    - Recebe como parametros a page e o params, que é o valor digitado.
//    - Dentro do loop renderizamos as rows na tabela, baseado nos resultados retornados
// Item 4 ________________________________________________________________________________
//    - Metodo showEditorBox() recebe o id do aviso como parametro.
//    - No callback de sucesso atribuimos os valores de cada input.
//    - Se o aviso for fixado o input com data de exibicao é desativado.
//    - No final da funcao, apos carregar todos os dados, executamos a animacao de entrada
//    da pagina.
// Item 5 ________________________________________________________________________________
//    - Metodo hideEditorBox() executa a animacao de saida da pagina.
//    - Tambem desfaz as alteracoes realizadas no showEditorBox()
// Item 6 ________________________________________________________________________________
//    - Metodo mudarSomething() é chamado sempre que houver alteração no input referente.
//    - Ele recebe o valor digitiado no input como parametro.
//    - Faz o handle de toda as etapas da requisicao ao backend.
//    - Exibe o icone de load enquanto carrega a requisicao.
//    - Exibe o icone de sucesso(check) quando a requisicao é bem sucedida.
//    - Exibe o icone de erro quando a requisicao retorna erros.
// Item 7 ________________________________________________________________________________
//    - Metodo deleteAviso() recebe o id do aviso como parametro.
//    - Performa uma request do tipo delete a API.
//    - Executa animacoes de saida do elemento quando a requisicao é bem sucedida.
//    - Exibe notificao com msg de sucesso quando a requisicao é bem sucedida.
//    - Exibe notificao com msg de erro quando a requisicao retorna erros.
// Item 8 ________________________________________________________________________________
//    - Metodo salvarNovoAviso() recebe os dados digitados nos inputs de adicionar aviso
//    - Performa uma reuqest post a API.
//    - Exibe notificao com msg de sucesso quando a requisicao é bem sucedida.
//    - Chama a funcao clear fields quando a requisicao é bem sucedida.
//    - Exibe notificao com msg de erro quando a requisicao retorna erros.
// Item 9 ________________________________________________________________________________
//    - Metodo switchNovoAvisoFixado() recebe o estado do switch (true ou false).
//    - Se o estado for true o input com data de exibicao é desativado.
// Item 10 _______________________________________________________________________________
//    - Metodo clearFields() limpa os todos os campos do form adicionar aviso.
// Item 11 _______________________________________________________________________________
//    - Metodo toggleWrappers recebe o click event e o id da div que deve ser exibido, de
//    acordo com o que foi clicado na sidebar.
//    - Todo os outros dividers sao ocultados.
//    - Metodo preventDefault evita bugs relacionados ao evento de click do usuario.
