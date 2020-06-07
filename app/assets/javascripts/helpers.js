class Helper {
    constructor() {}
    // ________________________________________________________________________________________________
    hasClass(className){
		return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
    }
    // ________________________________________________________________________________________________
	empty(string){
	  return string.length == 0
	}
	validarCNPJ(cnpj) {
	    cnpj = cnpj.replace(/[^\d]+/g, '');
	    if (cnpj == '') return false;
	    if (cnpj.length != 14)
	        return false; 
	    if (cnpj == "00000000000000" ||
	        cnpj == "11111111111111" ||
	        cnpj == "22222222222222" ||
	        cnpj == "33333333333333" ||
	        cnpj == "44444444444444" ||
	        cnpj == "55555555555555" ||
	        cnpj == "66666666666666" ||
	        cnpj == "77777777777777" ||
	        cnpj == "88888888888888" ||
	        cnpj == "99999999999999")
	        return false;
	    let tamanho = cnpj.length - 2
	    let numeros = cnpj.substring(0, tamanho);
	    let digitos = cnpj.substring(tamanho);
	    let soma = 0;
	    let pos = tamanho - 7;
	    for (let i = tamanho; i >= 1; i--) {
	        soma += numeros.charAt(tamanho - i) * pos--;
	        if (pos < 2)
	            pos = 9;
	    }
	    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	    if (resultado != digitos.charAt(0)) return false;
	    tamanho = tamanho + 1;
	    numeros = cnpj.substring(0, tamanho);
	    soma = 0;
	    pos = tamanho - 7;
	    for (let i = tamanho; i >= 1; i--) {
	        soma += numeros.charAt(tamanho - i) * pos--;
	        if (pos < 2)
	            pos = 9;
	    }
	    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	    if (resultado != digitos.charAt(1))
	        return false;
	    return true;
	}
	notificacao(title,content){
		let notificacao = "<div class='notificacao'> " + 
						"<div class='notificacao-header'> " + 
							"<p class='notificacao-title' /> " +
						"</div>" + 
						"<div class='notificacao-body'>" + 
							"<p class='notificacao-content' />" + 
						" </div> " +
					"</div>"					
		$("#notificacao-wrapper").html(notificacao)
		$(".notificacao-title").html(title)
		$(".notificacao-content").html(content)
        setTimeout(function(){ 
            $(".notificacao").addClass("animated fadeOutRight")
            setTimeout(function(){ 
				$(".notificacao").remove();
            }, 750);
        }, 3000);
	}
	today(date){
    let d1 = new Date()
    return d1.getFullYear() == date.getFullYear()
        && d1.getMonth() == date.getMonth()
        && d1.getDate() == date.getDate();
	}
	formatDate(date){
		var mes = date.getUTCMonth() + 1
		var dia = date.getUTCDate()
		return dia + "/" + mes
	}
	capitalize(string) {
  		return string.charAt(0).toUpperCase() + string.slice(1);
	}	
}
