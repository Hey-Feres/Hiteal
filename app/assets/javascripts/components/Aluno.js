class Aluno {
	constructor(gym_id,total_alunos) {
		this.gym_id = gym_id;
		this.total_alunos = total_alunos;
	}
	componentLoaded(){
		$("#wrapperAdicionar").hide();
		$("#loader-more-alunos").hide();
		$("#search-loader").hide();
		// Se todos os alunos ja estiverem sendo exibidos, o button de carregar mais é escondido
		if ($('#alunos-table tr').length - 1 >= this.total_alunos) { $("#button-load-more-alunos").hide() }
		this.loadAlunos(tablePage)
	}
    loadAlunos(page){
        $("#loader-more-alunos").show();
        $("#button-load-more-alunos").hide();
        let request = new Request()
        let url = apiBaseUrl + "/todos_alunos/"+this.gym_id+"/"+page
        console.log(page)
        let successCallback = data => {
            for (var i = 0; i < data.length; i++) {
                let row = "<tr class='data-row' id='row-aluno-"+data[i].id+"'>" + 
                            "<td class='text-center' id='aluno-nome-" + data[i].id + "'> " + data[i].nome + " </td>" +
                            "<td class='text-center'>"+data[i].plano_nome+"</td>" +
                            "<td class='text-center text-primary button-open-editor-box' id='" + data[i].id + "' > Editar </td>" +
                          "</tr>"
                $("#alunos-table-body").append(row)
            }
        	$("#loader-more-alunos").hide();
        	if ($('#alunos-table tr').length - 1 >= this.total_alunos) { 
        		$("#button-load-more-alunos").hide() 
        	} else{
        		$("#button-load-more-alunos").show();	
        	}
        }
        let errorCallback = (jqXHR, textStatus, msg) => { 
            console.log(msg)
        }
        let response = request.get(url,successCallback,errorCallback)
        return response
    }
    toggleWrappers(event, whatToShow){
        event.preventDefault();
        $(whatToShow).show(300);
        $(".divider").not(whatToShow).hide(300);
    }
}