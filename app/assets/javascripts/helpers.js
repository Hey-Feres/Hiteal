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
		let notificacao = "<div class='notificacao animated slideInRight'> " + 
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
            $(".notificacao").addClass("animated slideOutRight")
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
	formatDate(date, displayYear){
		let MyDate = new Date(date.split("T")[0]);
		MyDate.setDate(MyDate.getDate() + 20);
		let formatedDate
		if (displayYear) {
			formatedDate = ('0' + MyDate.getDate()).slice(-2) + '/' + ('0' + (MyDate.getMonth()+1)).slice(-2) + '/' + MyDate.getFullYear();	
		}else{
			formatedDate = ('0' + MyDate.getDate()).slice(-2) + '/' + ('0' + (MyDate.getMonth()+1)).slice(-2)
		}
		return formatedDate
	}
	capitalize(string) {
  		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	formatTime(strTime){
		let t = strTime.split("T")[1].split(":")
		t = t[0]+":"+t[1]
		return t
	}
	calculateAge(dateString) {
	  let formatedDate = this.formatDate(dateString, true)
	  formatedDate = formatedDate.split("/")[2] + "/" + formatedDate.split("/")[1] + "/" + formatedDate.split("/")[0]
	  var birthday = +new Date(formatedDate);
	  return ~~((Date.now() - birthday) / (31557600000));
	}
}
