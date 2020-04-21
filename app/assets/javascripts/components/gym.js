class Gym {
    constructor(nome, cnpj, razao_social, gym_id) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.razao_social = razao_social;
        this.gym_id = gym_id;
    }
    // Item 1 ______________________________________________________
    componentLoaded(){
        // .  .  .  .  .  .  .  .  .  .  .  .
        $(".divider").not("#wrapperDados").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#gym-nome-loader").hide();
        $("#gym-nome-check").hide();
        $("#gym-nome-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#gym-razao-social-loader").hide();
        $("#gym-razao-social-check").hide();
        $("#gym-razao-social-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#gym-cnpj-loader").hide();
        $("#gym-cnpj-check").hide();
        $("#gym-cnpj-error").hide();
    }
    // Item 2 ______________________________________________________
    mudarNome(novo_nome){
        $("#gym-nome-loader").show();
        let request = new Request();
		let data = { "gym": {"nome": novo_nome} }
		let url = apiBaseUrl + "/gyms/" + this.gym_id
		let successCallback = function(data){ 
            console.log(data);
            $("#gym-nome-check").show(200);
            $("#gym-nome-loader").hide();
            setTimeout(function(){ $("#gym-nome-check").hide(200); }, 2000);
        }
		let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-nome-error").show(200);
            $("#gym-nome-loader").hide();
            setTimeout(function(){ $("#gym-nome-error").hide(200); }, 2000);
        }
        const response = request.put(data, url, successCallback , errorCallback)
		return response
    }
    // Item 3 ______________________________________________________
    mudarRazaoSocial(nova_razao_social){
		let request = new Request();
		let data = { "gym": {"razao_social": nova_razao_social} }
		let url = apiBaseUrl + "/gyms/" + this.gym_id
		let successCallback = function(data){ 
            console.log(data);
            $("#gym-razao-social-check").show(200);
            $("#gym-razao-social-loader").hide();
            setTimeout(function(){ $("#gym-razao-social-check").hide(200); }, 2000);
        }
		let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-razao-social-error").show(200);
            $("#gym-nome-loader").hide();
            setTimeout(function(){ $("#gym-razao-social-error").hide(200); }, 2000);
        }
		const response = request.put(data, url, successCallback , errorCallback)
		return response
    }
    // Item 4 ______________________________________________________
    mudarCnpj(novo_cnpj){
		let request = new Request();
		let data = { "gym": {"cnpj": novo_cnpj} }
		let url = apiBaseUrl + "/gyms/" + this.gym_id
		let successCallback = function(data){ 
            console.log(data);
            $("#gym-cnpj-check").show(200);
            $("#gym-cnpj-loader").hide();
            setTimeout(function(){ $("#gym-cnpj-check").hide(200); }, 2000);
        }
		let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-cnpj-error").show(200);
            $("#gym-cnpj-loader").hide();
            setTimeout(function(){ $("#gym-cnpj-error").hide(200); }, 2000);
        }
		const response = request.put(data, url, successCallback , errorCallback)
		return response
    }
    // Item 5 ______________________________________________________
    exibirWrapperDados(){
    	$("#wrapperDados").show(500);
    	$(".divider").not("#wrapperDados").hide(500);
    }
    // Item 6 ______________________________________________________
	exibirWrapperEndereco(){
    	$("#wrapperEndereco").show(500);
    	$(".divider").not("#wrapperEndereco").hide(500);
	}
    // Item 7 ______________________________________________________
	exibirWrapperImagens(){
    	$("#wrapperImagens").show(500);
    	$(".divider").not("#wrapperImagens").hide(500);
	}
}

// Documentacao
// Item 1 ________________________________________________________________________________
//     - Metodo componentLoaded() é chamado quando a pagina é carregada. 
//     - Ele inicializa as divs, esconde as que nao devem aparecer ao carregar 
//     a pagina.
// Item 2 ________________________________________________________________________________
//    - Metodo mudarNome() é chamado sempre que houver alteração no input com nome da gym.
//    - Ele recebe o valor digitiado no input como parametro.
//    - Faz o handle de toda as etapas da requisicao ao backend
//    - Exibe o icone de load enquanto carrega a requisicao
//    - Exibe o icone de sucesso(check) quando a requisicao é bem sucedida
//    - Exibe o icone de erro quando a requisicao retorna erros
// Item 3 ________________________________________________________________________________
//    - Metodo mudarRazaoSocial() é chamado sempre que houver alteração no input com 
//    razao social da gym.
//    - Ele recebe o valor digitiado no input como parametro.
//    - Faz o handle de toda as etapas da requisicao ao backend
//    - Exibe o icone de load enquanto carrega a requisicao
//    - Exibe o icone de sucesso(check) quando a requisicao é bem sucedida
//    - Exibe o icone de erro quando a requisicao retorna erros
// Item 4 ________________________________________________________________________________
//    - Metodo mudarCnpj() é chamado sempre que houver alteração no input com cnpj da gym.
//    - Ele recebe o valor digitiado no input como parametro.
//    - Faz o handle de toda as etapas da requisicao ao backend
//    - Exibe o icone de load enquanto carrega a requisicao
//    - Exibe o icone de sucesso(check) quando a requisicao é bem sucedida
//    - Exibe o icone de erro quando a requisicao retorna erros
// Item 5 ________________________________________________________________________________
//    - Metodo exibirWrapperDados() é chamado quando o botao de dados (da sidebar) é 
//    selecionado.
//    - Exibe o wrapper de dados e esconde todos os outros
// Item 6 ________________________________________________________________________________
//    - Metodo exibirWrapperEndereco() é chamado quando o botao de endereco (da sidebar) é 
//    selecionado.
//    - Exibe o wrapper de endereco e esconde todos os outros
// Item 7 ________________________________________________________________________________
//    - Metodo exibirWrapperImagens() é chamado quando o botao de imagens (da sidebar) é 
//    selecionado.
//    - Exibe o wrapper de imagens e esconde todos os outros 
