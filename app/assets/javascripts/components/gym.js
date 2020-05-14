class Gym {
    constructor(nome, cnpj, razao_social, gym_id, cep_api_key, cep_api_secret, geocoder_api_key, new_record) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.razao_social = razao_social;
        this.gym_id = gym_id;
        this.cep_api_key = cep_api_key;
        this.cep_api_secret = cep_api_secret;
        this.geocoder_api_key = geocoder_api_key;
        this.new_record = new_record;
    }
    // Item 1 ______________________________________________________
    componentLoaded(){
        //alert("Aviso da Versão Beta \r\nEsta versão está rodando para test flight\r\nOs assets usados podem ter direitos autorais.")
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
    runRequest(object){
        let response = null
        if (this.new_record == true || this.new_record == "true") {
            response = object.request.post(object.data, object.url, object.successCallback, object.errorCallback, object.headers)
            // Atualiza o valor de new_record
            this.new_record = false
        }else{
            response = object.request.put(object.data, object.url, object.successCallback, object.errorCallback, object.headers)
        }
        return response        
    }
    // Item 3 ______________________________________________________
    mudarNome(novo_nome){
        $("#gym-nome-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
		let data = { "gym": {"nome": novo_nome} }
		let url = this.new_record == true ? apiBaseUrl + "/gyms/" : apiBaseUrl + "/gyms/" + this.gym_id
		let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let updateGymId = data => {this.gym_id = data}
        let successCallback = function(data){
            console.log(data);
            $("#gym-nome-check").show(200);
            $("#gym-nome-loader").hide();
            setTimeout(function(){ $("#gym-nome-check").hide(200); }, 2000);
            // Importante quando trata-se de um novo record
            updateGymId(data.id)
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
		let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-nome-error").show(200);
            $("#gym-nome-loader").hide();
            setTimeout(function(){ $("#gym-nome-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let object = {request: request, data: data, url: url, headers: headers, successCallback: successCallback, errorCallback: errorCallback}
		let response = this.runRequest(object)
        return response
    }
    // Item 3 ______________________________________________________
    mudarRazaoSocial(nova_razao_social){
		$("#gym-razao-social-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
		let data = { "gym": {"razao_social": nova_razao_social} }
        console.log(this.gym_id)
        let url = this.new_record == true ? apiBaseUrl + "/gyms" : apiBaseUrl + "/gyms/" + this.gym_id
        let headers = {}
		// .  .  .  .  .  .  .  .  .  .  .  .
        let updateGymId = data => {this.gym_id = data}
        let successCallback = function(data){
            console.log(data);
            $("#gym-razao-social-check").show(200);
            $("#gym-razao-social-loader").hide();
            setTimeout(function(){ $("#gym-razao-social-check").hide(200); }, 2000);
            // Importante quando trata-se de um novo record
            updateGymId(data.id)            
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
		let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-razao-social-error").show(200);
            $("#gym-nome-loader").hide();
            setTimeout(function(){ $("#gym-razao-social-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let object = {request: request, data: data, url: url, headers: headers, successCallback: successCallback, errorCallback: errorCallback}
        let response = this.runRequest(object)
        return response
    }
    // Item 3 ______________________________________________________
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
            let url = this.new_record == true ? apiBaseUrl + "/gyms/" : apiBaseUrl + "/gyms/" + this.gym_id
            let headers = {}
            //let url = "https://api.cnpja.com.br/companies/27865757000102"
            //let headers = {"Authorization": "#{Rails.application.credentials.cnpj_api_key}"}            
            // .  .  .  .  .  .  .  .  .  .  .  .
            let updateGymId = data => {this.gym_id = data}
            let successCallback = function(data){
                console.log(data);
                $("#gym-cnpj-check").show(200);
                $("#gym-cnpj-loader").hide();
                setTimeout(function(){ $("#gym-cnpj-check").hide(200); }, 2000);
                // Importante quando trata-se de um novo record
                updateGymId(data.id)                
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
            let object = {request: request, data: data, url: url, headers: headers, successCallback: successCallback, errorCallback: errorCallback}
            let response = this.runRequest(object)
            return response       
        }
    }
    // Item 3 ______________________________________________________
    mudarCep(novo_cep){
        novo_cep = novo_cep.split("-").join("")
        this.getEnderecoCepApi(novo_cep);
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#gym-cep-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "gym": {"cep": novo_cep} }
        let url = this.new_record == true ? apiBaseUrl + "/gyms/" : apiBaseUrl + "/gyms/" + this.gym_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let updateGymId = data => {this.gym_id = data}
        let successCallback = function(data){ 
            console.log(data);
            $("#gym-cep-check").show(200);
            $("#gym-cep-loader").hide();
            setTimeout(function(){ $("#gym-cep-check").hide(200); }, 2000);
            // Importante quando trata-se de um novo record
            updateGymId(data.id)            
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-cep-error").show(200);
            $("#gym-cep-loader").hide();
            setTimeout(function(){ $("#gym-cep-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let object = {request: request, data: data, url: url, headers: headers, successCallback: successCallback, errorCallback: errorCallback}
        let response = this.runRequest(object)
        return response
    }
    // Item 3 ______________________________________________________
    mudarCidade(nova_cidade){
        $("#gym-cidade-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "gym": {"cidade": nova_cidade} }
        let url = this.new_record == true ? apiBaseUrl + "/gyms/" : apiBaseUrl + "/gyms/" + this.gym_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let updateGymId = data => {this.gym_id = data}
        let successCallback = function(data){ 
            console.log(data);
            $("#gym-cidade-check").show(200);
            $("#gym-cidade-loader").hide();
            setTimeout(function(){ $("#gym-cidade-check").hide(200); }, 2000);
            // Importante quando trata-se de um novo record
            updateGymId(data.id)            
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-cidade-error").show(200);
            $("#gym-cidade-loader").hide();
            setTimeout(function(){ $("#gym-cidade-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let object = {request: request, data: data, url: url, headers: headers, successCallback: successCallback, errorCallback: errorCallback}
        let response = this.runRequest(object)
        return response
    }
    // Item 3 ______________________________________________________
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
            let url = this.new_record == true ? apiBaseUrl + "/gyms/" : apiBaseUrl + "/gyms/" + this.gym_id
            let headers = {}
            // .  .  .  .  .  .  .  .  .  .  .  .
            let updateGymId = data => {this.gym_id = data}
            let successCallback = function(data){ 
                console.log(data);
                $("#gym-estado-check").show(200);
                $("#gym-estado-loader").hide();
                setTimeout(function(){ $("#gym-estado-check").hide(200); }, 2000);
                // Importante quando trata-se de um novo record
                updateGymId(data.id)                
            }
            // .  .  .  .  .  .  .  .  .  .  .  .
            let errorCallback = function(jqXHR, textStatus, msg){ 
                console.log(msg);
                $("#gym-estado-error").show(200);
                $("#gym-estado-loader").hide();
                setTimeout(function(){ $("#gym-estado-error").hide(200); }, 2000);
            }
            // .  .  .  .  .  .  .  .  .  .  .  .
            let object = {request: request, data: data, url: url, headers: headers, successCallback: successCallback, errorCallback: errorCallback}
            let response = this.runRequest(object)
            return response
        }
    }
    // Item 3 ______________________________________________________
    mudarNumero(novo_numero){
        $("#gym-numero-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "gym": {"numero": novo_numero} }
        let url = this.new_record == true ? apiBaseUrl + "/gyms/" : apiBaseUrl + "/gyms/" + this.gym_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let updateGymId = data => {this.gym_id = data}
        let successCallback = function(data){ 
            console.log(data);
            $("#gym-numero-check").show(200);
            $("#gym-numero-loader").hide();
            setTimeout(function(){ $("#gym-numero-check").hide(200); }, 2000);
            // Importante quando trata-se de um novo record
            updateGymId(data.id)            
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-numero-error").show(200);
            $("#gym-numero-loader").hide();
            setTimeout(function(){ $("#gym-numero-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let object = {request: request, data: data, url: url, headers: headers, successCallback: successCallback, errorCallback: errorCallback}
        let response = this.runRequest(object)
        return response
    }
    // Item 3 ______________________________________________________
    mudarRua(nova_rua){
        $("#gym-rua-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "gym": {"rua": nova_rua} }
        let url = this.new_record == true ? apiBaseUrl + "/gyms/" : apiBaseUrl + "/gyms/" + this.gym_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let updateGymId = data => {this.gym_id = data}
        let successCallback = function(data){ 
            console.log(data);
            $("#gym-rua-check").show(200);
            $("#gym-rua-loader").hide();
            setTimeout(function(){ $("#gym-rua-check").hide(200); }, 2000);
            // Importante quando trata-se de um novo record
            updateGymId(data.id)            
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-rua-error").show(200);
            $("#gym-rua-loader").hide();
            setTimeout(function(){ $("#gym-rua-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let object = {request: request, data: data, url: url, headers: headers, successCallback: successCallback, errorCallback: errorCallback}
        let response = this.runRequest(object)
        return response
    }    
    // Item 3 ______________________________________________________
    mudarLatitude(nova_lat){
        $("#gym-latitude-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "gym": {"lat": nova_lat} }
        let url = this.new_record == true ? apiBaseUrl + "/gyms/" : apiBaseUrl + "/gyms/" + this.gym_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let updateGymId = data => {this.gym_id = data}
        let successCallback = function(data){ 
            console.log(data);
            $("#gym-latitude-check").show(200);
            $("#gym-latitude-loader").hide();
            setTimeout(function(){ $("#gym-latitude-check").hide(200); }, 2000);
            // Importante quando trata-se de um novo record
            updateGymId(data.id)
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-latitude-error").show(200);
            $("#gym-latitude-loader").hide();
            setTimeout(function(){ $("#gym-latitude-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let object = {request: request, data: data, url: url, headers: headers, successCallback: successCallback, errorCallback: errorCallback}
        let response = this.runRequest(object)
        return response
    }
    // Item 3 ______________________________________________________
    mudarLongitude(nova_lng){
        $("#gym-longitude-loader").show();
        // .  .  .  .  .  .  .  .  .  .  .  .
        let request = new Request();
        let data = { "gym": {"lng": nova_lng} }
        let url = this.new_record == true ? apiBaseUrl + "/gyms/" : apiBaseUrl + "/gyms/" + this.gym_id
        let headers = {}
        // .  .  .  .  .  .  .  .  .  .  .  .
        let updateGymId = data => {this.gym_id = data}
        let successCallback = function(data){ 
            console.log(data);
            $("#gym-longitude-check").show(200);
            $("#gym-longitude-loader").hide();
            setTimeout(function(){ $("#gym-longitude-check").hide(200); }, 2000);
            // Importante quando trata-se de um novo record
            updateGymId(data.id)
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let errorCallback = function(jqXHR, textStatus, msg){ 
            console.log(msg);
            $("#gym-longitude-error").show(200);
            $("#gym-longitude-loader").hide();
            setTimeout(function(){ $("#gym-longitude-error").hide(200); }, 2000);
        }
        // .  .  .  .  .  .  .  .  .  .  .  .
        let object = {request: request, data: data, url: url, headers: headers, successCallback: successCallback, errorCallback: errorCallback}
        let response = this.runRequest(object)
        return response
    }
    // Item 4 ______________________________________________________
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
        console.log("******************************")
        console.log(response)
        return response
    }
    // Item 5 ______________________________________________________
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
    // Item 6 ______________________________________________________
    initMap(lat, lng){
        var lat = $('#latitude').val();
        var lng = $('#longitude').val();
        if (!lat || !lng){
            lat=51.5;
            lng=-0.125;
            document.getElementById('latitude').value = lat;
            document.getElementById('longitude').value = lng;
        }
        // 6.1 .  .  .  .  .  .  .  .  .  .  .  .
        var myCoords = new google.maps.LatLng(lat, lng);
        var mapOptions = {
            center: myCoords,
            zoom: 14,
            scrollwheel: false
        };
        // 6.2 .  .  .  .  .  .  .  .  .  .  .  .
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var marker = new google.maps.Marker({
            position: myCoords,
            animation: google.maps.Animation.DROP,
            map: map,
            draggable: true
        });
        // 6.3 .  .  .  .  .  .  .  .  .  .  .  .
        marker.addListener('drag', function() {
            var latlng = marker.getPosition();
            var newlat=(Math.round(latlng.lat()*1000000))/1000000;
            var newlng=(Math.round(latlng.lng()*1000000))/1000000;
            var lat = $('#latitude').val(newlat);
            var lng = $('#longitude').val(newlng);
        });
        // 6.4 .  .  .  .  .  .  .  .  .  .  .  .
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
    // Item 7 ______________________________________________________
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
    // Item 8 ______________________________________________________
    toggleWrappers(event, whatToShow){
        event.preventDefault();
        $(whatToShow).show(500);
        $(".divider").not(whatToShow).hide(500);
    }

}

// Documentacao
// Item 1 ________________________________________________________________________________
//     - Metodo componentLoaded() é chamado quando a pagina é carregada. 
//     - Ele inicializa os componentes
// Item 2 ________________________________________________________________________________
//     - Metodo runRequest() é um metodo de requisicao generico que alterna entre request
//     put ou post de acordo com a variavel new_record. É chamado em todas as requisicoes 
//     de alteracao de input
// Item 3 ________________________________________________________________________________
//    - Metodo mudarSomething() é chamado sempre que houver alteração no input referente.
//    - Ele recebe o valor digitiado no input como parametro.
//    - Faz o handle de toda as etapas da requisicao ao backend
//    - Exibe o icone de load enquanto carrega a requisicao
//    - Exibe o icone de sucesso(check) quando a requisicao é bem sucedida
//    - Exibe o icone de erro quando a requisicao retorna erros
// Item 4 ________________________________________________________________________________
//    - Metodo getEnderecoApi recebe um cep como parametro. 
//    - Ele faz a requisicao a API webmaniabr, essa retorna um objeto com endereco 
//    relativo ao cep inserido na request
//    - No caso de sucesso na requisicao, os dados sao usados para atualizar os valores dos
//    inputs com endereco
//    - No caso de erro, exibe-se a mensagem no console do js
//    - Exibe o icone de sucesso(check) quando a requisicao é bem sucedida
//    - Exibe o icone de erro quando a requisicao retorna erros
//    - Docs da API webmaniabr: https://webmaniabr.com/docs/rest-api-cep-ibge/ 
// Item 5 ________________________________________________________________________________
//    - Metodo validaEstado recebe a sigla do estado inserido pelo usuario como parametro
//    - Inicializa a variavel erro como false
//    - Exibe no console do js o estado inserido caso seja valido
//    - No caso de estado invalido, altera a variavel erro para true
// Item 6 ________________________________________________________________________________
//    - Metodo initMap recebe a latitude e longitude do usuario, a partir do metodo nativo
//    getLocation.
//    - Caso o usuario nao permita acesso a localizacao dele, latitude e longitude default 
//    sao definidas
//    - Item 6.1: Instanciamos um objeto LatLng disbonibilizado pela API JS do Google Maps
//    Declaramos a variavel mapOptions que recebe um json com as configuracoes desejadas
//    - Item 6.2: Instanciamos um objeto Map disbonibilizado pela API JS do Google Maps
//    Esse objeto deve ser atribuido a uma div com ID pre definido, nesse caso 'map'
//    Instanciamos um obejto do tipo Marker disbonibilizado pela API JS do Google Maps
//    Trata-se do marcador (pin) exibido no mapa, passamos a ele um json com as configs
//    - Item 6.3: Adicionamos um listener ao marker, para que sempre houver uma acao de
//    drag (o usuario arrastar o marcador pelo mapa) no marcador algo seja executado
//    O que executamos a a atualizacao em tempo real dos valores do input lat e lng
//    - Item 6.3: Adicionamos outro listener ao marker, para que sempre que uma action 
//    drag for encerrada (o usuario soltar o marcador) algo seja executado
//    O que executamos e a atualizacao dos inputs com endereco relativos as coordenadas
// Item 7 ________________________________________________________________________________
//    - Metodo updateEnderecoComCoordenadas recebe a latitude e longitude do usuario
//    - Performa uma request do tipo get a API OpenCageData
//    - Esta API retorna o cep(postcode) relativo as coordenadas inseridas, a partir disso
//    chama o metodo mudarCep que atualiza o endereco todo 
// Item 8 ________________________________________________________________________________
//    - Metodo toggleWrappers recebe o click event e o id da div que deve ser exibido, de 
//    acordo com o que foi clicado na sidebar
//    - Todo os outros dividers sao ocultados
//    - Metodo preventDefault evita bugs relacionados ao evento de click do usuario
