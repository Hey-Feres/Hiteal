class AvaliacaoFisica {
	constructor(gym_id) {
		this.gym_id = gym_id;
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
}