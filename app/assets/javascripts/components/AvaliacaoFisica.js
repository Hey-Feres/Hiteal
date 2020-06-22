class AvaliacaoFisica {
	constructor(gym_id) {
		this.gym_id = gym_id;
		this.sexo = null;
	}
	componentLoaded(){
		this.sexo = "masculino"
	}
	searchAlunos(params, page){
        $(".sidebar-list-wrapper").append("<p id='loader'>Loading ...</p>")
        let request = new Request()
        let url = apiBaseUrl + "/search_alunos"
        let data = {"aluno": {"search": params, "gym_id": this.gym_id, "page": page}}
        let successCallback = data => {
        	$(".sidebar-list-wrapper").html("");
            for (var i = 0; i < data.length; i++) {
                let row =   "<div class='pointer sidebar-item' id='"+ data[i].id +"'>" +
                                "<div class='d-flex justify-content-between w-100'>" +
                                    "<h5>" + data[i].nome + "</h5>" +
                                    
                                    "<h5> <img src='https://img.icons8.com/ios-glyphs/15/007AFF/chevron-right.png' /> </h5>" +
                                "</div>"
                			"</div>"
                $(".sidebar-list-wrapper").append(row)
            }
        }
        let errorCallback = (jqXHR, textStatus, msg) => { 
        	console.log(msg)
        	$(".sidebar-list-wrapper").html("")
        	$(".sidebar-list-wrapper").html(msg)
        }
        let response = request.post(data,url,successCallback,errorCallback)
        return response
	}
	calcularIndiceDeMassaCorporal(altura, peso){
		if ($("#massa").val() != "" && $("#estatura").val() != "") {
			let imc = (peso/((altura/100)*(altura/100))).toFixed(2)
			if (imc < 18.5) {
				$("#indice-massa-corporal").val(imc + " - Abaixo do Peso Ideal")
				$("#indice-massa-corporal").css("color", "rgb(90,200,250)")
			}else if (imc >= 18.5 && imc <= 24.9){
				$("#indice-massa-corporal").val(imc + " - Normal")
				$("#indice-massa-corporal").css("color", "rgb(52,199,89)")
			}else if (imc >= 25.0 && imc <= 29.9){
				$("#indice-massa-corporal").val(imc + " - Sobrepeso (I)")
				$("#indice-massa-corporal").css("color", "rgb(255,149,0)")
			}else if (imc >= 30.0 && imc <= 39.9){
				$("#indice-massa-corporal").val(imc + " - Obesidade (II)")
				$("#indice-massa-corporal").css("color", "rgb(255,59,48)")
			}else{
				$("#indice-massa-corporal").val(imc + " - Obesidade Grave (III)")
				$("#indice-massa-corporal").css("color", "rgb(251,52,0)")
			}
		}
	}
	calcularRelacaoCinturaQuadril(cintura, quadril, sexo){
		if ( $("#cintura").val() != "" && $("#quadril").val() != "" ) {
			let rcq = (cintura/quadril).toFixed(2)
			if (this.sexo == "masculino") {
				if (rcq <= 0.95) {
					$("#relacao-cintura-quadril").val(rcq + " - Ótimo")
					$("#relacao-cintura-quadril").css("color", "rgb(52,199,89)")
				}else if(rcq > 0.95 && rcq <= 1.00){
					$("#relacao-cintura-quadril").val(rcq + " - Atenção")
					$("#relacao-cintura-quadril").css("color", "rgb(255,204,10)")
				}else{
					$("#relacao-cintura-quadril").val(rcq + " - Ruim")
					$("#relacao-cintura-quadril").css("color", "rgb(255,59,48)")
				}
			} else {
				if (rcq <= 0.80) {
					$("#relacao-cintura-quadril").val(rcq + " - Ótimo")
					$("#relacao-cintura-quadril").css("color", "rgb(52,199,89)")
				}else if(rcq > 0.81 && rcq <= 0.85){
					$("#relacao-cintura-quadril").val(rcq + " - Atenção")
					$("#relacao-cintura-quadril").css("color", "rgb(255,204,10)")
				}else{
					$("#relacao-cintura-quadril").val(rcq + " - Ruim")
					$("#relacao-cintura-quadril").css("color", "rgb(255,59,48)")
				}
			}


		}
	}
}