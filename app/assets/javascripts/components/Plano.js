class Plano {
    constructor(id, gym_id) {
        this.id = id;
        this.gym_id = gym_id;
    }
    componentLoaded(){
        $(".sidebar").addClass("animated fadeInDownBig")
        $(".content").addClass("animated fadeInUpBig")
        $("#plano-valor").numericOnly()
        $("#plano-periodo").numericOnly()
        $("#edit-valor-field").numericOnly()
        $("#edit-periodo-field").numericOnly()
        // .  .  .  .  .  .  .  .  .  .  .  .
		$("#wrapperAdesao").hide()
		$("#wrapperAdicionar").hide()
		// .  .  .  .  .  .  .  .  .  .  .  .
		$("#wrapperEditarPlano").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#plano-nome-loader").hide();
        $("#plano-nome-check").hide();
        $("#plano-nome-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#plano-valor-loader").hide();
        $("#plano-valor-check").hide();
        $("#plano-valor-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#plano-periodo-loader").hide();
        $("#plano-periodo-check").hide();
        $("#plano-periodo-error").hide();
    }
    showEditorForm(id){
        let request = new Request()
        let url = apiBaseUrl + "/planos/" + id
        if ($("#plano-"+id+"-assinantes").html() != 0) { $('#delete-plano').hide() }
        let successCallback = data => {
            $("#edit-nome-field").val(data.nome)
            $("#edit-valor-field").val(data.valor)
            $("#edit-periodo-field").val(data.periodo)
            $("#edit-id-field").val(data.id)
        }
        let errorCallback = (jqXHR, textStatus, msg) => {
            console.log(x)
            console.log(y)
            console.log(z)
        }
        request.get(url,successCallback,errorCallback)
        $("#wrapperEditarPlano").addClass("animated zoomInDown")
        $("#wrapperEditarPlano").css("animation-duration", "0.7s")
        $("#wrapperEditarPlano").show()
        setTimeout(function(){
            $("#wrapperEditarPlano").removeClass("animated zoomInDown")
        },750)
    }
    hideEditorForm(){
    	$("#wrapperEditarPlano").addClass("animated zoomOutUp")
    	setTimeout(function(){
			$("#wrapperEditarPlano").removeClass("animated zoomOutUp")
            $("#wrapperEditarPlano").hide();
            $('#delete-plano').show()
    	},750)
    }
    editPlano(id,nome,valor,periodo){
        let request = new Request()
        let data = {"plano":
            {
                "nome": nome, 
                "valor": valor,
                "periodo": periodo
            }
        }
        let url = apiBaseUrl + "/planos/" + id
        let successCallback = data => {
            $("#plano-"+data.id+"-nome").html(data.nome)
            $("#plano-"+data.id+"-periodo").html(data.periodo)
            $("#plano-"+data.id+"-valor").html("R$ "+data.valor)
            $("#wrapperEditarPlano").addClass("animated zoomOutUp")
            $("#wrapperEditarPlano").css("animation-duration", "0.7s")
            // Espera terminar a animacao de saida do $("#wrapperEditarPlano")
            setTimeout(function(){
                $("#wrapperEditarPlano").removeClass("animated zoomOutUp")
                $("#wrapperEditarPlano").hide();
                helper.notificacao("Alterações Salvas","Plano editado com sucesso");
            }, 750)
        }
        let errorCallback = (jqXHR, textStatus, msg) => {
            helper.notificacao("Erro ao Salvar","Não foi possível salvar as alterações")
        }
        let response = request.put(data,url,successCallback,errorCallback,{})
        return response
    }
    removePlano(id){
        let request = new Request()
        let url = apiBaseUrl + "/planos/" + id
        let successCallback = data => {
            $("#wrapperEditarPlano").addClass("animated rollOut")
            // Espera terminar a animacao de saida do $("#wrapperEditarPlano")
            setTimeout(function(){
                $("#wrapperEditarPlano").hide()
                $("#wrapperEditarPlano").removeClass("animated rollOut")
                helper.notificacao("Plano Excluido","Plano removido da base de dados");
                
                $("#row-plano-"+data.id).addClass("animated slideOutRight")
                // Espera terminar a animacao de saida da row com user deletado
                setTimeout(function(){$("#row-plano-"+data.id).remove();},750)
            }, 750)
        }
        let errorCallback = (jqXHR, textStatus, msg) => {
        	console.log(jqXHR)
        	console.log(textStatus)
        	console.log(msg)
            helper.notificacao("Erro ao Apagar","Tente excluir mais tarde")
        }
        let response = request.delete(url,successCallback,errorCallback)
        return response
    }
    getChartDados(){
    	let request = new Request()
    	let url = apiBaseUrl + '/planos_chart_data'
    	let setChart = data => {this.setChart(data)}
    	let successCallback = data => {
    		console.log(data)
			setChart(data)
    	}
    	let errorCallback = (jqXHR, textStatus, msg) => {
    		console.log(msg)
    	}
    	let response = request.get(url,successCallback,errorCallback)
    	return response
    }
    loadAdesaoPage(){
    	this.getChartDados()
		// Timeout para esperar a animacao de transicao de paginas
    }
    setChart(dados) {
    	var arrLegendas = []
    	var arrDados = []
    	var html = []
    	for (var i = dados.length - 1; i >= 0; i--) {
    		arrLegendas.push(dados[i].nome)
    		arrDados.push(dados[i].assinaturas)
    		html.push("<div class='data-box-title col-lg-12 col-md-12 col-sm-12'>  <p>" + dados[i].nome + "</p> </div>")
    		html.push("<div class='data-box col-lg-3 col-md-3 col-sm-12'> <h3>" + dados[i].assinaturas_porcentagem + " %</h3> <p>" + dados[i].assinaturas + " alunos assinam</p> </div>")
    		html.push("<div class='data-box col-lg-3 col-md-3 col-sm-12'> <img src='https://img.icons8.com/ios/50/007AFF/male.png'/> <p>" + dados[i].assinaturas_por_sexo.masculino + " assinantes são homens</p> </div>")
    		html.push("<div class='data-box col-lg-3 col-md-3 col-sm-12'> <img src='https://img.icons8.com/ios/50/FF2D55/female.png'/> <p>" + dados[i].assinaturas_por_sexo.feminino + " assinantes são mulheres</p> </div>")
    	}
    	$("#dataBoxes").html(html)
    	var donutChartCtx = $('#chartDonut');
    	var barChartCtx = $('#chartBar');
    	var donutChartOptions = {
        	legend: {
            	display: false
        	}      	
    	}
    	var barChartOptions = {
        	legend: {
            	display: false,
            	position: 'bottom',
            	align: 'end'
        	},
		    scales: {
		        yAxes: [{
		            ticks: {
		                beginAtZero: true
		            }
		        }]
		    }        	
    	}
    	var donutChart = new Chart(donutChartCtx, {
		    type: 'doughnut',
		    data: {
		        labels: arrLegendas,
		        datasets: [{
		            //label: '# of Votes',
		            data: arrDados,
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.8)',
		                'rgba(54, 162, 235, 0.8)',
		                'rgba(255, 206, 86, 0.8)',
		                'rgba(75, 192, 192, 0.8)',
		                'rgba(153, 102, 255, 0.8)',
		                'rgba(255, 159, 64, 0.8)'
		            ],
		            borderColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1,

		        }]
		    },
		    options: donutChartOptions
		})
    	var barChart = new Chart(barChartCtx, {
		    type: 'bar',
		    data: {
		        labels: arrLegendas,
		        datasets: [{
		        	barPercentage: 0.6,
					data: arrDados,
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.8)',
		                'rgba(54, 162, 235, 0.8)',
		                'rgba(255, 206, 86, 0.8)',
		                'rgba(75, 192, 192, 0.8)',
		                'rgba(153, 102, 255, 0.8)',
		                'rgba(255, 159, 64, 0.8)'
		            ],
		            borderColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 2
		        }]
		    },
		    options: barChartOptions
		})

    }
    createPlano(nome,valor,periodo){
        let request = new Request()
        console.log("*****")
        console.log(this.gym_id)
        let data = {"plano":
            {
                "nome": nome, 
                "valor": valor,
                "periodo": periodo,
                "gym_id": this.gym_id
            }
        }
        let url = apiBaseUrl + "/planos"
        let successCallback = data => {
            console.log(data)
            // Adiciona a linha com novo usuario a tabela de usuarios
            let row = "<tr class='data-row' id='row-plano-"+data.id+"'>" + 
                        "<td class='text-center' id='plano-" + data.id + "-nome'> " + data.nome + " </td>" +
                        "<td class='text-center' id='plano-" + data.id + "-valor'> " + data.valor + " </td>" +
                        "<td class='text-center' id='plano-" + data.id + "-periodo'> " + data.periodo + " </td>" +
                        "<td class='text-center' id='plano-" + data.id + "-assinantes'> 0 </td>" +
                        "<td class='text-center text-primary show-editor-box' id='" + data.id + "' > Editar </td>" +
                      "</tr>"
            $("#planos-table").append(row)
            // Limpa os campos
            $("#plano-nome").val("")
            $("#plano-valor").val("")
            $("#plano-periodo").val("")
            // Exibe a notificacao
            helper.notificacao("Plano Adicionado","Plano adicionado à base de dados");
        }
        let errorCallback = (jqXHR, textStatus, msg) => {
            console.log(msg)
        }
        let response = request.post(data,url,successCallback,errorCallback,{})
        return response
    }    
    toggleWrappers(event, whatToShow){
        event.preventDefault();
        $(whatToShow).show(300);
        $(".divider").not(whatToShow).hide(300);
    }
}