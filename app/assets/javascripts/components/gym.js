class Gym {
    constructor(nome, cnpj, razao_social, gym_id) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.razao_social = razao_social;
        this.gym_id = gym_id;
        this.options = {
        	animation_delay: 500
        }
    }
    componentLoaded(){
    	$(".divider").not("#wrapperDados").hide();
    }
    mudarNome(novo_nome){
		let request = new Request();
		let data = { "gym": {"nome": novo_nome} }
		let url = apiBaseUrl + "/gyms/" + this.gym_id
		let successCallback = function(data){ console.log(data) }
		let errorCallback = function(jqXHR, textStatus, msg){ console.log(msg) }
		const response = request.put(data, url, successCallback , errorCallback)
		return response
    }
    mudarRazaoSocial(nova_razao_social){
		let request = new Request();
		let data = { "gym": {"razao_social": nova_razao_social} }
		let url = apiBaseUrl + "/gyms/" + this.gym_id
		let successCallback = function(data){ console.log(data) }
		let errorCallback = function(jqXHR, textStatus, msg){ console.log(msg) }
		const response = request.put(data, url, successCallback , errorCallback)
		return response
    }    
    mudarCnpj(novo_cnpj){
		let request = new Request();
		let data = { "gym": {"cnpj": novo_cnpj} }
		let url = apiBaseUrl + "/gyms/" + this.gym_id
		let successCallback = function(data){ console.log(data) }
		let errorCallback = function(jqXHR, textStatus, msg){ console.log(msg) }
		const response = request.put(data, url, successCallback , errorCallback)
		return response
    }
    exibirWrapperDados(){
    	$("#wrapperDados").show(this.options.animation_delay);
    	$(".divider").not("#wrapperDados").hide(this.options.animation_delay);
    }

	exibirWrapperEndereco(){
    	$("#wrapperEndereco").show(this.options.animation_delay);
    	$(".divider").not("#wrapperEndereco").hide(this.options.animation_delay);
	}
	exibirWrapperImagens(){
    	$("#wrapperImagens").show(this.options.animation_delay);
    	$(".divider").not("#wrapperImagens").hide(this.options.animation_delay);
	}
}
