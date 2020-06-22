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
	salvarAvaliacao(dados){
        let request = new Request()
        let url = apiBaseUrl + "/avaliacoes_fisicas"
		let data = {
			"avaliacao_fisica": {
			    "aluno_id": 510,
			    "user_id": 1,
			    "historico_clinico": dados.historico_clinico,
			    "historico_familiar": dados.historico_familiar,
			    "limitacoes": dados.limitacoes,
			    "pressao_arterial": dados.pressao_arterial,
			    "frequencia_cardiaca": dados.frequencia_cardiaca,
			    "massa_corporal": dados.massa_corporal,
			    "estatura": dados.estatura,
			    "relacao_cintura_quadril": dados.relacao_cintura_quadril,
			    "indice_massa_corporal": dados.indice_massa_corporal,
			    "observacoes": dados.observacoes,
			    "avaliacao_fisica_perimetro_attributes": {
					"torax": dados.torax,
					"cintura": dados.cintura,
					"abdomen": dados.abdomen,
					"quadril": dados.quadril,
					"antebraco_esquerdo": dados.antebraco_esquerdo,
					"antebraco_direito": dados.antebraco_direito,
					"braco_esquerdo": dados.braco_esquerdo,
					"braco_direito": dados.braco_direito,
					"coxa_esquerda": dados.coxa_esquerda,
					"coxa_direita": dados.coxa_direita,
					"panturrilha_esquerda": dados.panturrilha_esquerda,
					"panturrilha_direita": dados.panturrilha_direita
			    },
		    	"avaliacao_fisica_ccdc_attributes": {
		    		"subscapular": dados.subscapular,
		    		"triciptal": dados.triciptal,
		    		"peitoral": dados.peitoral,
		    		"axilar_media": dados.axilar_media,
		    		"supra_iliaca": dados.supra_iliaca,
		    		"abdominal": dados.abdominal,
		    		"coxa": dados.coxa,
		    		"gordura_atual": dados.gordura_atual,
		    		"peso_gordo": dados.peso_gordo,
		    		"peso_magro": dados.peso_magro
		    	}
			}
		}
		let successCallback = data => {
			console.log(data)
		}
        let errorCallback = (jqXHR, textStatus, msg) => { 
        	console.log(msg)
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






