class AvaliacaoFisica {
	constructor(gym_id) {
		this.gym_id = gym_id;
		this.sexo = null;
	}
	componentLoaded(){
        $(".sidebar").addClass("animated fadeInDownBig")
        $(".content").addClass("animated fadeInUpBig")
		$(".box").not("#boxInfo").hide()
	}
	searchAlunos(params, page){
        $(".sidebar-list-wrapper").append("<p id='loader'>Loading ...</p>")
        let request = new Request()
        let url = apiBaseUrl + "/search_alunos"
        let data = {"aluno": {"search": params, "gym_id": this.gym_id, "page": page}}
        let successCallback = data => {
        	$(".sidebar-list-wrapper").html("");
            for (var i = 0; i < data.length; i++) {
            	let id = data[i].id + "/" + data[i].nome
                let row =   "<div class='pointer sidebar-item' id='"+ id +"'>" +
                                "<div class='d-flex justify-content-between w-100'>" +
                                    "<h5>" + data[i].nome + "</h5>" +
                                    "<h5> <img src='https://img.icons8.com/ios-glyphs/15/007AFF/chevron-right.png' /> </h5>" +
                                "</div>"
                			"</div>"
                $(".sidebar-list-wrapper").append(row)
            }
        }
        let errorCallback = (jqXHR, textStatus, msg) => { 
        	$(".sidebar-list-wrapper").html("")
        	$(".sidebar-list-wrapper").html(msg)
        }
        let response = request.post(data,url,successCallback,errorCallback)
        return response
	}
	showAlunoAvaliacoesFisicas(id, nome){
        $(".aluno-nome").text(nome)
        $(".aluno-id").text(id)
		$("#alunoAvaliacoesFisicas").show()
		$("#boxInfo").hide()
		this.loadAvaliacoesFisicasRecentes(id)
	}
	loadAvaliacoesFisicasRecentes(aluno_id){
        console.log("AQUI")
        let request = new Request()
        let url = apiBaseUrl + "/recentes/avaliacoes_fisicas/" + aluno_id
		// Funcao para chamar no callback
		let loadAvaliacoesFisicasTable = id => { this.loadAvaliacoesFisicasTable(id) }
		let renderCardAvaliacaoRecente = dados => {this.renderCardAvaliacaoRecente(dados)}
		// Callback
		let successCallback = data => {
			console.log(data)
			$("#alunoAvaliacoesFisicasContent").html("")
			if (data.length > 0) {
				$("#alunoAvaliacoesFisicasContent").html("")
				$("#recentes-row").html("")
				$("#alunoAvaliacoesFisicasContent").append("<h4 class='mb-2'>Recentes</h4>")
				$("#alunoAvaliacoesFisicasContent").append("<div class='row' id='recentes-row'> </div>")
				for (var i = data.length - 1; i >= 0; i--) {
					let html = 	"<div class='col-3 mr-2 ml-2 avaliacao-recente-box' id='avaliacao-recente-"+data[i].id+"'>" +
										// Organizer A .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .
										"<div class='organizerA'>" +
											"<h2 class='thin'> "+ helper.formatDateWithMonthName(data[i].created_at) +" </h2>" +
										"</div>" +
										// Organizer B .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .
										"<div class='organizerB'>" +
											"<div class='w-100 d-flex justify-content-between'>" +
												"<div class='d-flex justify-content-start'>" +
													"<p class='mr-2'> <img src='https://img.icons8.com/ios/20/35C759/weight-light.png'/> </p>" +
													"<p class='thin'> Peso </p>" +
												"</div>" +
												"<p class='thin'>" + data[i].massa_corporal + " kg</p>" +
											"</div>" +
										"<div class='w-100 d-flex justify-content-between'>" +
											"<div class='d-flex justify-content-start'>" +
												"<p class='mr-2'> <img src='https://img.icons8.com/ios/20/FFCC0A/standing-man.png'/> </p>" +
												"<p class='thin'> Altura </p>" +
											"</div>" +
											"<p class='thin'>" + data[i].estatura + " cm</p>" +
										"</div>" +
										"<div class='w-100 d-flex justify-content-between'>" +
											"<div class='d-flex justify-content-start'>" +
												"<p class='mr-2'> <img src='https://img.icons8.com/ios/20/5856D6/torso.png'/> </p>" +
												"<p class='thin'> IMC</p>" +
											"</div>" +
											"<p class='thin'>" + data[i].indice_massa_corporal + "</p>" +
										"</div>" +
										"<div class='w-100 d-flex justify-content-between'>" +
											"<div class='d-flex justify-content-start'>" +
												"<p class='mr-2'> <img src='https://img.icons8.com/ios/20/FF2D55/tape-measure-sewing.png'/> </p>" +
												"<p class='thin'> RCQ </p>" +
											"</div>" +
											"<p class='thin'>" + data[i].relacao_cintura_quadril + "</p>" +
										"</div>" +
									"</div>" +
									// Organizer C .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .
									"<div class='organizerC'>" +
										"<p class='thin text-primary pointer' id='"+ data[i].id +"'> Detalhes </p>" +
									"</div>" +
								"</div>"					
					$("#recentes-row").append(html)
				}
			}
			loadAvaliacoesFisicasTable(aluno_id)
		}
		let errorCallback = (jqXHR, textStatus, msg) => { 
			console.log(msg)
		}
        let response = request.get(url,successCallback,errorCallback)
        return response
	}
	loadAvaliacoesFisicasTable(aluno_id){
        let request = new Request()
        let url = apiBaseUrl + "/all/avaliacoes_fisicas/" + aluno_id + "/" + 0
		let successCallback = data => {
			if (data.length > 0) {
				let html = 	"<h4 class='mt-5 mb-2'>Todas</h4>" +
							"<table class='table table-striped'>" + 
								"<thead>" +
									"<tr>" +
										"<th class='text-center'> Data </th>" +
										"<th class='text-center'> Peso </th>" +
										"<th class='text-center'> IMC </th>" +
										"<th class='text-center'> RCQ </th>" +
										"<th class=''> </th>" +
									"</tr>" +
								"</thead>" +
								"<tbody id='avaliacoes-fisicas-table-body'>" +
								"</tbody>" +
							"</table>"				
				$("#alunoAvaliacoesFisicasContent").append(html)
				for (var i = data.length - 1; i >= 0; i--) {
					let html = 	"<tr id='row-avaliacao-"+data[i].id+"'>" +
									"<td class='text-center'>"+helper.formatDate(data[i].created_at, true)+" </td>" +
									"<td class='text-center'>"+data[i].massa_corporal+" Kg</td>" +
									"<td class='text-center'>"+data[i].indice_massa_corporal+"</td>" +
									"<td class='text-center'>"+data[i].relacao_cintura_quadril+"</td>" +
									"<td class='text-center pointer excluir-avaliacao-button' id='"+data[i].id+"'> <img src='https://img.icons8.com/ios/25/FF3B30/trash.png'/> </td>" +
								"</tr>"
					$("#avaliacoes-fisicas-table-body").append(html)
				}
			}
		}
		let errorCallback = (jqXHR, textStatus, msg) => { 
			console.log(msg)
		}
        let response = request.get(url,successCallback,errorCallback)
        return response
	}
	apagarAvaliacao(id){
        let request = new Request();
        let url = apiBaseUrl + "/avaliacoes_fisicas/" + id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
			helper.notificacao("Avaliação Removida","Avaliação excluida com sucesso");
			$("#row-avaliacao-"+data.id).addClass("animated slideOutRight")
			$("#avaliacao-recente-"+data.id).addClass("animated rollOut")
			setTimeout(function(){$("#row-avaliacao-"+data.id).remove()}, 750)
			setTimeout(function(){$("#avaliacao-recente-"+data.id).remove()}, 750)
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            helper.notificacao("Erro ao Excluir","Não foi possivel excluir a avaliação");
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let response = request.delete(url, successCallback, errorCallback, headers)
        return response
	}
	showFormNovaAvaliacaoFisica(dados){
		$(".nova-avaliacao-aluno-nome").text(dados.nome)
        $("#novaAvaliacaoFisica").addClass("animated slideInRight")
        $("#novaAvaliacaoFisica").css("animation-duration", "0.7s")
        $("#novaAvaliacaoFisica").show()
        setTimeout(function(){
            $("#novaAvaliacaoFisica").removeClass("animated slideInRight")
        }, 750)
	}
	closeFormNovaAvaliacaoFisica(){
        $("#novaAvaliacaoFisica").addClass("animated slideOutRight")
        $("#novaAvaliacaoFisica").css("animation-duration", "0.7s")
        setTimeout(function(){
        	$("#novaAvaliacaoFisica").hide()
            $("#novaAvaliacaoFisica").removeClass("animated slideOutRight")
        }, 750)
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
			    "pressao_arterial": dados.pressao_arterial, //
			    "frequencia_cardiaca": dados.frequencia_cardiaca, //
			    "massa_corporal": dados.massa, //
			    "estatura": dados.estatura,
			    "relacao_cintura_quadril": dados.relacao_cintura_quadril, //
			    "indice_massa_corporal": dados.indice_massa_corporal, //
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
		let loadAvaliacoesFisicasRecentes = data => {this.loadAvaliacoesFisicasRecentes(data)}
		let successCallback = data => {
	        $("#novaAvaliacaoFisica").addClass("animated slideOutRight")
	        $("#novaAvaliacaoFisica").css("animation-duration", "0.7s")
	        setTimeout(function(){
	        	$("#novaAvaliacaoFisica").hide()
	            $("#novaAvaliacaoFisica").removeClass("animated slideOutRight")
	        }, 750)
			$("input").val("")
			helper.notificacao("Avaliação Adicionada","A avaliação foi salva no banco de dados.")
			this.loadAvaliacoesFisicasRecentes(data.aluno.id)
		}
        let errorCallback = (jqXHR, textStatus, msg) => { 
        	helper.notificacao("Erro ao Salvar","Não foi possível salvar os dados.")
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






