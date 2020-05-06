class Gym {
    constructor(nome, cnpj, razao_social, gym_id, cep_api_key, cep_api_secret) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.razao_social = razao_social;
        this.gym_id = gym_id;
        this.cep_api_key = cep_api_key;
        this.cep_api_secret = cep_api_secret;
        this.geocoder_api_key = "a366e5d89f374268be77171463df3776";
    }
    // Item 1 ______________________________________________________
    componentLoaded(){
        // .  .  .  .  .  .  .  .  .  .  .  .
        $(".divider").not("#wrapperDados").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#gym-nome-loader").hide();
        $("#gym-nome-check").hide();
        $("#gym-nome-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#gym-razao-social-loader").hide();
        $("#gym-razao-social-check").hide();
        $("#gym-razao-social-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#gym-cnpj-loader").hide();
        $("#gym-cnpj-check").hide();
        $("#gym-cnpj-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#gym-cidade-loader").hide();
        $("#gym-cidade-check").hide();
        $("#gym-cidade-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#gym-estado-loader").hide();
        $("#gym-estado-check").hide();
        $("#gym-estado-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#gym-cep-loader").hide();
        $("#gym-cep-check").hide();
        $("#gym-cep-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#gym-numero-loader").hide();
        $("#gym-numero-check").hide();
        $("#gym-numero-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#gym-latitude-loader").hide();
        $("#gym-latitude-check").hide();
        $("#gym-latitude-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#gym-longitude-loader").hide();
        $("#gym-longitude-check").hide();
        $("#gym-longitude-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#gym-rua-loader").hide();
        $("#gym-rua-check").hide();
        $("#gym-rua-error").hide();
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#estado").attr('maxlength','2');
        $("#estado").css('text-transform','uppercase');
        // .  .  .  .  .  .  .  .  .  .  .  .
        Inputmask({"mask": "99-999-999"}).mask($("#cep"));
        Inputmask({"mask": "99.999.999/9999-99"}).mask($("#cnpj"));
    }
    // Item 2 ______________________________________________________
    mudarNome(novo_nome){
        $("#gym-nome-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
		let data = { "gym": {"nome": novo_nome} }
		let url = apiBaseUrl + "/gyms/" + this.gym_id
		let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#gym-nome-check").show(200);
            $("#gym-nome-loader").hide();
            setTimeout(function(){ $("#gym-nome-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
		let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-nome-error").show(200);
            $("#gym-nome-loader").hide();
            setTimeout(function(){ $("#gym-nome-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        const response = request.put(data, url, successCallback , errorCallback, headers)
		return response
    }
    // Item 3 ______________________________________________________
    mudarRazaoSocial(nova_razao_social){
		$("#gym-razao-social-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
		let data = { "gym": {"razao_social": nova_razao_social} }
		let url = apiBaseUrl + "/gyms/" + this.gym_id
        let headers = {}
		// .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){
            console.log(data);
            $("#gym-razao-social-check").show(200);
            $("#gym-razao-social-loader").hide();
            setTimeout(function(){ $("#gym-razao-social-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
		let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-razao-social-error").show(200);
            $("#gym-nome-loader").hide();
            setTimeout(function(){ $("#gym-razao-social-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
		const response = request.put(data, url, successCallback , errorCallback, headers)
		return response
    }
    // Item 4 ______________________________________________________
    mudarCnpj(novo_cnpj){
        let helper = new Helper()
        if (helper.validarCNPJ(novo_cnpj)) {
            $("#cnpj").addClass("animated shake")
            setTimeout(function(){ $("#cnpj").removeClass() }, 2000);
            return false;
        }else{
            $("#gym-cnpj-loader").show();
            // .  .  .  .  .  .  .  .  .  .  .  .
            let request = new Request();
            let data = { "gym": {"cnpj": novo_cnpj} }
            let url = apiBaseUrl + "/gyms/" + this.gym_id
            let headers = {}
            //let url = "https://api.cnpja.com.br/companies/27865757000102"
            //let headers = {"Authorization": "#{Rails.application.credentials.cnpj_api_key}"}
            // .  .  .  .  .  .  .  .  .  .  .  .
            let successCallback = function(data){
                console.log(data);
                $("#gym-cnpj-check").show(200);
                $("#gym-cnpj-loader").hide();
                setTimeout(function(){ $("#gym-cnpj-check").hide(200); }, 2000);
            }
            // .  .  .  .  .  .  .  .  .  .  .  .
            let errorCallback = function(jqXHR, textStatus, msg){ 
                console.log(jqXHR);
                console.log(textStatus);
                console.log(msg);
                $("#gym-cnpj-error").show(200);
                $("#gym-cnpj-loader").hide();
                setTimeout(function(){ $("#gym-cnpj-error").hide(200); }, 2000);
            }            
            // .  .  .  .  .  .  .  .  .  .  .  .
            const response = request.put(data, url, successCallback , errorCallback, headers)
            return response        
        }
    }
    // Item 5 ______________________________________________________
    mudarCep(novo_cep){
        novo_cep = novo_cep.split("-").join("")
        this.getEnderecoCepApi(novo_cep);
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#gym-cep-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "gym": {"cep": novo_cep} }
        let url = apiBaseUrl + "/gyms/" + this.gym_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){ 
            console.log(data);
            $("#gym-cep-check").show(200);
            $("#gym-cep-loader").hide();
            setTimeout(function(){ $("#gym-cep-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-cep-error").show(200);
            $("#gym-cep-loader").hide();
            setTimeout(function(){ $("#gym-cep-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        const response = request.put(data, url, successCallback , errorCallback, headers)
        return response
    }
    // Item x ______________________________________________________
    mudarCidade(nova_cidade){
        $("#gym-cidade-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "gym": {"cidade": nova_cidade} }
        let url = apiBaseUrl + "/gyms/" + this.gym_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){ 
            console.log(data);
            $("#gym-cidade-check").show(200);
            $("#gym-cidade-loader").hide();
            setTimeout(function(){ $("#gym-cidade-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-cidade-error").show(200);
            $("#gym-cidade-loader").hide();
            setTimeout(function(){ $("#gym-cidade-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        const response = request.put(data, url, successCallback , errorCallback, headers)
        return response
    }
    // Item x ______________________________________________________
    mudarEstado(novo_estado){
        let erro = this.validaEstado(novo_estado.toUpperCase());
        if (erro) {
            $("#estado").addClass("animated shake");
            setTimeout(function(){
                $("#estado").removeClass()
            },2000)
            return false
        }else{
            $("#gym-estado-loader").show();
            // .  .  .  .  .  .  .  .  .  .  .  .
            let request = new Request();
            let data = { "gym": {"estado": novo_estado} }
            let url = apiBaseUrl + "/gyms/" + this.gym_id
            let headers = {}
            // .  .  .  .  .  .  .  .  .  .  .  .
            let successCallback = function(data){ 
                console.log(data);
                $("#gym-estado-check").show(200);
                $("#gym-estado-loader").hide();
                setTimeout(function(){ $("#gym-estado-check").hide(200); }, 2000);
            }
            // .  .  .  .  .  .  .  .  .  .  .  .
            let errorCallback = function(jqXHR, textStatus, msg){ 
                console.log(msg);
                $("#gym-estado-error").show(200);
                $("#gym-estado-loader").hide();
                setTimeout(function(){ $("#gym-estado-error").hide(200); }, 2000);
            }
            // .  .  .  .  .  .  .  .  .  .  .  .
            const response = request.put(data, url, successCallback , errorCallback, headers)
            return response
        }
    }
    // Item x ______________________________________________________
    mudarNumero(novo_numero){
        $("#gym-numero-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "gym": {"numero": novo_numero} }
        let url = apiBaseUrl + "/gyms/" + this.gym_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){ 
            console.log(data);
            $("#gym-numero-check").show(200);
            $("#gym-numero-loader").hide();
            setTimeout(function(){ $("#gym-numero-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-numero-error").show(200);
            $("#gym-numero-loader").hide();
            setTimeout(function(){ $("#gym-numero-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        const response = request.put(data, url, successCallback , errorCallback, headers)
        return response
    }
    // Item x ______________________________________________________
    mudarRua(nova_rua){
        $("#gym-rua-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "gym": {"rua": nova_rua} }
        let url = apiBaseUrl + "/gyms/" + this.gym_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){ 
            console.log(data);
            $("#gym-rua-check").show(200);
            $("#gym-rua-loader").hide();
            setTimeout(function(){ $("#gym-rua-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-rua-error").show(200);
            $("#gym-rua-loader").hide();
            setTimeout(function(){ $("#gym-rua-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        const response = request.put(data, url, successCallback , errorCallback, headers)
        return response
    }    
    // Item x ______________________________________________________
    mudarLatitude(nova_lat){
        $("#gym-latitude-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "gym": {"lat": nova_lat} }
        let url = apiBaseUrl + "/gyms/" + this.gym_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){ 
            console.log(data);
            $("#gym-latitude-check").show(200);
            $("#gym-latitude-loader").hide();
            setTimeout(function(){ $("#gym-latitude-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-latitude-error").show(200);
            $("#gym-latitude-loader").hide();
            setTimeout(function(){ $("#gym-latitude-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        const response = request.put(data, url, successCallback , errorCallback, headers)
        return response
    }
    // Item x ______________________________________________________
    mudarLongitude(nova_lng){
        $("#gym-longitude-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "gym": {"lng": nova_lng} }
        let url = apiBaseUrl + "/gyms/" + this.gym_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = function(data){ 
            console.log(data);
            $("#gym-longitude-check").show(200);
            $("#gym-longitude-loader").hide();
            setTimeout(function(){ $("#gym-longitude-check").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-longitude-error").show(200);
            $("#gym-longitude-loader").hide();
            setTimeout(function(){ $("#gym-longitude-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        const response = request.put(data, url, successCallback , errorCallback, headers)
        return response
    }
    // Item x ______________________________________________________
    getEnderecoCepApi(cep){
        $("#gym-cidade-loader").show(200);
        $("#gym-estado-loader").show(200);
        $("#gym-rua-loader").show(200);
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let url = "https://webmaniabr.com/api/1/cep/"+cep+"/?app_key="+this.cep_api_key+"&app_secret="+this.cep_api_secret
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let updateCidade = obj => {
            this.mudarCidade(obj.cidade);
        }
        let updateEstado = obj => {
            this.mudarEstado(obj.estado);
        }
        let updateRua = obj => {
            this.mudarRua(obj.rua);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = data => { 
            $("#cidade").val(data.cidade);
            $("#estado").val(data.uf);
            $("#rua").val(data.endereco);
            // .  .  .  .  .  .  .  .  .  .  .  .
            $("#gym-cidade-loader").hide(200);
            $("#gym-estado-loader").hide(200);
            $("#gym-rua-loader").hide(200);
            // .  .  .  .  .  .  .  .  .  .  .  .
            let obj = {cidade: data.cidade, estado: data.uf, rua: data.endereco}
            updateCidade(obj);
            updateEstado(obj);
            updateRua(obj)
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = (jqXHR, textStatus, msg) => {
            console.log(msg);
        }
        const response = request.get(url, successCallback , errorCallback, headers)
        return response
    }
    validaEstado(estado){
        let erro = false
        switch(estado) {
            case "AC": console.log(estado); break;
            case "AL": console.log(estado); break;
            case "AP": console.log(estado); break;
            case "AM": console.log(estado); break;
            case "BA": console.log(estado); break;
            case "CE": console.log(estado); break;
            case "DF": console.log(estado); break;
            case "ES": console.log(estado); break;
            case "GO": console.log(estado); break;
            case "MA": console.log(estado); break;
            case "MT": console.log(estado); break;
            case "MS": console.log(estado); break;
            case "MG": console.log(estado); break;
            case "PA": console.log(estado); break;
            case "PB": console.log(estado); break;
            case "PR": console.log(estado); break;
            case "PE": console.log(estado); break;
            case "PI": console.log(estado); break;
            case "RJ": console.log(estado); break;
            case "RN": console.log(estado); break;
            case "RS": console.log(estado); break;
            case "RO": console.log(estado); break;
            case "RR": console.log(estado); break;
            case "SC": console.log(estado); break;
            case "SP": console.log(estado); break;
            case "SE": console.log(estado); break;
            case "TO": console.log(estado); break;
            default: erro = true; break;
        }
        return erro
    }
    initMap(lat, lng){
        var lat = $('#latitude').val();
        var lng = $('#longitude').val();
        if (!lat || !lng){
            lat=51.5;
            lng=-0.125;
            document.getElementById('place_latitude').value = lat;
            document.getElementById('place_longitude').value = lng;
        }        
        var myCoords = new google.maps.LatLng(lat, lng);
        var mapOptions = {
            center: myCoords,
            zoom: 14,
            scrollwheel: false
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var marker = new google.maps.Marker({
            position: myCoords,
            animation: google.maps.Animation.DROP,
            map: map,
            draggable: true
        });
        // .  .  .  .  .  .  .  .  .  .  .  .
        marker.addListener('drag', function() {
            var latlng = marker.getPosition();
            var newlat=(Math.round(latlng.lat()*1000000))/1000000;
            var newlng=(Math.round(latlng.lng()*1000000))/1000000;
            var lat = $('#latitude').val(newlat);
            var lng = $('#longitude').val(newlng);
        });
        // .  .  .  .  .  .  .  .  .  .  .  .
        let updateLatitude = () => { this.mudarLatitude($('#latitude').val()); }
        let updateLongitude = () => { this.mudarLongitude($('#longitude').val()); }
        let updateEnderecoComCoordenadas = () => { this.updateEnderecoComCoordenadas($('#latitude').val(), $('#longitude').val()); }
        marker.addListener('dragend', function() {
            map.panTo(marker.getPosition());
            console.log("DRAGEND");
            updateLatitude()
            updateLongitude()
            updateEnderecoComCoordenadas()
        });        
    }
    updateEnderecoComCoordenadas(lat,lng){
        let request = new Request();
        let url = "https://api.opencagedata.com/geocode/v1/json?q="+lat+"+"+lng+"&key="+this.geocoder_api_key
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let mudarCep = cep => {this.mudarCep(cep)}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let successCallback = data => { 
            console.log(data.results[0].components)
            mudarCep(data.results[0].components.postcode)
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = (jqXHR, textStatus, msg) => {
            console.log(msg);
        }
        const response = request.get(url, successCallback , errorCallback, headers)
        return response
    }
    
    // Item x ______________________________________________________
    toggleWrappers(event, whatToShow){
        event.preventDefault();
        $(whatToShow).show(300);
        //$(whatToShow).addClass('animated jackInTheBox')
        $(".divider").not(whatToShow).hide(300);
        
        //setTimeout(function(){  
            //$(whatToShow).removeClass('animated jackInTheBox')
        //}, 800);
    }
        
}

// Documentacao
// Item 1 ________________________________________________________________________________
//     - Metodo componentLoaded() é chamado quando a pagina é carregada. 
//     - Ele inicializa as divs, esconde as que nao devem aparecer ao carregar 
//     a pagina.
// Item 2 ________________________________________________________________________________
//    - Metodo mudarNome() é chamado sempre que houver alteração no input com nome da gym.
//    - Ele recebe o valor digitiado no input como parametro.
//    - Faz o handle de toda as etapas da requisicao ao backend
//    - Exibe o icone de load enquanto carrega a requisicao
//    - Exibe o icone de sucesso(check) quando a requisicao é bem sucedida
//    - Exibe o icone de erro quando a requisicao retorna erros
// Item 3 ________________________________________________________________________________
//    - Metodo mudarRazaoSocial() é chamado sempre que houver alteração no input com 
//    razao social da gym.
//    - Ele recebe o valor digitiado no input como parametro.
//    - Faz o handle de toda as etapas da requisicao ao backend
//    - Exibe o icone de load enquanto carrega a requisicao
//    - Exibe o icone de sucesso(check) quando a requisicao é bem sucedida
//    - Exibe o icone de erro quando a requisicao retorna erros
// Item 4 ________________________________________________________________________________
//    - Metodo mudarCnpj() é chamado sempre que houver alteração no input com cnpj da gym.
//    - Ele recebe o valor digitiado no input como parametro.
//    - Faz o handle de toda as etapas da requisicao ao backend
//    - Exibe o icone de load enquanto carrega a requisicao
//    - Exibe o icone de sucesso(check) quando a requisicao é bem sucedida
//    - Exibe o icone de erro quando a requisicao retorna erros


