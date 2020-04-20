class Request {
    constructor() {}

    // Get Request
    get(url, successCallback , errorCallback) {
		return $.ajax({
			method: "GET",
			url: url
		})
		.done(successCallback)
	    .fail(errorCallback);
    }
    // Post Request
    post(data, url, successCallback , errorCallback) {
		return $.ajax({
			method: "POST",
			url: url,
			data: data
		})
		.done(successCallback)
	    .fail(errorCallback);
    }    
    // Put Request
    put(data, url, successCallback , errorCallback) {
		return $.ajax({
			method: "PUT",
			url: url,
			data: data
		})
		.done(successCallback)
	    .fail(errorCallback);
    }
    // Delet Request
    delete(url, successCallback , errorCallback) {
		return $.ajax({
			method: "DELETE",
			url: url
		})
		.done(successCallback)
	    .fail(errorCallback);
    }    
}