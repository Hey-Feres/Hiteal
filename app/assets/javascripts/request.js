class Request {
    constructor() {}

    // Get Request
    get(url, successCallback , errorCallback, headers) {
		return $.ajax({
			method: "GET",
			url: url,
			headers: headers
		})
		.done(successCallback)
	    .fail(errorCallback);
    }
    // Post Request
    post(data, url, successCallback , errorCallback, headers) {
		return $.ajax({
			method: "POST",
			url: url,
			data: data,
			headers: headers
		})
		.done(successCallback)
	    .fail(errorCallback);
    }    
    // Put Request
    put(data, url, successCallback , errorCallback, headers) {
		return $.ajax({
			method: "PUT",
			url: url,
			data: data,
			headers: headers
		})
		.done(successCallback)
	    .fail(errorCallback);
    }
    // Delet Request
    delete(url, successCallback , errorCallback, headers) {
		return $.ajax({
			method: "DELETE",
			url: url,
			headers: headers
		})
		.done(successCallback)
	    .fail(errorCallback);
    }    
}