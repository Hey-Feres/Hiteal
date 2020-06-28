class Home {
	constructor(user_id) {
		this.user_id = user_id
	}
	componentLoaded(){
		this.getNews()
	}
	loadDestaquesSugestoesUpdates(){
        let request = new Request()
        let url = apiBaseUrl + "/destaques/app_sugestoes_updates"
		let successCallback = data => {
			console.log(data)
			let ids_votaram = new Array
			for (var i = data.length - 1; i >= 0; i--) {
				data[i].users_votaram.map( (value, index) => { ids_votaram.push(parseInt(value.id)) } )
			}
			for (var i = 0; i < data.length; i++) {
				let html
				if (ids_votaram.includes(parseInt(this.user_id))) {
					html = 	"<div class='col-3 mb-3'>" +
								"<div class='sugestao destaque'>" +
									"<div class='organizer-A'>" +
										"<h4>"+data[i].titulo+"</h4>" +
									"</div>" +
									"<div class='organizer-B'>" +
										"<p class='thin'>"+data[i].descricao+"</p>" +
									"</div>" +
									"<div class='organizer-C'>" +
										"<button id='"+data[i].id + "/" + data[i].votos+"' disabled='true' class='button-user-votou-destaque'>Você Votou</button>"
									"</div>"
								"</div>"
							"</div>"
				}else{
					html = 	"<div class='col-3 mb-3'>" +
								"<div class='sugestao destaque'>" +
									"<div class='organizer-A'>" +
										"<h4>"+data[i].titulo+"</h4>" +
									"</div>" +
									"<div class='organizer-B'>" +
										"<p class='thin'>"+data[i].descricao+"</p>" +
									"</div>" +
									"<div class='organizer-C'>" +
										"<button id='"+data[i].id + "/" + data[i].votos+"' class='button-votar votar-destaque'>Votar</button>"
									"</div>"
								"</div>"
							"</div>"
				}
				$("#row-destaques").append(html)
			}
		}
		let errorCallback = (jqXHR, textStatus, msg) => {
			console.log(msg)
		}
        let response = request.get(url,successCallback,errorCallback)
        return response
	}
	loadSugestoesUpdates(page){
        let request = new Request()
        let url = apiBaseUrl + "/all/app_sugestoes_updates/"+page
		let successCallback = data => {
			console.log(data)
			let ids_votaram = new Array
			for (var i = data.length - 1; i >= 0; i--) {
				data[i].users_votaram.map( (value, index) => { ids_votaram.push(parseInt(value.id)) } )
			}
			for (var i = 0; i < data.length; i++) {
				let html
				if (ids_votaram.includes(parseInt(this.user_id))) {
					html = 	"<div class='col-3 mb-3'>" +
									"<div class='sugestao'>" +
										"<div class='organizer-A'>" +
											"<h4>"+data[i].titulo+"</h4>" +
										"</div>" +
										"<div class='organizer-B'>" +
											"<p class='thin'>"+data[i].descricao+"</p>" +
										"</div>" +
										"<div class='organizer-C'>" +
											"<button id='"+ data[i].id + "/" + data[i].votos + "' disabled='disabled' class='button-user-votou'>Você Votou</button>"
										"</div>"									
									"</div>"
								"</div>"
				} else{
					html = 	"<div class='col-3 mb-3'>" +
									"<div class='sugestao'>" +
										"<div class='organizer-A'>" +
											"<h4>"+data[i].titulo+"</h4>" +
										"</div>" +
										"<div class='organizer-B'>" +
											"<p class='thin'>"+data[i].descricao+"</p>" +
										"</div>" +
										"<div class='organizer-C'>" +
											"<button id='"+ data[i].id + "/" + data[i].votos + "' class='votar button-votar'>Votar</button>"
										"</div>"									
									"</div>"
								"</div>"
				}				
				$("#row-sugestoes").append(html)
			}
		}
		let errorCallback = (jqXHR, textStatus, msg) => {
			console.log(msg)
		}
        let response = request.get(url,successCallback,errorCallback)
        return response
	}
	registrarVoto(id, votos){
        let request = new Request()
		let url = apiBaseUrl + "/app_sugestoes_updates/" + id
        let data = {"app_sugestao_update": {"user_id": this.user_id, "votos": parseInt(votos) + 1}}
        let successCallback = data => {
        	console.log(data)
        }
		let errorCallback = (jqXHR, textStatus, msg) => {
			console.log(msg)
		}
        let response = request.put(data,url,successCallback,errorCallback)
        return response
	}
 	getNews(){
        let request = new Request()
        let url = "http://localhost:3000/news"
        let successCallback = data => {
            for (var i = 0; data.length < i; i++) {
            	let row = 	"<div class='news-row'>" + 
            					"<div>" +
            						"<p class='news-title'>"+data[i].title.substring(50,length)+"... </p>" +
            					"</div>" +
            					"<p>"+data[i].content.substring(150,length)+"...</p>" +
            					"<center>" + 
            						"<a target='blank' href='"+data[i].url+"' class='button-ver-mais'> Ver Mais </a>" +
            					"</center>" + 
            				"</div>"
            	$(".news-box-body").append(row)
            }
            console.log(data[0])
        }
        let errorCallback = (jqXHR, textStatus, msg) => { 
            console.log(msg)
        }
        let response = request.get(url,successCallback,errorCallback)
	}	
}
