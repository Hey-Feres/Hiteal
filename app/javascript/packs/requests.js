function putRequest(data, url, successCallback , errorCallback){
	$.ajax({
		method: "PUT",
		url: url,
		data: data
	})
	// Requisição Sucesso
	.done(successCallback)
    // Requisição Erro
    .fail(errorCallback);
}