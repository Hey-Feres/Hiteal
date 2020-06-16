class Preferencia {
	constructor(user_id) {
		this.user_id = user_id;
	}
	componentLoaded(){
        $(".sidebar").addClass("animated fadeInDownBig")
        $(".content").addClass("animated fadeInUpBig")
        this.loadWallpapers()
	}
	loadWallpapers(){
        let request = new Request()
        let url = apiBaseUrl + "/all/wallpapers"
        let successCallback = data => {
            console.log(data)            
            for (var i = 0; i < data.length; i++) {
            	let col = 	"<div class='col-6'>" + 
	                            "<img src='"+data[i].urls.small +"'/>" +
	                        "</tr>"
                $("#wallpaper-gallerie").append(col)
            }
        }
        let errorCallback = (jqXHR, textStatus, msg) => { 
            console.log(msg)
        }
        let response = request.get(url,successCallback,errorCallback)
        return response        
	}
}