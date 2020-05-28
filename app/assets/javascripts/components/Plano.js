class Plano {
    constructor(id, nome, email, gym_id) {
        this.id = id;
        this.gym_id = gym_id;
    }
    componentLoaded(){
        $(".sidebar").addClass("animated fadeInDownBig")
        $(".content").addClass("animated fadeInUpBig")		
        // .  .  .  .  .  .  .  .  .  .  .  .
		$("#wrapperAdesao").hide()
		$("#wrapperAdicionar").hide()
		// .  .  .  .  .  .  .  .  .  .  .  .
		$("#wrapperEditarPlano").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
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
    toggleWrappers(event, whatToShow){
        event.preventDefault();
        $(whatToShow).show(300);
        $(".divider").not(whatToShow).hide(300);
    }
}