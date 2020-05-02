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
	// Upload Request
	fileUpload(form){
		var formData = new FormData(form);
		formData.append('file', file);
		var xhr = new XMLHttpRequest();
		// Add any event handlers here...
		xhr.open('POST', form.getAttribute('action'), true);
		xhr.send(formData);
		// To avoid actual submission of the form
		return false;		
	}	
}

